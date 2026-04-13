// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Boş Durum (Başlangıç)
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface BosDurumBaslangicProps {}

export function BosDurumBaslangic(props: BosDurumBaslangicProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="w-full top-0 sticky z-50 bg-[#131318] flex justify-between items-center px-6 py-4">
      <div className="flex items-center gap-2">
      <span className="text-xl font-bold text-[#e4e1e9] font-['Space_Grotesk'] tracking-tight">Sayaç Pro</span>
      </div>
      <div className="flex items-center gap-4">
      <button className="p-2 rounded-full hover:bg-[#1b1b20] transition-colors text-[#e4e1e9] scale-95 duration-200">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </header>
      <main className="min-h-[calc(100vh-140px)] flex flex-col items-center justify-center px-6 pb-24">
      {/*  Counter Canvas (The Obsidian Chronometer)  */}
      <section className="w-full max-w-md flex flex-col items-center">
      {/*  Metadata Area (Asymmetric Placement)  */}
      <div className="w-full flex justify-between items-end mb-8 px-2">
      <div className="flex flex-col">
      <span className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-medium">Oturum Durumu</span>
      <span className="text-primary font-semibold text-sm tracking-wide">Beklemede</span>
      </div>
      <div className="text-right">
      <span className="text-[11px] uppercase tracking-[0.2em] text-on-surface-variant/60 font-medium">Hedef</span>
      <span className="text-on-surface font-semibold text-sm tracking-wide">—</span>
      </div>
      </div>
      {/*  Primary Counter Card  */}
      <div className="w-full aspect-square bg-surface-container-highest rounded-[3rem] flex flex-col items-center justify-center relative overflow-hidden group">
      {/*  Atmospheric Background Texture  */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
      {/*  The Core Number  */}
      <div className="relative z-10 flex flex-col items-center">
      <h1 className="text-[8rem] md:text-[10rem] font-headline font-light text-on-surface leading-none numeric-shadow">
                              0
                          </h1>
      <p className="text-on-surface-variant/40 text-xs uppercase tracking-[0.3em] font-bold mt-2">Toplam Sayım</p>
      </div>
      {/*  Empty State Tip  */}
      <div className="absolute bottom-12 z-10 bg-surface-container-low/80 backdrop-blur-md px-6 py-3 rounded-full border border-outline-variant/10">
      <p className="text-on-surface text-sm font-medium tracking-tight">Başlamak için butonları kullanın</p>
      </div>
      </div>
      {/*  Interactive Zone (The "Power" Buttons)  */}
      <div className="w-full grid grid-cols-2 gap-4 mt-8">
      {/*  Decrement Button  */}
      <button className="group flex flex-col items-center justify-center p-8 bg-surface-container-low rounded-xl active:scale-95 transition-all duration-150 border border-outline-variant/5">
      <span className="material-symbols-outlined text-secondary text-3xl mb-2">remove</span>
      <span className="text-on-surface font-bold text-lg">Azalt</span>
      </button>
      {/*  Increment Button  */}
      <button className="group flex flex-col items-center justify-center p-8 bg-gradient-to-br from-primary to-primary-container rounded-xl active:scale-95 transition-all duration-150 shadow-[0_10px_30px_rgba(75,226,119,0.2)]">
      <span className="material-symbols-outlined text-on-primary text-3xl mb-2" style={{fontVariationSettings: "'FILL' 1"}}>add</span>
      <span className="text-on-primary font-bold text-lg">Artır</span>
      </button>
      </div>
      {/*  Utility Row  */}
      <div className="w-full flex justify-end mt-6">
      <button className="flex items-center gap-3 px-6 py-3 bg-surface-container-low rounded-full hover:bg-surface-container-high transition-colors text-tertiary group">
      <span className="material-symbols-outlined text-lg group-hover:rotate-180 transition-transform duration-500">restart_alt</span>
      <span className="text-sm font-bold tracking-wide uppercase">Sıfırla</span>
      </button>
      </div>
      </section>
      {/*  Dynamic Data Visual (Atmospheric)  */}
      <div className="w-full max-w-4xl mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="bg-surface-container-low p-6 rounded-3xl flex items-center gap-4 border border-outline-variant/10">
      <div className="w-12 h-12 rounded-2xl bg-surface-variant flex items-center justify-center text-primary">
      <span className="material-symbols-outlined">trending_up</span>
      </div>
      <div>
      <p className="text-on-surface-variant/60 text-[10px] uppercase tracking-widest font-bold">Ortalama</p>
      <p className="text-on-surface font-headline text-xl">0.0</p>
      </div>
      </div>
      <div className="bg-surface-container-low p-6 rounded-3xl flex items-center gap-4 border border-outline-variant/10">
      <div className="w-12 h-12 rounded-2xl bg-surface-variant flex items-center justify-center text-tertiary">
      <span className="material-symbols-outlined">schedule</span>
      </div>
      <div>
      <p className="text-on-surface-variant/60 text-[10px] uppercase tracking-widest font-bold">Süre</p>
      <p className="text-on-surface font-headline text-xl">00:00</p>
      </div>
      </div>
      <div className="bg-surface-container-low p-6 rounded-3xl flex items-center gap-4 border border-outline-variant/10">
      <div className="w-12 h-12 rounded-2xl bg-surface-variant flex items-center justify-center text-secondary">
      <span className="material-symbols-outlined">history</span>
      </div>
      <div>
      <p className="text-on-surface-variant/60 text-[10px] uppercase tracking-widest font-bold">Son İşlem</p>
      <p className="text-on-surface font-headline text-xl">—</p>
      </div>
      </div>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center py-3 px-4 bg-[#131318] z-50 rounded-t-xl border-t border-[#3d4a3d]/15 shadow-[0_-4px_20px_rgba(75,226,119,0.06)]">
      {/*  Ana Sayfa (Active)  */}
      <a className="flex flex-col items-center justify-center text-[#4be277] font-bold transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
      <span className="font-['Manrope'] text-[11px] uppercase tracking-widest mt-1">Ana Sayfa</span>
      </a>
      {/*  Geçmiş  */}
      <a className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 hover:text-[#4be277] transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined">history</span>
      <span className="font-['Manrope'] text-[11px] uppercase tracking-widest mt-1">Geçmiş</span>
      </a>
      {/*  Ayarlar  */}
      <a className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 hover:text-[#4be277] transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-['Manrope'] text-[11px] uppercase tracking-widest mt-1">Ayarlar</span>
      </a>
      </nav>
    </>
  );
}
