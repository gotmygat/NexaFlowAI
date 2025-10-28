"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Target, Users, TrendingUp, Award, Zap, Globe } from "lucide-react";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const stats = [
    { label: "Active Users", value: "10,000+", icon: Users },
    { label: "Daily Volume", value: "$50M+", icon: TrendingUp },
    { label: "Exchanges", value: "50+", icon: Globe },
    { label: "Uptime", value: "99.9%", icon: Award },
  ];

  const values = [
    {
      icon: Target,
      title: "Precision",
      description: "Our AI algorithms deliver unmatched accuracy in identifying profitable arbitrage opportunities across the crypto markets.",
    },
    {
      icon: Zap,
      title: "Speed",
      description: "Lightning-fast execution ensures you capture opportunities before they disappear in the volatile crypto landscape.",
    },
    {
      icon: Users,
      title: "Community",
      description: "Join thousands of traders who trust NexaFlow AI to maximize their trading potential and returns.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We're committed to providing enterprise-grade security, reliability, and support for all our users.",
    },
  ];

  return (
    <main className="min-h-screen">
      <Navigation />

      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="text-primary">NexaFlow AI</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We're revolutionizing cryptocurrency arbitrage trading with advanced AI technology,
              making sophisticated trading strategies accessible to everyone.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-24"
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-bold mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-4xl mx-auto mb-24"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Our Story</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Founded in 2024 by a team of experienced traders, quantitative analysts, and AI engineers,
                NexaFlow AI was born from a simple observation: the cryptocurrency markets are filled with
                inefficiencies that can be exploited through intelligent automation.
              </p>
              <p>
                Traditional arbitrage trading required constant monitoring, split-second decision making,
                and manual execution across multiple exchanges. We knew there had to be a better way.
              </p>
              <p>
                By combining cutting-edge machine learning algorithms with real-time market data analysis,
                we've created a platform that democratizes sophisticated trading strategies. Today, thousands
                of traders trust NexaFlow AI to identify and execute profitable opportunities 24/7.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-8"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
