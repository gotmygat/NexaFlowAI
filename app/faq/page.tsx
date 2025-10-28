"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect } from "react";

export default function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "What is cryptocurrency arbitrage?",
      answer: "Cryptocurrency arbitrage is the practice of buying a cryptocurrency on one exchange at a lower price and simultaneously selling it on another exchange at a higher price, profiting from the price difference. NexaFlow AI automates this process using advanced algorithms to identify and execute these opportunities in real-time.",
    },
    {
      question: "How much money do I need to get started?",
      answer: "We recommend starting with at least $1,000 to see meaningful returns. However, you can begin with as little as $100 to test the platform. Keep in mind that higher capital allows for more trading opportunities and better risk management.",
    },
    {
      question: "Is my money safe with NexaFlow AI?",
      answer: "Yes. We never hold your funds. NexaFlow AI connects to exchanges using secure API keys with trading permissions only - we cannot withdraw your funds. All connections are encrypted with bank-level security, and we're SOC 2 Type II certified.",
    },
    {
      question: "What exchanges do you support?",
      answer: "We support 50+ major cryptocurrency exchanges including Binance, Coinbase, Kraken, KuCoin, Bitfinex, and many more. Our Professional plan includes access to all supported exchanges, while the Starter plan supports up to 10 exchanges.",
    },
    {
      question: "How does the AI work?",
      answer: "Our proprietary AI algorithms continuously monitor price differences across all supported exchanges, analyzing thousands of trading pairs every second. The system factors in trading fees, transfer times, and market volatility to identify truly profitable opportunities. It then executes trades automatically within milliseconds.",
    },
    {
      question: "What kind of returns can I expect?",
      answer: "Returns vary based on market conditions, your capital, and risk settings. Our users typically see returns ranging from 2-8% monthly. However, past performance doesn't guarantee future results. We recommend starting conservatively and scaling up as you gain confidence.",
    },
    {
      question: "Do I need trading experience?",
      answer: "No trading experience is required. NexaFlow AI handles all the complex analysis and execution automatically. However, we do recommend understanding basic cryptocurrency concepts and reading our documentation to make the most of the platform.",
    },
    {
      question: "Can I customize trading strategies?",
      answer: "Yes! Professional and Enterprise plans include our custom strategy builder. You can set parameters like minimum profit margins, risk levels, preferred exchanges, and trading pairs. You can also choose between different arbitrage types including simple arbitrage and triangular arbitrage.",
    },
    {
      question: "What are the risks?",
      answer: "While arbitrage is considered lower risk than traditional trading, risks include market volatility, exchange downtime, network congestion, and API failures. Our advanced risk management tools help minimize these risks through position sizing, stop-losses, and real-time monitoring.",
    },
    {
      question: "How quickly are trades executed?",
      answer: "Our infrastructure executes trades in milliseconds. Professional plan users get priority access to our fastest servers, ensuring you capture opportunities before they disappear. Execution speed is critical in arbitrage trading.",
    },
    {
      question: "Is there a free trial?",
      answer: "Yes! All plans include a 14-day free trial with full access to platform features. No credit card is required to start your trial. You can cancel anytime before the trial ends without being charged.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and cryptocurrency payments (BTC, ETH, USDT). Enterprise customers can also arrange wire transfers and invoicing.",
    },
    {
      question: "Can I cancel my subscription?",
      answer: "Yes, you can cancel anytime from your account dashboard. If you cancel within the first 30 days, you're eligible for a full refund under our money-back guarantee. No questions asked.",
    },
    {
      question: "Do you offer API access?",
      answer: "Yes, Professional and Enterprise plans include API access. This allows you to integrate NexaFlow AI with your own systems, build custom dashboards, or create automated workflows. Full API documentation is available for plan subscribers.",
    },
    {
      question: "How is customer support handled?",
      answer: "Starter plan users receive email support with 24-48 hour response times. Professional users get priority 24/7 support via email and chat. Enterprise customers have a dedicated account manager and direct phone support.",
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
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Frequently Asked <span className="text-primary">Questions</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Everything you need to know about NexaFlow AI and cryptocurrency arbitrage trading.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-lg text-muted-foreground mb-4">
              Still have questions?
            </p>
            <a
              href="/contact"
              className="text-primary hover:underline font-semibold"
            >
              Contact our support team →
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
