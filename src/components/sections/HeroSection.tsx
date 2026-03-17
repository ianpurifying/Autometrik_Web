'use client';

import { useRef, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { motion, useScroll, useTransform } from 'framer-motion';
import NeonButton from '@/components/ui/NeonButton';
import ParticleField from '@/components/three/ParticleField';
import FloatingGeometry from '@/components/three/FloatingGeometry';

function FloatingDashboard({ delay, className }: { delay: number; className: string }) {
  return (
    <motion.div
      className={`absolute glass-card rounded-xl p-3 sm:p-4 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.8, ease: 'easeOut' }}
      style={{ animation: `float ${5 + delay}s ease-in-out infinite` }}
    >
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 rounded-full bg-green-400" />
        <div className="w-2 h-2 rounded-full bg-yellow-400" />
        <div className="w-2 h-2 rounded-full bg-red-400" />
      </div>
      <div className="space-y-1.5">
        <div className="h-2 w-20 bg-purple-500/30 rounded" />
        <div className="flex gap-1">
          <div className="h-8 w-4 bg-purple-500/40 rounded-sm" />
          <div className="h-6 w-4 bg-cyan-500/40 rounded-sm mt-2" />
          <div className="h-10 w-4 bg-purple-500/40 rounded-sm -mt-2" />
          <div className="h-5 w-4 bg-cyan-500/40 rounded-sm mt-3" />
          <div className="h-7 w-4 bg-blue-500/40 rounded-sm mt-1" />
        </div>
        <div className="h-1.5 w-16 bg-white/10 rounded" />
      </div>
    </motion.div>
  );
}

function StatBadge({
  value,
  label,
  delay,
  className,
}: {
  value: string;
  label: string;
  delay: number;
  className: string;
}) {
  return (
    <motion.div
      className={`absolute glass rounded-lg px-3 py-2 ${className}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.6 }}
      style={{ animation: `float ${4 + delay}s ease-in-out infinite` }}
    >
      <div className="text-sm font-bold gradient-text">{value}</div>
      <div className="text-[10px] text-[var(--text-muted)]">{label}</div>
    </motion.div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Three.js Canvas */}
      <div className="absolute inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60 }}
          dpr={[1, 1.5]}
          style={{ background: 'transparent' }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} color="#a855f7" intensity={0.5} />
          <pointLight position={[-10, -10, -10]} color="#06b6d4" intensity={0.3} />
          <Suspense fallback={null}>
            <ParticleField count={500} size={2} spread={18} />
            <FloatingGeometry />
          </Suspense>
        </Canvas>
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-[1]" style={{ background: 'var(--gradient-hero)' }} />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent" />

      {/* Radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px] z-[1]" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cyan-500/8 rounded-full blur-[100px] z-[1]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20"
        style={{ y, opacity }}
      >
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-xs text-[var(--text-secondary)]">
            Serverless Academic Platform
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <span className="text-white">The Future of</span>
          <br />
          <span className="gradient-text">Academic Management</span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          className="text-lg sm:text-xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Streamline your organization with intelligent assessments,
          real-time analytics, and role-based access control — all on a
          serverless, infinitely scalable infrastructure.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <NeonButton
            href="https://app.autometrik.online/"
            external
            size="lg"
            className="animate-pulse-glow"
          >
            Go to App
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NeonButton>
          <NeonButton href="#overview" variant="secondary" size="lg">
            Explore Platform
          </NeonButton>
        </motion.div>

        {/* Floating UI elements */}
        <div className="relative mt-16 h-32 sm:h-40 hidden sm:block">
          <FloatingDashboard
            delay={1.0}
            className="top-0 left-[5%] w-36"
          />
          <FloatingDashboard
            delay={1.3}
            className="top-4 right-[5%] w-32"
          />
          <StatBadge
            value="99.9%"
            label="Uptime"
            delay={1.5}
            className="top-8 left-1/3"
          />
          <StatBadge
            value="< 50ms"
            label="Response"
            delay={1.7}
            className="bottom-0 right-1/3"
          />
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <motion.div
          className="w-5 h-8 border border-white/20 rounded-full flex justify-center"
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <motion.div className="w-1 h-2 bg-purple-400 rounded-full mt-1.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
