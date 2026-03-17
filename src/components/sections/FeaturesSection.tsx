'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';

const features = [
  {
    title: 'Role-Based Dashboards',
    description:
      'Personalized dashboards for Students, Teachers, Org Admins, and Super Admins — each with contextual widgets, stats, and quick actions.',
    icon: '🎛️',
    gradient: 'from-purple-500/20 to-blue-500/20',
    color: 'purple' as const,
  },
  {
    title: 'Smart Quiz Engine',
    description:
      'Create quizzes with multiple question types, randomized banks, configurable timers, and instant auto-grading with detailed feedback.',
    icon: '📝',
    gradient: 'from-cyan-500/20 to-green-500/20',
    color: 'cyan' as const,
  },
  {
    title: 'Real-Time Monitoring',
    description:
      'Watch exam sessions live with activity tracking, tab-switch detection, and time-remaining counters across all participants.',
    icon: '📡',
    gradient: 'from-pink-500/20 to-purple-500/20',
    color: 'pink' as const,
  },
  {
    title: 'Score Distribution',
    description:
      'Visualize performance with histograms, percentile rankings, class averages, and weighted score breakdowns in real-time.',
    icon: '📊',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    color: 'blue' as const,
  },
  {
    title: 'Item Analysis',
    description:
      'Difficulty index, discrimination index, and distractor analysis for every question — identify weak items instantly.',
    icon: '🔬',
    gradient: 'from-green-500/20 to-cyan-500/20',
    color: 'green' as const,
  },
  {
    title: 'Competency Mastery',
    description:
      'Track student competency over time with mastery maps, skill clusters, and progress indicators per subject or topic.',
    icon: '🧠',
    gradient: 'from-purple-500/20 to-pink-500/20',
    color: 'purple' as const,
  },
  {
    title: 'Integrity & Audit Logs',
    description:
      'Every action recorded — who did what, when, and where. Full audit trail for academic integrity and institutional governance.',
    icon: '🛡️',
    gradient: 'from-cyan-500/20 to-blue-500/20',
    color: 'cyan' as const,
  },
  {
    title: 'Multi-Class Ranks',
    description:
      'Aggregate rankings across multiple classes and sections with weighted normalization and customizable cohort boundaries.',
    icon: '🏆',
    gradient: 'from-yellow-500/20 to-purple-500/20',
    color: 'purple' as const,
  },
];

export default function FeaturesSection() {
  return (
    <SectionWrapper id="features" className="bg-gradient-to-b from-transparent via-purple-950/5 to-transparent">
      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px]" />

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm uppercase tracking-widest text-cyan-400 font-medium">
          Key Features
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
          Built for{' '}
          <span className="gradient-text">Modern Academics</span>
        </h2>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
          Powerful tools for every dimension of assessment — from creation and deployment
          to analysis and compliance.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
          >
            <GlassCard
              glowColor={feature.color}
              className="h-full group relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}
              />
              <div className="relative z-10">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
