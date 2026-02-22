import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Profile Pic Placeholder */}
        <div className="w-64 h-64 bg-slate-200 rounded-full flex-shrink-0 overflow-hidden relative border-4 border-white shadow-lg">
           {/* Replace this src with your actual photo URL later */}
           <Image src="https://placehold.co/400" alt="Me" fill className="object-cover" />
        </div>

        <div>
          <h1 className="text-4xl font-black mb-6">
            Hi, I'm Aashish.
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
            I am a software engineer passionate about building high-performance web applications. 
            I specialize in Next.js, React, and modern UI design.
          </p>
          <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            When I'm not coding, I'm writing about tech, exploring new libraries, or contributing to open source.
          </p>
        </div>
      </div>
    </div>
  );
}