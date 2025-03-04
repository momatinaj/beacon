import Link from "next/link"
import { Mail, MessageSquare, Send, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactPage() {
  return (
    <div className="container py-10">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tighter">Contact Us</h1>
        <p className="text-muted-foreground">Get in touch with the BEACON team and join our community</p>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Authors</CardTitle>
              <CardDescription>The team behind the BEACON benchmark</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Author cards with improved design */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <div className="flex items-start space-x-4 rounded-lg border p-4 transition-colors hover:bg-muted/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-lg font-semibold">MN</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Mohammad Matin Najafi</h3>
                    <p className="text-sm text-muted-foreground">The University of Hong Kong</p>
                    <p className="text-sm text-primary">mohammad@cs.hku.hk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rounded-lg border p-4 transition-colors hover:bg-muted/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-lg font-semibold">XZ</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Xianju Zhu</h3>
                    <p className="text-sm text-muted-foreground">The University of Hong Kong</p>
                    <p className="text-sm text-primary">zxj0302@connect.hku.hk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rounded-lg border p-4 transition-colors hover:bg-muted/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-lg font-semibold">CK</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Chrysanthi Kosyfaki</h3>
                    <p className="text-sm text-muted-foreground">The University of Hong Kong</p>
                    <p className="text-sm text-primary">kosyfaki@cs.hku.hk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rounded-lg border p-4 transition-colors hover:bg-muted/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-lg font-semibold">RC</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Reynold Cheng</h3>
                    <p className="text-sm text-muted-foreground">The University of Hong Kong</p>
                    <p className="text-sm text-primary">ckcheng@cs.hku.hk</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 rounded-lg border p-4 transition-colors hover:bg-muted/50">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <span className="text-lg font-semibold">LL</span>
                  </div>
                  <div>
                    <h3 className="font-medium">Laks V.S. Lakshmanan</h3>
                    <p className="text-sm text-muted-foreground">University of British Columbia</p>
                    <p className="text-sm text-primary">laks@cs.ubc.ca</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community</CardTitle>
              <CardDescription>Join our community and stay updated</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-4">
                <Users className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Mailing List</h3>
                  <p className="text-sm text-muted-foreground">
                    Subscribe to our mailing list for benchmark updates and community challenges.
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <Input type="email" placeholder="Enter your email" />
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Subscribe
                </Button>
              </div>
              <div className="flex items-center gap-4">
                <MessageSquare className="h-5 w-5 text-muted-foreground" />
                <div>
                  <h3 className="font-medium">Discussion Forum</h3>
                  <p className="text-sm text-muted-foreground">
                    Join our discussion forum to ask questions and share insights.
                  </p>
                  <Button variant="link" className="p-0" asChild>
                    <Link href="#">Visit Forum</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Get in Touch</CardTitle>
              <CardDescription>Send us a message and we'll get back to you</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <Input id="email" type="email" placeholder="Your email" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Message subject" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">
                <Mail className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
              <CardDescription>Common questions about the BEACON benchmark</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>How do I submit results to the benchmark?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      To submit results to the BEACON benchmark, use our Docker image and JSON template. First, download
                      the submission template from the Downloads page. Then, run your method using our Docker
                      environment and generate results in the required format. Finally, submit the results through our
                      submission portal.
                    </p>
                    <Button variant="link" className="p-0 mt-2" asChild>
                      <Link href="/downloads">View Submission Template</Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>What is the evaluation server status?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      Our evaluation server is currently online and accepting submissions. You can check the real-time
                      status of the server on our status dashboard.
                    </p>
                    <Button variant="link" className="p-0 mt-2" asChild>
                      <Link href="#">View Status Dashboard</Link>
                    </Button>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>How often is the leaderboard updated?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      The BEACON leaderboard is updated weekly, every Monday at 12:00 UTC. New submissions received
                      before Sunday at 23:59 UTC will be included in the next update.
                    </p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>Can I use the BEACON datasets for commercial purposes?</AccordionTrigger>
                  <AccordionContent>
                    <p className="text-sm text-muted-foreground">
                      The BEACON datasets are provided under the CC BY-NC-ND 4.0 license, which allows for
                      non-commercial use only. For commercial use, please contact the authors directly to discuss
                      licensing options.
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

