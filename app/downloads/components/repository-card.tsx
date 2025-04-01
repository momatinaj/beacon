import Link from "next/link"
import { Download, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface RepositoryCardProps {
  title: string
  description: string
  language: string
  version: string
  lastUpdated: string
  license: string
  githubUrl: string
  downloadUrl: string
}

export function RepositoryCard({
  title,
  description,
  language,
  version,
  lastUpdated,
  license,
  githubUrl,
  downloadUrl,
}: RepositoryCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge variant="outline">GitHub</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-3">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Language:</span>
            <span>{language}</span>
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
            <Link href={githubUrl}>
              <Github className="mr-2 h-4 w-4" />
              GitHub Repository
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={downloadUrl}>
              <Download className="mr-2 h-4 w-4" />
              Download ZIP
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
} 