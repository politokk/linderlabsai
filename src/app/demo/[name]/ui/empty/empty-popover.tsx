import { IconArrowUpRight, IconFolderCode } from "@tabler/icons-react"
import { PlusIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

export default function EmptyPopover() {
  return (
    <div className="grid w-full gap-8">
      <div className="grid grid-cols-3 gap-6">
        <div className="flex gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader className="sr-only">
                <DialogTitle>Dialog Title</DialogTitle>
                <DialogDescription>Dialog Description</DialogDescription>
              </DialogHeader>
              <Empty className="p-4">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <IconFolderCode />
                  </EmptyMedia>
                  <EmptyTitle>No projects yet</EmptyTitle>
                  <EmptyDescription>
                    You haven&apos;t created any projects yet. Get started by
                    creating your first project.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <div className="flex gap-2">
                    <Button asChild>
                      <a href="/">Create project</a>
                    </Button>
                    <Button variant="outline">Import project</Button>
                  </div>
                  <Button
                    variant="link"
                    asChild
                    className="text-muted-foreground"
                  >
                    <a href="/">
                      Learn more <IconArrowUpRight />
                    </a>
                  </Button>
                </EmptyContent>
              </Empty>
            </DialogContent>
          </Dialog>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="outline">Open Popover</Button>
            </PopoverTrigger>
            <PopoverContent className="rounded-2xl p-2">
              <Empty className="rounded-sm p-6">
                <EmptyHeader>
                  <EmptyTitle>Nothing to see here</EmptyTitle>
                  <EmptyDescription>
                    No posts have been created yet.{" "}
                    <a href="/">Create your first post</a> to share with the
                    community.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button variant="outline">
                    <PlusIcon />
                    New Post
                  </Button>
                </EmptyContent>
              </Empty>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </div>
  )
}