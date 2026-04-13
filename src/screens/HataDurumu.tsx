// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Hata Durumu
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HataDurumuProps {}

export function HataDurumu(props: HataDurumuProps) {
  return (
    <>
      <header className="w-full top-0 sticky bg-[#131318] flex justify-between items-center px-6 py-4 z-50">
      <div className="text-xl font-bold text-[#e4e1e9] font-['Space_Grotesk'] tracking-tight">
                  Sayaç Pro
              </div>
      <div className="flex items-center gap-4">
      <button className="hover:bg-[#1b1b20] transition-colors p-2 rounded-full scale-95 duration-200 text-[#e4e1e9]">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </header>
      <main className="flex-grow flex flex-col items-center justify-center p-6 text-center w-full max-w-lg mx-auto relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-secondary-container/10 via-transparent to-transparent -z-10 blur-3xl opacity-40"></div>
      <div className="mb-12 relative group">
      <div className="absolute inset-0 bg-secondary-container blur-3xl opacity-20 scale-150 rounded-full group-hover:opacity-30 transition-opacity"></div>
      <div className="w-24 h-24 sm:w-32 sm:h-32 bg-surface-container-highest rounded-full flex items-center justify-center relative border border-outline-variant/15">
      <span className="material-symbols-outlined text-secondary text-5xl sm:text-6xl" style={{fontVariationSettings: "'FILL' 1"}}>
                          error
                      </span>
      </div>
      </div>
      <h1 className="text-3xl sm:text-4xl font-headline font-bold text-on-surface mb-4 tracking-tight">
                  Bir hata oluştu
              </h1>
      <p className="text-on-surface-variant font-body text-base sm:text-lg mb-12 max-w-sm leading-relaxed opacity-80">
                  Lütfen sayfayı yenileyiniz veya daha sonra tekrar deneyiniz.
              </p>
      <div className="w-full flex flex-col gap-4 sm:flex-row sm:justify-center items-center">
      <button className="w-full sm:w-auto px-10 py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold text-lg rounded-xl hover:shadow-[0_0_20px_rgba(75,226,119,0.3)] transition-all active:scale-95 duration-150">
                      Yeniden Dene
                  </button>
      <button className="w-full sm:w-auto px-8 py-4 bg-surface-container-low text-on-surface font-semibold text-base rounded-xl border border-outline-variant/15 hover:bg-surface-container-high transition-colors active:scale-95 duration-150">
                      Ana Sayfa
                  </button>
      </div>
      <div className="mt-16 flex items-center gap-2 px-4 py-2 bg-surface-container-low rounded-full border border-outline-variant/10">
      <div className="w-2 h-2 rounded-full bg-secondary animate-pulse"></div>
      <span className="text-[11px] font-label uppercase tracking-widest text-tertiary/60">Hata Kodu: ERR_LOAD_FAIL_0x42</span>
      </div>
      </main>
      <div className="fixed bottom-0 left-0 w-full flex justify-around items-center py-3 px-4 bg-[#131318] z-50 rounded-t-xl border-t border-[#3d4a3d]/15 shadow-[0_-4px_20px_rgba(75,226,119,0.06)] md:hidden">
      <div className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 font-['Manrope'] text-[11px] uppercase tracking-widest hover:text-[#4be277] transition-all active:scale-90 duration-150 cursor-pointer">
      <span className="material-symbols-outlined mb-1">home</span>
      <span>Ana Sayfa</span>
      </div>
      <div className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 font-['Manrope'] text-[11px] uppercase tracking-widest hover:text-[#4be277] transition-all active:scale-90 duration-150 cursor-pointer">
      <span className="material-symbols-outlined mb-1">history</span>
      <span>Geçmiş</span>
      </div>
      <div className="flex flex-col items-center justify-center text-[#c0c7d7] opacity-60 font-['Manrope'] text-[11px] uppercase tracking-widest hover:text-[#4be277] transition-all active:scale-90 duration-150 cursor-pointer">
      <span className="material-symbols-outlined mb-1">settings</span>
      <span>Ayarlar</span>
      </div>
      </div>
      <div className="hidden md:block fixed bottom-8 right-8">
      <div className="bg-surface-container-low/80 backdrop-blur-md p-4 rounded-2xl border border-outline-variant/20 max-w-xs text-xs text-on-surface-variant leading-relaxed">
      <div className="flex items-center gap-2 mb-2 text-primary">
      <span className="material-symbols-outlined text-sm">support_agent</span>
      <span className="font-bold uppercase tracking-wider">Destek Ekibi</span>
      </div>
                  Sorun devam ederse lütfen teknik destek ekibimizle iletişime geçiniz. Sistem yöneticileri durumdan haberdar edildi.
              </div>
      </div>
    </>
  );
}
