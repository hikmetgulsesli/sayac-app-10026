// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Ana Sayfa
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface AnaSayfaProps {}

export function AnaSayfa(props: AnaSayfaProps) {
  return (
    <>
      {/*  TopAppBar  */}
      <header className="w-full top-0 sticky bg-[#131318] flex justify-between items-center px-6 py-4 w-full z-50">
      <div className="flex items-center gap-2">
      <span className="text-xl font-bold text-[#e4e1e9] font-['Space_Grotesk'] tracking-tight">Sayaç Pro</span>
      </div>
      <div className="flex items-center gap-4">
      <button className="text-[#e4e1e9] hover:bg-[#1b1b20] transition-colors p-2 rounded-full active:scale-95 duration-200">
      <span className="material-symbols-outlined" data-icon="settings">settings</span>
      </button>
      </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center px-6 pb-24">
      {/*  Brand / Header Section  */}
      <div className="text-center mb-12">
      <h1 className="font-headline text-3xl font-extrabold tracking-tight mb-2">Sayaç Uygulaması</h1>
      <p className="font-body text-on-surface-variant text-sm opacity-60">Hassas Sayım ve Takip Paneli</p>
      </div>
      {/*  Main Counter Card  */}
      <div className="w-full max-w-md bg-surface-container-highest rounded-[2rem] p-8 flex flex-col items-center justify-center relative overflow-hidden">
      {/*  Decorative atmospheric glow  */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-[80px]"></div>
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-secondary-container/5 rounded-full blur-[80px]"></div>
      {/*  Numeric Display  */}
      <div className="relative z-10 py-12 flex flex-col items-center">
      <span className="font-body text-[11px] uppercase tracking-[0.2em] text-on-surface-variant mb-4">Mevcut Değer</span>
      <span className="display-lg font-bold text-primary tracking-tighter">42</span>
      </div>
      {/*  Action Controls  */}
      <div className="w-full grid grid-cols-3 gap-4 mt-8 relative z-10">
      {/*  Azalt Button  */}
      <button className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-secondary-container bg-opacity-20 text-error hover:bg-opacity-30 transition-all active:scale-95 duration-150 group">
      <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center mb-1 shadow-lg">
      <span className="material-symbols-outlined text-white" data-icon="remove">remove</span>
      </div>
      <span className="font-label text-sm font-semibold">Azalt</span>
      </button>
      {/*  Sıfırla Button  */}
      <button className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-surface-container-low text-tertiary hover:bg-surface-variant transition-all active:scale-95 duration-150 group">
      <div className="w-12 h-12 rounded-full bg-tertiary-container/20 flex items-center justify-center mb-1">
      <span className="material-symbols-outlined" data-icon="refresh">refresh</span>
      </div>
      <span className="font-label text-sm font-semibold">Sıfırla</span>
      </button>
      {/*  Artır Button  */}
      <button className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl bg-primary-container bg-opacity-20 text-primary hover:bg-opacity-30 transition-all active:scale-95 duration-150 group">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center mb-1 shadow-[0_4px_15px_rgba(75,226,119,0.3)]">
      <span className="material-symbols-outlined text-on-primary" data-icon="add">add</span>
      </div>
      <span className="font-label text-sm font-semibold">Artır</span>
      </button>
      </div>
      {/*  Metadata footer inside card  */}
      <div className="mt-12 flex justify-between w-full text-[10px] text-on-surface-variant opacity-40 font-body uppercase tracking-widest border-t border-outline-variant/10 pt-4">
      <span>ID: sayac-app-10026</span>
      <span>Son Güncelleme: Az önce</span>
      </div>
      </div>
      {/*  Secondary Info Bento Grid  */}
      <div className="w-full max-w-md grid grid-cols-2 gap-4 mt-6">
      <div className="bg-surface-container-low p-4 rounded-2xl flex flex-col gap-2">
      <span className="material-symbols-outlined text-primary text-xl" data-icon="trending_up">trending_up</span>
      <span className="font-label text-xs opacity-60">Hedef Değer</span>
      <span className="font-headline text-lg">100</span>
      </div>
      <div className="bg-surface-container-low p-4 rounded-2xl flex flex-col gap-2">
      <span className="material-symbols-outlined text-tertiary text-xl" data-icon="history">history</span>
      <span className="font-label text-xs opacity-60">Bugünkü Artış</span>
      <span className="font-headline text-lg">+12</span>
      </div>
      </div>
      </main>
      {/*  BottomNavBar  */}
      <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center py-3 px-4 bg-[#131318] z-50 rounded-t-xl border-t border-[#3d4a3d]/15 shadow-[0_-4px_20px_rgba(75,226,119,0.06)]">
      {/*  Ana Sayfa (Active)  */}
      <a className="flex flex-col items-center justify-center text-[#4be277] font-bold transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="home" style={{fontVariationSettings: "'FILL' 1"}}>home</span>
      <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Ana Sayfa</span>
      </a>
      {/*  Geçmiş  */}
      <a className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 hover:text-[#4be277] transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="history">history</span>
      <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Geçmiş</span>
      </a>
      {/*  Ayarlar  */}
      <a className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 hover:text-[#4be277] transition-all active:scale-90 duration-150" href="#">
      <span className="material-symbols-outlined mb-1" data-icon="settings">settings</span>
      <span className="font-['Manrope'] text-[11px] uppercase tracking-widest">Ayarlar</span>
      </a>
      </nav>
      {/*  Background Decoration  */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <div className="absolute top-[20%] left-[-10%] w-[60%] h-[40%] bg-primary/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[10%] right-[-10%] w-[50%] h-[40%] bg-secondary-container/5 blur-[120px] rounded-full"></div>
      </div>
    </>
  );
}
