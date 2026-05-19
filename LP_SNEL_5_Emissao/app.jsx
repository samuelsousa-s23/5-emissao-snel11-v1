/* global React, ReactDOM,
   AlertBar, SiteHeader, Hero, VideoHero,
   Emotional,
   BigNumbers, ResultCards,
   WhyNow, BeforeAfter, Cronograma,
   Tutorial, FinalCTA,
   RiskFactors, Disclaimer, SiteFooter,
   useTweaks, TweaksPanel, TweakSection, TweakRadio, TweakColor, TweakToggle, TweakSelect
*/

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "ctaStyle": "navy",
  "headlineAccent": "sun",
  "showAlertBar": true,
  "darkVideoCard": true
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  // Apply tweaks via CSS custom properties on the root.
  React.useEffect(() => {
    const root = document.documentElement;
    // Primary CTA accent color
    const ctaMap = {
      navy:   { bg: '#2ABD74', fg: '#fff' },
      blue:   { bg: '#2ABD74', fg: '#fff' },
      sun:    { bg: '#2ABD74', fg: '#fff' },
    };
    const cta = ctaMap[t.ctaStyle] || ctaMap.navy;
    document.querySelectorAll('.btn--primary').forEach(el => {
      el.style.background = cta.bg;
      el.style.color = cta.fg;
    });

    // Headline accent (the colored words in section headers)
    const accentMap = {
      sun: '#FABE1E',
      blue: '#609CFC',
      orange: '#FE8E23',
    };
    root.style.setProperty('--accent-headline', accentMap[t.headlineAccent] || accentMap.sun);
  }, [t]);

  return (
    <>
      {t.showAlertBar && <AlertBar />}
      <SiteHeader />
      <main>
        <Hero />
        <VideoHero />
        <Emotional />
        <BigNumbers />
        <ResultCards />
        <WhyNow />
        <BeforeAfter />
        <Cronograma />
        <Tutorial />
        <FinalCTA />
        <RiskFactors />
        <Disclaimer />
      </main>
      <SiteFooter />

      <TweaksPanel title="Tweaks">
        <TweakSection label="Hero & CTAs" />
        <TweakRadio
          label="CTA principal"
          value={t.ctaStyle}
          options={[
            { value: 'navy', label: 'Navy' },
            { value: 'blue', label: 'Azul' },
            { value: 'sun',  label: 'Sun' },
          ]}
          onChange={(v) => setTweak('ctaStyle', v)}
        />
        <TweakRadio
          label="Cor de destaque"
          value={t.headlineAccent}
          options={[
            { value: 'sun', label: 'Amarelo' },
            { value: 'blue', label: 'Azul' },
            { value: 'orange', label: 'Laranja' },
          ]}
          onChange={(v) => setTweak('headlineAccent', v)}
        />
        <TweakToggle label="Tarja de urgência" value={t.showAlertBar} onChange={(v) => setTweak('showAlertBar', v)} />
      </TweaksPanel>

      {/* Inject dynamic accent color into headline accents */}
      <style>{`
        .h-section .accent,
        .h-display .sun,
        .hero h1 .sun,
        .final-cta h2 .sun {
          color: var(--accent-headline, var(--snel-sun-500)) !important;
        }
      `}</style>
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
