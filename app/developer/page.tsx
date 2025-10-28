import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Terminal, Book, Github } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Developer Portal - NexaFlow AI",
  description: "API documentation and developer resources for NexaFlow AI",
};

export default function DeveloperPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Developer Portal</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Build powerful trading applications with the NexaFlow AI API
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <Code className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">API Reference</h3>
                <p className="text-muted-foreground mb-4">
                  Complete REST API documentation with examples
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs/api">View Docs</Link>
                </Button>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <Terminal className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Quick Start</h3>
                <p className="text-muted-foreground mb-4">
                  Get started with the API in minutes
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs/quick-start">Get Started</Link>
                </Button>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <Book className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">Code Examples</h3>
                <p className="text-muted-foreground mb-4">
                  Sample code in multiple programming languages
                </p>
                <Button variant="outline" asChild>
                  <Link href="/docs">Browse Examples</Link>
                </Button>
              </Card>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <Github className="w-8 h-8 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-2">GitHub</h3>
                <p className="text-muted-foreground mb-4">
                  SDK libraries and open-source tools
                </p>
                <Button variant="outline" asChild>
                  <a
                    href="https://github.com/nexaflow-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub
                  </a>
                </Button>
              </Card>
            </div>

            <div className="prose prose-invert max-w-none">
              <h2>API Overview</h2>
              <p>
                The NexaFlow AI API provides programmatic access to our trading platform,
                allowing you to build custom applications, integrate with existing systems,
                and automate your trading workflows.
              </p>

              <h3>Authentication</h3>
              <p>
                All API requests require authentication using API keys. Generate your keys
                from the dashboard and include them in the Authorization header:
              </p>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                <code>Authorization: Bearer YOUR_API_KEY</code>
              </pre>

              <h3>Base URL</h3>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                <code>https://api.nexaflow.ai/v1</code>
              </pre>

              <h3>Rate Limits</h3>
              <ul>
                <li>Standard: 100 requests per minute</li>
                <li>Premium: 1,000 requests per minute</li>
                <li>Enterprise: Custom limits available</li>
              </ul>

              <h3>Example Request</h3>
              <pre className="bg-secondary p-4 rounded-lg overflow-x-auto">
                <code>{`curl -X GET "https://api.nexaflow.ai/v1/opportunities" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
              </pre>

              <h3>Support</h3>
              <p>
                For technical support, please visit our{" "}
                <Link href="/docs">documentation</Link> or{" "}
                <Link href="/contact">contact us</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
