"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  Brain,
  Zap,
  Shield,
  TrendingUp,
  Globe,
  BarChart3,
  Lock,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Advanced AI Algorithms",
    description:
      "Proprietary machine learning models analyze market patterns and predict profitable arbitrage opportunities with unprecedented accuracy.",
  },
  {
    icon: Zap,
    title: "Lightning-Fast Execution",
    description:
      "Execute trades in milliseconds with our optimized infrastructure, ensuring you capture opportunities before they disappear.",
  },
  {
    icon: Globe,
    title: "50+ Exchange Integration",
    description:
      "Seamlessly connect to all major cryptocurrency exchanges worldwide for comprehensive market coverage.",
  },
  {
    icon: Shield,
    title: "Advanced Risk Management",
    description:
      "Sophisticated risk controls and position sizing algorithms protect your capital while maximizing returns.",
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description:
      "Real-time dashboards and comprehensive reports provide deep insights into your trading performance.",
  },
  {
    icon: Lock,
    title: "Enterprise-Grade Security",
    description:
      "Bank-level encryption and security protocols keep your assets and data completely protected.",
  },
  {
    icon: TrendingUp,
    title: "24/7 Automated Trading",
    description:
      "Our bots work around the clock, never missing an opportunity while you focus on strategy.",
  },
  {
    icon: Cpu,
    title: "Smart Order Routing",
    description:
      "Intelligent routing algorithms automatically find the best execution paths across exchanges.",
  },
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <div className="h-full bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-lg" />
        <div className="relative">
          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <feature.icon className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-muted-foreground">{feature.description}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Powered by Cutting-Edge Technology
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to dominate the cryptocurrency arbitrage market
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={feature.title} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
