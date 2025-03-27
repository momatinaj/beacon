import Link from "next/link"
import Image from "next/image"
import { ArrowRight, BarChart2, Database, Zap, GitCompare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-b">
        <div className="container px-4 md:px-6 max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">BEACON</h1>
                <p className="max-w-[600px] text-xl text-primary font-semibold">
                  Benchmark for Efficient and Accurate Counting of Subgraphs
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  BEACON is the first comprehensive benchmark for subgraph counting, enabling systematic comparisons of
                  algorithmic (AL) and machine learning (ML) methods. It provides standardized datasets, reproducible
                  evaluation protocols, and a public leaderboard to accelerate research in graph analytics.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/leaderboard">
                  <Button>
                    View Leaderboard
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/downloads">
                  <Button variant="outline">Download Resources</Button>
                </Link>
              </div>
              <div className="flex gap-4">
                <Badge variant="outline" className="text-sm">
                  26,435 Graphs
                </Badge>
                <Badge variant="outline" className="text-sm">
                  Subgraphs up to 5 nodes
                </Badge>
                <Badge variant="outline" className="text-sm">
                  10+ Evaluated Methods
                </Badge>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative aspect-[4/3] w-full rounded-xl border bg-background/50 shadow-md overflow-hidden">
                <Image
                  src="/beacon/figs/overview.png"
                  alt="Subgraph counting example visualization"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-contain bg-white dark:bg-background"
                  priority
                  quality={95}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Features</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                BEACON introduces several innovations to the field of subgraph counting
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="pb-2">
                <Database className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Standardized Datasets</CardTitle>
                <CardDescription>Curated Oracle Dataset with verified ground truths</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our Oracle Dataset contains 26,435 graphs from TUDataset and OGB, covering bioinformatics, social
                  networks, and more.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <GitCompare className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Unified Evaluation</CardTitle>
                <CardDescription>Compare AL and ML methods under identical conditions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  BEACON enables direct comparison between algorithmic methods (e.g., ESCAPE) and machine learning
                  approaches (e.g., PPGN).
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <Zap className="h-6 w-6 text-primary mb-2" />
                <CardTitle>BEACON-Sampler</CardTitle>
                <CardDescription>Generate custom datasets by node count, density, and domain</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our PyPI tool allows researchers to create custom graph datasets with specific properties for targeted
                  evaluation.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <BarChart2 className="h-6 w-6 text-primary mb-2" />
                <CardTitle>Public Leaderboard</CardTitle>
                <CardDescription>Track state-of-the-art performance across metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Our leaderboard tracks performance across accuracy (Q-error, MAE), scalability, and robustness
                  metrics.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Latest Updates</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Stay informed about the latest developments in our benchmark
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 py-12 md:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Version History</h3>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-24 text-sm text-muted-foreground">Jun 2024</div>
                  <div>
                    <p className="font-medium">BEACON v1.2 Release</p>
                    <p className="text-sm text-muted-foreground">Added new network graphs</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-24 text-sm text-muted-foreground">Feb 2024</div>
                  <div>
                    <p className="font-medium">BEACON v1.1 Release</p>
                    <p className="text-sm text-muted-foreground">Improved evaluation server and documentation</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-bold">Top Submissions</h3>
              <div className="space-y-4">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">PPGN (ML)</p>
                    <Badge>Q-error: 1.02</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Dataset: Set_1</p>
                  <p className="text-sm text-muted-foreground">Type: Machine Learning</p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">DeSCo (ML)</p>
                    <Badge variant="outline">Q-error: 1.07</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Dataset: Set_3</p>
                  <p className="text-sm text-muted-foreground">Type: Machine Learning</p>
                </div>
                <div className="rounded-lg border p-4">
                  <div className="flex items-center justify-between">
                    <p className="font-medium">ESCAPE (AL)</p>
                    <Badge variant="outline">Q-error: 1.23</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">Dataset: Set_1</p>
                  <p className="text-sm text-muted-foreground">Type: Algorithmic</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

