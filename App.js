const App = () => {
    const [activeTab, setActiveTab] = React.useState('about');
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const [pubRoleFilter, setPubRoleFilter] = React.useState('all');
    const [pubYearFilter, setPubYearFilter] = React.useState('all');

    const renderDescription = (description) => {
        if (Array.isArray(description)) {
            return (
                <ul className="list-disc pl-5 space-y-2 text-slate-600">
                    {description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            );
        }
        return <p className="text-slate-600 mb-4">{description}</p>;
    };

    const isFirstAuthor = (authorsString) => {
        if (!authorsString) return false;
        const names = ['Kelin Zhong', 'K Zhong', 'KK Zhong'];
        const trimmed = authorsString.trim();
        return names.some(name => trimmed.startsWith(name));
    };

    const renderAuthors = (authorsString) => {
        if (!authorsString) return null;
        const parts = authorsString.split(/(Kelin Zhong|K Zhong|KK Zhong)/g);
        return (
            <div className="text-sm text-slate-600 mt-1 italic">
                {parts.map((part, i) =>
                    (part === 'K Zhong' || part === 'KK Zhong' || part === 'Kelin Zhong') ? <strong key={i} className="text-slate-800">{part}</strong> : part
                )}
            </div>
        );
    };

    const renderLinkIcon = (link, size = 18) => {
        if (link) {
            return (
                <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 transition-colors p-1 hover:bg-slate-50 rounded-full">
                    <ExternalLink size={size} />
                </a>
            );
        }
        return (
            <span className="text-slate-300 p-1 cursor-not-allowed" title="No link available">
                <ExternalLink size={size} />
            </span>
        );
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'about':
                return <About />;
            case 'experience':
                return <Experience renderDescription={renderDescription} />;
            case 'selectedProjects':
                return <SelectedProjects renderDescription={renderDescription} renderLinkIcon={renderLinkIcon} />;
            case 'internships':
                return <Internships renderDescription={renderDescription} />;
            case 'openSourceTools':
                return <OpenSourceTools renderLinkIcon={renderLinkIcon} />;
            case 'certifications':
                return <Certifications renderLinkIcon={renderLinkIcon} />;
            case 'publications':
                return (
                    <Publications
                        pubRoleFilter={pubRoleFilter}
                        setPubRoleFilter={setPubRoleFilter}
                        pubYearFilter={pubYearFilter}
                        setPubYearFilter={setPubYearFilter}
                        isFirstAuthor={isFirstAuthor}
                        renderAuthors={renderAuthors}
                        renderLinkIcon={renderLinkIcon}
                    />
                );
            case 'presentations':
                return <Presentations />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col md:flex-row font-sans text-slate-900">
            <div className="md:hidden bg-white p-4 shadow-sm flex justify-between items-center sticky top-0 z-50">
                <span className="font-bold text-xl text-slate-800">{userData.profile.name}</span>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-slate-600">
                    {isMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                isMenuOpen={isMenuOpen}
                setIsMenuOpen={setIsMenuOpen}
            />

            <main className="flex-1 p-6 md:p-12 max-w-4xl mx-auto w-full overflow-y-auto">
                {renderContent()}
            </main>
        </div>
    );
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(<App />);
