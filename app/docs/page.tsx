import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { BookOpen, Code, Zap, Shield, TrendingUp, Settings } from "lucide-react";

export const metadata = {
  title: "Documentation - NexaFlow AI",
  description: "Complete documentation for NexaFlow AI cryptocurrency arbitrage trading platform",
};

const docSections = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn the basics and set up your first trading bot",
    href: "/docs/getting-started",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Complete API documentation for developers",
    href: "/docs/api",
  },
  {
    icon: Zap,
    title: "Quick Start Guide",
    description: "Get up and running in 5 minutes",
    href: "/docs/quick-start",
  },
  {
    icon: Shield,
    title: "Security Best Practices",
    description: "Keep your assets and API keys secure",
    href: "/docs/security",
  },
  {
    icon: TrendingUp,
    title: "Trading Strategies",
    description: "Optimize your arbitrage trading performance",
    href: "/docs/strategies",
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize settings and risk parameters",
    href: "/docs/configuration",
  },
];

export default function DocsPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Documentation</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Everything you need to know to get started with NexaFlow AI
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              {docSections.map((section) => (
                <Link key={section.href} href={section.href}>
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors h-full">
                    <section.icon className="w-8 h-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">{section.title}</h3>
                    <p className="text-muted-foreground">{section.description}</p>
                  </Card>
                </Link>
              ))}
            </div>

            <div className="prose prose-invert max-w-none">
              <h2>Overview</h2>
              <p>
                NexaFlow AI is an advanced cryptocurrency arbitrage trading platform that leverages
                cutting-edge artificial intelligence to identify and execute profitable trading
                opportunities across 50+ exchanges.
              </p>

              <h3>Key Features</h3>
              <ul>
                <li>Real-time market monitoring across all major exchanges</li>
                <li>AI-powered opportunity detection with millisecond execution</li>
                <li>Advanced risk management and position sizing</li>
                <li>Comprehensive performance analytics and reporting</li>
                <li>Enterprise-grade security and encryption</li>
              </ul>

              <h3>How It Works</h3>
              <p>
                Our platform continuously monitors cryptocurrency prices across dozens of exchanges
                simultaneously. When a price discrepancy is detected that exceeds your configured
                profit threshold, the system can automatically execute trades to capture the
                arbitrage opportunity.
              </p>

              <h3>System Requirements</h3>
              <ul>
                <li>Active accounts on supported cryptocurrency exchanges</li>
                <li>API keys with trading permissions (read and trade, not withdraw)</li>
                <li>Minimum recommended capital: $1,000</li>
                <li>Stable internet connection for optimal performance</li>
              </ul>

              <h3>Support</h3>
              <p>
                Need help? Contact our support team at{" "}
                <a href="mailto:support@nexaflow.ai">support@nexaflow.ai</a> or visit our{" "}
                <Link href="/contact">contact page</Link>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
