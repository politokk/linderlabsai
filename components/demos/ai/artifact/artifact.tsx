"use client";

import {
  Artifact,
  ArtifactAction,
  ArtifactActions,
  ArtifactContent,
  ArtifactDescription,
  ArtifactHeader,
  ArtifactTitle,
} from "@/components/ai-elements/artifact";
import { CodeBlock } from "@/components/ai-elements/code-block";
import { CopyIcon, PlayIcon } from "lucide-react";

const code = `def greet(name):
    return f"Hello, {name}!"

print(greet("World"))`;

const Example = () => (
  <Artifact>
    <ArtifactHeader>
      <div>
        <ArtifactTitle>Hello World</ArtifactTitle>
        <ArtifactDescription>Just now</ArtifactDescription>
      </div>
      <ArtifactActions>
        <ArtifactAction icon={PlayIcon} label="Run" onClick={() => {}} />
        <ArtifactAction icon={CopyIcon} label="Copy" onClick={() => {}} />
      </ArtifactActions>
    </ArtifactHeader>
    <ArtifactContent className="p-0">
      <CodeBlock className="border-none" code={code} language="python" />
    </ArtifactContent>
  </Artifact>
);

export default Example;
