import { streamText, UIMessage, convertToModelMessages } from 'ai';
import { z } from 'zod';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: 'openai/gpt-4o',
    messages: convertToModelMessages(messages),
    tools: {
      // Confirmation component - delete file tool
      delete_file: {
        description: 'Delete a file from the file system',
        inputSchema: z.object({
          filePath: z.string().describe('The path to the file to delete'),
          confirm: z
            .boolean()
            .default(false)
            .describe('Confirmation that the user wants to delete the file'),
        }),
        requireApproval: true,
        execute: async ({ filePath, confirm }) => {
          if (!confirm) {
            return {
              success: false,
              message: 'Deletion not confirmed',
            };
          }

          // Simulate file deletion
          await new Promise((resolve) => setTimeout(resolve, 500));

          return {
            success: true,
            message: `Successfully deleted ${filePath}`,
          };
        },
      },
      
      // Add more tools here as you send me new component docs
    },
  });

  return result.toUIMessageStreamResponse();
}