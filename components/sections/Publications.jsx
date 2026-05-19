import React from 'react';
import { userData } from '../../data.js';
import { Filter } from '../../icons.jsx';

const Publications = ({ pubRoleFilter, setPubRoleFilter, pubYearFilter, setPubYearFilter, isFirstAuthor, renderAuthors, renderLinkIcon }) => {
    const uniqueYears = [...new Set(userData.publications.map(p => p.year))].sort((a, b) => b - a);
    const filteredPubs = userData.publications.filter(pub => {
        const matchesRole = pubRoleFilter === 'all' ||
            (pubRoleFilter === 'first' && isFirstAuthor(pub.authors)) ||
            (pubRoleFilter === 'co' && !isFirstAuthor(pub.authors));
        const matchesYear = pubYearFilter === 'all' || pub.year === pubYearFilter;
        return matchesRole && matchesYear;
    });

    return (
        <div className="animate-fadeIn">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 border-b pb-4 gap-4">
                <h2 className="text-3xl font-bold text-slate-800">Publications</h2>
                <div className="text-sm font-medium text-slate-500 italic">
                    Showing {filteredPubs.length} of {userData.publications.length} papers
                </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-4 mb-8 shadow-sm">
                <div className="flex items-center gap-2 mb-4 text-slate-800 font-semibold">
                    <Filter size={18} className="text-blue-600" />
                    <span>Filters</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Author Role</label>
                        <div className="flex flex-wrap gap-2">
                            {[
                                { id: 'all', label: 'All' },
                                { id: 'first', label: 'First Author' },
                                { id: 'co', label: 'Co-Author' }
                            ].map(role => (
                                <button
                                    key={role.id}
                                    onClick={() => setPubRoleFilter(role.id)}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                        pubRoleFilter === role.id
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                                >
                                    {role.label}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Publication Year</label>
                        <div className="flex flex-wrap gap-2">
                            <button
                                onClick={() => setPubYearFilter('all')}
                                className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                    pubYearFilter === 'all'
                                    ? 'bg-blue-600 text-white shadow-sm'
                                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                                }`}
                            >
                                All
                            </button>
                            {uniqueYears.map(year => (
                                <button
                                    key={year}
                                    onClick={() => setPubYearFilter(year)}
                                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all ${
                                        pubYearFilter === year
                                        ? 'bg-blue-600 text-white shadow-sm'
                                        : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-200'
                                    }`}
                                >
                                    {year}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="space-y-4">
                {filteredPubs.length > 0 ? (
                    filteredPubs.map((pub) => (
                        <div key={pub.id} className="group flex flex-col p-5 bg-white rounded-lg border border-slate-200 hover:border-blue-300 hover:shadow-md transition-all">
                            <div className="flex justify-between items-start">
                                <div className="flex-1">
                                    <div className="flex items-center gap-2 mb-1">
                                        <span className={`text-[10px] uppercase font-bold px-1.5 py-0.5 rounded ${
                                            isFirstAuthor(pub.authors)
                                            ? 'bg-blue-100 text-blue-700'
                                            : 'bg-slate-100 text-slate-600'
                                        }`}>
                                            {isFirstAuthor(pub.authors) ? 'First Author' : 'Co-Author'}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-semibold text-slate-800 group-hover:text-blue-600 transition-colors leading-tight">{pub.title}</h3>
                                    {renderAuthors(pub.authors)}
                                    <div className="text-slate-500 mt-2 flex items-center gap-2 text-sm">
                                        <span className="font-medium text-slate-700">{pub.publisher}</span>
                                        <span className="w-1 h-1 bg-slate-400 rounded-full"></span>
                                        <span>{pub.year}</span>
                                    </div>
                                </div>
                                {renderLinkIcon(pub.link, 18)}
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed border-slate-300">
                        <p className="text-slate-500">No publications found matching the selected filters.</p>
                        <button onClick={() => { setPubRoleFilter('all'); setPubYearFilter('all'); }} className="mt-4 text-blue-600 font-semibold hover:underline">Clear all filters</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Publications;
