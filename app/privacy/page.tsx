import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: "Privacy Policy | Aashish Aryal",
  description: "Privacy Policy for Aashish Aryal's personal portfolio.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden pt-40 pb-32">
      
      {/* Background Glows (Matching the rest of the site) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-3xl mx-auto px-6">
        
        {/* Back Button */}
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-slate-400 hover:text-blue-400 transition-colors mb-12 font-medium"
        >
          <ArrowLeft size={20} />
          Back to home
        </Link>

        {/* Page Header */}
        <div className="mb-12 border-b border-slate-800 pb-12">
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-4 tracking-tight">
            Privacy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Policy</span>
          </h1>
          <p className="text-slate-400 font-mono text-sm">
            Last updated: February 25, 2026
          </p>
        </div>

        {/* Content (Using Tailwind Typography for perfect reading UI) */}
        <div className="prose prose-lg prose-invert prose-slate max-w-none text-slate-300 prose-headings:text-white prose-headings:font-black prose-headings:tracking-tight prose-a:text-blue-400 hover:prose-a:text-blue-300">
          
          <p>
            Hello! I am Aashish Aryal, and this is my personal portfolio website. I value your privacy and believe in being completely transparent about how data is handled on this site. 
          </p>
          <p>
            <strong>TL;DR:</strong> I don't track you across the internet, I don't sell your data, and I only collect what is absolutely necessary to make the website function correctly.
          </p>

          <h2>1. Information I Collect</h2>
          <p>
            This website is primarily a static portfolio and blog. I collect very minimal information:
          </p>
          <ul>
            <li>
              <strong>Analytics:</strong> I use basic, privacy-friendly analytics (like Vercel Analytics) to see how many people read my blog and which countries they visit from. This data is anonymized and does not identify you personally.
            </li>
            <li>
              <strong>Communications:</strong> If you use the "Say Hello" button or email me directly, I will have your email address and any information you provide in your message. I only use this to reply to you.
            </li>
          </ul>

          <h2>2. Cookies and Tracking</h2>
          <p>
            This site does not use invasive tracking cookies or third-party advertising pixels (like Facebook Pixel or Google Ads). Any cookies used are strictly for the core functionality of the website (for example, remembering if you closed a banner).
          </p>

          <h2>3. Third-Party Services</h2>
          <p>
            To build and host this website, I use the following third-party services, which have their own privacy policies:
          </p>
          <ul>
            <li><strong>Vercel:</strong> Used for hosting the website.</li>
            <li><strong>Sanity.io:</strong> Used as the Content Management System (CMS) for my blog and projects.</li>
            <li><strong>GitHub:</strong> Used for hosting the source code.</li>
          </ul>

          <h2>4. External Links</h2>
          <p>
            My blog posts and project pages contain links to external websites (like live demos, GitHub repos, or other articles). I am not responsible for the privacy practices or the content of those external sites. Please read their privacy policies when you visit them.
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Since I do not store personal user accounts or databases of user information, there is no personal data of yours to delete. However, if you have emailed me and want me to delete our email thread, simply ask and I will do so.
          </p>

          <h2>6. Contact Me</h2>
          <p>
            If you have any questions about this Privacy Policy, please feel free to reach out to me:
          </p>
          <ul>
            <li><strong>Email:</strong> <a href="mailto:hello@example.com">hello@example.com</a></li>
            <li><strong>Location:</strong> Kathmandu, Nepal</li>
          </ul>

        </div>
      </div>
    </div>
  );
}