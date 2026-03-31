import React from 'react';
import { 
  ArrowRight, CheckCircle2, Scan, FileText, 
  LineChart, Users, BookOpen, Clock, Calculator, 
  ShieldCheck, ArrowUpRight, GraduationCap,
  Globe, ClipboardList, BarChart3
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-pattern relative overflow-hidden flex flex-col font-sans">
      
      {/* Background decorations (Subtle Gradients) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-x-0 border-t-0 rounded-none bg-white/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center text-white font-bold text-lg">
              A
            </div>
            <span className="font-bold text-xl tracking-tight text-gray-900">AutoMetrik</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#problem" className="hover:text-emerald-600 transition-colors">The Problem</a>
            <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How it Works</a>
            <a href="#benefits" className="hover:text-emerald-600 transition-colors">Benefits</a>
          </div>

          <div className="flex items-center gap-4">
            <a href="https://app.autometrik.online" className="hidden sm:block text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">
              Sign In
            </a>
            <a href="https://app.autometrik.online" className="px-5 py-2.5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-sm font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all outline-none text-center">
              Go to App
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-1 flex flex-col pt-32 pb-20 max-w-7xl mx-auto w-full px-6 relative z-10 space-y-32">
        
        {/* 1. Hero Section */}
        <section className="flex flex-col items-center text-center mt-10 md:mt-20 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-600 text-sm font-medium mb-8">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Empowering Philippine K-12 Education
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Build Better Assessments <br className="hidden md:block"/> with <span className="text-gradient-primary">AutoMetrik</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
            The ultimate unified platform for OMR integration, online examinations, automated scoring, and data-driven item analysis for teachers and schools.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="https://app.autometrik.online" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
              Launch App <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Hero Feature Sub-cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full text-left">
            {[
              { title: "Zero Data Loss", desc: "Auto-saving preserves exam progress even during disconnections.", icon: ShieldCheck, color: "from-blue-50 to-indigo-50", iconCol: "text-indigo-500" },
              { title: "Dual Deployment", desc: "Administer exams entirely online or via printable OMR answer sheets.", icon: Scan, color: "from-emerald-50 to-teal-50", iconCol: "text-emerald-500" },
              { title: "DepEd Compliant", desc: "Instantly generate formatted MPS reports aligned with current guidelines.", icon: FileText, color: "from-rose-50 to-orange-50", iconCol: "text-rose-500" }
            ].map((feature, i) => (
              <div key={i} className={`glass-panel p-6 bg-gradient-to-br ${feature.color}`}>
                <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm ${feature.iconCol}`}>
                  <feature.icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* 2. Problem Section */}
        <section id="problem" className="flex flex-col md:flex-row gap-16 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Traditional testing is broken.</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Teachers spend hours manually checking test papers and computing Mean Percentage Scores (MPS). Item analysis is often skipped due to its complexity, leading to the continuous reuse of poor-quality questions. Online testing solutions exist, but lack reliable integrity monitoring and don't support classrooms without digital devices.
            </p>
            <ul className="space-y-4">
              {[
                "Labor-intensive manual test checking",
                "Complex, error-prone MPS calculations",
                "Inadequate or skipped item analysis",
                "Lack of integrity tracking in online exams"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600">
                  <div className="mt-1 w-5 h-5 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-1/2 w-full grid grid-cols-2 gap-4">
             {/* Abstract visual representation of problem */}
             <div className="glass-panel p-6 bg-gray-50/50 col-span-2 sm:col-span-1 min-h-[150px] flex flex-col justify-center">
                <Clock className="w-8 h-8 text-gray-400 mb-4" />
                <span className="font-semibold text-gray-700">Lost Time</span>
             </div>
             <div className="glass-panel p-6 bg-red-50/30 col-span-2 sm:col-span-1 min-h-[150px] flex flex-col justify-center border-red-100">
                <Calculator className="w-8 h-8 text-red-400 mb-4" />
                <span className="font-semibold text-gray-700">Calculation Errors</span>
             </div>
             <div className="glass-panel p-6 bg-gray-50/50 col-span-2 min-h-[150px] flex flex-col justify-center">
                <ShieldCheck className="w-8 h-8 text-gray-400 mb-4 opacity-50" />
                <span className="font-semibold text-gray-700 line-through decoration-gray-400 decoration-2">Exam Integrity</span>
             </div>
          </div>
        </section>

        {/* 3. Solution Overview */}
        <section className="text-center max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">The AutoMetrik Solution</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              We bridge the gap between classroom reality and data-driven instruction. AutoMetrik provides a unified environment that works whether your students have devices or only paper.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="glass-panel p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe className="w-24 h-24 text-emerald-500" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 relative z-10">Online Ready</h3>
              <p className="text-gray-500 relative z-10">Deploy exams to a secure browser environment with live monitoring and integrity detection.</p>
            </div>
            <div className="glass-panel p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="w-24 h-24 text-indigo-500" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 relative z-10">Paper Optimized</h3>
              <p className="text-gray-500 relative z-10">Export OMR sheets, scan with your camera, and automatically digitize handwritten answers instantly.</p>
            </div>
          </div>
        </section>

        {/* 4. Features Section */}
        <section id="features" className="space-y-16">
          <div className="text-center max-w-2xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Key Features</h2>
             <p className="text-gray-500">Everything you need to manage your academic assessments from creation to detailed reporting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Scan, title: "OMR Integration", desc: "Scan physical bubble sheets utilizing our robust image processing pipeline for instant digitizing." },
              { icon: Globe, title: "Online Examination", desc: "Secure environment with question randomization, strict time enforcement, and auto-saving." },
              { icon: Calculator, title: "Automated Scoring", desc: "No more manual checking. Instant grading as soon as the student hits submit or the scan completes." },
              { icon: BarChart3, title: "Item Analysis", desc: "Automatically computes difficulty and discrimination indices with actionable improvement tips." },
              { icon: FileText, title: "Report Generation", desc: "Export consolidated MPS and performance analytics directly to DepEd-compliant PDF and CSV files." },
              { icon: ShieldCheck, title: "Integrity Tracking", desc: "Z-score algorithm detects unusual behavior like tab switches or erratic pacing in online tests." }
            ].map((feat, i) => (
              <div key={i} className="glass-panel p-8 hover:-translate-y-1 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center text-gray-900 mb-6 border border-gray-100">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feat.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <hr className="border-gray-100" />

        {/* 5. How It Works */}
        <section id="how-it-works" className="flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">How it works</h2>
          
          <div className="w-full max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-100 via-indigo-100 to-emerald-100 -z-10" />
               
               {[
                 { step: "01", title: "Create Quiz", icon: ClipboardList, desc: "Build your quiz once in our centralized question bank." },
                 { step: "02", title: "Deploy Exam", icon: ArrowUpRight, desc: "Assign online to devices or print OMR sheets for paper-based tests." },
                 { step: "03", title: "Auto Grade", icon: CheckCircle2, desc: "Students submit or you scan papers. The system instantly scores." },
                 { step: "04", title: "Analyze", icon: LineChart, desc: "Access MPS, item analysis, and integrity performance reports." }
               ].map((item, i) => (
                  <div key={i} className="flex-1 text-center bg-white p-6 rounded-2xl shadow-sm border border-gray-100 w-full relative group">
                    <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-emerald-500 text-white font-bold flex items-center justify-center text-sm shadow-lg shadow-emerald-500/20 group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <div className="w-16 h-16 rounded-2xl bg-gray-50 mx-auto flex items-center justify-center mb-6 text-emerald-500">
                      <item.icon className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
               ))}
            </div>
          </div>
        </section>

        {/* 6. Benefits (Target Users & ROI) */}
        <section id="benefits" className="space-y-24">
          <div className="text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Designed for everyone in education.</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">It's never been easier to administer fair and insightful examinations.</p>
          </div>

          {/* User Pills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             <div className="glass-panel p-6 flex flex-col items-center text-center">
                <GraduationCap className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">For Students</h3>
                <p className="text-sm text-gray-500">Experience smooth online exams with automatic progress saving, preventing data loss on disconnects.</p>
             </div>
             <div className="glass-panel p-6 flex flex-col items-center text-center">
                <BookOpen className="w-8 h-8 text-indigo-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">For Teachers</h3>
                <p className="text-sm text-gray-500">Save hours on grading and MPS calculations. Get immediate insights on which topics need reteaching.</p>
             </div>
             <div className="glass-panel p-6 flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">For Administrators</h3>
                <p className="text-sm text-gray-500">Access school-wide consolidated reports effortlessly. Maintain strict data isolation and standard compliance.</p>
             </div>
          </div>

          <div className="glass-panel bg-white/40 p-10 md:p-16 text-center max-w-5xl mx-auto border-dashed border-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-10">A sub-second analytics model to rebuild modern learning.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 text-left">
              {[
                "Instant PDF exports",
                "Advanced Z-Score Anomaly detection",
                "Scalable serverless architecture",
                "Cross-device mobile responsiveness",
                "Item Difficulty & Discrimination metrics",
                "Unified online/offline scoring Engine"
              ].map((benefit, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                  <span className="text-sm font-medium text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Final Call to Action */}
        <section className="relative">
          <div className="glass-panel p-16 md:p-24 text-center bg-gradient-to-br from-emerald-50 to-indigo-50/50 overflow-hidden relative">
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-200 rounded-full mix-blend-multiply blur-3xl opacity-30 pointer-events-none" />
             
             <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 relative z-10">
               Ready to upgrade your classrooms?
             </h2>
             <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto relative z-10">
               Join now for the future of transparent and efficient academic evaluations.
             </p>
             
             <div className="flex justify-center relative z-10">
               <a href="https://app.autometrik.online" className="px-10 py-5 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-lg font-bold hover:shadow-2xl hover:shadow-emerald-500/40 hover:-translate-y-1 transition-all flex items-center gap-2">
                 Open AutoMetrik <ArrowRight className="w-5 h-5" />
               </a>
             </div>
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/50 backdrop-blur-sm mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-md bg-gray-900 flex items-center justify-center text-white font-bold text-xs">A</div>
             <span className="font-bold text-gray-900 tracking-tight">AutoMetrik</span>
          </div>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} AutoMetrik System.
          </p>
          <div className="flex gap-6 text-sm text-gray-500 font-medium">
            <a href="#" className="hover:text-emerald-500 transition-colors">Privacy</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Terms</a>
            <a href="#" className="hover:text-emerald-500 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
