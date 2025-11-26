import { ComponentWrapper } from "@/components/display/component-wrapper"
import CodeBlock from "@/components/demos/ai/code-block/code-block";
import CodeBlockPage from "@/components/demos/ai/code-block/code-block-page";
import CodeBlockDark from "@/components/demos/ai/code-block/code-block-dark";
export default function codeBlock() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        <ComponentWrapper name="Code Block" icon="Code" >
          <CodeBlock />
        </ComponentWrapper>
        <ComponentWrapper name="Code Block Dark" icon="Moon" >
          <CodeBlockDark />
        </ComponentWrapper>
        <ComponentWrapper name="Code Block Page" icon="Code" >
          <CodeBlockPage />
        </ComponentWrapper>
      </div>
    </div>
  )
}