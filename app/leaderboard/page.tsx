"use client"

import { useState } from "react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
} from "recharts"
import { Download, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"

// Define interfaces for our data model
interface DatasetResult {
  dataset: string
  qError: number
  mae: number
  inferenceTime: number
  preprocessTime: number
  totalTime: number
}

interface ModelEntry {
  id: string
  model: string
  team: string
  type: string
  paperLink: string
  codeLink: string
  results: DatasetResult[]
}

// Sample data with multiple datasets per model
const modelData: ModelEntry[] = [
  {
    id: "ppgn",
    model: "PPGN",
    team: "Carnegie Mellon",
    type: "ML",
    paperLink: "https://openreview.net/forum?id=Mspk_WYKoEH",
    codeLink: "https://github.com/LingxiaoShawn/GNNAsKernel",
    results: [
      {
        dataset: "Set_1",
        qError: 1.02,
        mae: 0.05,
        inferenceTime: 0.5,
        preprocessTime: 1.2,
        totalTime: 1.7,
      },
      {
        dataset: "Set_2",
        qError: 1.10,
        mae: 0.08,
        inferenceTime: 0.6,
        preprocessTime: 1.5,
        totalTime: 2.1,
      },
    ],
  },
  {
    id: "desco",
    model: "DeSCo",
    team: "Research Lab B",
    type: "ML",
    paperLink: "https://example.com/paper2",
    codeLink: "https://github.com/example/model2",
    results: [
      {
        dataset: "Set_1",
        qError: 1.15,
        mae: 0.09,
        inferenceTime: 0.6,
        preprocessTime: 0.9,
        totalTime: 1.5,
      },
      {
        dataset: "Set_3",
        qError: 1.07,
        mae: 0.08,
        inferenceTime: 0.7,
        preprocessTime: 1.1,
        totalTime: 1.8,
      },
    ],
  },
  {
    id: "escape",
    model: "ESCAPE",
    team: "University C",
    type: "AL",
    paperLink: "https://example.com/paper3",
    codeLink: "https://github.com/example/model3",
    results: [
      {
        dataset: "Set_1",
        qError: 1.23,
        mae: 0.12,
        inferenceTime: 1.2,
        preprocessTime: 0.7,
        totalTime: 1.9,
      },
    ],
  },
  {
    id: "gnn",
    model: "GNN",
    team: "Industry Lab D",
    type: "ML",
    paperLink: "https://example.com/paper4",
    codeLink: "https://github.com/example/model4",
    results: [
      {
        dataset: "Set_2",
        qError: 1.31,
        mae: 0.15,
        inferenceTime: 0.2,
        preprocessTime: 0.5,
        totalTime: 0.7,
      },
    ],
  },
  {
    id: "cc-approx",
    model: "CC-Approx",
    team: "University E",
    type: "AL",
    paperLink: "https://example.com/paper5",
    codeLink: "https://github.com/example/model5",
    results: [
      {
        dataset: "Set_1",
        qError: 1.42,
        mae: 0.18,
        inferenceTime: 0.9,
        preprocessTime: 0.4,
        totalTime: 1.3,
      },
    ],
  },
  {
    id: "graphsage",
    model: "GraphSAGE",
    team: "Research Group F",
    type: "ML",
    paperLink: "https://example.com/paper6",
    codeLink: "https://github.com/example/model6",
    results: [
      {
        dataset: "Set_2",
        qError: 1.56,
        mae: 0.22,
        inferenceTime: 0.4,
        preprocessTime: 0.3,
        totalTime: 0.7,
      },
    ],
  },
  {
    id: "vertexcount",
    model: "VertexCount",
    team: "University G",
    type: "AL",
    paperLink: "https://example.com/paper7",
    codeLink: "https://github.com/example/model7",
    results: [
      {
        dataset: "Set_3",
        qError: 1.68,
        mae: 0.25,
        inferenceTime: 1.5,
        preprocessTime: 0.8,
        totalTime: 2.3,
      },
    ],
  },
]

// Update the radar and performance data to match our new structure
const performanceData = [
  {
    name: "PPGN (ML)",
    qError: 1.02,
    mae: 0.05,
    inferenceTime: 0.5,
  },
  {
    name: "DeSCo (ML)",
    qError: 1.07,
    mae: 0.08,
    inferenceTime: 0.7,
  },
  {
    name: "ESCAPE (AL)",
    qError: 1.23,
    mae: 0.12,
    inferenceTime: 1.2,
  },
]

// Sample data for radar chart
const radarData = [
  {
    subject: "Q-Error",
    "PPGN (ML)": 98,
    "DeSCo (ML)": 93,
    "ESCAPE (AL)": 77,
    fullMark: 100,
  },
  {
    subject: "MAE",
    "PPGN (ML)": 95,
    "DeSCo (ML)": 92,
    "ESCAPE (AL)": 88,
    fullMark: 100,
  },
  {
    subject: "Speed",
    "PPGN (ML)": 80,
    "DeSCo (ML)": 70,
    "ESCAPE (AL)": 50,
    fullMark: 100,
  },
  {
    subject: "Scalability",
    "PPGN (ML)": 85,
    "DeSCo (ML)": 80,
    "ESCAPE (AL)": 65,
    fullMark: 100,
  },
  {
    subject: "Robustness",
    "PPGN (ML)": 90,
    "DeSCo (ML)": 85,
    "ESCAPE (AL)": 95,
    fullMark: 100,
  },
]

interface RankedModel {
  id: string
  rank: number
  model: string
  team: string
  type: string
  qError: number
  mae: number
  inferenceTime: number
  preprocessTime: number
  totalTime: number
  paperLink: string
  codeLink: string
  dataset: string
}

export default function LeaderboardPage() {
  // Set default values for dataset (Set_1) and view (accuracy)
  const [metricFilter, setMetricFilter] = useState("qError")
  const [datasetFilter, setDatasetFilter] = useState("Set_1")
  const [viewMode, setViewMode] = useState("accuracy") // accuracy, efficiency, combined

  // Get all unique datasets across all models
  const allDatasets = Array.from(new Set(
    modelData.flatMap(model => model.results.map(result => result.dataset))
  ))

  // Process data based on filters
  const getFilteredRankedModels = (): RankedModel[] => {
    // Filter models with results matching the dataset filter
    const modelsWithFilteredResults = modelData
      .map(model => {
        const matchingResult = model.results.find(result => result.dataset === datasetFilter)
        return matchingResult ? { model, result: matchingResult } : null
      })
      .filter((item): item is { model: ModelEntry; result: DatasetResult } => item !== null)

    // Create array of models with their dataset results
    const rankedModels: RankedModel[] = modelsWithFilteredResults.map(({ model, result }) => ({
      id: model.id,
      rank: 0, // Will be set after sorting
      model: model.model,
      team: model.team,
      type: model.type,
      qError: result.qError,
      mae: result.mae,
      inferenceTime: result.inferenceTime,
      preprocessTime: result.preprocessTime,
      totalTime: result.totalTime,
      paperLink: model.paperLink,
      codeLink: model.codeLink,
      dataset: result.dataset
    }))

    // Sort by the selected metric
    rankedModels.sort((a, b) => {
      if (metricFilter === "qError") return a.qError - b.qError
      if (metricFilter === "mae") return a.mae - b.mae
      if (metricFilter === "inferenceTime") return a.inferenceTime - b.inferenceTime
      if (metricFilter === "preprocessTime") return a.preprocessTime - b.preprocessTime
      return a.totalTime - b.totalTime
    })

    // Assign ranks
    rankedModels.forEach((model, index) => {
      model.rank = index + 1
    })

    return rankedModels
  }

  const rankedModels = getFilteredRankedModels()

  return (
    <div className="container py-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Benchmark Leaderboard</h1>
        <p className="text-muted-foreground">Compare model performance across multiple metrics and datasets</p>
      </div>

      <div className="my-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Dataset:</span>
            <Select value={datasetFilter} onValueChange={setDatasetFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Set_1" />
              </SelectTrigger>
              <SelectContent>
                {allDatasets.map(dataset => (
                  <SelectItem key={dataset} value={dataset}>
                    {dataset}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Rank by:</span>
            <Select value={metricFilter} onValueChange={setMetricFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Q-Error" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="qError">Q-Error</SelectItem>
                <SelectItem value="mae">MAE</SelectItem>
                <SelectItem value="inferenceTime">Inference Time</SelectItem>
                <SelectItem value="preprocessTime">Preprocess Time</SelectItem>
                <SelectItem value="totalTime">Total Time</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">View:</span>
            <Select value={viewMode} onValueChange={setViewMode}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Accuracy" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="accuracy">Accuracy</SelectItem>
                <SelectItem value="efficiency">Efficiency</SelectItem>
                <SelectItem value="combined">Combined</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <Button variant="outline" size="sm">
          <Download className="mr-2 h-4 w-4" />
          Export CSV
        </Button>
      </div>

      <Card className="mb-8">
        <CardHeader className="pb-2">
          <CardTitle>Model Rankings</CardTitle>
          <CardDescription>
            Dataset: {datasetFilter} • 
            Ranked by {
              metricFilter === "qError" ? "Q-Error" : 
              metricFilter === "mae" ? "MAE" : 
              metricFilter === "inferenceTime" ? "Inference Time" :
              metricFilter === "preprocessTime" ? "Preprocess Time" :
              "Total Time"
            }
          </CardDescription>
        </CardHeader>
        <CardContent>
          {viewMode === "accuracy" && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center">Rank</TableHead>
                  <TableHead className="w-32">Model</TableHead>
                  <TableHead className="w-40">Team</TableHead>
                  <TableHead className="w-20 text-center">Type</TableHead>
                  <TableHead className="w-28 text-right">Q-Error</TableHead>
                  <TableHead className="w-28 text-right">MAE</TableHead>
                  <TableHead className="w-32 text-right">Links</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rankedModels.map((model) => (
                  <TableRow key={model.id}>
                    <TableCell className="text-center font-medium">{model.rank}</TableCell>
                    <TableCell className="font-medium">{model.model}</TableCell>
                    <TableCell>{model.team}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={model.type === "ML" ? "default" : "outline"}>{model.type}</Badge>
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "qError" ? "font-semibold" : ""}`}>
                      {model.qError.toFixed(2)}
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "mae" ? "font-semibold" : ""}`}>
                      {model.mae.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <a
                          href={model.paperLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Paper
                        </a>
                        <a
                          href={model.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Code
                        </a>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {viewMode === "efficiency" && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center">Rank</TableHead>
                  <TableHead className="w-32">Model</TableHead>
                  <TableHead className="w-40">Team</TableHead>
                  <TableHead className="w-20 text-center">Type</TableHead>
                  <TableHead className="w-28 text-right">Inference (s)</TableHead>
                  <TableHead className="w-28 text-right">Preprocess (s)</TableHead>
                  <TableHead className="w-28 text-right">Total (s)</TableHead>
                  <TableHead className="w-32 text-right">Links</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rankedModels.map((model) => (
                  <TableRow key={model.id}>
                    <TableCell className="text-center font-medium">{model.rank}</TableCell>
                    <TableCell className="font-medium">{model.model}</TableCell>
                    <TableCell>{model.team}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={model.type === "ML" ? "default" : "outline"}>{model.type}</Badge>
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "inferenceTime" ? "font-semibold" : ""}`}>
                      {model.inferenceTime.toFixed(1)}
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "preprocessTime" ? "font-semibold" : ""}`}>
                      {model.preprocessTime.toFixed(1)}
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "totalTime" ? "font-semibold" : ""}`}>
                      {model.totalTime.toFixed(1)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <a
                          href={model.paperLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Paper
                        </a>
                        <a
                          href={model.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Code
                        </a>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}

          {viewMode === "combined" && (
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-16 text-center">Rank</TableHead>
                  <TableHead className="w-28">Model</TableHead>
                  <TableHead className="w-36">Team</TableHead>
                  <TableHead className="w-20 text-center">Type</TableHead>
                  <TableHead className="w-24 text-right">Q-Error</TableHead>
                  <TableHead className="w-24 text-right">MAE</TableHead>
                  <TableHead className="w-24 text-right">Inference (s)</TableHead>
                  <TableHead className="w-24 text-right">Preprocess (s)</TableHead>
                  <TableHead className="w-24 text-right">Total (s)</TableHead>
                  <TableHead className="w-32 text-right">Links</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rankedModels.map((model) => (
                  <TableRow key={model.id}>
                    <TableCell className="text-center font-medium">{model.rank}</TableCell>
                    <TableCell className="font-medium">{model.model}</TableCell>
                    <TableCell>{model.team}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={model.type === "ML" ? "default" : "outline"}>{model.type}</Badge>
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "qError" ? "font-semibold" : ""}`}>
                      {model.qError.toFixed(2)}
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "mae" ? "font-semibold" : ""}`}>
                      {model.mae.toFixed(2)}
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "inferenceTime" ? "font-semibold" : ""}`}>
                      {model.inferenceTime.toFixed(1)}
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "preprocessTime" ? "font-semibold" : ""}`}>
                      {model.preprocessTime.toFixed(1)}
                    </TableCell>
                    <TableCell className={`text-right ${metricFilter === "totalTime" ? "font-semibold" : ""}`}>
                      {model.totalTime.toFixed(1)}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <a
                          href={model.paperLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Paper
                        </a>
                        <a
                          href={model.codeLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Code
                        </a>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          )}
        </CardContent>
      </Card>

      <div className="space-y-8">
        <h2 className="text-2xl font-bold tracking-tighter">Visualization</h2>

        <Tabs defaultValue="bar" className="w-full">
          <TabsList className="mb-4">
            <TabsTrigger value="bar">Performance Comparison</TabsTrigger>
            <TabsTrigger value="radar">Multi-dimensional Analysis</TabsTrigger>
          </TabsList>
          <TabsContent value="bar" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Performance Comparison</CardTitle>
                <CardDescription>Compare top models across key metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={performanceData}
                      margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="qError" fill="#3b82f6" name="Q-Error" />
                      <Bar dataKey="mae" fill="#10b981" name="MAE" />
                      <Bar dataKey="inferenceTime" fill="#f59e0b" name="Inference Time (s)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="radar" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Multi-dimensional Analysis</CardTitle>
                <CardDescription>Radar chart showing model performance across all dimensions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[500px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} />
                      <Radar name="PPGN (ML)" dataKey="PPGN (ML)" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.2} />
                      <Radar name="DeSCo (ML)" dataKey="DeSCo (ML)" stroke="#10b981" fill="#10b981" fillOpacity={0.2} />
                      <Radar
                        name="ESCAPE (AL)"
                        dataKey="ESCAPE (AL)"
                        stroke="#f59e0b"
                        fill="#f59e0b"
                        fillOpacity={0.2}
                      />
                      <Legend />
                      <Tooltip />
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

