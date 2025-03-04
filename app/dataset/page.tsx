import Image from "next/image"
import Link from "next/link"
import { Download, FileText, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function DatasetPage() {
  return (
    <div className="container py-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Benchmark Datasets</h1>
        <p className="text-muted-foreground">Explore the datasets used in our benchmark evaluation</p>
      </div>

      <Tabs defaultValue="oracle" className="mt-8">
        <TabsList className="mb-4">
          <TabsTrigger value="oracle">Oracle Dataset</TabsTrigger>
          <TabsTrigger value="benchmark">Benchmark Dataset</TabsTrigger>
          <TabsTrigger value="custom">Custom Datasets</TabsTrigger>
        </TabsList>

        <TabsContent value="oracle" className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Oracle Dataset</CardTitle>
                  <CardDescription>Comprehensive collection of graphs with verified ground truths</CardDescription>
                </div>
                <Badge>26,435 graphs</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Dataset Overview</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sources:</span>
                      <span>TUDataset, OGB</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domains:</span>
                      <span>Bioinformatics, Social Networks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Node Count Range:</span>
                      <span>20 - 50,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Density Range:</span>
                      <span>0.1 - 10 edges/node</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subgraph Patterns:</span>
                      <span>2-5 nodes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Format:</span>
                      <span>CSV/JSON</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">License:</span>
                      <span>CC BY-NC-ND 4.0</span>
                    </div>
                  </div>

                  <h3 className="mb-2 mt-6 font-semibold">Ground Truth Verification</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Verification Method:</span>
                      <span>Exact counting algorithms</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Accuracy:</span>
                      <span>100% verified</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subgraph Types:</span>
                      <span>Paths, cycles, cliques, stars</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg border">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Sample graphs from Oracle Dataset"
                      width={500}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <Download className="mr-2 h-4 w-4" />
                        Download Dataset
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="benchmark" className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Benchmark Dataset</CardTitle>
                  <CardDescription>Curated subsets for standardized evaluation</CardDescription>
                </div>
                <Badge>10 subsets</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Subset Overview</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Set_1:</span>
                      <span>Small, sparse graphs (bioinformatics)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Set_2:</span>
                      <span>Small, dense graphs (social networks)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Set_3:</span>
                      <span>Medium, sparse graphs (mixed domains)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Set_4:</span>
                      <span>Medium, dense graphs (mixed domains)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Set_5:</span>
                      <span>Large, sparse graphs (bioinformatics)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sets 6-10:</span>
                      <span>Various combinations for robustness testing</span>
                    </div>
                  </div>

                  <h3 className="mb-2 mt-6 font-semibold">Evaluation Tasks</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Global Counting:</span>
                      <span>Count subgraphs in entire graph</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Local Counting:</span>
                      <span>Count subgraphs containing specific nodes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Induced vs. Non-induced:</span>
                      <span>Both variants supported</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg border">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Domain-density distribution visualization"
                      width={500}
                      height={300}
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <Download className="mr-2 h-4 w-4" />
                        Download Benchmark Sets
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <FileText className="mr-2 h-4 w-4" />
                        Benchmark Protocol
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="custom" className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>BEACON-Sampler</CardTitle>
                  <CardDescription>Generate custom graph datasets for targeted evaluation</CardDescription>
                </div>
                <Badge variant="outline">PyPI Package</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 font-semibold">Tool Overview</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    BEACON-Sampler (rwdd) is a Python package that allows you to generate custom graph datasets with
                    specific properties for targeted evaluation of subgraph counting methods.
                  </p>

                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Installation:</span>
                      <span>pip install rwdd</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Version:</span>
                      <span>1.2.0</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Dependencies:</span>
                      <span>NetworkX, NumPy, SciPy</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">License:</span>
                      <span>MIT</span>
                    </div>
                  </div>

                  <h3 className="mb-2 mt-6 font-semibold">Customization Options</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Node Count:</span>
                      <span>Configurable (10 - 100,000)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Density:</span>
                      <span>Configurable (0.1 - 20 edges/node)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Graph Models:</span>
                      <span>Erdős–Rényi, Barabási–Albert, etc.</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domain Simulation:</span>
                      <span>Social, biological, citation networks</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="overflow-hidden rounded-lg border bg-muted p-4">
                    <pre className="text-sm text-muted-foreground overflow-auto">
                      <code>
                        {`# Example usage of BEACON-Sampler
import rwdd

# Generate a dataset of 100 graphs
dataset = rwdd.generate_dataset(
    num_graphs=100,
    nodes_range=(20, 50),
    density_range=(2, 5),
    model="barabasi_albert"
)

# Save the dataset
rwdd.save_dataset(dataset, "custom_dataset.json")

# Count subgraphs in the dataset
patterns = ["triangle", "4-cycle", "4-clique"]
counts = rwdd.count_subgraphs(dataset, patterns)
`}
                      </code>
                    </pre>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <Download className="mr-2 h-4 w-4" />
                        Download BEACON-Sampler
                      </Link>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="#">
                        <FileText className="mr-2 h-4 w-4" />
                        Documentation
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="mt-12 space-y-6">
        <h2 className="text-2xl font-bold tracking-tighter">Ethical Considerations</h2>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>Data Privacy</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                All social network datasets in BEACON have been anonymized to protect user privacy. No personally
                identifiable information (PII) is included in any of the datasets. Node identifiers have been randomized
                and any sensitive attributes have been removed.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Usage Restrictions</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                The BEACON datasets are provided for research purposes only. Commercial use requires explicit permission
                from the dataset creators. Any models trained on these datasets should acknowledge the source and adhere
                to the respective licenses.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Citation Requirements</AccordionTrigger>
            <AccordionContent>
              <p className="text-muted-foreground">
                If you use BEACON datasets or evaluation protocols in your research, please cite our PVLDB 2024 paper.
                Additionally, please cite the original sources of the datasets (TUDataset, OGB) as specified in our
                documentation.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="rounded-lg border bg-muted/50 p-4">
          <div className="flex items-start gap-4">
            <Info className="mt-0.5 h-5 w-5 text-muted-foreground" />
            <div>
              <h3 className="font-medium">Data Explorer Coming Soon</h3>
              <p className="text-sm text-muted-foreground">
                We're developing an interactive data explorer that will allow you to browse samples, visualize
                statistics, and better understand the datasets. Stay tuned for updates!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

