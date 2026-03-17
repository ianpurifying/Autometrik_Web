'use client';

import { motion } from 'framer-motion';
import SectionWrapper from '@/components/ui/SectionWrapper';
import GlassCard from '@/components/ui/GlassCard';

const roles = [
  {
    title: 'Super Admin',
    icon: '⚡',
    color: 'purple' as const,
    gradient: 'from-purple-600 to-purple-400',
    permissions: [
      'Platform-wide configuration',
      'Organization approval & oversight',
      'Global analytics & audit',
      'Access code management',
      'System health monitoring',
    ],
  },
  {
    title: 'Org Admin',
    icon: '🏢',
    color: 'cyan' as const,
    gradient: 'from-cyan-600 to-cyan-400',
    permissions: [
      'Teacher & student management',
      'Class & subject creation',
      'Organization-level analytics',
      'Quiz deployment oversight',
      'Role assignment within org',
    ],
  },
  {
    title: 'Teacher',
    icon: '👨‍🏫',
    color: 'blue' as const,
    gradient: 'from-blue-600 to-blue-400',
    permissions: [
      'Quiz creation & management',
      'Assessment deployment',
      'Real-time exam monitoring',
      'Score & item analysis',
      'Student performance tracking',
    ],
  },
  {
    title: 'Student',
    icon: '🎓',
    color: 'green' as const,
    gradient: 'from-green-600 to-green-400',
    permissions: [
      'Take assessments & quizzes',
      'View personal results',
      'Track competency progress',
      'Access class materials',
      'Review score history',
    ],
  },
];

export default function UserRolesSection() {
  return (
    <SectionWrapper id="roles">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sm uppercase tracking-widest text-green-400 font-medium">
          User Roles
        </span>
        <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold">
          Designed for{' '}
          <span className="gradient-text">Every Stakeholder</span>
        </h2>
        <p className="mt-4 text-[var(--text-secondary)] max-w-2xl mx-auto text-lg">
          Four distinct roles with precisely scoped permissions — ensuring
          security, clarity, and efficiency at every level.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {roles.map((role, i) => (
          <motion.div
            key={role.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.6 }}
          >
            <GlassCard
              glowColor={role.color}
              className="h-full text-center group"
            >
              {/* Role Icon */}
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                {role.icon}
              </motion.div>

              {/* Title with gradient underline */}
              <h3 className="text-xl font-bold text-white mb-1">{role.title}</h3>
              <div
                className={`h-0.5 w-12 mx-auto mb-4 rounded-full bg-gradient-to-r ${role.gradient} opacity-60 group-hover:w-20 transition-all duration-500`}
              />

              {/* Permissions */}
              <ul className="space-y-2 text-left">
                {role.permissions.map((perm) => (
                  <li
                    key={perm}
                    className="flex items-start gap-2 text-sm text-[var(--text-secondary)]"
                  >
                    <span className={`mt-1 w-1.5 h-1.5 rounded-full bg-gradient-to-r ${role.gradient} flex-shrink-0`} />
                    {perm}
                  </li>
                ))}
              </ul>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
