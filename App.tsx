
import React, { useState, useEffect } from 'react';
import {
  Calendar,
  Mail,
  MapPin,
  CheckCircle2,
  Sun,
  Moon,
  ExternalLink,
  Linkedin,
  Github,
  GraduationCap,
  ChevronRight,
  User,
  Briefcase,
  Code2,
  FolderKanban,
  Facebook,
  FileText,
  Bot,
  X
} from 'lucide-react';
import { PROJECTS, TECH_STACK, EXPERIENCE, CERTIFICATIONS, TECH_LOGOS } from './constants';
import ChatBot from './components/ChatBot';
import EmailModal from './components/EmailModal';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
  });
  const [showPhotoModal, setShowPhotoModal] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [showEmailModal, setShowEmailModal] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen pb-2 transition-colors duration-300 ${darkMode ? 'bg-black' : 'bg-[#fcfcfc]'}`}>
      <div className="max-w-5xl mx-auto px-3 py-6 md:py-4">

        {/* Header Section */}
        <div className="card no-hover p-8 mb-5 flex flex-col items-center md:flex-row md:items-start text-center md:text-left gap-10 relative">
          <div className="absolute top-6 right-6">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2.5 rounded-xl bg-slate-50 dark:bg-black border border-slate-200 dark:border-neutral-800 hover:bg-slate-100 dark:hover:bg-neutral-900 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? <Sun size={18} className="text-yellow-400" /> : <Moon size={18} className="text-slate-600" />}
            </button>
          </div>

          <div
            className="w-40 h-40 rounded-2xl overflow-hidden flex-shrink-0 border-2 border-slate-200 dark:border-neutral-800 bg-gradient-to-br from-blue-100 to-purple-100 dark:from-neutral-900 dark:to-neutral-800 cursor-pointer hover:ring-4 hover:ring-blue-500/30 transition-all"
            onClick={() => setShowPhotoModal(true)}
          >
            <img
              src="android-chrome-512x512.png"
              alt="Eliza Abing"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.parentElement!.innerHTML = '<div class="profile-fallback">EA</div>';
              }}
            />
          </div>

          <div className="flex-grow pt-2">
            <div className="flex items-center justify-center md:justify-start gap-2 mb-1.5">
              <h1 className="text-2xl font-extrabold tracking-tight">Eliza Abing</h1>
              <svg viewBox="0 0 22 22" width="20" height="20" className="text-blue-500">
                <path fill="currentColor" d="M20.396 11c-.018-.646-.215-1.275-.57-1.816-.354-.54-.852-.972-1.438-1.246.223-.607.27-1.264.14-1.897-.131-.634-.437-1.218-.882-1.687-.47-.445-1.053-.75-1.687-.882-.633-.13-1.29-.083-1.897.14-.273-.587-.704-1.086-1.245-1.44S11.647 1.62 11 1.604c-.646.017-1.273.213-1.813.568s-.969.854-1.24 1.44c-.608-.223-1.267-.272-1.902-.14-.635.13-1.22.436-1.69.882-.445.47-.749 1.055-.878 1.688-.13.633-.08 1.29.144 1.896-.587.274-1.087.705-1.443 1.245-.356.54-.555 1.17-.574 1.817.02.647.218 1.276.574 1.817.356.54.856.972 1.443 1.245-.224.606-.274 1.263-.144 1.896.13.634.433 1.218.877 1.688.47.443 1.054.747 1.687.878.633.132 1.29.084 1.897-.136.274.586.705 1.084 1.246 1.439.54.354 1.17.551 1.816.569.647-.016 1.276-.213 1.817-.567s.972-.854 1.245-1.44c.604.239 1.266.296 1.903.164.636-.132 1.22-.447 1.68-.907.46-.46.776-1.044.908-1.681.132-.637.075-1.299-.165-1.903.586-.274 1.084-.705 1.439-1.246.354-.54.551-1.17.569-1.816zM9.662 14.85l-3.429-3.428 1.293-1.302 2.072 2.072 4.4-4.794 1.347 1.246z" />
              </svg>
            </div>

            <div className="flex items-center justify-center md:justify-start gap-1 text-slate-500 text-[13px] font-medium mb-3">
              <MapPin size={14} className="text-slate-400" />
              <span>Davao City, Philippines</span>
            </div>

            <p className="text-[14px] font-medium text-slate-600 dark:text-neutral-400 mb-8 max-w-xl">
              Aspiring Full-Stack Developer | Student Freelancer | UI/UX & SEO
            </p>

            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3">
              <a 
                href="https://cal.com/eliza-abing-0uxyqm" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-black text-white dark:bg-white dark:text-black rounded-xl text-[13px] font-bold hover:opacity-90 transition-all shadow-sm"
              >
                <Calendar size={16} /> Schedule a Call
              </a>
              <button 
                onClick={() => setShowEmailModal(true)}
                className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black border border-slate-200 dark:border-neutral-800 rounded-xl text-[13px] font-bold hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors shadow-sm"
              >
                <Mail size={16} /> Send Email
              </button>
              <a
                href="/Eliza Abing - Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-black border border-slate-200 dark:border-neutral-800 rounded-xl text-[13px] font-bold hover:bg-slate-50 dark:hover:bg-neutral-900 transition-colors shadow-sm"
              >
                <FileText size={16} /> Resume
              </a>
            </div>
          </div>
        </div>

        {/* Two Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">

          {/* Left Column */}
          <div className="md:col-span-4 flex flex-col gap-8">
            {/* About Me */}
            <div className="card p-7">
              <div className="section-title">
                <div className="flex items-center gap-2">
                  <User size={16} className="text-slate-900 dark:text-white" />
                  <span className="text-[18px]">About Me</span>
                </div>
              </div>
              <div className="text-[13px] text-slate-600 dark:text-neutral-400 space-y-4 leading-relaxed font-medium">
                <p>As a BSIT student at Holy Cross of Davao College, I focus on crafting efficient, user-centered digital experiences while bridging the worlds of design and development.</p>
                <p>I'm an aspiring Full-Stack Developer and UI/UX Designer currently exploring WordPress, SEO, and Data Analytics—eager to turn academic knowledge into real-world impact.</p>
              </div>
            </div>

            {/* Education */}
            <div className="card p-7">
              <div className="section-title">
                <div className="flex items-center gap-2">
                  <GraduationCap size={16} className="text-slate-900 dark:text-white" />
                  <span className="text-[18px]">Education</span>
                </div>
              </div>
              <div className="p-5 bg-slate-50 dark:bg-neutral-900 rounded-xl border border-slate-100 dark:border-neutral-800">
                <p className="text-[14px] font-bold mb-1 tracking-tight">BS Information Technology</p>
                <p className="text-[13px] text-slate-600 dark:text-neutral-400 font-medium">Holy Cross of Davao College</p>
                <p className="text-[12px] text-slate-500 font-medium mt-1">2023 - 2027</p>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="card p-7">
              <div className="section-title">
                <div className="flex items-center gap-2">
                  <Code2 size={16} className="text-slate-900 dark:text-white" />
                  <span className="text-[18px]">Tech Stack</span>
                </div>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-3">Frontend</h4>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.frontend.map((tech, i) => (
                      <span
                        key={i}
                        className="p-2.5 bg-slate-100 dark:bg-neutral-900 rounded-lg border border-slate-200 dark:border-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-800 transition-colors cursor-default"
                        title={tech}
                      >
                        <img src={TECH_LOGOS[tech]} alt={tech} className="w-6 h-6 object-contain" />
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-3">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.backend.map((tech, i) => (
                      <span
                        key={i}
                        className="p-2.5 bg-slate-100 dark:bg-neutral-900 rounded-lg border border-slate-200 dark:border-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-800 transition-colors cursor-default"
                        title={tech}
                      >
                        <img src={TECH_LOGOS[tech]} alt={tech} className="w-6 h-6 object-contain" />
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="text-[12px] font-bold text-slate-500 uppercase tracking-wider mb-3">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {TECH_STACK.tools.map((tech, i) => (
                      <span
                        key={i}
                        className="p-2.5 bg-slate-100 dark:bg-neutral-900 rounded-lg border border-slate-200 dark:border-neutral-800 hover:bg-slate-200 dark:hover:bg-neutral-800 transition-colors cursor-default"
                        title={tech}
                      >
                        <img src={TECH_LOGOS[tech]} alt={tech} className="w-6 h-6 object-contain" />
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="card p-7 flex-1 flex flex-col">
              <div className="section-title">
                <div className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-slate-900 dark:text-white" />
                  <span className="text-[18px]">Certifications</span>
                </div>
                <button className="view-all">View All <ChevronRight size={14} /></button>
              </div>
              <div className="space-y-3">
                {CERTIFICATIONS.map((cert, i) => (
                  <div key={i} className="p-5 bg-slate-50 dark:bg-neutral-900 rounded-xl border border-slate-100 dark:border-neutral-800">
                    <p className="text-[14px] font-bold mb-1 tracking-tight">{cert.name}</p>
                    <p className="text-[12px] text-slate-500 font-medium">{cert.provider} • {cert.year}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="md:col-span-8 flex flex-col gap-8">
            {/* Experience */}
            <div className="card p-7">
              <div className="section-title">
                <div className="flex items-center gap-2">
                  <Briefcase size={16} className="text-slate-900 dark:text-white" />
                  <span className="text-[18px]">Experience</span>
                </div>
              </div>
              <div className="space-y-10 relative before:absolute before:inset-y-0 before:left-[5px] before:w-[1px] before:bg-slate-200 dark:before:bg-neutral-800 ml-1">
                {EXPERIENCE.map((exp, idx) => (
                  <div key={idx} className="relative pl-9">
                    <div className="absolute left-[-1px] top-1.5 w-3 h-3 rounded-full border-2 border-slate-300 dark:border-neutral-700 bg-white dark:bg-black z-10 shadow-sm"></div>
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="text-[15px] font-bold tracking-tight">{exp.role}</h4>
                      <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">{exp.period}</span>
                    </div>
                    <p className="text-[13px] text-slate-500 font-medium">{exp.company}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects */}
            <div className="card p-7">
              <div className="section-title">
                <div className="flex items-center gap-2">
                  <FolderKanban size={16} className="text-slate-900 dark:text-white" />
                  <span className="text-[18px]">Projects</span>
                </div>
                <button className="view-all">View All <ChevronRight size={14} /></button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {PROJECTS.slice(0, 4).map((project) => (
                  <a
                    key={project.id}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block overflow-hidden rounded-xl border border-slate-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-[14px] font-bold tracking-tight">{project.title}</h4>
                        <ExternalLink size={14} className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors" />
                      </div>
                      <p className="text-[12px] text-slate-500 dark:text-neutral-400 mb-3 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag, i) => (
                          <span key={i} className="px-2 py-0.5 bg-slate-100 dark:bg-neutral-800 rounded text-[10px] font-semibold text-slate-600 dark:text-neutral-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Let's work together */}
            <div className="card p-10 flex-1">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                <div className="flex flex-col">
                  <h2 className="text-[40px] font-black mb-6 tracking-tighter leading-tight">
                    Let's build <span className="text-slate-400 font-bold">something...</span>
                  </h2>
                  <p className="text-[14px] text-slate-500 leading-relaxed font-medium mb-8 max-w-sm">
                    I'm ready to take on any type of work in full-stack development, UI/UX design, and SEO. I can also help with appointment scheduling, data entry, and email management.
                  </p>

                  <div className="mt-auto">
                    <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">CONNECT WITH ME</h4>
                    <div className="flex gap-3 mt-4 cursor-pointer">
                      <a href="https://www.linkedin.com/in/eliza-abing-272b0b244/" className="social-btn" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
                      <a href="https://github.com/dlwlrmwa" className="social-btn" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
                      <a href="https://www.facebook.com/elicitaffairs" className="social-btn" target="_blank" rel="noopener noreferrer"><Facebook size={20} /></a>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-4">GET IN TOUCH</h4>

                  <div 
                    onClick={() => setShowEmailModal(true)}
                    className="get-in-touch-item cursor-pointer hover:bg-slate-50 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-neutral-900 flex items-center justify-center text-slate-500 dark:text-neutral-300">
                      <Mail size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">EMAIL</p>
                      <p className="text-[14px] font-bold tracking-tight">abing.eliza@gmail.com</p>
                    </div>
                  </div>

                  <a 
                    href="https://cal.com/eliza-abing-0uxyqm" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="get-in-touch-item cursor-pointer hover:bg-slate-50 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-neutral-900 flex items-center justify-center text-slate-500 dark:text-neutral-300">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">LET'S TALK</p>
                      <p className="text-[14px] font-bold tracking-tight">Schedule a Call</p>
                    </div>
                  </a>

                  <div 
                    onClick={() => setIsChatOpen(true)}
                    className="get-in-touch-item cursor-pointer hover:bg-slate-50 dark:hover:bg-neutral-800 rounded-xl transition-colors"
                  >
                    <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-neutral-900 flex items-center justify-center text-slate-500 dark:text-neutral-300">
                      <Bot size={20} />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">AI ASSISTANT</p>
                      <p className="text-[14px] font-bold tracking-tight">Talk with AIfos</p>
                    </div>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="mt-10 pt-8 border-t border-slate-200 dark:border-neutral-800 text-center space-y-2">
          <p className="text-[15px] font-bold text-slate-800 dark:text-white">
            © 2026 Eliza Abing. All Rights Reserved.
          </p>
          <p className="text-[13px] font-medium text-slate-400">
            Davao City, Philippines
          </p>
        </div>
      </div>

      {/* ChatBot Component */}
      <ChatBot isOpen={isChatOpen} setIsOpen={setIsChatOpen} />

      {/* Email Modal */}
      <EmailModal isOpen={showEmailModal} onClose={() => setShowEmailModal(false)} />

      {/* Photo Modal */}
      {showPhotoModal && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-out"
          onClick={() => setShowPhotoModal(false)}
        >
          <button
            className="absolute top-12 right-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            onClick={() => setShowPhotoModal(false)}
            aria-label="Close photo"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-3xl max-h-[85vh] mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src="android-chrome-512x512.png"
              alt="Eliza Abing - Full View"
              className="w-full h-full object-contain rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
