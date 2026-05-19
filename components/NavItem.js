const NavItem = ({ name, id, icon: IconComponent, activeTab, setActiveTab, setIsMenuOpen }) => (
    <button
        onClick={() => { setActiveTab(id); setIsMenuOpen(false); }}
        className={`flex items-center w-full p-3 mb-2 rounded-lg transition-all duration-200 ${
            activeTab === id ? 'bg-blue-600 text-white shadow-md' : 'text-slate-600 hover:bg-slate-100'
        }`}
    >
        <IconComponent size={20} className="mr-3" />
        <span className="font-medium">{name}</span>
    </button>
);
