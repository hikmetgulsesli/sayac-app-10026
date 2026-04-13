// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: sayac-app-10026 PRD
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

export function Sayacapp10026Prd() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-background)] p-8">
      <h1 className="font-headline text-3xl font-bold text-[var(--color-on-surface)] mb-6">
        sayac-app-10026 — Ürün Gereksinim Dokümanı (PRD)
      </h1>

      <section className="mb-8">
        <h2 className="font-headline text-xl font-semibold text-[var(--color-primary)] mb-4">1. Proje Genel Bakışı</h2>
        <ul className="list-disc list-inside text-[var(--color-on-surface-variant)] space-y-2">
          <li><strong>Proje Adı:</strong> sayac-app-10026</li>
          <li><strong>Proje Türü:</strong> Basit Tek Sayfa Uygulaması (SPA)</li>
          <li><strong>Özet:</strong> Kullanıcının bir sayacı artırıp azaltabildiği, sıfırlayabildiği minimal bir web uygulaması.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-headline text-xl font-semibold text-[var(--color-primary)] mb-4">3. Fonksiyonel Gereksinimler</h2>
        <ul className="list-disc list-inside text-[var(--color-on-surface-variant)] space-y-2">
          <li>Sayaç Değerini Artır, Azalt, Sıfırla.</li>
          <li>Anlık Görüntüleme.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-headline text-xl font-semibold text-[var(--color-primary)] mb-4">5. UI/UX Gereksinimleri</h2>
        <ul className="list-disc list-inside text-[var(--color-on-surface-variant)] space-y-2">
          <li><strong>Renk Paleti:</strong> Arka plan: #131318, Kart: #35343a, Artır: #4be277, Azalt: #ffb3ad, Sıfırla: #c0c7d7</li>
          <li><strong>Tipografi:</strong> Sayı 6rem, Başlık 1.5rem.</li>
          <li><strong>Düzen:</strong> Ortalanmış kart yapısı.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="font-headline text-xl font-semibold text-[var(--color-primary)] mb-4">9. Ekranlar</h2>
        <ol className="list-decimal list-inside text-[var(--color-on-surface-variant)] space-y-2">
          <li>Ana Sayfa</li>
          <li>Hata Durumu</li>
          <li>Boş Durum (Sayaç 0)</li>
        </ol>
      </section>
    </div>
  );
}
