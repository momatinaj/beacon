import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DatasetCard } from "./components/dataset-card"
import { ToolCard } from "./components/tool-card"
import { RepositoryCard } from "./components/repository-card"
import { datasets, tools, repository } from "./data"

export default function DownloadsPage() {
  return (
    <div className="container py-8">
      <div className="mx-auto max-w-5xl">
        <div className="mb-8 space-y-2">
          <h1 className="text-3xl font-bold">Downloads</h1>
          <p className="text-muted-foreground">
            Download our datasets, tools, and source code to get started with BEACON.
          </p>
      </div>

        <Tabs defaultValue="datasets">
        <TabsList className="mb-4">
          <TabsTrigger value="datasets">Datasets</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>

        <TabsContent value="datasets" className="space-y-6">
            <DatasetCard {...datasets.oracle} />
            <DatasetCard {...datasets.benchmark} />
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
            <ToolCard {...tools.sampler} />
            <ToolCard {...tools.docker} />
        </TabsContent>

        <TabsContent value="code" className="space-y-6">
            <RepositoryCard {...repository} />
        </TabsContent>
      </Tabs>
      </div>
    </div>
  )
}

