import { CodeBlockCommand } from "@/components/code/code-block-command";

export default function CodeBlockCommandDemo() {
    return (    
<CodeBlockCommand
__npm__="npx shadcn@latest mcp init"
__yarn__="yarn shadcn@latest mcp init"
        __pnpm__="pnpm shadcn@latest mcp init"
      __bun__="bun shadcn@latest mcp init"
    />
  )
}