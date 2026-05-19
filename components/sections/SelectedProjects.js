const SelectedProjects = ({ renderDescription, renderLinkIcon }) => (
    <div className="animate-fadeIn">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Selected Projects</h2>
        <div className="space-y-12">
            {userData.selectedProjects.map((project) => (
                <div key={project.id} className="relative pl-8 border-l-2 border-emerald-200 hover:border-emerald-500 transition-colors">
                    <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-white"></div>
                    <div className="mb-1 text-sm text-emerald-600 font-bold uppercase tracking-wider">{project.period}</div>
                    <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                        {renderLinkIcon(project.link, 20)}
                    </div>
                    <div className="mb-4">
                        {renderDescription(project.description)}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
