const Sidebar = ({ activeTab, setActiveTab, isMenuOpen, setIsMenuOpen }) => {
    const Nav = ({ name, id, icon }) => (
        <NavItem name={name} id={id} icon={icon} activeTab={activeTab} setActiveTab={setActiveTab} setIsMenuOpen={setIsMenuOpen} />
    );

    return (
        <aside className={`fixed inset-0 md:static md:inset-auto md:w-72 bg-white border-r border-slate-200 p-6 flex flex-col z-40 transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}`}>
            <div className="mb-10 text-center md:text-left">
                {userData.profile.image && (
                    <img src={userData.profile.image} alt={userData.profile.name} className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-4 shadow-lg object-cover border-4 border-white ring-1 ring-slate-100"
                        onError={(e) => { e.target.style.display = 'none'; e.target.nextSibling.style.display = 'flex'; }} />
                )}
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto md:mx-0 mb-4 shadow-lg flex items-center justify-center text-white text-4xl font-bold" style={{ display: userData.profile.image ? 'none' : 'flex' }}>
                    {userData.profile.name.charAt(0)}
                </div>
                <h1 className="text-2xl font-bold text-slate-900">{userData.profile.name}</h1>
                <p className="text-slate-500 text-sm mt-1">{userData.profile.role}</p>

                <div className="flex flex-wrap gap-2 mt-6 justify-center md:justify-start">
                    {userData.profile.social.github && (
                        <a href={userData.profile.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition-colors text-sm font-medium w-full md:w-auto mb-1">
                            <Github size={16} className="mr-2"/> GitHub
                        </a>
                    )}
                    {userData.profile.social.linkedin && (
                        <a href={userData.profile.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors text-sm font-medium w-full md:w-auto mb-1">
                            <Linkedin size={16} className="mr-2"/> LinkedIn
                        </a>
                    )}
                    {userData.profile.social.researchgate && (
                        <a href={userData.profile.social.researchgate} target="_blank" rel="noopener noreferrer" className="flex items-center px-3 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 transition-colors text-sm font-medium w-full md:w-auto mb-1">
                            <BookOpen size={16} className="mr-2"/> ResearchGate
                        </a>
                    )}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 text-sm text-slate-600 space-y-3">
                    <div className="flex items-center justify-center md:justify-start">
                        <MapPin size={16} className="mr-2 flex-shrink-0 text-slate-400"/>
                        {userData.profile.location}
                    </div>
                    <div className="flex items-start justify-center md:justify-start">
                        <Mail size={16} className="mr-2 mt-1 flex-shrink-0 text-slate-400"/>
                        <div className="flex flex-col text-left">
                            {Array.isArray(userData.profile.email)
                                ? userData.profile.email.map((email, idx) => <a key={idx} href={`mailto:${email}`} className="hover:text-blue-600 break-all">{email}</a>)
                                : <a href={`mailto:${userData.profile.email}`} className="hover:text-blue-600 break-all">{userData.profile.email}</a>
                            }
                        </div>
                    </div>
                </div>
            </div>

            <nav className="flex-1 space-y-2">
                <Nav id="about" name="Profile" icon={User} />
                <Nav id="experience" name="Experience" icon={Briefcase} />
                <Nav id="selectedProjects" name="Selected Projects" icon={Folder} />
                <Nav id="internships" name="Internships" icon={GraduationCap} />
                <Nav id="openSourceTools" name="Open-Source Tools" icon={Code} />
                <Nav id="certifications" name="Certifications" icon={Award} />
                <Nav id="publications" name="Publications" icon={BookOpen} />
                <Nav id="presentations" name="Presentations" icon={Mic} />
            </nav>

            <div className="mt-auto pt-6 border-t border-slate-100 text-xs text-slate-400 text-center md:text-left">
                &copy; 2026 {userData.profile.name}
            </div>
        </aside>
    );
};
