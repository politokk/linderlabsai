import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export function Hero({
  badgeText,
  title,
  titleAccent,
  description,
  button1Text,
  button1Link,
  button2Text,
  button2Link,
  backgroundImage,
}: {
  badgeText: string;
  title: string;
  titleAccent?: string;
  description: string;
  button1Text: string;
  button1Link: string;
  button2Text: string;
  button2Link: string;
  backgroundImage: string;
}) {
  return (
    <div className="relative h-[480px] w-full">
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <Badge variant="secondary" className="mb-4">
            {badgeText}
          </Badge>
          <h1 className="font-semibold text-3xl tracking-tight sm:text-3xl md:text-4xl">
            {title}{titleAccent && <span className="text-primary"> {titleAccent}</span>}
          </h1>
          <p className="mt-6 text-xl">{description}</p>
          <div className="mt-5 space-x-5">
            <Button
              asChild
              variant="default"
              size="sm"
            >
              <Link href={button1Link}>{button1Text}</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
            >
              <Link href={button2Link}>{button2Text}</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}