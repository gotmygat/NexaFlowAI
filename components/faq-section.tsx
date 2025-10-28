"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is cryptocurrency arbitrage trading?",
    answer:
      "Cryptocurrency arbitrage is a trading strategy that exploits price differences for the same asset across different exchanges. Our AI identifies these opportunities in real-time and executes trades automatically to capture profit from these price discrepancies.",
  },
  {
    question: "How does NexaFlow AI work?",
    answer:
      "NexaFlow AI uses advanced machine learning algorithms to monitor prices across 50+ cryptocurrency exchanges simultaneously. When a profitable arbitrage opportunity is detected, our system can automatically execute trades within milliseconds, ensuring you capture the price difference before it disappears.",
  },
  {
    question: "What exchanges does NexaFlow AI support?",
    answer:
      "We support all major cryptocurrency exchanges including Binance, Coinbase, Kraken, Bitfinex, Huobi, KuCoin, and 40+ others. Our system continuously monitors all supported exchanges for arbitrage opportunities.",
  },
  {
    question: "Is my capital safe?",
    answer:
      "Yes. We employ enterprise-grade security measures including bank-level encryption, cold storage integration, and advanced risk management algorithms. Your API keys are encrypted and never stored in plain text. Additionally, we never have direct access to withdraw your funds.",
  },
  {
    question: "What is the minimum investment required?",
    answer:
      "We recommend starting with at least $1,000 to effectively capture arbitrage opportunities and cover exchange fees. However, our platform supports accounts of any size, allowing you to start smaller and scale as you become comfortable with the system.",
  },
  {
    question: "How much profit can I expect?",
    answer:
      "Returns vary based on market conditions, capital deployed, and risk settings. Our users typically see monthly returns ranging from 5% to 15%, though past performance doesn't guarantee future results. The platform includes tools to help you optimize your strategy based on your risk tolerance.",
  },
  {
    question: "Are there any fees?",
    answer:
      "NexaFlow AI operates on a performance-based model. We charge a small percentage of your profits (typically 15-20%), meaning we only succeed when you do. There are no upfront fees or monthly subscriptions. Exchange trading fees apply as normal.",
  },
  {
    question: "Do I need trading experience?",
    answer:
      "No trading experience is necessary. Our AI handles all trading decisions automatically based on sophisticated algorithms. However, we recommend familiarizing yourself with cryptocurrency basics and reviewing our documentation to understand how the system works.",
  },
  {
    question: "Can I customize the trading strategy?",
    answer:
      "Yes. While our default settings work well for most users, you can adjust risk levels, minimum profit margins, trading pairs, and other parameters through our dashboard. Advanced users can also access our API for deeper customization.",
  },
  {
    question: "What happens during high market volatility?",
    answer:
      "Our risk management system automatically adjusts during volatile periods. It can pause trading, reduce position sizes, or increase profit margin requirements to protect your capital. You can also set custom risk parameters to align with your comfort level.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need to know about NexaFlow AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-lg px-6 data-[state=open]:border-primary/50 transition-colors"
              >
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="text-lg font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
