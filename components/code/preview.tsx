import { readFile } from "node:fs/promises";
import { join } from "node:path";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { cn } from "@/lib/utils";
import { codeToHtml } from "shiki";
import {
  CodeBlockTab,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
} from "@/components/code/code-block-tabs";
import { CodeBlock } from "@/components/code/preview-code-block";

type ComponentPreviewProps = {
  path: string;
  className?: string;
};

export const Preview = async ({ path, className }: ComponentPreviewProps) => {
  const code = await readFile(
    join(
      process.cwd(),
      "components",
      "demos",
      `${path}.tsx`
    ),
    "utf-8"
  );

  const Component = await import(`@/components/demos/${path}`).then(
    (module) => module.default
  );

  const parsedCode = code;

  const sourceComponentNames =
    parsedCode
      .match(/@\/components\/ai-elements\/([^'"`]+)/g)
      ?.map((match) => match.replace("@/components/ai-elements/", "")) || [];

  const sourceComponents: { name: string; source: string }[] = [];

  for (const component of sourceComponentNames) {
    const fileName = `${component}.tsx`;

    try {
      const source = await readFile(
        join(process.cwd(), "components", "ai-elements", fileName),
        "utf-8"
      );

      if (sourceComponents.some((s) => s.name === component)) {
        continue;
      }

      sourceComponents.push({ name: component, source });
    } catch {
      // skip components that fail
    }
  }

  const highlightedCode = await codeToHtml(parsedCode, {
    lang: "tsx",
    themes: {
      light: "github-light",
      dark: "github-dark",
    },
  });

  return (
    <CodeBlockTabs defaultValue="preview">
      <CodeBlockTabsList>
        <CodeBlockTabsTrigger value="preview">Preview</CodeBlockTabsTrigger>
        <CodeBlockTabsTrigger value="code">Code</CodeBlockTabsTrigger>
      </CodeBlockTabsList>
      <CodeBlockTab className="not-prose p-0" value="preview">
        <ResizablePanelGroup direction="horizontal">
          <ResizablePanel defaultSize={100}>
            <div className={cn("h-[600px] overflow-auto p-4", className)}>
              <Component />
            </div>
          </ResizablePanel>
          <ResizableHandle
            className="translate-x-px border-none [&>div]:shrink-0"
            withHandle
          />
          <ResizablePanel defaultSize={0} />
        </ResizablePanelGroup>
      </CodeBlockTab>
      <CodeBlockTab className="p-0" value="code">
        <div className="not-prose h-[600px] overflow-y-auto">
          <CodeBlock>
            {/** biome-ignore lint/security/noDangerouslySetInnerHtml: "this is needed." */}
            <pre dangerouslySetInnerHTML={{ __html: highlightedCode }} />
          </CodeBlock>
        </div>
      </CodeBlockTab>
    </CodeBlockTabs>
  );
};
