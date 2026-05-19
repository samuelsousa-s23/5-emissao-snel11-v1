/* global React, Icon, Container, Btn, EmissionLockup, FadeIn */
// Dobras 1, 2, 3 — Alert bar, Header, Hero, Video.

// Unsplash photo URLs (solar / clean energy).
const photos = {
  panelsAerial: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=900&q=70',
  panelsSunset: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=800&q=70',
  workerTablet: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?auto=format&fit=crop&w=700&q=70',
  workerPanel: 'https://images.unsplash.com/photo-1545209463-e2825498edbf?auto=format&fit=crop&w=700&q=70',
  windSolar: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=900&q=70',
  panelRow: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=800&q=70',
  videoBg: 'https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=70',
  techWoman: 'https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?auto=format&fit=crop&w=300&q=70',
  techMan: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=300&q=70',
  techMan2: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=70',
  techWoman2: 'https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=300&q=70'
};

const AlertBar = () =>
<div className="alert-bar">
    <div className="alert-bar__inner">
      <span style={{ fontWeight: 700, letterSpacing: '0.16em' }}>MATERIAL PUBLICITÁRIO</span>
    </div>
  </div>;


const SiteHeader = () =>
<header className="site-header">
    <Container>
      <div className="site-header__inner">
        <div className="site-header__brand">
          <img src="assets/snel-logo-black.svg" alt="SNEL11" />
        </div>
        <nav className="site-header__nav">
          <a href="#sobre" style={{ textAlign: "center" }}>Sobre o SNEL11</a>
          <a href="#numeros">Performance</a>
          <a href="#resultados">Resultados</a>
          <a href="#por-que-agora" style={{ borderStyle: "solid", borderWidth: "0px", margin: "0.909058px", textAlign: "center" }}>Por que participar</a>
          <a href="#cronograma">Cronograma</a>
          <a href="#documentos">Documentos</a>
        </nav>
        <div className="site-header__cta">
          <a className="btn btn--primary" href="#comunidade" style={{ padding: '8px 16px', fontSize: 12, letterSpacing: '0.02em' }}>
            <Icon name="whatsapp" size={14} />
            ENTRE NA COMUNIDADE
          </a>
        </div>
      </div>
    </Container>
  </header>;


const Hero = () =>
<section className="hero" id="sobre">
    <div className="hero__bg" />
    <Container wide>
      <div className="hero__grid">
        <div>
          <FadeIn>
            <EmissionLockup>5ª EMISSÃO DE COTAS</EmissionLockup>
          </FadeIn>
          <FadeIn delay={60}>
            <h1 style={{ fontWeight: "600" }}>
              O <span className="sun">sol</span> trabalha<br />
              enquanto você <span className="accent">recebe.</span>
            </h1>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="hero__sub">
              O <span className="strong">SNEL11</span> une geração de energia solar com distribuição de rendimentos mensais.
              A 5ª Emissão abre a janela para você entrar — ou ampliar sua posição — em um dos fundos de energia limpa que mais cresceram nos últimos anos.
            </p>
          </FadeIn>
          <FadeIn delay={180}>
            <div className="hero__ctas">
              <a className="btn btn--primary btn--lg" href="#comunidade" data-comment-anchor="9500c5565f-a-88-15">
                <Icon name="whatsapp" size={18} />
                ENTRE NA COMUNIDADE
              </a>
            </div>
          </FadeIn>
          <FadeIn delay={240}>
            <div className="hero__meta">
              <div style={{ display: 'flex', alignItems: 'center', gap: 24, flexWrap: 'wrap' }}>
                <img src="assets/qitech-positive.svg" alt="QI Tech" style={{ height: 28, width: 'auto' }} />
                <img src="assets/suno-asset-positive.svg" alt="Suno Asset" style={{ height: 28, width: 'auto' }} />
                <img src="assets/anbima-gestao-de-recursos.png" alt="ANBIMA Gestão de Recursos" style={{ height: 48, width: 'auto' }} />
                <img src="assets/anbima-coordenadores-ofertas-publicas.png" alt="ANBIMA Coordenadores" style={{ height: 48, width: 'auto' }} />
                <img src="assets/anbima-ofertas-publicas.png" alt="ANBIMA Ofertas Públicas" style={{ height: 48, width: 'auto' }} />
                <img src="assets/anbima-administracao-fiduciaria.png" alt="ANBIMA Administração Fiduciária" style={{ height: 48, width: 'auto' }} />
              </div>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={200}>
          <div className="hero__collage">
            <div className="tile tile--a"><img src={photos.panelsAerial} alt="Usina solar em operação" /></div>
            <div className="tile tile--b"><img src={photos.windSolar} alt="Usinas solares e eólicas em operação" /></div>
            <div className="tile tile--c"><img src={photos.workerPanel} alt="Técnico instalando painel solar" /></div>
            <div className="tile tile--d"><img src={photos.panelsSunset} alt="Painéis solares ao pôr do sol" /></div>
            <div className="tile tile--e"><img src={photos.workerTablet} alt="Engenheiro inspecionando usina" /></div>
            <div className="tile tile--f"><img src={photos.panelRow} alt="Fileiras de painéis solares" /></div>

          </div>
        </FadeIn>
      </div>

      <p className="hero__disclaimer">
        Leia o prospecto e o regulamento do Fundo antes de aceitar a oferta, em especial a seção <strong style={{ color: 'var(--fg-2)' }}>Fatores de Risco</strong>.
      </p>
    </Container>
  </section>;


const VideoHero = () =>
<section className="section--tight" id="video">
    <Container wide>
      <FadeIn>
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <h2 className="h-section">Apresentação da 5ª Emissão de <span style={{ color: 'var(--snel-blue-400)' }}>Cotas do SNEL11.</span></h2>
          <p className="lede" style={{ margin: '14px auto 0' }}>O gestor explica a tese, o portfólio e o destino dos recursos.</p>
        </div>
        <div className="video-frame" style={{ maxWidth: 760, margin: '0 auto' }} onClick={() => alert('Player do vídeo da oferta — substituir pelo embed real.')}>
          <img src={photos.videoBg} alt="Vídeo de apresentação da 5ª Emissão" />
          <div className="video-frame__gradient" />
          <span className="video-frame__chip">
            <Icon name="play" size={10} /> Vídeo da oferta · 2:34
          </span>
          <div className="video-frame__play">
            <Icon name="play" size={32} />
          </div>
        </div>
      </FadeIn>
    </Container>
  </section>;


Object.assign(window, { AlertBar, SiteHeader, Hero, VideoHero, photos });