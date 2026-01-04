import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface CaseStudyCardProps {
  title: string;
  category: string;
  metrics: { label: string; value: string }[];
}

export function CaseStudyCard({ title, category, metrics }: CaseStudyCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      className="p-8 rounded-2xl bg-gradient-to-br from-secondary to-secondary/50 border border-white/10 hover:border-primary/20 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-6">
        <div>
          <span className="text-primary font-mono text-xs uppercase tracking-wider">{category}</span>
          <h3 className="text-2xl font-display font-bold mt-2">{title}</h3>
        </div>
        <div className="p-2 rounded-full bg-white/5 group-hover:bg-primary/20 text-muted-foreground group-hover:text-primary transition-colors">
          <ArrowUpRight className="w-5 h-5" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-white/5">
        {metrics.map((metric) => (
          <div key={metric.label}>
            <div className="text-2xl font-bold text-foreground font-display">{metric.value}</div>
            <div className="text-sm text-muted-foreground">{metric.label}</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
