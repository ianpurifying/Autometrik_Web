'use client';

import { motion } from 'framer-motion';
import NeonButton from '@/components/ui/NeonButton';

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950/30 via-[var(--bg-secondary)] to-cyan-950/20" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />

      {/* Glow orbs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-cyan-500/8 rounded-full blur-[100px]" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="gradient-text">Academic Workflow?</span>
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto mb-10">
            Join organizations already using Autometrik to manage assessments,
            track performance, and ensure academic integrity — with zero
            infrastructure setup.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <NeonButton
              href="https://app.autometrik.online/"
              external
              size="lg"
              className="animate-pulse-glow"
            >
              Go to App
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </NeonButton>
            <NeonButton href="#overview" variant="outline" size="lg">
              Learn More
            </NeonButton>
          </div>
        </motion.div>

        {/* Animated stats */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-6 max-w-xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          {[
            { value: '∞', label: 'Scalability' },
            { value: '99.9%', label: 'Uptime' },
            { value: '0', label: 'Servers to Manage' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold gradient-text">
                {stat.value}
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
