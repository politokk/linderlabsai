"use client"

import {
  Link,
  LinkContent,
  LinkTrigger,
} from "@/components/ai-elements/links"

export default function LinksBasicDemo() {
  return (
    <div className="flex flex-wrap justify-center gap-2 p-6">
      <Link href="https://github.com">
        <LinkTrigger showFavicon />
        <LinkContent
          title="GitHub"
          description="Where the world builds software. Millions of developers and companies build, ship, and maintain their software on GitHub."
        />
      </Link>

      <Link href="https://www.google.com">
        <LinkTrigger showFavicon />
        <LinkContent
          title="Google"
          description="Search the world's information, including webpages, images, videos and more."
        />
      </Link>

      <Link href="https://www.figma.com">
        <LinkTrigger showFavicon />
        <LinkContent
          title="Figma"
          description="Figma is the leading collaborative design tool for building meaningful products."
        />
      </Link>

      <Link href="https://github.com/shadcn/ui">
        <LinkTrigger showFavicon />
        <LinkContent
          title="shadcn/ui"
          description="Beautifully designed components that you can copy and paste into your apps."
        />
            </Link>

      <Link href="https://www.wikipedia.org">
        <LinkTrigger showFavicon />
        <LinkContent
          title="Wikipedia"
          description="The free encyclopedia that anyone can edit. Over 6 million articles."
        />
      </Link>

      <Link href="https://openai.com">
        <LinkTrigger showFavicon />
        <LinkContent
          title="OpenAI"
          description="Creating safe artificial general intelligence that benefits all of humanity."
        />
      </Link>
    </div>
  )
}
