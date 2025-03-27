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
  trainingTime?: number // Added for training time in minutes
}

interface ModelEntry {
  id: string
  model: string
  type: string
  year: number
  paperLink: string
  codeLink: string
  results: DatasetResult[]
}

// Updated sample data based on the provided tables
const modelData: ModelEntry[] = [
  {
    id: "desco-st",
    model: "DeSCo-ST",
    type: "ML-based",
    year: 2024,
    paperLink: "https://github.com/fuvty/DeSCo",
    codeLink: "https://github.com/fuvty/DeSCo",
    results: [
      {
        dataset: "Set_1",
        qError: 1.25,
        mae: 0.12,
        inferenceTime: 0.8,
        preprocessTime: 1.0,
        totalTime: 1.8,
        trainingTime: 269
      },
      {
        dataset: "Set_2",
        qError: 1.30,
        mae: 0.15,
        inferenceTime: 0.9,
        preprocessTime: 1.1,
        totalTime: 2.0,
        trainingTime: 500
      },
      {
        dataset: "Set_3",
        qError: 1.35,
        mae: 0.17,
        inferenceTime: 1.0,
        preprocessTime: 1.2,
        totalTime: 2.2,
        trainingTime: 616
      },
      {
        dataset: "Set_5",
        qError: 1.40,
        mae: 0.20,
        inferenceTime: 1.1,
        preprocessTime: 1.3,
        totalTime: 2.4,
        trainingTime: 1705
      },
      {
        dataset: "Set_7",
        qError: 1.45,
        mae: 0.22,
        inferenceTime: 1.2,
        preprocessTime: 1.4,
        totalTime: 2.6,
        trainingTime: 734
      },
      {
        dataset: "Set_8",
        qError: 1.50,
        mae: 0.25,
        inferenceTime: 1.3,
        preprocessTime: 1.5,
        totalTime: 2.8,
        trainingTime: 2069
      },
      {
        dataset: "Set_9",
        qError: 1.55,
        mae: 0.27,
        inferenceTime: 1.4,
        preprocessTime: 1.6,
        totalTime: 3.0,
        trainingTime: 3578
      },
      {
        dataset: "Set_10",
        qError: 1.60,
        mae: 0.30,
        inferenceTime: 1.5,
        preprocessTime: 1.7,
        totalTime: 3.2,
        trainingTime: 12167
      }
    ],
  },
  {
    id: "desco",
    model: "DeSCo",
    type: "ML-based",
    year: 2024,
    paperLink: "https://github.com/fuvty/DeSCo",
    codeLink: "https://github.com/fuvty/DeSCo",
    results: [
      {
        dataset: "Set_1",
        qError: 1.15,
        mae: 0.09,
        inferenceTime: 0.6,
        preprocessTime: 0.9,
        totalTime: 1.5,
        trainingTime: 22.7
      },
      {
        dataset: "Set_2",
        qError: 1.20,
        mae: 0.10,
        inferenceTime: 0.7,
        preprocessTime: 1.0,
        totalTime: 1.7,
        trainingTime: 37.8
      },
      {
        dataset: "Set_3",
        qError: 1.25,
        mae: 0.12,
        inferenceTime: 0.8,
        preprocessTime: 1.1,
        totalTime: 1.9,
        trainingTime: 47.6
      },
      {
        dataset: "Set_5",
        qError: 1.30,
        mae: 0.15,
        inferenceTime: 0.9,
        preprocessTime: 1.2,
        totalTime: 2.1,
        trainingTime: 102
      },
      {
        dataset: "Set_7",
        qError: 1.35,
        mae: 0.17,
        inferenceTime: 1.0,
        preprocessTime: 1.3,
        totalTime: 2.3,
        trainingTime: 44.2
      },
      {
        dataset: "Set_8",
        qError: 1.40,
        mae: 0.20,
        inferenceTime: 1.1,
        preprocessTime: 1.4,
        totalTime: 2.5,
        trainingTime: 110
      },
      {
        dataset: "Set_9",
        qError: 1.45,
        mae: 0.22,
        inferenceTime: 1.2,
        preprocessTime: 1.5,
        totalTime: 2.7,
        trainingTime: 211
      },
      {
        dataset: "Set_10",
        qError: 1.50,
        mae: 0.25,
        inferenceTime: 1.3,
        preprocessTime: 1.6,
        totalTime: 2.9,
        trainingTime: 639
      }
    ],
  },
  {
    id: "gnn",
    model: "GNN",
    type: "ML-based",
    year: 2019,
    paperLink: "https://github.com/weihua916/powerful-gnns",
    codeLink: "https://github.com/weihua916/powerful-gnns",
    results: [
      {
        dataset: "Set_1",
        qError: 1.30,
        mae: 0.15,
        inferenceTime: 0.7,
        preprocessTime: 0.6,
        totalTime: 1.3,
        trainingTime: 2.37
      },
      {
        dataset: "Set_2",
        qError: 1.35,
        mae: 0.17,
        inferenceTime: 0.8,
        preprocessTime: 0.7,
        totalTime: 1.5,
        trainingTime: 4.52
      },
      {
        dataset: "Set_3",
        qError: 1.40,
        mae: 0.20,
        inferenceTime: 0.9,
        preprocessTime: 0.8,
        totalTime: 1.7,
        trainingTime: 2.97
      },
      {
        dataset: "Set_5",
        qError: 1.45,
        mae: 0.22,
        inferenceTime: 1.0,
        preprocessTime: 0.9,
        totalTime: 1.9,
        trainingTime: 3.24
      },
      {
        dataset: "Set_7",
        qError: 1.50,
        mae: 0.25,
        inferenceTime: 1.1,
        preprocessTime: 1.0,
        totalTime: 2.1,
        trainingTime: 1.06
      },
      {
        dataset: "Set_8",
        qError: 1.55,
        mae: 0.27,
        inferenceTime: 1.2,
        preprocessTime: 1.1,
        totalTime: 2.3,
        trainingTime: 1.86
      },
      {
        dataset: "Set_9",
        qError: 1.60,
        mae: 0.30,
        inferenceTime: 1.3,
        preprocessTime: 1.2,
        totalTime: 2.5,
        trainingTime: 3.59
      },
      {
        dataset: "Set_10",
        qError: 1.65,
        mae: 0.32,
        inferenceTime: 1.4,
        preprocessTime: 1.3,
        totalTime: 2.7,
        trainingTime: 9.66
      }
    ],
  },
  {
    id: "gnnak",
    model: "GNNAK",
    type: "ML-based",
    year: 2022,
    paperLink: "https://github.com/LingxiaoShawn/GNNAsKernel",
    codeLink: "https://github.com/LingxiaoShawn/GNNAsKernel",
    results: [
      {
        dataset: "Set_1",
        qError: 1.20,
        mae: 0.10,
        inferenceTime: 0.6,
        preprocessTime: 0.8,
        totalTime: 1.4,
        trainingTime: 81.4
      },
      {
        dataset: "Set_2",
        qError: 1.25,
        mae: 0.12,
        inferenceTime: 0.7,
        preprocessTime: 0.9,
        totalTime: 1.6,
        trainingTime: 255
      },
      {
        dataset: "Set_3",
        qError: 1.30,
        mae: 0.15,
        inferenceTime: 0.8,
        preprocessTime: 1.0,
        totalTime: 1.8,
        trainingTime: 145
      },
      {
        dataset: "Set_5",
        qError: 1.35,
        mae: 0.17,
        inferenceTime: 0.9,
        preprocessTime: 1.1,
        totalTime: 2.0,
        trainingTime: 336
      }
    ],
  },
  {
    id: "idgnn",
    model: "IDGNN",
    type: "ML-based",
    year: 2022,
    paperLink: "http://snap.stanford.edu/idgnn",
    codeLink: "http://snap.stanford.edu/idgnn",
    results: [
      {
        dataset: "Set_1",
        qError: 1.22,
        mae: 0.11,
        inferenceTime: 0.7,
        preprocessTime: 0.9,
        totalTime: 1.6,
        trainingTime: 40.7
      },
      {
        dataset: "Set_2",
        qError: 1.27,
        mae: 0.13,
        inferenceTime: 0.8,
        preprocessTime: 1.0,
        totalTime: 1.8,
        trainingTime: 145
      },
      {
        dataset: "Set_3",
        qError: 1.32,
        mae: 0.16,
        inferenceTime: 0.9,
        preprocessTime: 1.1,
        totalTime: 2.0,
        trainingTime: 86.8
      },
      {
        dataset: "Set_5",
        qError: 1.37,
        mae: 0.18,
        inferenceTime: 1.0,
        preprocessTime: 1.2,
        totalTime: 2.2,
        trainingTime: 238
      }
    ],
  },
  {
    id: "esc-gnn",
    model: "ESC-GNN",
    type: "ML-based",
    year: 2024,
    paperLink: "https://github.com/pkuyzy/esc-gnn",
    codeLink: "https://github.com/pkuyzy/esc-gnn",
    results: [
      {
        dataset: "Set_1",
        qError: 1.18,
        mae: 0.09,
        inferenceTime: 0.5,
        preprocessTime: 0.7,
        totalTime: 1.2,
        trainingTime: 33.5
      }
    ],
  },
  {
    id: "i2gnn",
    model: "I2GNN",
    type: "ML-based",
    year: 2022,
    paperLink: "https://github.com/GraphPKU/I2GNN",
    codeLink: "https://github.com/GraphPKU/I2GNN",
    results: [
      {
        dataset: "Set_1",
        qError: 1.24,
        mae: 0.12,
        inferenceTime: 0.8,
        preprocessTime: 1.0,
        totalTime: 1.8,
        trainingTime: 118
      }
    ],
  },
  {
    id: "ppgn",
    model: "PPGN",
    type: "ML-based",
    year: 2021,
    paperLink: "https://github.com/hadarser/ProvablyPowerfulGraphNetworks_torch",
    codeLink: "https://github.com/hadarser/ProvablyPowerfulGraphNetworks_torch",
    results: [
      {
        dataset: "Set_1",
        qError: 1.10,
        mae: 0.08,
        inferenceTime: 0.5,
        preprocessTime: 1.2,
        totalTime: 1.7,
        trainingTime: 636
      },
      {
        dataset: "Set_2",
        qError: 1.15,
        mae: 0.09,
        inferenceTime: 0.6,
        preprocessTime: 1.3,
        totalTime: 1.9,
        trainingTime: 1410
      },
      {
        dataset: "Set_3",
        qError: 1.20,
        mae: 0.11,
        inferenceTime: 0.7,
        preprocessTime: 1.4,
        totalTime: 2.1,
        trainingTime: 1197
      },
      {
        dataset: "Set_5",
        qError: 1.25,
        mae: 0.13,
        inferenceTime: 0.8,
        preprocessTime: 1.5,
        totalTime: 2.3,
        trainingTime: 446
      }
    ],
  },
  {
    id: "escape",
    model: "ESCAPE",
    type: "Exact",
    year: 2017,
    paperLink: "https://bitbucket.org/seshadhri/escape",
    codeLink: "https://bitbucket.org/seshadhri/escape",
    results: [
      {
        dataset: "Set_1",
        qError: 1.23,
        mae: 0.12,
        inferenceTime: 1.2,
        preprocessTime: 0.7,
        totalTime: 1.9,
        trainingTime: 0
      }
    ],
  },
  {
    id: "evoke",
    model: "EVOKE",
    type: "Exact",
    year: 2020,
    paperLink: "https://bitbucket.org/nojan-p/orbit-counting/",
    codeLink: "https://bitbucket.org/nojan-p/orbit-counting/",
    results: [
      {
        dataset: "Set_1",
        qError: 1.28,
        mae: 0.14,
        inferenceTime: 1.3,
        preprocessTime: 0.8,
        totalTime: 2.1,
        trainingTime: 0
      }
    ],
  },
  {
    id: "motivo",
    model: "MOTIVO",
    type: "Approx.",
    year: 2019,
    paperLink: "https://bitbucket.org/steven_/motivo/",
    codeLink: "https://bitbucket.org/steven_/motivo/",
    results: [
      {
        dataset: "Set_1",
        qError: 1.33,
        mae: 0.16,
        inferenceTime: 0.9,
        preprocessTime: 0.5,
        totalTime: 1.4,
        trainingTime: 0
      }
    ],
  }
]

