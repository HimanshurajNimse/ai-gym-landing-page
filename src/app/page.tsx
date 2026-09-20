"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { Cpu, Brain, Zap, Terminal, Github, Code2, ShieldCheck, Activity } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);
  
  // Master Scroll
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Mouse Parallax for Hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth) * 2 - 1);
      mouseY.set((e.clientY / innerHeight) * 2 - 1);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Hero scroll transforms
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);
  
  // Entering the product
  const productZ = useTransform(scrollYProgress, [0, 0.2], [0, 1000]);
  const productOpacity = useTransform(scrollYProgress, [0, 0.1, 0.2], [1, 1, 0]);

  return (
    <main ref={containerRef} className="bg-[#020202] text-[#f5f5f5] selection:bg-white selection:text-black overflow-x-hidden">
      
      {/* Subtle Environmental Motion Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40 mix-blend-screen">
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-gradient-radial from-white/10 to-transparent blur-[100px] animate-pulse" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-[-20%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-gradient-radial from-[#ffffff]/5 to-transparent blur-[120px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
      </div>

      {/* Floating Minimal Navigation */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="fixed w-full top-0 z-50 px-8 py-6 mix-blend-difference pointer-events-none"
      >
        <div className="max-w-[1600px] mx-auto flex justify-between items-center pointer-events-auto">
          <div className="text-xl font-bold tracking-tight">AI GYM</div>
          <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide text-white/50">
            <a href="#product" className="hover:text-white transition-colors">Product</a>
            <a href="#system" className="hover:text-white transition-colors">System</a>
            <a href="#tech" className="hover:text-white transition-colors">Technology</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Capabilities</a>
          </div>
          <div className="flex gap-6 items-center">
            <button className="text-white/50 hover:text-white transition-colors"><Github className="w-5 h-5" /></button>
            <button className="text-sm font-medium hover:opacity-70 transition-opacity">Launch App &rarr;</button>
          </div>
        </div>
      </motion.nav>

      <div className="relative z-10">

        {/* SECTION 01 — CINEMATIC HERO */}
        <section className="h-screen relative flex flex-col items-center justify-center">
          <motion.div 
            style={{ opacity: heroOpacity, scale: heroScale }} 
            className="flex flex-col items-center justify-center text-center px-6 z-10"
          >
            <motion.span 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2, duration: 1 }}
              className="text-xs tracking-[0.2em] uppercase text-white/50 mb-8 block"
            >
              The Future of Biomechanics
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-medium tracking-tighter leading-[0.9] mb-8"
              style={{ fontSize: "clamp(64px, 12vw, 180px)" }}
            >
              AI GYM COACH
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
              className="text-xl md:text-2xl text-white/60 max-w-2xl font-light tracking-tight mb-12"
            >
              Turn complex physical training into something effortless. Everything happens in one intelligent, zero-latency workspace.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 1 }} className="flex flex-col sm:flex-row gap-6 items-center">
              <button className="px-8 py-4 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform duration-300">
                Explore the Experience
              </button>
              <button className="px-8 py-4 flex items-center gap-2 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-300">
                <Github className="w-4 h-4" /> View Source Code
              </button>
            </motion.div>
          </motion.div>
        </section>

        {/* SECTION 01.5 — ENGINEERING METRICS */}
        <section className="py-20 border-y border-white/5 bg-white/[0.01]">
          <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div className="flex flex-col items-center text-center pt-6 md:pt-0">
              <ShieldCheck className="w-8 h-8 text-[#ccff00] mb-4 opacity-80" />
              <h4 className="text-4xl font-medium tracking-tighter mb-2">100%</h4>
              <p className="text-sm tracking-widest uppercase text-white/40">Local Processing. Zero cloud tracking.</p>
            </div>
            <div className="flex flex-col items-center text-center pt-6 md:pt-0">
              <Activity className="w-8 h-8 text-[#ccff00] mb-4 opacity-80" />
              <h4 className="text-4xl font-medium tracking-tighter mb-2">30fps</h4>
              <p className="text-sm tracking-widest uppercase text-white/40">3D skeletal mesh inference speed.</p>
            </div>
            <div className="flex flex-col items-center text-center pt-6 md:pt-0">
              <Code2 className="w-8 h-8 text-[#ccff00] mb-4 opacity-80" />
              <h4 className="text-4xl font-medium tracking-tighter mb-2">&lt; 1s</h4>
              <p className="text-sm tracking-widest uppercase text-white/40">Neural voice generation latency.</p>
            </div>
          </div>
        </section>

        {/* SECTION 02 — WHAT IS IT? */}
        <section id="product" className="py-40 px-6 max-w-[1400px] mx-auto relative z-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-medium tracking-tighter mb-8 leading-[1.1]">
                More than an app.<br/>
                <span className="text-white/40">An extension of you.</span>
              </h2>
            </div>
            <div className="space-y-16">
              <div className="border-l border-white/20 pl-8">
                <span className="text-xs tracking-widest uppercase text-white/40 block mb-4">01 / Real-Time</span>
                <p className="text-2xl font-light tracking-tight">Zero-latency skeletal extraction directly in your browser memory.</p>
              </div>
              <div className="border-l border-white/20 pl-8">
                <span className="text-xs tracking-widest uppercase text-white/40 block mb-4">02 / Intelligent</span>
                <p className="text-2xl font-light tracking-tight">Neural voice models speak out loud to correct your posture.</p>
              </div>
              <div className="border-l border-white/20 pl-8">
                <span className="text-xs tracking-widest uppercase text-white/40 block mb-4">03 / Personalized</span>
                <p className="text-2xl font-light tracking-tight">Generates a bespoke 2D anatomical heatmap after every session.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03 — HOW IT WORKS (Cinematic System Flow) */}
        <section id="system" className="py-40 px-6 max-w-[1400px] mx-auto relative z-20 border-t border-white/5">
          <h2 className="text-center text-sm tracking-[0.2em] uppercase text-white/50 mb-32">The Intelligence Architecture</h2>
          
          <div className="relative">
            {/* Flow Line */}
            <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent md:-translate-x-1/2"></div>
            
            <div className="space-y-40">
              {/* Stage 1 */}
              <div className="flex flex-col md:flex-row items-center justify-between relative group">
                <div className="absolute left-[28px] md:left-1/2 top-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-[3] transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
                <div className="w-full md:w-[40%] pl-20 md:pl-0 md:text-right">
                  <span className="text-xs tracking-widest uppercase text-white/40 mb-2 block">Input</span>
                  <h3 className="text-3xl font-medium mb-4">Spatial Capture.</h3>
                </div>
                <div className="w-full md:w-[40%] pl-20 md:pl-0 mt-4 md:mt-0">
                  <p className="text-lg font-light text-white/60">33-point 3D landmark detection running at 30FPS natively via WebAssembly without ever leaving your device.</p>
                </div>
              </div>

              {/* Stage 2 */}
              <div className="flex flex-col md:flex-row items-center justify-between relative group">
                <div className="absolute left-[28px] md:left-1/2 top-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-[3] transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
                <div className="w-full md:w-[40%] pl-20 md:pl-0 md:text-right">
                  <span className="text-xs tracking-widest uppercase text-white/40 mb-2 block">Processing</span>
                  <h3 className="text-3xl font-medium mb-4">Kinematic Inference.</h3>
                </div>
                <div className="w-full md:w-[40%] pl-20 md:pl-0 mt-4 md:mt-0">
                  <p className="text-lg font-light text-white/60">Complex geometric calculations detect knee-valgus, squat depth, and back arching dynamically.</p>
                </div>
              </div>

              {/* Stage 3 */}
              <div className="flex flex-col md:flex-row items-center justify-between relative group">
                <div className="absolute left-[28px] md:left-1/2 top-1/2 w-2 h-2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2 group-hover:scale-[3] transition-transform duration-500 shadow-[0_0_15px_rgba(255,255,255,1)]"></div>
                <div className="w-full md:w-[40%] pl-20 md:pl-0 md:text-right">
                  <span className="text-xs tracking-widest uppercase text-white/40 mb-2 block">Output</span>
                  <h3 className="text-3xl font-medium mb-4">Neural Correction.</h3>
                </div>
                <div className="w-full md:w-[40%] pl-20 md:pl-0 mt-4 md:mt-0">
                  <p className="text-lg font-light text-white/60">Sub-second LLM integration generates dynamic voice corrections before you even finish your rep.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 03.5 — TECH STACK */}
        <section id="tech" className="py-40 px-6 max-w-[1400px] mx-auto relative z-20 border-t border-white/5">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Built on the edge.</h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto">
              We combined the most advanced client-side vision AI with blazing fast neural processing to ensure total privacy and zero lag.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { 
                icon: <Cpu className="w-8 h-8 text-white mb-6" />, 
                title: "MediaPipe Vision", 
                desc: "Powers the real-time 3D skeletal extraction entirely in browser memory. No video ever touches a server." 
              },
              { 
                icon: <Brain className="w-8 h-8 text-white mb-6" />, 
                title: "Groq Llama-3", 
                desc: "Hyper-fast LLM inference translates your raw kinematic mistakes into natural, conversational voice feedback." 
              },
              { 
                icon: <Zap className="w-8 h-8 text-white mb-6" />, 
                title: "WebRTC Core", 
                desc: "Handles local video stream multiplexing and camera lifecycle management with absolute zero latency." 
              },
              { 
                icon: <Terminal className="w-8 h-8 text-white mb-6" />, 
                title: "Streamlit Engine", 
                desc: "The entire application logic is wrapped in a lightweight, extensible Python architecture for seamless data processing." 
              }
            ].map((tech, idx) => (
              <div key={idx} className="group rounded-[2rem] border border-white/10 bg-white/[0.02] p-10 hover:bg-white/[0.05] transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 transition-opacity duration-500 transform group-hover:scale-150 group-hover:-rotate-12">
                  {tech.icon}
                </div>
                <div className="relative z-10">
                  {tech.icon}
                  <h3 className="text-2xl font-medium tracking-tight mb-4">{tech.title}</h3>
                  <p className="text-white/50 font-light leading-relaxed">{tech.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 03.75 — DEVELOPER EXPERIENCE */}
        <section className="py-40 px-6 max-w-[1400px] mx-auto relative z-20">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Beautifully engineered.</h2>
              <p className="text-xl text-white/50 font-light mb-8 max-w-md">
                The codebase is designed for extreme modularity. Built with clean Python and Streamlit, extending the intelligence of the platform is as simple as defining a new kinematic heuristic.
              </p>
              <ul className="space-y-4 font-mono text-sm text-white/60">
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></div> Modular heuristic engine</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></div> Type-safe kinematics</li>
                <li className="flex items-center gap-3"><div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></div> Zero configuration deployment</li>
              </ul>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="rounded-[2rem] border border-white/20 bg-[#0a0a0a] overflow-hidden shadow-2xl relative">
                {/* Mac OS Window Controls */}
                <div className="flex items-center gap-2 px-6 py-4 bg-white/[0.02] border-b border-white/10">
                  <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                  <span className="ml-4 text-xs font-mono text-white/30">engine/kinematics.py</span>
                </div>
                {/* Code Block */}
                <div className="p-8 overflow-x-auto">
                  <pre className="text-sm font-mono leading-relaxed">
                    <code className="text-[#f5f5f5]">
                      <span className="text-[#ff7b72]">def</span> <span className="text-[#d2a8ff]">evaluate_squat_depth</span>(landmarks):<br/>
                      <span className="text-white/30">  """Analyzes hip-to-knee ratio in real-time"""</span><br/>
                      <br/>
                      {"  "}hip_y = landmarks[Pose.LEFT_HIP].y<br/>
                      {"  "}knee_y = landmarks[Pose.LEFT_KNEE].y<br/>
                      <br/>
                      {"  "}<span className="text-[#ff7b72]">if</span> hip_y &gt; knee_y:<br/>
                      {"    "}<span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">"Perfect depth. Explode up!"</span><br/>
                      {"  "}<span className="text-[#ff7b72]">else</span>:<br/>
                      {"    "}<span className="text-[#ff7b72]">return</span> <span className="text-[#a5d6ff]">"Drop lower. Break parallel."</span>
                    </code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 04 — CAPABILITIES */}
        <section id="capabilities" className="py-40 px-6 max-w-[1400px] mx-auto relative z-20 border-t border-white/5">
          <div className="space-y-40">
            
            {/* Capability 1 */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <h3 className="text-4xl font-medium mb-6 tracking-tight">Intelligent Analysis</h3>
                <p className="text-xl text-white/50 font-light mb-8 max-w-md">Define your parameters. The engine instantly calibrates tracking nodes to match your chosen movement plane.</p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 group overflow-hidden">
                  <img src="https://placehold.co/800x600/111/fff?text=Setup+Workspace" alt="Setup" className="w-full h-full object-cover rounded-xl opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
              </div>
            </div>

            {/* Capability 2 */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="w-full lg:w-1/2 lg:pl-16">
                <h3 className="text-4xl font-medium mb-6 tracking-tight">Adaptive Knowledge</h3>
                <p className="text-xl text-white/50 font-light mb-8 max-w-md">Watch high-quality tutorial videos embedded directly into your flow before your session begins.</p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 group overflow-hidden">
                  <img src="https://placehold.co/800x600/111/fff?text=Educational+Video" alt="Tutorials" className="w-full h-full object-cover rounded-xl opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
              </div>
            </div>

            {/* Capability 3 */}
            <div className="flex flex-col lg:flex-row gap-16 items-center">
              <div className="w-full lg:w-1/2">
                <h3 className="text-4xl font-medium mb-6 tracking-tight">Anatomical Insight</h3>
                <p className="text-xl text-white/50 font-light mb-8 max-w-md">Receive a glowing 2D anatomical heatmap showing exactly which muscle groups were targeted.</p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 group overflow-hidden">
                  <img src="https://placehold.co/800x600/111/fff?text=2D+Muscle+Map" alt="Heatmap" className="w-full h-full object-cover rounded-xl opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
              </div>
            </div>

            {/* Capability 4 */}
            <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
              <div className="w-full lg:w-1/2 lg:pl-16">
                <h3 className="text-4xl font-medium mb-6 tracking-tight">Continuous Evolution</h3>
                <p className="text-xl text-white/50 font-light mb-8 max-w-md">Every set and form mistake is securely logged locally. Track your volume and admire your achievements.</p>
              </div>
              <div className="w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-[2rem] border border-white/10 bg-white/[0.02] p-4 group overflow-hidden">
                  <img src="https://placehold.co/800x600/111/fff?text=Workout+History" alt="History" className="w-full h-full object-cover rounded-xl opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]" />
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* SECTION 05 — PRODUCT IN ACTION */}
        <section className="py-40 px-6 max-w-[1400px] mx-auto relative z-25">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-medium tracking-tighter">Experience the Engine.</h2>
          </div>
          <div className="w-full aspect-video rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl relative bg-black">
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Placeholder" 
              title="Demo" 
              frameBorder="0" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </section>

        {/* SECTION 06 & 07 — WHY IT MATTERS & FINAL CTA */}
        <section className="pt-40 pb-20 px-6 text-center relative z-20 border-t border-white/5">
          <h2 className="text-[3rem] md:text-[6rem] font-medium tracking-tighter leading-[1.1] mb-8">
            Technology should disappear.<br/>
            <span className="text-white/40">The experience remains.</span>
          </h2>
          <p className="text-xl text-white/50 font-light max-w-2xl mx-auto mb-16">
            Ready to experience the future of training?
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-40">
            <button className="px-10 py-4 rounded-full bg-white text-black font-medium text-sm hover:scale-105 transition-transform duration-300">
              Enter AI GYM &rarr;
            </button>
            <button className="px-10 py-4 flex items-center gap-2 border border-white/20 text-white rounded-full text-sm font-medium hover:bg-white/10 transition-colors duration-300">
              <Github className="w-4 h-4" /> Star on GitHub
            </button>
          </div>
        </section>

        {/* SECTION 08 — MASSIVE FOOTER */}
        <footer className="border-t border-white/5 bg-[#020202] pt-20 pb-10 px-6">
          <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-2">
              <div className="text-2xl font-bold tracking-tight mb-4">AI GYM COACH</div>
              <p className="text-white/40 max-w-sm text-sm leading-relaxed mb-6">
                The world's first fully localized, zero-latency computer vision coaching protocol. Train flawlessly with neural intelligence watching your every move.
              </p>
              <div className="flex gap-4">
                <button className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors"><Github className="w-4 h-4" /></button>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6">Product</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Architecture</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Releases</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-medium mb-6">Company</h4>
              <ul className="space-y-4 text-sm text-white/40">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms</a></li>
              </ul>
            </div>
          </div>
          
          <div className="max-w-[1400px] mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/30">
            <p>&copy; {new Date().getFullYear()} AI Gym Coach. All rights reserved.</p>
            <p className="mt-4 md:mt-0 flex items-center gap-2">Built with precision for athletes <span className="text-red-500">♥</span></p>
          </div>
        </footer>

      </div>
    </main>
  );
}
