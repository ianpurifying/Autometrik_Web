import Image from "next/image";
import Link from "next/link";
import { 
  ArrowRight, BarChart2, CheckCircle2, Cloud, FileText, 
  LayoutDashboard, Lock, Shield, Target, Users, BookOpen, FileDigit, Download 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturesThreeCard />
      <PerformanceGrid />
      <EcosystemSection />
      <ArchitectureOverview />
      <SecuritySection />
      <DashboardPreview />
      <SocialFeatures />
      <FooterCTA />
      <Newsletter />
      <FooterBottom />
    </div>
  );
}

const Navbar = () => (
  <nav className="flex items-center justify-between py-6 px-6 md:px-12 max-w-7xl mx-auto">
    <div className="flex items-center gap-2 font-bold text-2xl text-gray-900 tracking-tight">
      <Cloud className="text-gray-900 fill-gray-900" size={32} />
      <span>Autometrik</span>
    </div>
    <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-500">
      <Link href="#features" className="hover:text-gray-900 transition-colors">Features</Link>
      <Link href="#analytics" className="hover:text-gray-900 transition-colors">Analytics</Link>
      <Link href="#compliance" className="hover:text-gray-900 transition-colors">Compliance</Link>
    </div>
    <div>
      <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-md shadow-emerald-500/20">
        Get Started
      </button>
    </div>
  </nav>
);

const Hero = () => (
  <header className="relative pt-24 pb-32 overflow-hidden text-center bg-wave-pattern">
    <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"></div>
    <div className="relative z-10 max-w-5xl mx-auto px-4">
      <div className="inline-flex items-center justify-center mb-6">
        <Cloud size={64} className="text-gray-900 fill-gray-900" />
      </div>
      <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">
        Automate Assessment<br />with Autometrik
      </h1>
      <p className="text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-medium">
        The comprehensive web-based platform for Philippine K-12 teachers. Automating MPS computation and item analysis.
      </p>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
        <Link href="https://app.autometrik.online/" className="font-semibold text-gray-900 hover:text-indigo-600 transition-colors inline-flex items-center gap-1">
          Go to APP <ArrowRight size={18} />
        </Link>
        
      </div>
    </div>
  </header>
);

