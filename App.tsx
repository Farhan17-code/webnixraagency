
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ThreeBackground from './components/ThreeBackground';
import GeminiAssistant from './components/GeminiAssistant';
import CustomCursor from './components/CustomCursor';
import { PROJECTS, MILESTONES, SKILLS, TEAM_BIO, TEAM_MEMBERS } from './constants';
import { ExternalLink, Github, ArrowUpRight, Linkedin, Twitter, CheckCircle2 } from 'lucide-react';
import { useForm, ValidationError } from '@formspree/react';

const App: React.FC = () => {
  const [state, handleSubmit] = useForm("xeelajbj");

  return (
    <main className="relative antialiased">
      <CustomCursor />
      <ThreeBackground />
      <Navbar />
      <Hero />

      {/* Philosophy Section */}
      <section id="about" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center mb-24">
            <h2 className="text-sm font-bold text-blue-500 uppercase tracking-[0.3em] mb-6">Our Philosophy</h2>
            <p className="text-3xl md:text-5xl font-bold font-display leading-tight text-white mb-8">
              We architect <span className="text-gradient">digital dimensions</span> for the next generation of the web.
            </p>
            <p className="text-xl text-gray-400 leading-relaxed">
              {TEAM_BIO}
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="group relative glass rounded-[2rem] p-8 hover:bg-white/[0.05] transition-all duration-500 border-white/5">
                <div className="absolute inset-0 z-10 w-full h-full">
                  <a href={member.portfolioUrl || '#'} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer"><span className="sr-only">View {member.name}'s portfolio</span></a>
                </div>
                <div className="relative w-24 h-24 mb-6 rounded-2xl overflow-hidden z-20 pointer-events-none">
                  <img 
                    src={member.imageUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 pointer-events-auto" 
                  />
                </div>
                <div className="relative z-20 pointer-events-none">
                  <h3 className="text-2xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-semibold mb-4 uppercase tracking-wider">{member.role}</p>
                </div>
                <p className="relative z-20 text-gray-400 text-sm leading-relaxed mb-6 pointer-events-none">
                  {member.bio}
                </p>
                <div className="flex items-center space-x-4 relative z-30">
                  {member.github && (
                    <a href={member.github} className="text-gray-500 hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                  )}
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-gray-500 hover:text-white transition-colors">
                      <Linkedin size={18} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise & Milestones */}
      <section id="experience" className="py-24 px-6 bg-white/[0.02]">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-20">
            {/* Left: Milestones */}
            <div>
              <h2 className="text-4xl font-bold font-display mb-12">Studio <span className="text-blue-500">Milestones</span></h2>
              <div className="space-y-12">
                {MILESTONES.map((ms) => (
                  <div key={ms.id} className="flex gap-8 group">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full border border-blue-500/30 flex items-center justify-center text-blue-500 font-bold text-sm bg-blue-500/5 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                        {ms.year.slice(2)}
                      </div>
                      <div className="flex-1 w-px bg-gradient-to-b from-blue-500/30 to-transparent my-4"></div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{ms.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{ms.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Skills / Expertise */}
            <div>
              <h2 className="text-4xl font-bold font-display mb-12">Collective <span className="text-blue-500">Intelligence</span></h2>
              <div className="space-y-8">
                {SKILLS.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{skill.name}</span>
                      <span className="text-blue-500 text-sm font-bold">{skill.level}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-12 p-8 glass rounded-3xl border-blue-500/10">
                <p className="text-sm text-gray-400 italic">
                  "Our strength lies in the intersection of disciplines. By merging deep technical engineering with avant-garde design, we create solutions that are as stable as they are stunning."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
                Selected <span className="text-blue-500">Productions</span>
              </h2>
              <p className="text-gray-400 max-w-lg">
                Showcasing our collaborative efforts in cloud architecture, spatial design, and neural integration.
              </p>
            </div>

          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative glass rounded-[2.5rem] overflow-hidden border-white/5 hover:border-blue-500/50 transition-all duration-500">
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" 
                  />
                </div>
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-blue-400 bg-blue-400/5 px-2 py-0.5 rounded border border-blue-400/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-blue-500 transition-colors">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex -space-x-2">
                      {TEAM_MEMBERS.map(m => (
                        <div key={m.id} className="w-8 h-8 rounded-full border-2 border-[#030712] overflow-hidden">
                          <img src={m.imageUrl} alt={m.name} title={m.name} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <a href={project.link} className="flex items-center space-x-2 text-white text-xs font-bold uppercase tracking-widest hover:text-blue-500 transition-colors">
                      <span>View Case</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6">
        <div className="container mx-auto max-w-4xl glass p-12 rounded-[3.5rem] border-white/10 shadow-2xl shadow-blue-500/5 transition-all duration-500">
          {state.succeeded ? (
            <div className="text-center py-20 animate-in fade-in zoom-in duration-700">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-500/10 text-blue-500 mb-8 border border-blue-500/20">
                <CheckCircle2 size={40} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 italic text-white">Transmission <span className="text-blue-500">Received</span></h2>
              <p className="text-gray-400 max-w-sm mx-auto">Our architects have been notified. Expect a secure channel initiation within 24 hours.</p>
              <button 
                onClick={() => window.location.reload()} 
                className="mt-10 text-blue-400 font-bold uppercase tracking-widest text-xs hover:text-white transition-colors"
              >
                Send Another Brief
              </button>
            </div>
          ) : (
            <>
              <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-display mb-4 italic text-white">Start a <span className="text-blue-500">Partnership</span></h2>
                <p className="text-gray-400">Tell us about your most ambitious project. We're ready to architect it.</p>
              </div>
              <form className="grid md:grid-cols-2 gap-8" onSubmit={handleSubmit}>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="organization" className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Organization</label>
                    <input 
                      id="organization"
                      name="organization"
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all" 
                      placeholder="Enter company name" 
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Email Address</label>
                    <input 
                      id="email"
                      name="email"
                      type="email" 
                      required
                      className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all" 
                      placeholder="email@example.com" 
                    />
                    <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-2 ml-1" />
                  </div>
                  <div>
                    <label htmlFor="inquiry-type" className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Inquiry Type</label>
                    <div className="relative">
                      <select 
                        id="inquiry-type"
                        name="inquiry-type"
                        className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all appearance-none"
                      >
                        <option className="bg-gray-900">Cloud Infrastructure</option>
                        <option className="bg-gray-900">3D/WebGL Development</option>
                        <option className="bg-gray-900">AI Integration</option>
                        <option className="bg-gray-900">Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none opacity-50">
                        <ArrowUpRight size={18} />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="message" className="block text-[10px] font-bold text-gray-500 uppercase tracking-[0.2em] mb-3">Brief</label>
                  <textarea 
                    id="message"
                    name="message"
                    rows={5} 
                    required
                    className="flex-1 w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-blue-500 focus:bg-white/[0.08] transition-all resize-none" 
                    placeholder="Describe the challenge..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-2 ml-1" />
                </div>
                <div className="md:col-span-2 flex justify-center mt-6">
                  <button 
                    type="submit" 
                    disabled={state.submitting}
                    className="px-16 py-5 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-blue-600/20 uppercase tracking-widest text-xs"
                  >
                    {state.submitting ? 'Initiating...' : 'Request Consultation'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 text-3xl font-bold tracking-tighter text-white mb-8">
            <img src="assats/logo.png" alt="Webnixra Logo" className="w-12 h-12 object-contain" />
            <span className="font-display">Webnixra</span>
          </div>
          <p className="text-gray-500 text-xs tracking-widest uppercase mb-8">
            &copy; {new Date().getFullYear()} WEBNIXRA COLLECTIVE. All Rights Reserved.
          </p>
          <div className="flex justify-center space-x-10 text-gray-500">
            <a href="https://github.com/creepyphantom11y-gif" className="hover:text-blue-500 transition-colors"><Github size={22} /></a>
            <a href="https://www.linkedin.com/in/creepyphantom11y-gif/" className="hover:text-blue-500 transition-colors"><Linkedin size={22} /></a>
            <a href="https://x.com/creepy_pha11213" className="hover:text-blue-500 transition-colors"><Twitter size={22} /></a>
          </div>
        </div>
      </footer>

      <GeminiAssistant />
    </main>
  );
};

export default App;
