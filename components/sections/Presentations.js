const Presentations = () => (
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
                        <div className="text-indigo-600 font-bold bg-indigo-50 px-3 py-1 rounded-full text-sm">
                            {pres.year}
                        </div>
                    </div>
                    {pres.image && (
                        <div className="mt-4">
                            <img src={pres.image} alt={pres.title} className="w-full h-auto max-h-96 object-contain rounded-lg shadow-sm border border-slate-100 bg-white"
                                onError={(e) => { e.target.style.display = 'none'; }} />
                        </div>
                    )}
                </div>
            ))}
        </div>
    </div>
);
