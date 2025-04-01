import Link from "next/link"
import { Download, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface DatasetCardProps {
  title: string
  size: string
  description: string
  format: string
  stats: { label: string; value: string }
  version: string
  lastUpdated: string
  license: string
  downloadUrl: string
  docsUrl: string
}

export function DatasetCard({
  title,
  size,
  description,
  format,
  stats,
  version,
  lastUpdated,
  license,
  downloadUrl,
  docsUrl,
}: DatasetCardProps) {
  return (
    <Card className="relative overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge>{size}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Format:</span>
            <span>{format}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">{stats.label}:</span>
            <span>{stats.value}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Version:</span>
            <span>{version}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Last Updated:</span>
            <span>{lastUpdated}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">License:</span>
            <span>{license}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-2">
          <Button asChild>
            <Link href={downloadUrl}>
              <Download className="mr-2 h-4 w-4" />
              Download Dataset
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={docsUrl}>
              <FileText className="mr-2 h-4 w-4" />
              View Documentation
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
} 