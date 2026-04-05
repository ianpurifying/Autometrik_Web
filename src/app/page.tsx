import React from 'react';
import Image from 'next/image';
import { 
  ArrowRight, CheckCircle2, Scan, FileText, 
  LineChart, Users, BookOpen, Clock, Calculator, 
  ShieldCheck, ArrowUpRight, GraduationCap,
  Globe, ClipboardList, BarChart3
} from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-pattern relative overflow-x-hidden flex flex-col font-sans">
      
      {/* Background decorations (Subtle Gradients) */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[40%] bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-x-0 border-t-0 rounded-none bg-white/70">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Image src="/logo.png" alt="AutoMetrik Logo" width={32} height={32} className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl tracking-tight text-gray-900">AutoMetrik</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
            <a href="#problem" className="hover:text-emerald-600 transition-colors">Why</a>
            <a href="#features" className="hover:text-emerald-600 transition-colors">Features</a>
            <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How It Works</a>
            <a href="#benefits" className="hover:text-emerald-600 transition-colors">Who It's For</a>
          </div>

          <div className="flex items-center gap-4">
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
            Built for Philippine K-12 Schools
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight">
            Smarter Exams, <br className="hidden md:block"/> Instant <span className="text-gradient-primary">Results</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl leading-relaxed">
            Create exams, grade automatically, and generate reports — online or on paper.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="https://app.autometrik.online" className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold hover:shadow-xl hover:shadow-emerald-500/30 transition-all flex items-center justify-center gap-2">
              Get Started <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Hero Feature Sub-cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 w-full text-left">
            {[
              { title: "Auto-Save", desc: "Student progress is saved automatically, even if they disconnect.", icon: ShieldCheck, color: "from-blue-50 to-indigo-50", iconCol: "text-indigo-500" },
              { title: "Online or Paper", desc: "Give exams on devices or print OMR bubble sheets — your choice.", icon: Scan, color: "from-emerald-50 to-teal-50", iconCol: "text-emerald-500" },
              { title: "DepEd-Ready Reports", desc: "Generate MPS reports that follow DepEd format in one click.", icon: FileText, color: "from-rose-50 to-orange-50", iconCol: "text-rose-500" }
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Manual grading wastes time.</h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              Teachers check papers by hand, compute MPS manually, and rarely have time for item analysis. Existing online tools lack cheating detection and don't work in classrooms without devices.
            </p>
            <ul className="space-y-4">
              {[
                "Hours spent checking papers by hand",
                "Error-prone MPS calculations",
                "Item analysis skipped or ignored",
                "No way to detect cheating online"
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
                <span className="font-semibold text-gray-700">Wasted Hours</span>
             </div>
             <div className="glass-panel p-6 bg-red-50/30 col-span-2 sm:col-span-1 min-h-[150px] flex flex-col justify-center border-red-100">
                <Calculator className="w-8 h-8 text-red-400 mb-4" />
                <span className="font-semibold text-gray-700">Manual Errors</span>
             </div>
             <div className="glass-panel p-6 bg-gray-50/50 col-span-2 min-h-[150px] flex flex-col justify-center">
                <ShieldCheck className="w-8 h-8 text-gray-400 mb-4 opacity-50" />
                <span className="font-semibold text-gray-700 line-through decoration-gray-400 decoration-2">Cheating Detection</span>
             </div>
          </div>
        </section>

        {/* 3. Solution Overview */}
        <section className="text-center max-w-3xl mx-auto space-y-16">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">One tool for both setups.</h2>
            <p className="text-gray-500 text-lg leading-relaxed">
              AutoMetrik works whether your students use devices or paper. Create once, deploy anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
            <div className="glass-panel p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Globe className="w-24 h-24 text-emerald-500" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 relative z-10">Online Exams</h3>
              <p className="text-gray-500 relative z-10">Students take exams in a secure browser with live cheating detection.</p>
            </div>
            <div className="glass-panel p-8 relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <FileText className="w-24 h-24 text-indigo-500" />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 relative z-10">Paper Exams</h3>
              <p className="text-gray-500 relative z-10">Print bubble sheets, scan with your phone camera, and get instant grades.</p>
            </div>
          </div>
        </section>

        {/* 4. Features Section */}
        <section id="features" className="space-y-16">
          <div className="text-center max-w-2xl mx-auto">
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Features</h2>
             <p className="text-gray-500">From exam creation to final reports — everything in one place.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Scan, title: "OMR Scanning", desc: "Scan printed bubble sheets with your phone and get scores instantly." },
              { icon: Globe, title: "Online Exams", desc: "Randomized questions, timed sessions, and auto-saving built in." },
              { icon: Calculator, title: "Auto Grading", desc: "Scores are computed the moment a student submits or a sheet is scanned." },
              { icon: BarChart3, title: "Item Analysis", desc: "See which questions are too hard, too easy, or poorly written." },
              { icon: FileText, title: "MPS Reports", desc: "Export DepEd-formatted MPS reports as PDF or CSV in one click." },
              { icon: ShieldCheck, title: "Cheating Detection", desc: "Flags tab switches, unusual timing, and suspicious answer patterns." }
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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-center">How It Works</h2>
          
          <div className="w-full max-w-5xl">
            <div className="flex flex-col md:flex-row gap-12 items-center relative">
               {/* Connecting Line */}
               <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-100 via-indigo-100 to-emerald-100 -z-10" />
               
               {[
                 { step: "01", title: "Create", icon: ClipboardList, desc: "Add questions to your quiz from the question bank." },
                 { step: "02", title: "Deploy", icon: ArrowUpRight, desc: "Send online or print OMR sheets for paper exams." },
                 { step: "03", title: "Grade", icon: CheckCircle2, desc: "Scores are calculated automatically on submit or scan." },
                 { step: "04", title: "Review", icon: LineChart, desc: "View MPS, item analysis, and integrity reports." }
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
             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Built for every role.</h2>
             <p className="text-gray-500 max-w-2xl mx-auto">Students, teachers, and admins each get the tools they need.</p>
          </div>

          {/* User Pills */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
             <div className="glass-panel p-6 flex flex-col items-center text-center">
                <GraduationCap className="w-8 h-8 text-emerald-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">For Students</h3>
                <p className="text-sm text-gray-500">Take exams online with auto-save — no lost answers, even if you disconnect.</p>
             </div>
             <div className="glass-panel p-6 flex flex-col items-center text-center">
                <BookOpen className="w-8 h-8 text-indigo-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">For Teachers</h3>
                <p className="text-sm text-gray-500">Stop grading by hand. See which topics need reteaching at a glance.</p>
             </div>
             <div className="glass-panel p-6 flex flex-col items-center text-center">
                <Users className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="font-bold text-gray-900 mb-2">For Administrators</h3>
                <p className="text-sm text-gray-500">View school-wide reports with data kept separate per class and section.</p>
             </div>
          </div>

          <div className="glass-panel bg-white/40 p-10 md:p-16 text-center max-w-5xl mx-auto border-dashed border-2">
            <h3 className="text-2xl font-bold text-gray-900 mb-10">More under the hood.</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-6 gap-x-8 text-left">
              {[
                "One-click PDF exports",
                "Anomaly detection for cheating",
                "Works on any device",
                "Mobile-friendly interface",
                "Difficulty & discrimination metrics",
                "Same scoring for online and paper"
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
                 Get Started <ArrowRight className="w-5 h-5" />
               </a>
             </div>
          </div>
        </section>
        
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white/50 backdrop-blur-sm mt-auto relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
             <Image src="/logo.png" alt="AutoMetrik Logo" width={24} height={24} className="w-6 h-6 object-contain" />
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
