import type { ChatDetail } from 'v0-sdk';
import { v0 } from 'v0-sdk';

export async function POST(req: Request) {
  const { prompt }: { prompt: string } = await req.json();
  const result = await v0.chats.create({
    system: 'You are an expert coder',
    message: prompt,
    modelConfiguration: {
      modelId: 'v0-1.5-sm',
      imageGenerations: false,
      thinking: false,
    },
  });

  // Type guard: result is ChatDetail if it's not a ReadableStream
  if (result instanceof ReadableStream) {
    return Response.json({ error: 'Streaming response not supported' }, { status: 400 });
  }

  return Response.json({
    demo: result.latestVersion?.demoUrl,
    webUrl: result.webUrl,
  });
}