"use client";

import { useState } from "react";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  BookOpen,
  Code,
  Zap,
  Shield,
  TrendingUp,
  Settings,
  ChevronRight,
  Menu,
  X
} from "lucide-react";

interface DocSection {
  heading: string;
  content: string;
  list?: string[];
  code?: string;
}

const docSections = [
  {
    id: "getting-started",
    icon: BookOpen,
    title: "Getting Started",
    content: {
      title: "Getting Started with NexaFlow AI",
      sections: [
        {
          heading: "Introduction",
          content: "NexaFlow AI is an advanced cryptocurrency arbitrage trading platform that leverages cutting-edge artificial intelligence to identify and execute profitable trading opportunities across 50+ exchanges in real-time."
        },
        {
          heading: "What is Arbitrage Trading?",
          content: "Arbitrage trading involves simultaneously buying and selling the same asset on different markets to profit from price differences. Our AI monitors prices across all major exchanges and executes trades when profitable opportunities arise."
        },
        {
          heading: "Quick Setup",
          content: "Follow these steps to get started:",
          list: [
            "Create an account on NexaFlow AI platform",
            "Connect your exchange API keys (we support Binance, Coinbase, Kraken, and 50+ more)",
            "Configure your risk parameters and profit thresholds",
            "Start monitoring opportunities or enable auto-trading",
            "Track your performance in real-time"
          ]
        },
        {
          heading: "System Requirements",
          content: "To use NexaFlow AI effectively, you'll need:",
          list: [
            "Active accounts on at least 2 cryptocurrency exchanges",
            "API keys with trading permissions (read and trade, not withdraw)",
            "Minimum recommended capital: $1,000 per exchange",
            "Stable internet connection for optimal performance"
          ]
        }
      ]
    }
  },
  {
    id: "api-reference",
    icon: Code,
    title: "API Reference",
    content: {
      title: "API Reference",
      sections: [
        {
          heading: "Authentication",
          content: "All API requests require authentication using an API key. Include your key in the Authorization header:",
          code: `Authorization: Bearer YOUR_API_KEY`
        },
        {
          heading: "Base URL",
          content: "All API endpoints are relative to:",
          code: `https://api.nexaflow.ai/v1`
        },
        {
          heading: "Get Opportunities",
          content: "Retrieve current arbitrage opportunities:",
          code: `GET /opportunities

Parameters:
- pair (string): Trading pair (e.g., BTC/USDT)
- min_profit (float): Minimum profit percentage
- max_risk (string): Maximum risk level (LOW, MEDIUM, HIGH)

Response:
{
  "opportunities": [
    {
      "pair": "BTC/USDT",
      "buy_exchange": "Binance",
      "sell_exchange": "Coinbase",
      "profit_percent": 2.4,
      "estimated_profit": 240.50,
      "risk": "LOW"
    }
  ]
}`
        },
        {
          heading: "Execute Trade",
          content: "Execute an arbitrage opportunity:",
          code: `POST /trades/execute

Body:
{
  "opportunity_id": "abc123",
  "amount": 1000
}

Response:
{
  "trade_id": "trade_xyz789",
  "status": "executed",
  "actual_profit": 235.20
}`
        }
      ]
    }
  },
  {
    id: "quick-start",
    icon: Zap,
    title: "Quick Start",
    content: {
      title: "5-Minute Quick Start Guide",
      sections: [
        {
          heading: "Step 1: Create Your Account",
          content: "Sign up for a NexaFlow AI account at our registration page. Verify your email address to activate your account."
        },
        {
          heading: "Step 2: Connect Exchange APIs",
          content: "Navigate to Settings > API Keys and add your exchange API keys. We recommend starting with 2-3 exchanges for best results.",
          list: [
            "Go to your exchange's API settings",
            "Create a new API key with 'Read' and 'Trade' permissions",
            "Never enable 'Withdraw' permissions for security",
            "Copy the API key and secret to NexaFlow AI"
          ]
        },
        {
          heading: "Step 3: Configure Risk Settings",
          content: "Set your risk parameters in the Scanner section:",
          list: [
            "Minimum Profit Margin: Start with 2-3% for safer opportunities",
            "Maximum Risk Level: Begin with LOW or MEDIUM",
            "Trading pairs: Select 3-5 popular pairs like BTC/USDT, ETH/USDT"
          ]
        },
        {
          heading: "Step 4: Start Scanning",
          content: "Click 'Scan for Opportunities' to see real-time arbitrage possibilities. Review the opportunities and use the 'Execute' button to trade manually, or enable auto-trading for automated execution."
        },
        {
          heading: "Step 5: Monitor Performance",
          content: "Track your trades, profits, and performance metrics in the Dashboard. Adjust your settings based on results to optimize returns."
        }
      ]
    }
  },
  {
    id: "security",
    icon: Shield,
    title: "Security",
    content: {
      title: "Security Best Practices",
      sections: [
        {
          heading: "API Key Security",
          content: "Protecting your API keys is critical:",
          list: [
            "Never enable withdrawal permissions on exchange API keys",
            "Use IP whitelisting when available on exchanges",
            "Rotate API keys regularly (every 30-60 days)",
            "Store keys securely and never share them",
            "Enable 2FA on all exchange accounts"
          ]
        },
        {
          heading: "Account Protection",
          content: "Secure your NexaFlow AI account:",
          list: [
            "Use a strong, unique password",
            "Enable two-factor authentication (2FA)",
            "Monitor login activity regularly",
            "Never share account credentials",
            "Log out when using shared devices"
          ]
        },
        {
          heading: "Risk Management",
          content: "Protect your capital with smart risk management:",
          list: [
            "Start with small amounts to test the system",
            "Set maximum trade sizes to limit exposure",
            "Use stop-loss parameters",
            "Diversify across multiple trading pairs",
            "Never invest more than you can afford to lose"
          ]
        },
        {
          heading: "Data Protection",
          content: "We take data security seriously. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We never store exchange passwords or withdrawal keys. Regular security audits ensure platform integrity."
        }
      ]
    }
  },
  {
    id: "strategies",
    icon: TrendingUp,
    title: "Trading Strategies",
    content: {
      title: "Arbitrage Trading Strategies",
      sections: [
        {
          heading: "Simple Arbitrage",
          content: "The most straightforward strategy: buy on one exchange where the price is lower and simultaneously sell on another where it's higher. Best for beginners with 2-3 exchanges."
        },
        {
          heading: "Triangular Arbitrage",
          content: "Trade three different cryptocurrencies in a loop to profit from price inefficiencies. For example: BTC → ETH → USDT → BTC. Requires more experience but can find hidden opportunities."
        },
        {
          heading: "Statistical Arbitrage",
          content: "Use our AI-powered statistical models to predict short-term price movements and execute trades. This strategy requires higher capital but offers more frequent opportunities."
        },
        {
          heading: "Optimization Tips",
          content: "Maximize your arbitrage profits:",
          list: [
            "Focus on high-liquidity pairs (BTC, ETH, major stablecoins)",
            "Monitor exchange fees carefully - they impact net profit",
            "Consider withdrawal/deposit times between exchanges",
            "Use exchanges with fast order execution",
            "Maintain sufficient balance on multiple exchanges for instant execution",
            "Start conservative with 2-3% minimum profit margins"
          ]
        },
        {
          heading: "Risk vs Reward",
          content: "LOW risk opportunities (1-2% profit) execute frequently but return less. HIGH risk opportunities (4%+ profit) are rarer but more profitable. Balance your strategy based on your capital and risk tolerance."
        }
      ]
    }
  },
  {
    id: "configuration",
    icon: Settings,
    title: "Configuration",
    content: {
      title: "Platform Configuration",
      sections: [
        {
          heading: "Scanner Settings",
          content: "Customize how the scanner finds opportunities:",
          list: [
            "Trading Pairs: Select which crypto pairs to monitor",
            "Minimum Profit Margin: Set your profit threshold (0.5% - 10%)",
            "Maximum Risk Level: Choose LOW, MEDIUM, or HIGH",
            "Execution Speed: Balance between speed and price slippage",
            "Refresh Rate: How often to scan for new opportunities"
          ]
        },
        {
          heading: "Auto-Trading Configuration",
          content: "Set up automated trading:",
          list: [
            "Enable/disable auto-execution per trading pair",
            "Set maximum trade size per opportunity",
            "Configure daily/weekly profit targets",
            "Set stop-loss parameters",
            "Define trading hours (24/7 or specific times)"
          ]
        },
        {
          heading: "Notification Settings",
          content: "Stay informed about opportunities and trades:",
          list: [
            "Email notifications for executed trades",
            "SMS alerts for high-profit opportunities",
            "Push notifications for app users",
            "Webhook integration for custom alerts",
            "Daily/weekly performance reports"
          ]
        },
        {
          heading: "Exchange Preferences",
          content: "Optimize for specific exchanges:",
          list: [
            "Prioritize exchanges with lower fees",
            "Set preferred exchanges for specific pairs",
            "Configure balance thresholds",
            "Enable/disable specific exchanges",
            "Set exchange-specific risk parameters"
          ]
        }
      ]
    }
  }
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const currentDoc = docSections.find(s => s.id === activeSection);

  return (
    <main className="min-h-screen flex flex-col">
      <Navigation />

      <div className="flex-1 flex pt-16">
        <aside className={`
          ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 fixed lg:sticky top-16 left-0 h-[calc(100vh-4rem)]
          w-64 bg-card/50 backdrop-blur-sm border-r border-border
          transition-transform duration-300 z-40
        `}>
          <ScrollArea className="h-full">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6 lg:hidden">
                <h2 className="text-lg font-bold">Documentation</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <nav className="space-y-2">
                {docSections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => {
                      setActiveSection(section.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-lg
                      transition-colors text-left
                      ${activeSection === section.id
                        ? 'bg-primary text-primary-foreground'
                        : 'hover:bg-muted'
                      }
                    `}
                  >
                    <section.icon className="w-5 h-5" />
                    <span className="font-medium">{section.title}</span>
                    {activeSection === section.id && (
                      <ChevronRight className="w-4 h-4 ml-auto" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </ScrollArea>
        </aside>

        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden fixed bottom-6 right-6 z-50 rounded-full w-12 h-12 p-0"
        >
          <Menu className="w-5 h-5" />
        </Button>

        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto px-4 py-12 max-w-4xl">
            {currentDoc && (
              <article className="prose prose-invert prose-lg max-w-none">
                <h1 className="text-4xl font-bold mb-8 flex items-center gap-3">
                  <currentDoc.icon className="w-10 h-10 text-primary" />
                  {currentDoc.content.title}
                </h1>

                {currentDoc.content.sections.map((section: DocSection, idx: number) => (
                  <div key={idx} className="mb-8">
                    <h2 className="text-2xl font-semibold mb-4">{section.heading}</h2>
                    <p className="text-muted-foreground mb-4">{section.content}</p>

                    {section.list && (
                      <ul className="space-y-2 my-4">
                        {section.list.map((item: string, i: number) => (
                          <li key={i} className="text-muted-foreground">{item}</li>
                        ))}
                      </ul>
                    )}

                    {section.code && (
                      <Card className="p-4 bg-muted/50 my-4">
                        <pre className="text-sm overflow-x-auto">
                          <code>{section.code}</code>
                        </pre>
                      </Card>
                    )}
                  </div>
                ))}

                <div className="mt-12 p-6 bg-card/50 rounded-lg border border-border">
                  <h3 className="text-xl font-semibold mb-2">Need Help?</h3>
                  <p className="text-muted-foreground">
                    Contact our support team at{" "}
                    <a href="mailto:support@nexaflow.ai" className="text-primary hover:underline">
                      support@nexaflow.ai
                    </a>
                    {" "}or visit our{" "}
                    <a href="/contact" className="text-primary hover:underline">
                      contact page
                    </a>.
                  </p>
                </div>
              </article>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </main>
  );
}
