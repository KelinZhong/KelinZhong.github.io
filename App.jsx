import React, { useState } from 'react';
import { userData } from './data';

// =================================================================================
// 1. ICONS
// =================================================================================
const Icon = ({ size = 24, className, children }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>{children}</svg>
);
const User = (props) => <Icon {...props}><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></Icon>;
const Briefcase = (props) => <Icon {...props}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></Icon>;
const BookOpen = (props) => <Icon {...props}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></Icon>;
const Code = (props) => <Icon {...props}><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></Icon>;
const Mail = (props) => <Icon {...props}><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></Icon>;
const MapPin = (props) => <Icon {...props}><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></Icon>;
const ExternalLink = (props) => <Icon {...props}><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" x2="21" y1="14" y2="3"/></Icon>;
const Github = (props) => <Icon {...props}><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></Icon>;
const Linkedin = (props) => <Icon {...props}><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></Icon>;
const Menu = (props) => <Icon {...props}><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></Icon>;
const X = (props) => <Icon {...props}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></Icon>;
const Mic = (props) => <Icon {...props}><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" x2="12" y1="19" y2="22"/><line x1="8" x2="16" y1="22" y2="22"/></Icon>;
const GraduationCap = (props) => <Icon {...props}><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 2 0 0 0 12 0v-3.5"/></Icon>;
const FilterIcon = (props) => <Icon {...props}><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></Icon>;
const Folder = (props) => <Icon {...props}><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></Icon>;
const Award = (props) => <Icon {...props}><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></Icon>;

// =================================================================================
// 2. REUSABLE COMPONENTS
// =================================================================================

// Profile image with initials fallback
const ProfileImage = ({ name, image }) => {
  const [failed, setFailed] = React.useState(false);
  const initials = name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
  if (!image || failed) {
    return (
      <div className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-4 shadow-lg border-4 border-white ring-1 ring-slate-100 bg-blue-600 flex items-center justify-center">
        <span className="text-white text-3xl font-bold">{initials}</span>
      </div>
    );
  }
  return (
    <img
      src={image}
      alt={name}
      className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-4 shadow-lg object-cover border-4 border-white ring-1 ring-slate-100"
      onError={() => setFailed(true)}
    />
  );
};

// Section image — renders only if src is non-empty; silently hides on error
const SectionImage = ({ src, alt }) => {
  const [failed, setFailed] = React.useState(false);
  if (!src || failed) return null;
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-auto max-h-96 object-contain rounded-lg shadow-sm border border-slate-100 bg-white mt-4"
      onError={() => setFailed(true)}
    />
  );
};

// External link icon button
const RenderLinkIcon = ({ link, size = 18 }) => {
  if (link) return <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 p-1 hover:bg-slate-50 rounded-full"><ExternalLink size={size} /></a>;
  return <span className="text-slate-300 p-1 cursor-not-allowed"><ExternalLink size={size} /></span>;
};

// Description renderer — array → bullet list, string → paragraph
const renderDescription = (description) => {
  if (Array.isArray(description)) return <ul className="list-disc pl-5 space-y-2 text-slate-600">{description.map((item, idx) => <li key={idx}>{item}</li>)}</ul>;
  return <p className="text-slate-600 mb-4">{description}</p>;
};

// NavItem defined outside App to avoid re-creation on every render
const NavItem = ({ name, id, icon: NavIcon, activeTab, setActiveTab, setIsMenuOpen }) => (
  <button
    onClick={() => { setActiveTab(id); setIsMenuOpen(false); }}
    className={`flex items-center w-full p-3 mb-2 rounded-lg transition-all duration-200 ${
      activeTab === id ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
    }`}
  >
    <NavIcon size={20} className="mr-3" />
    <span className="font-medium">{name}</span>
  </button>
);

