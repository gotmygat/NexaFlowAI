"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle2,
  Circle,
  Clock,
  Rocket,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  Smartphone,
  Bot,
  LineChart,
  Boxes,
  Users,
  Sparkles
} from "lucide-react";

interface RoadmapItem {
  title: string;
  description: string;
  icon: any;
  status: "completed" | "in-progress" | "planned";
  quarter: string;
  features: string[];
}

const roadmapData: RoadmapItem[] = [
  {
    title: "Platform Launch",
    description: "Initial release of NexaFlow AI with core arbitrage features",
    icon: Rocket,
    status: "completed",
    quarter: "Q1 2025",
    features: [
      "Real-time price monitoring across 50+ exchanges",
      "AI-powered opportunity detection",
      "Manual trade execution",
      "Basic risk management tools",
      "Web dashboard and analytics"
    ]
  },
  {
    title: "Advanced Trading Features",
    description: "Enhanced automation and trading capabilities",
    icon: Zap,
    status: "completed",
    quarter: "Q2 2025",
    features: [
      "Automated trade execution",
      "Triangular arbitrage support",
      "Custom trading strategies",
      "Advanced order types",
      "Portfolio rebalancing"
    ]
  },
  {
    title: "Security & Compliance",
    description: "Enterprise-grade security and regulatory compliance",
    icon: Shield,
    status: "completed",
    quarter: "Q3 2025",
    features: [
      "Two-factor authentication (2FA)",
      "Hardware wallet integration",
      "SOC 2 Type II certification",
      "Advanced encryption protocols",
      "Audit logs and compliance reporting"
    ]
  },
  {
    title: "AI Model Enhancement",
    description: "Next-generation machine learning capabilities",
    icon: Sparkles,
    status: "in-progress",
    quarter: "Q4 2025",
    features: [
      "Deep learning price prediction",
      "Sentiment analysis integration",
      "Market volatility forecasting",
      "Auto-optimization of strategies",
      "Neural network-based risk assessment"
    ]
  },
  {
    title: "Mobile Applications",
    description: "Native iOS and Android apps for trading on the go",
    icon: Smartphone,
    status: "in-progress",
    quarter: "Q4 2025",
    features: [
      "Full-featured mobile apps",
      "Push notifications for opportunities",
      "Biometric authentication",
      "Offline mode for monitoring",
      "Mobile-optimized trading interface"
    ]
  },
  {
    title: "Social Trading",
    description: "Community features and copy trading capabilities",
    icon: Users,
    status: "planned",
    quarter: "Q1 2026",
    features: [
      "Follow successful traders",
      "Copy trading functionality",
      "Strategy marketplace",
      "Community leaderboards",
      "Social sharing and insights"
    ]
  },
  {
    title: "Advanced Analytics",
    description: "Professional-grade analytics and reporting tools",
    icon: LineChart,
    status: "planned",
    quarter: "Q1 2026",
    features: [
      "Custom performance dashboards",
      "Backtesting with historical data",
      "Tax reporting and exports",
      "Portfolio optimization tools",
      "Risk-adjusted performance metrics"
    ]
  },
  {
    title: "Trading Bots Marketplace",
    description: "Ecosystem of third-party trading bots and strategies",
    icon: Bot,
    status: "planned",
    quarter: "Q1 2026",
    features: [
      "Bot creation framework",
      "Community bot marketplace",
      "Strategy templates",
      "Performance verification",
      "Revenue sharing for bot creators"
    ]
  },
  {
    title: "Global Expansion",
    description: "Multi-currency support and regional exchanges",
    icon: Globe,
    status: "planned",
    quarter: "Q2 2026",
    features: [
      "Support for 100+ exchanges",
      "Multi-language interface",
      "Regional payment methods",
      "Local currency support",
      "Compliance with regional regulations"
    ]
  },
  {
    title: "DeFi Integration",
    description: "Decentralized finance protocols and DEX support",
    icon: Boxes,
    status: "planned",
    quarter: "Q2 2026",
    features: [
      "DEX arbitrage opportunities",
      "Liquidity pool optimization",
      "Cross-chain arbitrage",
      "Yield farming strategies",
      "Smart contract integration"
    ]
  },
  {
    title: "Institutional Features",
    description: "Enterprise solutions for institutional traders",
    icon: TrendingUp,
    status: "planned",
    quarter: "Q2 2026",
    features: [
      "White-label solutions",
      "Multi-account management",
      "API rate limit increases",
      "Dedicated support team",
      "Custom integration services"
    ]
  }
];

const getStatusIcon = (status: string) => {
  switch (status) {
    case "completed":
      return <CheckCircle2 className="w-5 h-5 text-green-500" />;
    case "in-progress":
      return <Clock className="w-5 h-5 text-yellow-500" />;
    case "planned":
      return <Circle className="w-5 h-5 text-muted-foreground" />;
    default:
      return <Circle className="w-5 h-5 text-muted-foreground" />;
  }
};

const getStatusBadge = (status: string) => {
  switch (status) {
    case "completed":
      return <Badge className="bg-green-500/20 text-green-500 border-green-500/50">Completed</Badge>;
    case "in-progress":
      return <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/50">In Progress</Badge>;
    case "planned":
      return <Badge variant="outline">Planned</Badge>;
    default:
      return <Badge variant="outline">Planned</Badge>;
  }
};

export default function RoadmapPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Product Roadmap
            </h1>
            <p className="text-xl text-muted-foreground">
              Our vision for the future of cryptocurrency arbitrage trading
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

              <div className="space-y-12">
                {roadmapData.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative"
                  >
                    <div className="md:flex gap-8">
                      <div className="hidden md:flex items-start justify-center w-16 flex-shrink-0">
                        <div className="relative">
                          <div className="w-16 h-16 rounded-full bg-card border-2 border-border flex items-center justify-center">
                            <item.icon className="w-7 h-7 text-primary" />
                          </div>
                          {getStatusIcon(item.status) && (
                            <div className="absolute -top-1 -right-1">
                              {getStatusIcon(item.status)}
                            </div>
                          )}
                        </div>
                      </div>

                      <Card className="flex-1 p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                        <div className="flex items-start justify-between mb-4 gap-4">
                          <div className="flex items-center gap-3 md:hidden">
                            <item.icon className="w-6 h-6 text-primary" />
                            <h3 className="text-xl font-bold">{item.title}</h3>
                          </div>
                          <h3 className="text-xl font-bold hidden md:block">{item.title}</h3>
                          <div className="flex flex-col items-end gap-2">
                            {getStatusBadge(item.status)}
                            <span className="text-sm text-muted-foreground">{item.quarter}</span>
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-4">{item.description}</p>

                        <div className="space-y-2">
                          <h4 className="text-sm font-semibold text-foreground">Key Features:</h4>
                          <ul className="space-y-1">
                            {item.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <span className="text-primary mt-1">•</span>
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </Card>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-16"
            >
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border text-center">
                <h2 className="text-2xl font-bold mb-4">Have a Feature Request?</h2>
                <p className="text-muted-foreground mb-6">
                  We value your feedback! Let us know what features you'd like to see in future releases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
                  >
                    Submit Feedback
                  </a>
                  <a
                    href="https://github.com/gotmygat/NexaFlowAI/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors font-medium"
                  >
                    View GitHub Issues
                  </a>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
