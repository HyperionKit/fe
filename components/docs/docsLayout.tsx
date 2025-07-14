import { DocsHeader } from "@/components/docs/docsHeader"
import { DocsSidebar } from "@/components/docs/docsSidebar"
import { DocsContent } from "@/components/docs/docsContent"
import { DocsTableOfContents } from "@/components/docs/docsToc"

export function DocsLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <DocsHeader />
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] md:gap-6 lg:grid-cols-[240px_1fr] lg:gap-10 max-w-6xl mx-auto">
        {" "}
        {/* Added max-w-6xl and mx-auto */}
        <aside className="fixed top-16 z-30 -ml-2 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <DocsSidebar />
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8 xl:grid xl:grid-cols-[1fr_300px]">
          <div className="mx-auto w-full min-w-0">
            <DocsContent />
          </div>
          <div className="hidden text-sm xl:block">
            <div className="sticky top-16 -mt-10 pt-4">
              <DocsTableOfContents />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
