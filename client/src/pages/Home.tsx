import { Navbar } from "@/components/Navbar";
import { ServiceCard } from "@/components/ServiceCard";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { ContactForm } from "@/components/ContactForm";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  ShieldCheck, 
  MessageSquare, 
  BarChart3, 
  TrendingUp,
  Zap,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    {
      title: "Community Management",
      description: "Day-to-day engagement in Discord & Telegram. I build culture, not just chat volume.",
      icon: Users,
      tags: ["Discord", "Telegram", "Engagement"]
    },
    {
      title: "Moderation & Ops",
      description: "Setting up bots, roles, permissions, and 24/7 moderation workflows to keep your community safe.",
      icon: ShieldCheck,
      tags: ["Safety", "Bots", "Structure"]
    },
    {
      title: "Growth Strategy",
      description: "Data-driven campaigns to acquire high-quality members, not just bots and airdrop farmers.",
      icon: TrendingUp,
      tags: ["User Acquisition", "Campaigns", "Retention"]
    },
    {
      title: "Sentiment Reporting",
      description: "Weekly reports on what your community is actually thinking, feeling, and saying.",
      icon: BarChart3,
      tags: ["Analytics", "Feedback", "Insights"]
    }
  ];

  const tools = [
    { name: "Discord", icon: "https://assets-global.website-files.com/6257adef93867e56f84d3092/636e0a6a49cf127bf92de1e2_icon_clyde_blurple_RGB.png" },
    { name: "Telegram", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/2048px-Telegram_logo.svg.png" },
    { name: "Twitter / X", icon: "https://abs.twimg.com/responsive-web/client-web/icon-ios.b1fc7275.png" },
    { name: "Notion", icon: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png" },
    { name: "Snapshot", icon: "https://pbs.twimg.com/profile_images/1626925585501814787/1FzbIq0D_400x400.jpg" },
    { name: "Guild", icon: "https://guild.xyz/guild-icon.png" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute top-1/2 right-0 w-[800px] h-[600px] bg-accent/5 rounded-full blur-[100px] -z-10" />

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-6"
          >
            Web3 Community <br className="hidden md:block" />
            <span className="text-gradient">Management & Growth</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Helping Web3 projects build, engage, and retain high-quality communities. 
            Execution over hype. Real results over bot numbers.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-lg h-12 bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_20px_-5px_rgba(6,182,212,0.5)]"
              onClick={() => handleScroll("contact")}
            >
              Work With Me
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto text-lg h-12 border-white/10 hover:bg-white/5"
              onClick={() => handleScroll("services")}
            >
              View Services
            </Button>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Not Just Another Mod. <br />
                <span className="text-primary">A Strategic Partner.</span>
              </h2>
              <div className="space-y-4 text-muted-foreground text-lg">
                <p>
                  I don't just ban spammers. I build culture. With deep experience in the Web3 ecosystem, 
                  I understand the unique challenges of DAO governance, NFT holder retention, and DeFi community education.
                </p>
                <p>
                  My approach is grounded in operations and structure. No "GM" spam without substance. 
                  I implement systems that scale as your project grows.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="p-4 rounded-xl bg-background border border-white/5">
                  <div className="text-3xl font-bold text-primary mb-1">24/7</div>
                  <div className="text-sm text-muted-foreground">Coverage Strategy</div>
                </div>
                <div className="p-4 rounded-xl bg-background border border-white/5">
                  <div className="text-3xl font-bold text-primary mb-1">100%</div>
                  <div className="text-sm text-muted-foreground">Web3 Native</div>
                </div>
              </div>
            </motion.div>
            
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full -z-10" />
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4 mt-8">
                  <div className="bg-background/80 backdrop-blur border border-white/10 p-6 rounded-2xl">
                    <Zap className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-1">Fast Response</h3>
                    <p className="text-sm text-muted-foreground">Always on the pulse of the chat.</p>
                  </div>
                  <div className="bg-background/80 backdrop-blur border border-white/10 p-6 rounded-2xl">
                    <ShieldCheck className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-1">Security First</h3>
                    <p className="text-sm text-muted-foreground">Protecting members from scams.</p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-background/80 backdrop-blur border border-white/10 p-6 rounded-2xl">
                    <MessageSquare className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-1">Engagement</h3>
                    <p className="text-sm text-muted-foreground">Driving meaningful conversations.</p>
                  </div>
                  <div className="bg-background/80 backdrop-blur border border-white/10 p-6 rounded-2xl">
                    <BarChart3 className="w-8 h-8 text-primary mb-3" />
                    <h3 className="font-bold mb-1">Reporting</h3>
                    <p className="text-sm text-muted-foreground">Data-backed community insights.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Core Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to run a healthy, active Web3 community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section id="stack" className="py-20 bg-secondary/20 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-12">
            The Web3 Stack
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70">
            {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center gap-3 group">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center p-3 group-hover:bg-white/10 transition-colors">
                  {/* Using descriptive comments for dynamic images in production, placeholder styling here */}
                  <img src={tool.icon} alt={tool.name} className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" />
                </div>
                <span className="text-sm font-medium">{tool.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section id="case-studies" className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">Proof of Work</h2>
              <p className="text-muted-foreground">Recent results from community operations.</p>
            </div>
            <Button variant="ghost" className="text-primary hover:text-primary/80 group">
              View All <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <CaseStudyCard 
              title="DeFi Protocol Launch"
              category="Community Growth"
              metrics={[
                { label: "Discord Members", value: "+15k" },
                { label: "Active Users", value: "32%" },
                { label: "Governance Proposals", value: "12 Passed" },
                { label: "Timeframe", value: "3 Months" }
              ]}
            />
            <CaseStudyCard 
              title="NFT Collection Revival"
              category="Engagement Ops"
              metrics={[
                { label: "Floor Price", value: "+45%" },
                { label: "Twitter Impressions", value: "2.5M" },
                { label: "Holder Retention", value: "94%" },
                { label: "Events Hosted", value: "24" }
              ]}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-secondary/20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Ready to Scale Your <br />
                <span className="text-primary">Community?</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12">
                Whether you're launching a new token, managing a DAO, or need to clean up a messy Discord, I can help.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Consultation</h3>
                    <p className="text-muted-foreground">We'll discuss your current state and goals.</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Audit</h3>
                    <p className="text-muted-foreground">I'll review your server structure and security.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1">Execution</h3>
                    <p className="text-muted-foreground">Implementation of bots, roles, and events.</p>
                  </div>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 JSB_Web3X. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Twitter</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Telegram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
