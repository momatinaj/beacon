import Link from "next/link"
import { Download, FileText, Github, Package, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

export default function DownloadsPage() {
  return (
    <div className="container py-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Downloads</h1>
        <p className="text-muted-foreground">Access datasets, evaluation tools, and resources for the benchmark</p>
      </div>

      <Tabs defaultValue="datasets" className="mt-8">
        <TabsList className="mb-4">
          <TabsTrigger value="datasets">Datasets</TabsTrigger>
          <TabsTrigger value="tools">Tools</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          <TabsTrigger value="documentation">Documentation</TabsTrigger>
        </TabsList>

        <TabsContent value="datasets" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Oracle Dataset</CardTitle>
                  <Badge>5GB</Badge>
                </div>
                <CardDescription>Comprehensive collection of graphs with verified ground truths</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span>CSV/JSON</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Graphs:</span>
                    <span>26,435</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span>1.2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span>June 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span>CC BY-NC-ND 4.0</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2">
                  <Button asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download Dataset
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <FileText className="mr-2 h-4 w-4" />
                      View Documentation
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Benchmark Sets</CardTitle>
                  <Badge>2GB</Badge>
                </div>
                <CardDescription>Curated subsets for standardized evaluation</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span>CSV/JSON</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subsets:</span>
                    <span>10 sets</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span>1.2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span>June 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span>CC BY-NC-ND 4.0</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2">
                  <Button asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download Benchmark Sets
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <FileText className="mr-2 h-4 w-4" />
                      View Documentation
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Financial Networks</CardTitle>
                  <Badge>3GB</Badge>
                </div>
                <CardDescription>New financial transaction network graphs (v1.2)</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Format:</span>
                    <span>CSV/JSON</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Graphs:</span>
                    <span>12,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span>1.0.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span>June 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span>CC BY-NC-ND 4.0</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2">
                  <Button asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download Dataset
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <FileText className="mr-2 h-4 w-4" />
                      View Documentation
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="rounded-lg border bg-muted/50 p-4">
            <div className="flex items-start gap-4">
              <Download className="mt-0.5 h-5 w-5 text-muted-foreground" />
              <div>
                <h3 className="font-medium">Complete Dataset Bundle</h3>
                <p className="mb-4 text-sm text-muted-foreground">
                  Download all datasets in a single package (10GB). Includes Oracle Dataset, Benchmark Sets, and
                  Financial Networks with all annotations and documentation.
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link href="#">Download Bundle</Link>
                </Button>
              </div>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="tools" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>BEACON-Sampler</CardTitle>
                  <Badge variant="outline">v1.2.0</Badge>
                </div>
                <CardDescription>Python package for generating custom graph datasets</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  BEACON-Sampler (rwdd) allows you to generate custom graph datasets with specific properties for
                  targeted evaluation of subgraph counting methods.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Python 3.8+ required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">NetworkX, NumPy, SciPy dependencies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">MIT License</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="#">
                      <Package className="mr-2 h-4 w-4" />
                      PyPI Package
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repository
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Docker Evaluation Environment</CardTitle>
                  <Badge variant="outline">v1.2.0</Badge>
                </div>
                <CardDescription>Containerized environment for reproducible evaluation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our Docker image provides a standardized environment for model evaluation, ensuring consistent results
                  across different systems. It includes all necessary dependencies and evaluation scripts.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Server className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Docker 20.10+ required</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Package className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">CUDA 12.1 support included</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Github className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Apache 2.0 License</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Docker Hub
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <FileText className="mr-2 h-4 w-4" />
                      Documentation
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Evaluation Toolkit</CardTitle>
              <CardDescription>Scripts and utilities for evaluating subgraph counting methods</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Our evaluation toolkit provides standardized scripts for evaluating both algorithmic and machine
                learning methods on the BEACON benchmark. It includes data loaders, metric calculations, and
                visualization tools.
              </p>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">Algorithmic Methods</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Evaluation scripts for algorithmic methods like ESCAPE, CC-Approx, and VertexCount.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">ML Methods</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Evaluation scripts for ML methods like PPGN, DeSCo, and GNN-based approaches.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
                <div className="rounded-lg border p-4">
                  <h3 className="mb-2 font-medium">Visualization Tools</h3>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Tools for visualizing results, generating plots, and comparing methods.
                  </p>
                  <Button variant="outline" size="sm" className="w-full" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="code" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>BEACON Repository</CardTitle>
                  <Badge variant="outline">GitHub</Badge>
                </div>
                <CardDescription>Official repository for the BEACON benchmark</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Language:</span>
                    <span>Python</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span>1.2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span>June 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span>MIT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2">
                  <Button asChild>
                    <Link href="#">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repository
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download ZIP
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Baseline Implementations</CardTitle>
                  <Badge variant="outline">GitHub</Badge>
                </div>
                <CardDescription>Reference implementations of baseline methods</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Methods:</span>
                    <span>AL & ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span>1.1.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span>May 15, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span>MIT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2">
                  <Button asChild>
                    <Link href="#">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repository
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download ZIP
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle>Submission Templates</CardTitle>
                  <Badge variant="outline">GitHub</Badge>
                </div>
                <CardDescription>Templates for submitting your methods to the benchmark</CardDescription>
              </CardHeader>
              <CardContent className="pb-3">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Templates:</span>
                    <span>AL & ML</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Version:</span>
                    <span>1.2.0</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Last Updated:</span>
                    <span>June 10, 2024</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">License:</span>
                    <span>MIT</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2">
                  <Button asChild>
                    <Link href="#">
                      <Github className="mr-2 h-4 w-4" />
                      GitHub Repository
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download ZIP
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="documentation" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>User Guide</CardTitle>
                <CardDescription>Comprehensive documentation for using the BEACON benchmark</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our user guide provides detailed instructions for using the BEACON benchmark, including dataset
                  descriptions, evaluation protocols, and submission guidelines.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Dataset Documentation</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Evaluation Protocol</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Submission Guidelines</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Frequently Asked Questions</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="#">
                      <FileText className="mr-2 h-4 w-4" />
                      View Documentation
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>API Reference</CardTitle>
                <CardDescription>Technical documentation for the BEACON API</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Our API reference provides detailed documentation for the BEACON API, including data formats,
                  evaluation metrics, and submission endpoints.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Data Formats</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Evaluation Metrics</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Submission Endpoints</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileText className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">Error Codes</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex w-full flex-col gap-2 sm:flex-row">
                  <Button asChild>
                    <Link href="#">
                      <FileText className="mr-2 h-4 w-4" />
                      View API Reference
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#">
                      <Download className="mr-2 h-4 w-4" />
                      Download PDF
                    </Link>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Academic Paper</CardTitle>
              <CardDescription>PVLDB 2024 paper describing the BEACON benchmark</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                Our PVLDB 2024 paper provides a comprehensive description of the BEACON benchmark, including the
                motivation, methodology, and experimental results.
              </p>
              <div className="rounded-lg border p-4">
                <h3 className="mb-2 font-medium">Citation</h3>
                <p className="text-sm text-muted-foreground">
                  Mohammad Matin Najafi, Reynold Cheng, and Laks V.S. Lakshmanan. "BEACON: Benchmark for Efficient and
                  Accurate Counting of Subgraphs." Proceedings of the VLDB Endowment (PVLDB), 17(1), 2024.
                </p>
              </div>
            </CardContent>
            <CardFooter>
              <div className="flex w-full flex-col gap-2 sm:flex-row">
                <Button asChild>
                  <Link href="#">
                    <FileText className="mr-2 h-4 w-4" />
                    View Paper
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="#">
                    <Download className="mr-2 h-4 w-4" />
                    Download PDF
                  </Link>
                </Button>
              </div>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

