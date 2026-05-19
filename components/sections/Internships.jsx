import React from 'react';
import { userData } from '../../data.js';

const Internships = ({ renderDescription }) => (
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
                    {job.image && (
                        <div className="mt-4">
                            <img src={job.image} alt={`${job.company} work`} className="w-full h-auto max-h-96 object-contain rounded-lg shadow-sm border border-slate-100 bg-white"
                                onError={(e) => { e.target.style.display = 'none'; }} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);

export default Internships;