// Update the radar and performance data to match our new data
const performanceData = [
  {
    name: "PPGN (ML)",
    qError: 1.10,
    mae: 0.08,
    inferenceTime: 0.5,
    trainingTime: 636
  },
  {
    name: "DeSCo (ML)",
    qError: 1.15,
    mae: 0.09,
    inferenceTime: 0.6,
    trainingTime: 22.7
  },
  {
    name: "ESC-GNN (ML)",
    qError: 1.18,
    mae: 0.09,
    inferenceTime: 0.5,
    trainingTime: 33.5
  }
]

// Sample data for radar chart
const radarData = [
  {
    subject: "Q-Error",
    "PPGN (ML)": 95,
    "DeSCo (ML)": 90,
    "ESC-GNN (ML)": 88,
    fullMark: 100,
  },
  {
    subject: "MAE",
    "PPGN (ML)": 95,
    "DeSCo (ML)": 92,
    "ESC-GNN (ML)": 92,
    fullMark: 100,
  },
  {
    subject: "Inference Speed",
    "PPGN (ML)": 80,
    "DeSCo (ML)": 75,
    "ESC-GNN (ML)": 82,
    fullMark: 100,
  },
  {
    subject: "Training Time",
    "PPGN (ML)": 40,
    "DeSCo (ML)": 90,
    "ESC-GNN (ML)": 85,
    fullMark: 100,
  },
  {
    subject: "Scalability",
    "PPGN (ML)": 70,
    "DeSCo (ML)": 80,
    "ESC-GNN (ML)": 75,
    fullMark: 100,
  },
]

