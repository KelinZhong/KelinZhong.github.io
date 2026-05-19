import React from 'react';
import { userData } from '../../data.js';

const OpenSourceTools = ({ renderLinkIcon }) => (
    <div className="animate-fadeIn">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Open-Source Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userData.openSourceTools.map((project) => (
                <div key={project.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-800">{project.title}</h3>
                        {renderLinkIcon(project.link, 20)}
                    </div>
                    <p className="text-slate-600 mb-4 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {project.tech.map((t, i) => (
                            <span key={i} className="text-xs font-mono bg-slate-100 text-slate-600 px-2 py-1 rounded">{t}</span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default OpenSourceTools;
