"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Check, Zap } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";

export default function PricingPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const plans = [
    {
      name: "Starter",
      price: "49",
      description: "Perfect for individual traders getting started",
      features: [
        "Up to 10 exchanges",
        "Real-time opportunity alerts",
        "Basic arbitrage strategies",
        "Web dashboard access",
        "Email support",
        "5 concurrent bots",
        "Standard execution speed",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
    {
      name: "Professional",
      price: "149",
      description: "For serious traders maximizing profits",
      features: [
        "All Starter features",
        "50+ exchanges supported",
        "Advanced AI strategies",
        "Triangular arbitrage",
        "Priority support (24/7)",
        "Unlimited concurrent bots",
        "Lightning-fast execution",
        "Custom strategy builder",
        "Advanced analytics",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "White-label solutions for institutions",
      features: [
        "All Professional features",
        "Dedicated infrastructure",
        "White-label platform",
        "Custom integrations",
        "API rate limit increases",
        "Dedicated account manager",
        "SLA guarantees",
        "Custom development",
        "On-premise deployment option",
      ],
      cta: "Contact Sales",
      popular: false,
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
              Simple, Transparent <span className="text-primary">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Choose the plan that's right for you. All plans include a 14-day free trial.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-16">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative bg-card/50 backdrop-blur-sm border rounded-lg p-8 ${
                  plan.popular ? "border-primary shadow-lg shadow-primary/20 scale-105" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline">
                    {plan.price === "Custom" ? (
                      <span className="text-4xl font-bold">Custom</span>
                    ) : (
                      <>
                        <span className="text-4xl font-bold">${plan.price}</span>
                        <span className="text-muted-foreground ml-2">/month</span>
                      </>
                    )}
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-accent mr-3 flex-shrink-0 mt-0.5" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-primary hover:bg-primary/90"
                        : "bg-secondary hover:bg-secondary/80"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-primary/10 border border-primary/20 rounded-lg p-8 max-w-4xl mx-auto text-center"
          >
            <Zap className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">All Plans Include</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              <div>
                <p className="font-semibold mb-1">14-Day Free Trial</p>
                <p className="text-sm text-muted-foreground">No credit card required</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Cancel Anytime</p>
                <p className="text-sm text-muted-foreground">No long-term contracts</p>
              </div>
              <div>
                <p className="font-semibold mb-1">Money-Back Guarantee</p>
                <p className="text-sm text-muted-foreground">30-day refund policy</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
