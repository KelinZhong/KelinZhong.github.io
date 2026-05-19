const About = () => (
    <div className="animate-fadeIn">
        <h2 className="text-3xl font-bold text-slate-800 mb-6 border-b pb-4">About Me</h2>
        <p className="text-lg text-slate-600 mb-8 leading-relaxed">{userData.profile.bio}</p>

        <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center">
                <GraduationCap className="mr-2 text-blue-600"/> Education
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {userData.education.map((edu, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-lg border border-slate-200 shadow-sm">
                        <h4 className="font-bold text-slate-800">{edu.degree}</h4>
                        <div className="text-blue-600 font-medium text-sm">{edu.school}</div>
                        <div className="flex justify-between items-center mt-2 text-sm text-slate-500">
                            <span>{edu.year}</span>
                        </div>
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
                        {skillList.map((skill, index) => (
                            <span key={index} className="px-3 py-1.5 bg-white text-slate-700 rounded-md text-sm font-medium border border-slate-200 shadow-sm">
                                {skill}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    </div>
);
