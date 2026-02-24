import Image from "next/image";
import { MapPin, Mail, Briefcase, Code2, Smartphone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden pt-48 pb-32">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        
        {/* Page Header */}
        <div className="mb-16 md:mb-24">
          <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-6">
            A little bit <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">about me.</span>
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* LEFT SIDE: Image & Quick Info */}
          <div className="w-full lg:w-1/3 flex flex-col gap-8 lg:sticky lg:top-32">
            
            {/* Image Container with Tilt Effect */}
            <div className="relative w-72 h-72 md:w-full md:aspect-square mx-auto group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition duration-500"></div>
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 -rotate-3 group-hover:rotate-0 transition-transform duration-500">
                 <Image 
                   src="/me.jpg" 
                   alt="Aashish Aryal" 
                   fill 
                   className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" 
                 />
              </div>
            </div>

            {/* Quick Info Badges */}
            <div className="flex flex-col gap-4 bg-slate-900/50 border border-slate-800 p-6 rounded-3xl">
              <div className="flex items-center gap-3 text-slate-300">
                <MapPin className="text-blue-400" size={20} />
                <span className="font-medium">Kathmandu, Nepal</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Briefcase className="text-purple-400" size={20} />
                <span className="font-medium">Available for hire</span>
              </div>
              <div className="flex items-center gap-3 text-slate-300">
                <Mail className="text-blue-400" size={20} />
                <a href="mailto:hello@example.com" className="font-medium hover:text-white transition-colors">
                  hello@example.com
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Biography */}
          <div className="w-full lg:w-2/3 prose prose-lg prose-invert max-w-none">
            
            <h2 className="text-3xl font-bold text-white mb-6">
              Hi, I'm Aashish Aryal.
            </h2>
            
            <p className="text-slate-400 leading-relaxed mb-6">
              I am a Full Stack Developer and Software Engineer passionate about building high-performance, accessible, and beautiful applications. Whether it's a sleek mobile app or a complex web platform, I love turning ideas into reality.
            </p>

            <p className="text-slate-400 leading-relaxed mb-12">
              My journey in tech started with a curiosity about how things work on the internet. Today, I specialize in the modern web stack, specifically <strong>Next.js, React, Node.js</strong>, and building cross-platform mobile experiences using <strong>Flutter and Firebase</strong>.
            </p>

            {/* What I Do Section */}
            <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-800 pb-4">
              What I Do
            </h3>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <Code2 className="text-blue-400 mb-4" size={32} />
                <h4 className="text-xl font-bold text-white mb-2 text-decoration-none">Web Development</h4>
                <p className="text-sm text-slate-400 m-0">
                  Building lightning-fast, SEO-friendly websites and web apps using Next.js and Tailwind CSS.
                </p>
              </div>

              <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl">
                <Smartphone className="text-purple-400 mb-4" size={32} />
                <h4 className="text-xl font-bold text-white mb-2">Mobile Apps</h4>
                <p className="text-sm text-slate-400 m-0">
                  Crafting beautiful, cross-platform mobile applications for iOS and Android using Flutter.
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed">
              When I'm not writing code, you can find me writing articles for my blog, exploring new open-source libraries, or experimenting with design tools like Figma and Premiere Pro. 
            </p>

          </div>

        </div>
      </div>
    </div>
  );
}