const FeaturesThreeCard = () => (
  <section className="py-20 max-w-7xl mx-auto px-6" id="features">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900">Why build on Autometrik</h2>
    </div>
    <div className="grid md:grid-cols-3 gap-6">
      {[
        { 
          title: "Item Analysis", icon: <FileText className="text-indigo-600" />, 
          desc: "Automatically compute difficulty and discrimination indices, providing diagnostic data.",
          bg: "bg-indigo-50/50"
        },
        { 
          title: "MPS Computation", icon: <BarChart2 className="text-emerald-600" />, 
          desc: "Compute class MPS per assessment, and consolidated MPS across multiple assessments.",
          bg: "bg-emerald-50/50"
        },
        { 
          title: "Quiz Management", icon: <BookOpen className="text-rose-600" />, 
          desc: "Centralized quiz library management—creation, storage, organization, and retrieval.",
          bg: "bg-rose-50/50"
        }
      ].map((feature, i) => (
        <div key={i} className={`rounded-3xl p-8 border border-gray-100 shadow-soft relative overflow-hidden group ${feature.bg}`}>
          <div className="bg-white w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-gray-100">
            {feature.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
          <p className="text-gray-500 leading-relaxed mb-6 font-medium text-sm">
            {feature.desc}
          </p>
          <button className="bg-white hover:bg-gray-50 text-gray-900 px-5 py-2.5 rounded-full text-sm font-semibold border border-gray-200 shadow-sm transition-colors inline-flex items-center gap-2">
            Read the Docs <ArrowRight size={14} />
          </button>
        </div>
      ))}
    </div>
  </section>
);

const PerformanceGrid = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-4xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Integrated seamlessly. High performance for Philippine Education.</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { title: "DepEd Compliant", desc: "Generates reports meeting DO No. 31, s. 2020.", icon: <CheckCircle2 className="text-orange-500" />, bg: "bg-orange-100" },
          { title: "Automated Scoring", desc: "No more manual checking, saving hours daily.", icon: <FileDigit className="text-pink-500" />, bg: "bg-pink-100" },
          { title: "Real-time Analytics", desc: "Immediate post-assessment results and statistics.", icon: <BarChart2 className="text-indigo-500" />, bg: "bg-indigo-100" },
          { title: "Secure Environment", desc: "Prevents tab-switching and cheating during exams.", icon: <Shield className="text-emerald-500" />, bg: "bg-emerald-100" }
        ].map((item, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-start gap-4">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${item.bg}`}>
              {item.icon}
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500 font-medium">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const EcosystemSection = () => (
  <section className="py-20 border-y border-gray-100 bg-white text-center">
    <div className="max-w-4xl mx-auto px-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-2">Empowering Philippine Education.</h2>
      <p className="text-gray-500 mb-12 font-medium">We're working together to build better assessment systems.</p>
      <div className="flex flex-wrap items-center justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
        <Cloud size={40} />
        <BookOpen size={40} />
        <LayoutDashboard size={40} />
        <Target size={40} />
        <Users size={40} />
        <FileText size={40} />
      </div>
    </div>
  </section>
);

const ArchitectureOverview = () => (
  <section className="py-32 max-w-7xl mx-auto px-6 overflow-hidden bg-wave-pattern">
    <div className="grid md:grid-cols-2 gap-16 items-center">
      <div className="max-w-md mx-auto md:mr-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">Your Complete Assessment Base</h2>
        <p className="text-lg text-gray-500 mb-8 font-medium">
          Robust, scaleable architecture capturing submissions, answers, reports, and audit logs.
        </p>
        <button className="bg-white hover:bg-gray-50 text-gray-900 px-6 py-3 rounded-full font-semibold border border-gray-200 shadow-sm transition-colors text-sm">
          Learn More
        </button>
      </div>
      <div className="relative w-full aspect-square md:aspect-auto md:h-96 border border-gray-200 bg-white/50 backdrop-blur-sm rounded-3xl shadow-soft flex items-center justify-center">
        {/* Placeholder for the diagram from the image */}
        <div className="text-gray-400 font-medium flex items-center gap-2">
          <Cloud size={24} /> System Architecture Diagram
        </div>
      </div>
    </div>
  </section>
);

const SecuritySection = () => (
  <section className="py-24 max-w-6xl mx-auto px-6 border-t border-gray-100">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Your Secure Classroom Identity</h2>
      <p className="text-gray-500 font-medium">It's never been easier to bring students online safely.</p>
    </div>
    <div className="grid md:grid-cols-3 gap-12">
      {[
        { icon: <CheckCircle2 className="text-emerald-500" size={32} />, title: "Firebase Authentication", desc: "Verifies user roles — Super Admin, Org Admin, Teacher, or Student." },
        { icon: <Lock className="text-indigo-500" size={32} />, title: "Strict Boundaries", desc: "Organization Admins can only see and manage their own organization." },
        { icon: <Shield className="text-rose-500" size={32} />, title: "Firestore Rules", desc: "Enforce what each role is actually allowed to do securely on backend." }
      ].map((item, i) => (
        <div key={i} className="text-center md:text-left">
          <div className="mb-4 inline-flex">{item.icon}</div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
          <p className="text-gray-500 font-medium text-sm leading-relaxed">{item.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const DashboardPreview = () => (
  <section className="py-24 bg-gray-50">
    <div className="max-w-6xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Focus on your students. We make it easy.</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white rounded-3xl shadow-soft border border-gray-100 p-8 flex flex-col justify-between">
          <div className="w-full h-64 bg-gray-50 rounded-xl border border-gray-100 flex items-center justify-center mb-6">
            <LayoutDashboard size={48} className="text-gray-300" />
          </div>
          <div>
            <h3 className="font-bold text-gray-900">Beautiful Teacher Dashboard</h3>
            <p className="text-sm text-gray-500 font-medium mt-1">Analytics, item analysis, and MPS at a glance.</p>
          </div>
        </div>
        <div className="bg-indigo-50 rounded-3xl shadow-soft border border-indigo-100 p-8 relative overflow-hidden flex flex-col justify-between">
          <div className="absolute inset-0 bg-wave-pattern opacity-50 z-0"></div>
          <div className="relative z-10 break-words mb-6 p-6 bg-white/60 backdrop-blur rounded-xl border border-white">
            <p className="text-xs font-mono text-indigo-900">
              export function AnalyticsOverview() {'{'} <br/>
                &nbsp;&nbsp;return &lt;Dashboard /&gt;;<br/>
              {'}'}
            </p>
          </div>
          <div className="relative z-10">
            <button className="bg-white hover:bg-gray-50 text-gray-900 px-4 py-2 rounded-full text-xs font-bold shadow-sm inline-flex items-center gap-1 mb-2">
              Explore Analytics <ArrowRight size={12} />
            </button>
            <h3 className="font-bold text-gray-900">Built for modern educators.</h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const SocialFeatures = () => (
  <section className="py-24 max-w-6xl mx-auto px-6 border-b border-gray-100">
    <div className="text-center mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Comprehensive Assessment Features. No need to build from scratch.</h2>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
      {[
        { title: "Quiz Bank", desc: "Build private or org-wide shared quizzes with ease." },
        { title: "Competency Mapping", desc: "Attach competency codes to questions for standard alignment." },
        { title: "Exportable Reports", desc: "Download DepEd-compliant data in PDF, CSV, Excel." },
        { title: "Live Exam Monitoring", desc: "Track progress and tab-switching in real-time." },
        { title: "Audit Logs", desc: "Permanent record capturing crucial system activities." },
        { title: "Resume Capability", desc: "Lost connection? Answers are saved locally to resume anytime." },
      ].map((feature, i) => (
        <div key={i}>
          <div className="w-8 h-8 rounded bg-gray-100 text-gray-600 flex items-center justify-center mb-4">
            <CheckCircle2 size={16} />
          </div>
          <h4 className="font-bold text-gray-900 mb-2">{feature.title}</h4>
          <p className="text-sm text-gray-500 font-medium leading-relaxed">{feature.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const FooterCTA = () => (
  <section className="py-20 max-w-5xl mx-auto px-6">
    <div className="bg-emerald-50 rounded-[3rem] p-16 text-center shadow-soft border border-emerald-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-wave-pattern opacity-40"></div>
      <div className="relative z-10">
        <div className="inline-flex w-16 h-16 bg-white rounded-full items-center justify-center shadow-sm mb-6 text-emerald-500">
          <Cloud size={32} className="fill-emerald-500" />
        </div>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6">Autometrik.<br/>The complete educational assessment graph.</h2>
        <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3.5 rounded-full font-semibold transition-colors mt-4 shadow-lg">
          Join
        </button>
      </div>
    </div>
  </section>
);

const Newsletter = () => (
  <section className="py-16 text-center border-t border-gray-100">
    <div className="max-w-xl mx-auto px-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">Stay updated.</h3>
      <p className="text-gray-500 font-medium mb-8">Join us on the road to the education revolution.</p>
      <form className="flex items-center gap-2 max-w-sm mx-auto bg-gray-50 p-1.5 rounded-full border border-gray-200 focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 transition-all" onSubmit={(e) => e.preventDefault()}>
        <input 
          type="email" 
          placeholder="your@email.com" 
          className="bg-transparent flex-1 px-4 py-2 text-sm outline-none text-gray-900 font-medium"
          required
        />
        <button type="submit" className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-2 rounded-full text-sm transition-colors">
          Subscribe
        </button>
      </form>
    </div>
  </section>
);

const FooterBottom = () => (
  <footer className="py-12 border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="flex items-center gap-2 font-bold text-xl text-gray-900">
        <Cloud className="fill-gray-900" size={24} />
        <span>Autometrik</span>
      </div>
      <div className="flex gap-8 text-sm font-medium text-gray-500">
        <Link href="#" className="hover:text-gray-900">Terms of Service</Link>
        <Link href="#" className="hover:text-gray-900">Privacy Policy</Link>
        <Link href="#" className="hover:text-gray-900">Brand Assets</Link>
      </div>
    </div>
  </footer>
);