// =================================================================================
// 3. MAIN APPLICATION COMPONENT
// =================================================================================
const App = () => {
  const [activeTab, setActiveTab] = useState('about');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [pubRoleFilter, setPubRoleFilter] = useState('all');
  const [pubYearFilter, setPubYearFilter] = useState('all');

  const renderContent = () => {
    switch (activeTab) {

      case 'about':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">About Me</h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">{userData.profile.bio}</p>
            <div className="mb-8">
              <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center"><GraduationCap className="mr-2 text-blue-600"/> Education</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userData.education.map((edu, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                    <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                    <div className="text-blue-600 font-medium text-sm">{edu.school}</div>
                    <div className="flex justify-between items-center mt-2 text-sm text-slate-500"><span>{edu.year}</span></div>
                    {edu.details && <p className="text-xs text-slate-500 mt-2 italic">{edu.details}</p>}
                  </div>
                ))}
              </div>
            </div>
            <h3 className="text-xl font-semibold text-slate-800 mb-6">Technical Skills</h3>
            <div className="space-y-6">
              {Object.entries(userData.skills).map(([category, skillList]) => (
                <div key={category}>
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">{category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillList.map((skill, index) => <span key={index} className="px-3 py-1.5 bg-white text-slate-700 rounded-md text-sm font-medium border border-slate-200 shadow-sm">{skill}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'experience':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Work Experience</h2>
            <div className="space-y-12">
              {userData.experience.map((job) => (
                <div key={job.id} className="relative pl-8 border-l-2 border-blue-200 hover:border-blue-500 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-white"></div>
                  <div className="mb-1 text-sm text-blue-600 font-bold uppercase tracking-wider">{job.period}</div>
                  <h3 className="text-xl font-bold text-slate-800">{job.role}</h3>
                  <div className="text-md text-slate-500 font-medium mb-3">{job.company}</div>
                  <div className="mb-4">{renderDescription(job.description)}</div>
                  <SectionImage src={job.image} alt={`${job.role} at ${job.company}`} />
                </div>
              ))}
            </div>
          </div>
        );

      case 'internships':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Internship Experience</h2>
            <div className="space-y-12">
              {userData.internships.map((job) => (
                <div key={job.id} className="relative pl-8 border-l-2 border-purple-200 hover:border-purple-500 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-purple-500 ring-4 ring-white"></div>
                  <div className="mb-1 text-sm text-purple-600 font-bold uppercase tracking-wider">{job.period}</div>
                  <h3 className="text-xl font-bold text-slate-800">{job.role}</h3>
                  <div className="text-md text-slate-500 font-medium mb-3">{job.company}</div>
                  <div className="mb-4">{renderDescription(job.description)}</div>
                  <SectionImage src={job.image} alt={`${job.role} at ${job.company}`} />
                </div>
              ))}
            </div>
          </div>
        );

      case 'selectedProjects':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Selected Projects</h2>
            <div className="space-y-12">
              {userData.selectedProjects.map((project) => (
                <div key={project.id} className="relative pl-8 border-l-2 border-emerald-200 hover:border-emerald-500 transition-colors">
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white"></div>
                  <div className="mb-1 text-sm text-emerald-600 font-bold uppercase tracking-wider">{project.period}</div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                    <RenderLinkIcon link={project.link} size={20} />
                  </div>
                  <div className="mb-4">{renderDescription(project.description)}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'openSourceTools':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Open-Source Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userData.openSourceTools.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                    <RenderLinkIcon link={project.link} size={20} />
                  </div>
                  <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((t, i) => <span key={i} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'certifications':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Certifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {userData.certifications.map((cert) => (
                <div key={cert.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-slate-800">{cert.title}</h3>
                    <RenderLinkIcon link={cert.link} size={20} />
                  </div>
                  <div className="text-blue-600 font-medium text-sm mb-1">{cert.issuer}</div>
                  <div className="text-slate-500 text-sm">{cert.date}</div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'publications': {
        const uniqueYears = [...new Set(userData.publications.map(p => p.year))].sort((a, b) => b - a);
        const filteredPubs = userData.publications.filter(pub => {
          const isFirst = pub.authors && ['Kelin Zhong', 'K Zhong', 'KK Zhong'].some(name => pub.authors.trim().startsWith(name));
          const matchesRole = pubRoleFilter === 'all' || (pubRoleFilter === 'first' && isFirst) || (pubRoleFilter === 'co' && !isFirst);
          const matchesYear = pubYearFilter === 'all' || String(pub.year) === String(pubYearFilter);
          return matchesRole && matchesYear;
        });
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Publications</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 shadow-sm">
              <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold"><FilterIcon size={18} className="text-blue-600" /><span>Filters</span></div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Author Role</label>
                  <div className="flex flex-wrap gap-2">
                    {[{ id: 'all', label: 'All' }, { id: 'first', label: 'First Author' }, { id: 'co', label: 'Co-Author' }].map(role => (
                      <button key={role.id} onClick={() => setPubRoleFilter(role.id)} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${pubRoleFilter === role.id ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>{role.label}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Publication Year</label>
                  <div className="flex flex-wrap gap-2">
                    <button onClick={() => setPubYearFilter('all')} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${pubYearFilter === 'all' ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>All</button>
                    {uniqueYears.map(year => (
                      <button key={year} onClick={() => setPubYearFilter(year)} className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${pubYearFilter === year ? 'bg-blue-600 text-white shadow-sm' : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'}`}>{year}</button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {filteredPubs.map((pub) => (
                <div key={pub.id} className="group flex flex-col p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">{pub.title}</h3>
                      <div className="text-sm text-slate-600 mt-1 italic">{pub.authors}</div>
                      <div className="text-slate-500 mt-2 flex items-center gap-2 text-sm">
                        <span className="font-medium text-slate-700">{pub.publisher}</span>
                        <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                        <span>{pub.year}</span>
                      </div>
                    </div>
                    <RenderLinkIcon link={pub.link} size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      }

      case 'presentations':
        return (
          <div className="animate-fadeIn">
            <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Presentations</h2>
            <div className="space-y-4">
              {userData.presentations.map((pres) => (
                <div key={pres.id} className="p-5 bg-white rounded-lg border-l-4 border-indigo-500 shadow-sm flex flex-col">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-slate-800">{pres.title}</h3>
                      <div className="text-slate-600 mt-1">{pres.role}</div>
                    </div>
                    <div className="text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full text-sm">{pres.year}</div>
                  </div>
                  <SectionImage src={pres.image} alt={pres.title} />
                </div>
              ))}
            </div>
          </div>
        );

      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">

      {/* Mobile top bar */}
      <div className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-50">
        <span className="font-bold text-xl text-slate-800">{userData.profile.name}</span>
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`fixed inset-0 md:static md:inset-auto md:w-72 bg-white border-r border-slate-200 p-6 flex flex-col z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
        <div className="mb-10 text-center md:text-left">
          <ProfileImage name={userData.profile.name} image={userData.profile.image} />
          <h1 className="text-2xl font-bold text-slate-900">{userData.profile.name}</h1>
          <p className="text-slate-500 text-sm mt-1">{userData.profile.role}</p>

          <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
            {userData.profile.social.github && <a href={userData.profile.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium"><Github size={16} className="mr-2"/> GitHub</a>}
            {userData.profile.social.linkedin && <a href={userData.profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium"><Linkedin size={16} className="mr-2"/> LinkedIn</a>}
          </div>

          <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-600 space-y-3">
            <div className="flex items-center justify-center md:justify-start">
              <MapPin size={16} className="mr-2 flex-shrink-0 text-slate-400"/> {userData.profile.location}
            </div>
            {userData.profile.email.map((email, idx) => (
              <div key={idx} className="flex items-start justify-center md:justify-start">
                <Mail size={16} className="mr-2 mt-0.5 flex-shrink-0 text-slate-400"/>
                <a href={`mailto:${email}`} className="hover:text-blue-600 break-all">{email}</a>
              </div>
            ))}
          </div>
        </div>

        <nav className="flex-1 space-y-1 overflow-y-auto">
          <NavItem id="about"            name="Profile"          icon={User}          activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
          <NavItem id="experience"       name="Experience"       icon={Briefcase}     activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
          <NavItem id="selectedProjects" name="Selected Projects" icon={Folder}       activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
          <NavItem id="internships"      name="Internships"      icon={GraduationCap} activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
          <NavItem id="openSourceTools"  name="Open-Source Tools" icon={Code}         activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
          <NavItem id="certifications"   name="Certifications"   icon={Award}         activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
          <NavItem id="publications"     name="Publications"     icon={BookOpen}      activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
          <NavItem id="presentations"    name="Presentations"    icon={Mic}           activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
        </nav>
      </aside>

      <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto w-full overflow-y-auto">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
