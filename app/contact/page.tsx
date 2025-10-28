"use client";

import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, MessageSquare, Send } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setIsSubmitting(false);
      (e.target as HTMLFormElement).reset();
    }, 1500);
  };

  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-muted-foreground mb-12">
              Have questions? We're here to help you succeed with NexaFlow AI
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border mb-6">
                  <Mail className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Email Us</h3>
                  <p className="text-muted-foreground mb-4">
                    For general inquiries and support
                  </p>
                  <a
                    href="mailto:contact@nexaflow.ai"
                    className="text-primary hover:underline"
                  >
                    contact@nexaflow.ai
                  </a>
                </Card>

                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                  <MessageSquare className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Join Our Community</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect with other traders and get instant support
                  </p>
                  <Button variant="outline" asChild>
                    <a
                      href="https://t.me/nexaflowaі"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Join Telegram
                    </a>
                  </Button>
                </Card>
              </div>

              <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
                <h3 className="text-xl font-semibold mb-6">Send us a message</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="How can we help?"
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      required
                      className="mt-1 min-h-[150px]"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
