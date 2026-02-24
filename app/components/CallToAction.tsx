import { Mail } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative py-32 overflow-hidden bg-slate-950 border-t border-slate-900">
      
      {/* Background Glow Effects (The "Blobs") */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900 border border-slate-800 text-blue-400 text-sm font-bold tracking-widest uppercase mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          Available for hire
        </div>

        {/* Big Heading with Gradient Text */}
        <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
          Let's build something <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            great together.
          </span>
        </h2>
        
        {/* Description */}
        <p className="text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
          I'm currently open to new opportunities, whether locally in Nepal or remote worldwide. 
          Got a question, a project idea, or just want to say hi? My inbox is always open!
        </p>
        
        {/* Glowing Button */}
        <div className="flex justify-center">
          <a 
            href="mailto:itsmeaashisharyal@gmail.com" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-950 font-bold text-lg rounded-full hover:scale-105 transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.5)] hover:shadow-[0_0_60px_-15px_rgba(59,130,246,0.7)]"
          >
            <Mail className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
            <span>Say Hello</span>
          </a>
        </div>

      </div>
    </section>
  );
}