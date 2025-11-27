"use client"

import { Link, LinkTrigger, LinkContent } from "@/components/ai-elements/links"

export default function LinksCustomDemo() {
  return (
    <div className="space-y-6 p-6">
      {/* Numbered Links */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <Link href="https://arxiv.org/abs/2103.00020">
            <LinkTrigger showFavicon label={1} />
            <LinkContent
              title="CLIP: Learning Transferable Visual Models"
              description="We present a neural network trained on 400 million image-text pairs collected from the internet."
            />
          </Link>
          <Link href="https://openai.com/research/gpt-4">
            <LinkTrigger showFavicon label={2} />
            <LinkContent
              title="GPT-4 Technical Report"
              description="GPT-4 is a large multimodal model capable of processing image and text inputs."
            />
          </Link>
          <Link href="https://arxiv.org/abs/2005.11401">
            <LinkTrigger showFavicon label={3} />
            <LinkContent
              title="Retrieval-Augmented Generation"
              description="RAG models combine pre-trained language models with a neural retriever."
            />
          </Link>
        </div>
      </div>

      {/* Custom Labels */}
      <div className="space-y-2">
        <div className="flex gap-2">
          <Link href="https://docs.python.org">
            <LinkTrigger showFavicon label="Python" />
            <LinkContent
              title="Python Documentation"
              description="Official documentation for Python programming language."
            />
          </Link>
          <Link href="https://react.dev">
            <LinkTrigger showFavicon label="React" />
            <LinkContent
              title="React Documentation"
              description="The library for web and native user interfaces."
            />
            </Link>
          <Link href="https://nextjs.org">
            <LinkTrigger showFavicon label="Next.js" />
            <LinkContent
              title="Next.js by Vercel"
              description="The React framework for production."
            />
            </Link>
        </div>
      </div>

      {/* Mixed Styles */}
      <div className="space-y-2">
        <div className="flex flex-wrap gap-2">
          <Link href="https://github.com">
                <LinkTrigger showFavicon label="GitHub" />
            <LinkContent
              title="GitHub"
              description="Where the world builds software."
            />
            </Link>
          <Link href="https://stackoverflow.com">
            <LinkTrigger showFavicon label="SO" />
            <LinkContent
              title="Stack Overflow"
              description="Where developers learn, share, and build careers."
            />
            </Link>
            <Link href="https://www.reddit.com/r/programming">
            <LinkTrigger
              label="r/programming"
              className="hover:bg-orange-500 hover:text-white"
            />
            <LinkContent
              title="r/programming"
              description="Computer programming discussion and news."
            />
                </Link>
          <Link href="https://news.ycombinator.com">
            <LinkTrigger
              label="HN"
              className="bg-orange-100 text-orange-700 hover:bg-orange-200 dark:bg-orange-900/20 dark:text-orange-400 dark:hover:bg-orange-900/40"
            />
            <LinkContent
              title="Hacker News"
              description="Social news website focusing on computer science and entrepreneurship."
            />
            </Link>
        </div>
      </div>

      {/* Custom Hover Colors */}
      <div className="space-y-2"> 
        <div className="flex gap-2">
          <Link href="https://twitter.com">
                <LinkTrigger
              label="𝕏"
              className="hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
            />
            <LinkContent
              title="X (Twitter)"
              description="The everything app for news, entertainment, and conversation."
            />
            </Link>
          <Link href="https://youtube.com">
            <LinkTrigger
              showFavicon
              className="hover:bg-red-600 hover:text-white"
            />
            <LinkContent
              title="YouTube"
              description="Share your videos with friends, family, and the world."
            />
            </Link>
          <Link href="https://linkedin.com">
            <LinkTrigger
              showFavicon
              className="hover:bg-blue-600 hover:text-white"
            />
            <LinkContent
              title="LinkedIn"
              description="Manage your professional identity. Build and engage with your network."
            />
            </Link>
        </div>
      </div>
    </div>
  )
}
