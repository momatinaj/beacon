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

// Add this interface near the top of the file, before the leaderboardData definition
interface LeaderboardEntry {
  rank: number
  model: string
  team: string
  type: string
  qError: number
  mae: number
  inferenceTime: number
  dataset: string
  paperLink: string
  codeLink: string
}

// Sample data for the leaderboard
const leaderboardData = [
  {
    rank: 1,
    model: "PPGN",
    team: "University A",
    type: "ML",
    qError: 1.02,
    mae: 0.05,
    inferenceTime: 0.5,
    dataset: "Set_1",
    paperLink: "https://example.com/paper1",
    codeLink: "https://github.com/example/model1",
  },
  {
    rank: 2,
    model: "DeSCo",
    team: "Research Lab B",
    type: "ML",
    qError: 1.07,
    mae: 0.08,
    inferenceTime: 0.7,
    dataset: "Set_3",
    paperLink: "https://example.com/paper2",
    codeLink: "https://github.com/example/model2",
  },
  {
    rank: 3,
    model: "ESCAPE",
    team: "University C",
    type: "AL",
    qError: 1.23,
    mae: 0.12,
    inferenceTime: 1.2,
    dataset: "Set_1",
    paperLink: "https://example.com/paper3",
    codeLink: "https://github.com/example/model3",
  },
  {
    rank: 4,
    model: "GNN",
    team: "Industry Lab D",
    type: "ML",
    qError: 1.31,
    mae: 0.15,
    inferenceTime: 0.2,
    dataset: "Set_2",
    paperLink: "https://example.com/paper4",
    codeLink: "https://github.com/example/model4",
  },
  {
    rank: 5,
    model: "CC-Approx",
    team: "University E",
    type: "AL",
    qError: 1.42,
    mae: 0.18,
    inferenceTime: 0.9,
    dataset: "Set_1",
    paperLink: "https://example.com/paper5",
    codeLink: "https://github.com/example/model5",
  },
  {
    rank: 6,
    model: "GraphSAGE",
    team: "Research Group F",
    type: "ML",
    qError: 1.56,
    mae: 0.22,
    inferenceTime: 0.4,
    dataset: "Set_2",
    paperLink: "https://example.com/paper6",
    codeLink: "https://github.com/example/model6",
  },
  {
    rank: 7,
    model: "VertexCount",
    team: "University G",
    type: "AL",
    qError: 1.68,
    mae: 0.25,
    inferenceTime: 1.5,
    dataset: "Set_3",
    paperLink: "https://example.com/paper7",
    codeLink: "https://github.com/example/model7",
  },
]

// Sample data for performance comparison
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

export default function LeaderboardPage() {
  const [taskFilter, setTaskFilter] = useState("all")
  const [metricFilter, setMetricFilter] = useState("qError")
  const [sortColumn, setSortColumn] = useState<keyof LeaderboardEntry>("rank")
  const [sortDirection, setSortDirection] = useState("asc")

  const handleSort = (column: keyof LeaderboardEntry) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  // Add this type guard function
  const isNumber = (value: any): value is number => {
    return typeof value === "number"
  }

  return (
    <div className="container py-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Benchmark Leaderboard</h1>
        <p className="text-muted-foreground">Compare model performance across multiple metrics and tasks</p>
      </div>

      <div className="my-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-col gap-4 sm:flex-row">
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Task:</span>
            <Select value={taskFilter} onValueChange={setTaskFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="All Tasks" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Tasks</SelectItem>
                <SelectItem value="global">Global Counting</SelectItem>
                <SelectItem value="local">Local Counting</SelectItem>
                <SelectItem value="induced">Induced Subgraphs</SelectItem>
                <SelectItem value="non-induced">Non-induced Subgraphs</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center gap-2">
            <Filter className="h-4 w-4" />
            <span className="text-sm font-medium">Sort by:</span>
            <Select value={metricFilter} onValueChange={setMetricFilter}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Q-Error" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="qError">Q-Error</SelectItem>
                <SelectItem value="mae">MAE</SelectItem>
                <SelectItem value="inferenceTime">Inference Time</SelectItem>
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
            Sorted by {metricFilter === "qError" ? "Q-Error" : metricFilter === "mae" ? "MAE" : "Inference Time"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[80px] cursor-pointer" onClick={() => handleSort("rank")}>
                  Rank {sortColumn === "rank" && (sortDirection === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("model")}>
                  Model {sortColumn === "model" && (sortDirection === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("team")}>
                  Team {sortColumn === "team" && (sortDirection === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="cursor-pointer" onClick={() => handleSort("type")}>
                  Type {sortColumn === "type" && (sortDirection === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="cursor-pointer text-right" onClick={() => handleSort("qError")}>
                  Q-Error {sortColumn === "qError" && (sortDirection === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="cursor-pointer text-right" onClick={() => handleSort("mae")}>
                  MAE {sortColumn === "mae" && (sortDirection === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="cursor-pointer text-right" onClick={() => handleSort("inferenceTime")}>
                  Inference Time (s) {sortColumn === "inferenceTime" && (sortDirection === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="cursor-pointer text-right" onClick={() => handleSort("dataset")}>
                  Dataset {sortColumn === "dataset" && (sortDirection === "asc" ? "↑" : "↓")}
                </TableHead>
                <TableHead className="text-right">Links</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaderboardData
                .sort((a: LeaderboardEntry, b: LeaderboardEntry) => {
                  const aValue = a[sortColumn]
                  const bValue = b[sortColumn]
                  
                  if (isNumber(aValue) && isNumber(bValue)) {
                    return sortDirection === "asc" ? aValue - bValue : bValue - aValue
                  } else {
                    return sortDirection === "asc"
                      ? String(aValue).localeCompare(String(bValue))
                      : String(bValue).localeCompare(String(aValue))
                  }
                })
                .map((entry) => (
                  <TableRow key={entry.rank}>
                    <TableCell className="font-medium">{entry.rank}</TableCell>
                    <TableCell>{entry.model}</TableCell>
                    <TableCell>{entry.team}</TableCell>
                    <TableCell>
                      <Badge variant={entry.type === "ML" ? "default" : "outline"}>{entry.type}</Badge>
                    </TableCell>
                    <TableCell className="text-right">{entry.qError.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{entry.mae.toFixed(2)}</TableCell>
                    <TableCell className="text-right">{entry.inferenceTime.toFixed(1)}</TableCell>
                    <TableCell className="text-right">{entry.dataset}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <a
                          href={entry.paperLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Paper
                        </a>
                        <a
                          href={entry.codeLink}
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

