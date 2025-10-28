"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { TrendingUp, RefreshCw, ArrowRight } from "lucide-react";

interface Opportunity {
  id: string;
  pair: string;
  buyExchange: string;
  sellExchange: string;
  profit: number;
  risk: "Low" | "Medium" | "High";
  timestamp: string;
}

const mockOpportunities: Opportunity[] = [
  {
    id: "1",
    pair: "BTC/USDT",
    buyExchange: "Binance",
    sellExchange: "Coinbase",
    profit: 2.4,
    risk: "Low",
    timestamp: "Just now",
  },
  {
    id: "2",
    pair: "ETH/USDT",
    buyExchange: "Kraken",
    sellExchange: "Binance",
    profit: 3.2,
    risk: "Medium",
    timestamp: "Just now",
  },
  {
    id: "3",
    pair: "SOL/USDT",
    buyExchange: "Coinbase",
    sellExchange: "Kraken",
    profit: 4.1,
    risk: "High",
    timestamp: "Just now",
  },
  {
    id: "4",
    pair: "XRP/USDT",
    buyExchange: "Binance",
    sellExchange: "Kraken",
    profit: 2.8,
    risk: "Low",
    timestamp: "Just now",
  },
  {
    id: "5",
    pair: "ADA/USDT",
    buyExchange: "Kraken",
    sellExchange: "Coinbase",
    profit: 3.5,
    risk: "Medium",
    timestamp: "Just now",
  },
];

export default function ScannerSection() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>(mockOpportunities);
  const [isScanning, setIsScanning] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({
    total: 847,
    activeBots: 2547,
    minProfit: 2.0,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const newOpportunities = [...mockOpportunities].map((opp) => ({
        ...opp,
        id: Math.random().toString(),
        profit: parseFloat((Math.random() * 3 + 2).toFixed(1)),
        timestamp: new Date().toLocaleTimeString(),
      }));
      setOpportunities(newOpportunities);
      setStats((prev) => ({
        ...prev,
        total: prev.total + Math.floor(Math.random() * 10),
      }));
      setIsScanning(false);
    }, 2000);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        total: prev.total + Math.floor(Math.random() * 3),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Low":
        return "bg-accent/20 text-accent border-accent/50";
      case "Medium":
        return "bg-yellow-500/20 text-yellow-500 border-yellow-500/50";
      case "High":
        return "bg-destructive/20 text-destructive border-destructive/50";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="scanner" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Arbitrage Opportunity Scanner
          </h2>
          <p className="text-xl text-muted-foreground">
            Real-time market analysis powered by advanced AI algorithms
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Opportunities Found</span>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">{stats.total}</div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Active Bots</span>
              <TrendingUp className="w-5 h-5 text-accent" />
            </div>
            <div className="text-3xl font-bold">{stats.activeBots.toLocaleString()}</div>
          </Card>
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
            <div className="flex items-center justify-between mb-2">
              <span className="text-muted-foreground">Min. Profit Margin</span>
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div className="text-3xl font-bold">{stats.minProfit}%</div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold">Live Opportunities</h3>
            <Button
              onClick={handleScan}
              disabled={isScanning}
              className="bg-primary hover:bg-primary/90"
            >
              {isScanning ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Scanning...
                </>
              ) : (
                <>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Scan Now
                </>
              )}
            </Button>
          </div>

          <div className="space-y-4">
            {opportunities.map((opp, index) => (
              <motion.div
                key={opp.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      <div>
                        <div className="text-lg font-bold mb-1">{opp.pair}</div>
                        <div className="text-sm text-muted-foreground">
                          Buy: {opp.buyExchange} → Sell: {opp.sellExchange}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <Badge className={getRiskColor(opp.risk)}>{opp.risk} Risk</Badge>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-accent">
                          +{opp.profit}%
                        </div>
                        <div className="text-xs text-muted-foreground">{opp.timestamp}</div>
                      </div>
                      <Button size="sm" variant="outline">
                        Execute
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
