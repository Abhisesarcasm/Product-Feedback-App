import { useState } from 'react'
import { User, LogOut } from 'lucide-react'

function Navbar({ userName }) {
    const [drawerOpen, setDrawerOpen] = useState(false)

    return (
        <header className="sticky top-0 z-30 w-full bg-[#FAF9F5] border-b border-[#E6E4DC]">
            <div className="max-w-280 mx-auto px-6 py-3.5 flex items-center justify-between">
                {/* Logo — always visible */}
                <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-[#1F6F5C] flex items-center justify-center text-[#F4F2EA] font-heading font-bold text-[15px]">
                        F
                    </div>
                    <span className="font-heading font-semibold text-[19px] tracking-tight text-[#1B1B1F]">
                        Foundry
                    </span>
                </div>

                {/* Desktop: user name + logout inline */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="flex items-center gap-2">
                        <div className="w-7.5 h-7.5 rounded-full bg-[#EDEAE0] flex items-center justify-center text-[#5C5B54]">
                            <User size={16} />
                        </div>
                        <span className="font-body text-sm font-medium text-[#1B1B1F]">
                            {userName}
                        </span>
                    </div>
                    <button className="flex items-center gap-1.5 bg-transparent border border-[#E6E4DC] rounded-lg px-3 py-1.5 font-body text-[13px] font-medium text-[#5C5B54] cursor-pointer transition-colors duration-150 hover:bg-[#F1EFE6] hover:border-[#D8D6CC]">
                        <LogOut size={14} />
                        Log out
                    </button>
                </div>

                {/* Mobile: user icon + hamburger only */}
                <div className="flex md:hidden items-center gap-3">
                    <div className="w-7.5 h-7.5 rounded-full bg-[#EDEAE0] flex items-center justify-center text-[#5C5B54]">
                        <User size={16} />
                    </div>
                    <button
                        aria-label="Open menu"
                        onClick={() => setDrawerOpen(true)}
                        className="flex flex-col justify-center gap-1.25 w-8 h-8 bg-transparent border-none cursor-pointer"
                    >
                        <span className="block w-5 h-0.5 bg-[#1B1B1F] rounded-full"></span>
                        <span className="block w-5 h-0.5 bg-[#1B1B1F] rounded-full"></span>
                        <span className="block w-5 h-0.5 bg-[#1B1B1F] rounded-full"></span>
                    </button>
                </div>
            </div>

            {/* Mobile drawer backdrop */}
            <div
                onClick={() => setDrawerOpen(false)}
                className={`fixed inset-0 bg-black/45 z-40 transition-opacity duration-300 md:hidden ${drawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
            />

            {/* Mobile drawer panel — slides in from the right */}
            <div
                className={`fixed top-0 right-0 h-full w-[72%] max-w-75 bg-white z-50 shadow-2xl transition-transform duration-300 ease-out md:hidden ${drawerOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="flex items-center justify-between px-5 py-4 border-b border-[#E6E4DC]">
                    <span className="font-heading font-semibold text-[15px] text-[#1B1B1F]">Menu</span>
                    <button
                        aria-label="Close menu"
                        onClick={() => setDrawerOpen(false)}
                        className="w-8 h-8 flex items-center justify-center bg-transparent border-none cursor-pointer text-[#5C5B54] text-xl"
                    >
                        ×
                    </button>
                </div>

                <div className="p-5 flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#EDEAE0] flex items-center justify-center text-[#5C5B54]">
                            <User size={18} />
                        </div>
                        <span className="font-body text-[15px] font-medium text-[#1B1B1F]">
                            {userName}
                        </span>
                    </div>

                    <button className="flex items-center gap-2 bg-transparent border border-[#E6E4DC] rounded-lg px-3 py-2.5 font-body text-sm font-medium text-[#5C5B54] cursor-pointer transition-colors duration-150 hover:bg-[#F1EFE6] hover:border-[#D8D6CC]">
                        <LogOut size={15} />
                        Log out
                    </button>
                </div>
            </div>
        </header>
    )
}


export default Navbar