interface RankedModel {
  id: string
  rank: number
  model: string
  type: string
  year: number
  qError: number
  mae: number
  inferenceTime: number
  preprocessTime: number
  totalTime: number
  trainingTime?: number
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
      type: model.type,
      year: model.year,
      qError: result.qError,
      mae: result.mae,
      inferenceTime: result.inferenceTime,
      preprocessTime: result.preprocessTime,
      totalTime: result.totalTime,
      trainingTime: result.trainingTime,
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
      if (metricFilter === "trainingTime" && a.trainingTime !== undefined && b.trainingTime !== undefined) 
        return a.trainingTime - b.trainingTime
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
                <SelectItem value="trainingTime">Training Time</SelectItem>
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
                  <TableHead className="w-24 text-center">Year</TableHead>
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
                    <TableCell className="text-center">{model.year}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={model.type === "ML-based" ? "default" : "outline"}>{model.type}</Badge>
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
                  <TableHead className="w-24 text-center">Year</TableHead>
                  <TableHead className="w-20 text-center">Type</TableHead>
                  <TableHead className="w-24 text-right">Inference (s)</TableHead>
                  <TableHead className="w-24 text-right">Preprocess (s)</TableHead>
                  <TableHead className="w-24 text-right">Total (s)</TableHead>
                  <TableHead className="w-28 text-right">Training (min)</TableHead>
                  <TableHead className="w-32 text-right">Links</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rankedModels.map((model) => (
                  <TableRow key={model.id}>
                    <TableCell className="text-center font-medium">{model.rank}</TableCell>
                    <TableCell className="font-medium">{model.model}</TableCell>
                    <TableCell className="text-center">{model.year}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={model.type === "ML-based" ? "default" : "outline"}>{model.type}</Badge>
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
                    <TableCell className={`text-right ${metricFilter === "trainingTime" ? "font-semibold" : ""}`}>
                      {model.trainingTime !== undefined ? model.trainingTime.toFixed(1) : "N/A"}
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
                  <TableHead className="w-24 text-center">Year</TableHead>
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
                    <TableCell className="text-center">{model.year}</TableCell>
                    <TableCell className="text-center">
                      <Badge variant={model.type === "ML-based" ? "default" : "outline"}>{model.type}</Badge>
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
                        name="ESC-GNN (ML)"
                        dataKey="ESC-GNN (ML)"
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

