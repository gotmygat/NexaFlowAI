"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { TrendingUp, ArrowUpDown } from "lucide-react";

interface Opportunity {
  id: string;
  pair: string;
  buyExchange: string;
  buyPrice: number;
  sellExchange: string;
  sellPrice: number;
  profitPercent: number;
  estimatedProfit: number;
  risk: "Low" | "Medium" | "High";
  executionTime: string;
}

const tradingPairs = [
  "BTC/USDT",
  "ETH/USDT",
  "SOL/USDT",
  "XRP/USDT",
  "ADA/USDT",
  "AVAX/USDT",
  "MATIC/USDT",
  "DOT/USDT",
];

const exchanges = ["Binance", "Coinbase", "Kraken", "KuCoin", "Bybit", "OKX"];

const generateOpportunity = (pair: string, minProfit: number, maxRisk: "Low" | "Medium" | "High"): Opportunity | null => {
  const riskLevels = ["Low", "Medium", "High"];
  const maxRiskIndex = riskLevels.indexOf(maxRisk);
  const risk = riskLevels[Math.floor(Math.random() * (maxRiskIndex + 1))] as "Low" | "Medium" | "High";

  const profitPercent = parseFloat((Math.random() * 4 + minProfit).toFixed(2));

  if (profitPercent < minProfit) return null;

  const buyExchange = exchanges[Math.floor(Math.random() * exchanges.length)];
  let sellExchange = exchanges[Math.floor(Math.random() * exchanges.length)];
  while (sellExchange === buyExchange) {
    sellExchange = exchanges[Math.floor(Math.random() * exchanges.length)];
  }

  const buyPrice = parseFloat((Math.random() * 100000 + 10000).toFixed(2));
  const sellPrice = parseFloat((buyPrice * (1 + profitPercent / 100)).toFixed(2));
  const estimatedProfit = parseFloat((sellPrice - buyPrice).toFixed(2));

  const executionTime = `${Math.floor(Math.random() * 300 + 100)}ms`;

  return {
    id: Math.random().toString(36).substring(7),
    pair,
    buyExchange,
    buyPrice,
    sellExchange,
    sellPrice,
    profitPercent,
    estimatedProfit,
    risk,
    executionTime,
  };
};

export default function ScannerSection() {
  const [selectedPair, setSelectedPair] = useState("BTC/USDT");
  const [minProfit, setMinProfit] = useState(2.0);
  const [maxRisk, setMaxRisk] = useState<"Low" | "Medium" | "High">("Medium");
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [stats, setStats] = useState({
    total: 853,
    activeBots: 2547,
  });

  const handleScan = () => {
    setIsScanning(true);
    setTimeout(() => {
      const newOpportunities: Opportunity[] = [];
      for (let i = 0; i < 5; i++) {
        const opp = generateOpportunity(selectedPair, minProfit, maxRisk);
        if (opp) newOpportunities.push(opp);
      }
      setOpportunities(newOpportunities.sort((a, b) => b.profitPercent - a.profitPercent));
      setStats((prev) => ({
        ...prev,
        total: prev.total + newOpportunities.length,
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
    <section id="scanner" className="py-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="text-sm font-semibold text-primary/80 mb-4 tracking-wider uppercase">
            Arbitrage Opportunity Scanner
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Real-Time <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Profit Discovery</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI continuously scans price differences across all major exchanges, identifying profitable arbitrage opportunities with precision timing and execution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="space-y-8">
              <div className="grid grid-cols-2 gap-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Opportunities Found</span>
                  </div>
                  <div className="text-3xl font-bold">{stats.total}</div>
                </Card>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Active Bots</span>
                  </div>
                  <div className="text-3xl font-bold">{stats.activeBots.toLocaleString()}</div>
                </Card>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-8 bg-card/80 backdrop-blur-sm border-border">
              <div className="space-y-6">
                <div>
                  <label className="text-sm font-medium mb-3 block">Trading Pair</label>
                  <Select value={selectedPair} onValueChange={setSelectedPair}>
                    <SelectTrigger className="w-full bg-background/50 border-border">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {tradingPairs.map((pair) => (
                        <SelectItem key={pair} value={pair}>
                          {pair}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-3">
                    <label className="text-sm font-medium">Minimum Profit Margin</label>
                    <span className="text-sm font-bold text-primary">{minProfit.toFixed(1)}%</span>
                  </div>
                  <Slider
                    value={[minProfit]}
                    onValueChange={(value) => setMinProfit(value[0])}
                    min={0.5}
                    max={10}
                    step={0.1}
                    className="w-full"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium mb-3 block">Maximum Risk Level</label>
                  <div className="grid grid-cols-3 gap-3">
                    {(["Low", "Medium", "High"] as const).map((risk) => (
                      <Button
                        key={risk}
                        variant={maxRisk === risk ? "default" : "outline"}
                        onClick={() => setMaxRisk(risk)}
                        className={
                          maxRisk === risk
                            ? risk === "Low"
                              ? "bg-accent hover:bg-accent/90"
                              : risk === "Medium"
                              ? "bg-yellow-500 hover:bg-yellow-500/90"
                              : "bg-destructive hover:bg-destructive/90"
                            : ""
                        }
                      >
                        {risk.toUpperCase()}
                      </Button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={handleScan}
                  disabled={isScanning}
                  className="w-full bg-primary hover:bg-primary/90 h-12 text-base font-semibold"
                >
                  {isScanning ? "Scanning..." : "Scan for Opportunities"}
                </Button>
              </div>
            </Card>
          </motion.div>
        </div>

        {opportunities.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto mt-12"
          >
            <h3 className="text-2xl font-bold mb-6">Live Arbitrage Opportunities</h3>
            <div className="space-y-4">
              {opportunities.map((opp, index) => (
                <motion.div
                  key={opp.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <ArrowUpDown className="w-4 h-4 text-primary" />
                          <span className="text-lg font-bold">{opp.pair}</span>
                        </div>
                        <Badge className={getRiskColor(opp.risk)}>{opp.risk.toUpperCase()}</Badge>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1">
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Buy on {opp.buyExchange}</div>
                          <div className="text-sm font-semibold">${opp.buyPrice.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Sell on {opp.sellExchange}</div>
                          <div className="text-sm font-semibold">${opp.sellPrice.toLocaleString()}</div>
                        </div>
                        <div>
                          <div className="text-xs text-muted-foreground mb-1">Profit</div>
                          <div className="text-sm font-semibold text-accent">+{opp.profitPercent}%</div>
                          <div className="text-xs text-muted-foreground">{opp.executionTime}</div>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-muted-foreground mb-1">Est. Profit</div>
                          <div className="text-lg font-bold text-accent">${opp.estimatedProfit.toLocaleString()}</div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
