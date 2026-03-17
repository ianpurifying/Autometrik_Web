'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';

const steps = [
  {
    number: '01',
    title: 'Register',
    description: 'Create an account and select your role — Super Admin, Org Admin, Teacher, or Student.',
    icon: '🔐',
  },
  {
    number: '02',
    title: 'Activate Organization',
    description: 'Set up your academic institution with custom branding, access codes, and admin roles.',
    icon: '🏛️',
  },
  {
    number: '03',
    title: 'Set Up Classes',
    description: 'Create classes, add subjects, and enroll students with streamlined bulk actions.',
    icon: '📚',
  },
  {
    number: '04',
    title: 'Create Quizzes',
    description: 'Build question banks with multiple types, configure timers, and set deployment rules.',
    icon: '✍️',
  },
  {
    number: '05',
    title: 'Deploy Assessments',
    description: 'Launch exams with real-time monitoring, anti-cheat detection, and auto-submission.',
    icon: '🚀',
  },
  {
    number: '06',
    title: 'Analyze Results',
    description: 'Explore analytics dashboards with score distributions, item analysis, and mastery tracking.',
    icon: '📈',
  },
];

export default function HowItWorksSection() {
  return (
    <SectionWrapper id="how-it-works" className="bg-gradient-to-b from-transparent via-cyan-950/5 to-transparent">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[150px]" />

      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm uppercase tracking-widest text-purple-400 font-medium">
          How It Works
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
          From Setup to{' '}
          <span className="gradient-text">Insights in Minutes</span>
        </h2>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
          A streamlined workflow that takes you from registration to actionable
          analytics — with zero infrastructure overhead.
        </p>
      </motion.div>

      {/* Steps */}
      <div className="relative">
        {/* Connecting line */}
        <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/20 to-transparent -translate-y-1/2" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
            >
              <div className="glass-card rounded-2xl p-6 h-full group hover:shadow-[0_0_30px_rgba(168,85,247,0.15)] transition-all duration-500">
                {/* Step Number */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{step.icon}</span>
                  <span className="text-xs font-mono font-bold text-purple-400/60 tracking-wider">
                    STEP {step.number}
                  </span>
                </div>

                {/* Progress Indicator */}
                <div className="h-1 w-full bg-white/5 rounded-full mb-4 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 + 0.3, duration: 0.8, ease: 'easeOut' }}
                  />
                </div>

                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
