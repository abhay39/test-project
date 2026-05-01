import AvatarBuilder from "@/components/AvatarBuilder";
import { Gem, Settings, Trophy, Home, ShoppingBag, Zap } from "lucide-react";

export default function Page() {
  return (
    <main className="h-screen w-screen flex flex-col bg-bg-dark overflow-hidden select-none">
      {/* Top Header */}
      <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 z-20 glass-panel">
        <div className="flex items-center gap-12">
          <div className="flex flex-col">
            <h1 className="text-xl font-black tracking-tighter text-white">AVATAR BUILDER DASHBOARD</h1>
            <span className="text-[10px] text-white/40 font-bold uppercase tracking-[0.2em]">Avatar builder</span>
          </div>

          <nav className="flex items-center gap-8">
            <NavItem icon={<Home size={18} />} label="HOME" />
            <NavItem icon={<ShoppingBag size={18} />} label="SHOP" active />
            <NavItem icon={<Trophy size={18} />} label="RANK" />
          </nav>
        </div>

        <div className="flex items-center gap-6">
          <StatBox icon={<Gem size={16} className="text-cyan-400" />} value="100" />
          <StatBox icon={<Zap size={16} className="text-yellow-400" />} value="100 XP" />
          <StatBox icon={<div className="w-5 h-5 rounded-full bg-blue-500 text-[10px] flex items-center justify-center text-white font-bold">P</div>} value="Python" />
          
          <button className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-white/40 hover:text-white transition-all">
            <Settings size={20} />
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 overflow-hidden relative">
        <AvatarBuilder />
      </div>

      {/* Footer / Bottom Actions */}
      <footer className="h-16 flex items-center justify-center gap-4 z-20">
         <div className="flex items-center gap-2 bg-bg-panel/50 backdrop-blur-md px-6 py-2 rounded-full border border-white/5">
           <button className="p-2 text-white/40 hover:text-white transition-colors"><Zap size={20} /></button>
           <button className="p-2 text-white/40 hover:text-white transition-colors"><ShoppingBag size={20} /></button>
           <button className="p-2 text-white/40 hover:text-white transition-colors"><Home size={20} /></button>
           <div className="w-px h-6 bg-white/10 mx-2" />
           <button className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-white/40 hover:text-white transition-colors hover:bg-white/20">?</button>
         </div>
      </footer>
    </main>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center gap-2 font-bold text-xs tracking-widest transition-all ${active ? 'text-primary' : 'text-white/40 hover:text-white'}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function StatBox({ icon, value }: { icon: React.ReactNode, value: string }) {
  return (
    <div className="flex items-center gap-3 bg-black/40 border border-white/5 px-4 py-1.5 rounded-full">
      {icon}
      <span className="text-xs font-bold text-white/80">{value}</span>
    </div>
  );
}
