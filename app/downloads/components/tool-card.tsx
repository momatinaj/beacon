import Link from "next/link"
import { Download, FileText, Github, Package, Server } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Requirement {
  icon: typeof Server | typeof Package | typeof Github
  text: string
}

interface ToolCardProps {
  title: string
  version: string
  description: string
  longDescription?: string
  requirements: Requirement[]
  primaryButton: {
    text: string
    icon: typeof Package | typeof Download
    href: string
  }
  secondaryButton: {
    text: string
    icon: typeof Github | typeof FileText
    href: string
  }
}

export function ToolCard({
  title,
  version,
  description,
  longDescription,
  requirements,
  primaryButton,
  secondaryButton,
}: ToolCardProps) {
  const PrimaryIcon = primaryButton.icon
  const SecondaryIcon = secondaryButton.icon

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>{title}</CardTitle>
          <Badge variant="outline">v{version}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        {longDescription && (
          <p className="text-sm text-muted-foreground">{longDescription}</p>
        )}
        <div className="space-y-2">
          {requirements.map((req, index) => {
            const Icon = req.icon
            return (
              <div key={index} className="flex items-center gap-2">
                <Icon className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">{req.text}</span>
              </div>
            )
          })}
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full flex-col gap-2 sm:flex-row">
          <Button asChild>
            <Link href={primaryButton.href}>
              <PrimaryIcon className="mr-2 h-4 w-4" />
              {primaryButton.text}
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href={secondaryButton.href}>
              <SecondaryIcon className="mr-2 h-4 w-4" />
              {secondaryButton.text}
            </Link>
          </Button>
        </div>
      </CardFooter>
    </Card>
  )
} 