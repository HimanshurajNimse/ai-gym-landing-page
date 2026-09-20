import React from "react";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#050505] text-[#ededed] font-sans overflow-hidden selection:bg-[#ccff00] selection:text-black">
      
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 bg-[#050505]/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-black tracking-tighter flex items-center gap-2">
            <span className="w-6 h-6 rounded-sm bg-[#ccff00] block"></span>
            AIGYM.
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-white/50">
            <a href="#bento" className="hover:text-[#ccff00] transition-colors">Architecture</a>
            <a href="#demo" className="hover:text-[#ccff00] transition-colors">Live Demo</a>
            <a href="#journey" className="hover:text-[#ccff00] transition-colors">Journey</a>
          </div>
          <button className="px-5 py-2 rounded-full bg-white text-black font-bold text-sm hover:bg-[#ccff00] transition-colors">
            Try Beta
          </button>
        </div>
      </nav>

      {/* Radical Hero: Massive Typography + 3D Isometric Screen */}
      <section className="relative pt-40 pb-20 md:pt-52 md:pb-32 px-6">
        {/* Radical Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-gradient-radial from-[#ccff00]/10 via-[#7b61ff]/5 to-transparent blur-[80px] pointer-events-none -z-10"></div>
        
        <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ccff00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ccff00]"></span>
            </span>
            <span className="text-xs font-bold tracking-widest uppercase text-white/70">Groq Llama-3 Powered</span>
          </div>

          <h1 className="text-[4rem] md:text-[8rem] font-black leading-[0.85] tracking-tighter mb-8">
            WEBCAM <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] to-[#00ffcc]">PERSONAL TRAINER.</span>
          </h1>

          <p className="text-xl md:text-2xl text-white/40 max-w-2xl font-medium mb-12">
            No sensors. No wearables. Real-time 3D pose tracking and voice coaching directly in your browser.
          </p>

          {/* Isometric Hero Screen */}
          <div className="relative w-full max-w-5xl mt-12 group perspective-[2000px]">
            <div className="w-full rounded-2xl border border-white/10 bg-black shadow-[0_0_100px_rgba(204,255,0,0.1)] overflow-hidden transform rotate-x-[15deg] scale-95 group-hover:rotate-x-0 group-hover:scale-100 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
              {/* PLACEHOLDER 1: Main Dashboard */}
              <img src="https://placehold.co/1200x675/111/ccff00?text=Massive+App+Dashboard" alt="App Dashboard" className="w-full h-auto opacity-80 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>
        </div>
      </section>

      {/* Bento Box Architecture Section */}
      <section id="bento" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-sm font-bold tracking-widest text-[#ccff00] mb-8 uppercase">Neural Architecture</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[600px]">
          
          {/* Big Bento 1 */}
          <div className="md:col-span-2 md:row-span-2 rounded-[2rem] bg-[#0a0a0a] border border-white/5 p-10 flex flex-col justify-between relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ccff00]/10 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-[#ccff00]/20 transition-colors"></div>
            <div>
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-2xl mb-6">📷</div>
              <h3 className="text-3xl font-bold mb-4">MediaPipe 3D Kinematics</h3>
              <p className="text-white/40 text-lg leading-relaxed">Extracts 33 spatial coordinates of your body geometry at 30 FPS. Analyzes joint angles mathematically to detect knee-valgus, hip depth, and back arching without latency.</p>
            </div>
            {/* PLACEHOLDER 2: Biomechanics */}
            <div className="mt-8 rounded-xl overflow-hidden border border-white/5">
              <img src="https://placehold.co/600x300/111/fff?text=3D+Skeleton+Overlay" alt="Skeleton" className="w-full object-cover" />
            </div>
          </div>

          {/* Small Bento 1 */}
          <div className="md:col-span-2 rounded-[2rem] bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-center relative overflow-hidden">
            <h3 className="text-2xl font-bold mb-2">WebRTC Zero-Latency</h3>
            <p className="text-white/40">100% of video inference is executed locally in your browser memory. We never transmit or save your camera feed to any server. Complete privacy.</p>
          </div>

          {/* Small Bento 2 */}
          <div className="rounded-[2rem] bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-between">
            <div className="text-4xl mb-4">🧠</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Groq Llama-3</h3>
              <p className="text-white/40 text-sm">Lightning fast LLM inference generates dynamic voice corrections.</p>
            </div>
          </div>

          {/* Small Bento 3 */}
          <div className="rounded-[2rem] bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-between">
            <div className="text-4xl mb-4">🩻</div>
            <div>
              <h3 className="text-xl font-bold mb-2">Muscle Maps</h3>
              <p className="text-white/40 text-sm">Post-workout 2D anatomical heatmap generation.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Massive Cinematic Demo */}
      <section id="demo" className="max-w-7xl mx-auto px-6 py-20">
        <div className="rounded-[3rem] bg-[#0a0a0a] border border-white/5 p-4 md:p-8">
          <div className="w-full aspect-video rounded-[2rem] overflow-hidden relative bg-black">
            {/* PLACEHOLDER 3: YouTube Demo */}
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=Placeholder" 
              title="YouTube video player" 
              frameBorder="0" 
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </section>

      {/* The Journey: Sticky Timeline Layout */}
      <section id="journey" className="max-w-7xl mx-auto px-6 py-32 relative">
        <h2 className="text-[4rem] md:text-[6rem] font-black tracking-tighter leading-none mb-32 text-center text-white/10 uppercase">
          Training <br/> Protocol
        </h2>
        
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#ccff00]/50 to-transparent"></div>

          {/* Step 1 */}
          <div className="flex flex-col md:flex-row items-center gap-12 mb-32 relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ccff00] rounded-full shadow-[0_0_20px_#ccff00]"></div>
            <div className="w-full md:w-1/2 md:pr-16 text-left md:text-right pl-24 md:pl-0">
              <span className="text-[#ccff00] font-bold text-xl mb-2 block">01 / Setup</span>
              <h3 className="text-4xl font-black mb-4">Define Parameters.</h3>
              <p className="text-white/40 text-lg">Select your exercise and volume metrics. The engine automatically calibrates its kinematics tracker to your specific movement plane.</p>
            </div>
            <div className="w-full md:w-1/2 md:pl-16 pl-24 md:pl-0">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                {/* PLACEHOLDER 4 */}
                <img src="https://placehold.co/800x600/111/ccff00?text=Setup+Screen" className="w-full h-auto" alt="Setup" />
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32 relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ccff00] rounded-full shadow-[0_0_20px_#ccff00]"></div>
            <div className="w-full md:w-1/2 md:pl-16 pl-24 md:pl-0">
              <span className="text-[#ccff00] font-bold text-xl mb-2 block">02 / Execution</span>
              <h3 className="text-4xl font-black mb-4">Live Correction.</h3>
              <p className="text-white/40 text-lg">Step back. The WebRTC stream paints a live mesh over your body. The voice engine speaks out loud if you lose tension or depth.</p>
            </div>
            <div className="w-full md:w-1/2 md:pr-16 pl-24 md:pr-0 text-left md:text-right">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                {/* PLACEHOLDER 5 */}
                <img src="https://placehold.co/800x600/111/ccff00?text=Live+Tracking+Screen" className="w-full h-auto" alt="Live Tracking" />
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col md:flex-row items-center gap-12 relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ccff00] rounded-full shadow-[0_0_20px_#ccff00]"></div>
            <div className="w-full md:w-1/2 md:pr-16 text-left md:text-right pl-24 md:pl-0">
              <span className="text-[#ccff00] font-bold text-xl mb-2 block">03 / Analytics</span>
              <h3 className="text-4xl font-black mb-4">Post-Action Intel.</h3>
              <p className="text-white/40 text-lg">Instantly review a generated 2D muscle heatmap indicating exactly which tissues were targeted, alongside a text report card of your errors.</p>
            </div>
            <div className="w-full md:w-1/2 md:pl-16 pl-24 md:pl-0">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                {/* PLACEHOLDER 6 */}
                <img src="https://placehold.co/800x600/111/ccff00?text=Analytics+Screen" className="w-full h-auto" alt="Analytics" />
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 mb-32 relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ccff00] rounded-full shadow-[0_0_20px_#ccff00]"></div>
            <div className="w-full md:w-1/2 md:pl-16 pl-24 md:pl-0">
              <span className="text-[#ccff00] font-bold text-xl mb-2 block">04 / History</span>
              <h3 className="text-4xl font-black mb-4">Track Progress.</h3>
              <p className="text-white/40 text-lg">Every set and form mistake is securely logged locally. Review your past workouts to track volume and identify recurring form issues.</p>
            </div>
            <div className="w-full md:w-1/2 md:pr-16 pl-24 md:pr-0 text-left md:text-right">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                {/* PLACEHOLDER 7 */}
                <img src="https://placehold.co/800x600/111/ccff00?text=History+Screen" className="w-full h-auto" alt="History Tracking" />
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="flex flex-col md:flex-row items-center gap-12 relative">
            <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#ccff00] rounded-full shadow-[0_0_20px_#ccff00]"></div>
            <div className="w-full md:w-1/2 md:pr-16 text-left md:text-right pl-24 md:pl-0">
              <span className="text-[#ccff00] font-bold text-xl mb-2 block">05 / Education</span>
              <h3 className="text-4xl font-black mb-4">Video Tutorials.</h3>
              <p className="text-white/40 text-lg">Not sure how to perform a rep? Watch high-quality, embedded tutorial videos before you start your session to learn the mechanics.</p>
            </div>
            <div className="w-full md:w-1/2 md:pl-16 pl-24 md:pl-0">
              <div className="rounded-2xl overflow-hidden border border-white/10">
                {/* PLACEHOLDER 8 */}
                <img src="https://placehold.co/800x600/111/ccff00?text=Tutorial+Screen" className="w-full h-auto" alt="Tutorials" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-white/30 text-sm">
        <p>AIGYM &copy; 2026. The future of training.</p>
      </footer>
    </main>
  );
}
