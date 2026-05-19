import React from 'react';
import { userData } from '../../data.js';

const Certifications = ({ renderLinkIcon }) => (
    <div className="animate-fadeIn">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userData.certifications.map((cert) => (
                <div key={cert.id} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                        <h3 className="text-xl font-bold text-slate-800">{cert.title}</h3>
                        {renderLinkIcon(cert.link, 20)}
                    </div>
                    <div className="text-blue-600 font-medium text-sm mb-1">{cert.issuer}</div>
                    <div className="text-slate-500 text-sm">{cert.date}</div>
                </div>
            ))}
        </div>
    </div>
);

export default Certifications;
