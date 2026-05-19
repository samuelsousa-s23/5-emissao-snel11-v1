/* global React, Icon, Container, FadeIn, photos */
// Dobra 4 — Emotional block + pillars.

const PILLARS = [
{
  img: 'assets/Card1.svg',
  title: 'Ativos reais, renda real',
  text: 'Usinas solares em operação geram energia, emitem faturas e recebem. O rendimento do fundo vem dessa cadeia produtiva concreta.'
},
{
  img: 'assets/Card2.svg',
  title: 'Distribuição mensal de rendimentos',
  text: 'O SNEL11 distribui rendimentos todo mês, com isenção de IR para pessoa física. Previsibilidade no bolso, não em promessas.',
  accent: true
},
{
  img: 'assets/Card3.svg',
  title: 'Diversificação geográfica',
  text: 'Usinas espalhadas por múltiplos estados reduzem o risco climático e regulatório. Nenhuma região concentra o fundo inteiro.'
},
{
  img: 'assets/Card4.svg',
  title: 'Contratos de longo prazo (PPAs)',
  text: 'Receita travada com grandes consumidores por anos. Menos volatilidade, mais previsibilidade nos próximos ciclos de distribuição.'
}];


const Emotional = () =>
<section className="section section--soft" id="por-que">
    <Container wide>
      <FadeIn>
        <div style={{ marginBottom: 24 }}>
          <span className="eyebrow-tag eyebrow-tag--accent">[ POR QUE INVESTIR NO SNEL11 ]</span>
        </div>
      </FadeIn>
      <div className="emotional__intro">
        <FadeIn className="copy">
          <h2 className="h-section" style={{ fontWeight: "600" }}>
            Energia limpa gera <span className="accent">capital.</span><br />
            <span className="ink">Todo mês.</span>
          </h2>
          <p className="lede">
            A transição energética é um caminho sem volta. O Brasil tem uma das matrizes elétricas mais limpas do mundo,
            e a solar fotovoltaica é a que mais cresce. Mas crescer não é suficiente: o que o investidor inteligente quer é <strong style={{ color: 'var(--snel-blue-900)' }}>ser dono dessa geração</strong>.
          </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)' }}>O SNEL11 não vende promessa de futuro. Ele distribui rendimentos mensais provenientes de contratos de longo prazo (PPAs) com clientes de alta qualidade, reduzindo o risco de inadimplência e garantindo previsibilidade de caixa.


        </p>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--fg-2)' }}>
            Enquanto o mundo discute a crise climática, você pode <strong style={{ color: 'var(--snel-blue-900)' }}>participar da solução</strong> e ser remunerado por isso todo mês.
          </p>
          <div className="emotional__cta">
            <a className="btn btn--primary btn--lg" href="#comunidade">
              <Icon name="whatsapp" size={18} />
              ENTRE NA COMUNIDADE
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div style={{ position: 'relative', borderRadius: 'var(--r-2xl)', overflow: 'hidden', aspectRatio: '4 / 3', background: 'var(--snel-blue-900)', boxShadow: 'var(--shadow-2)' }}>
            <img src={photos.windSolar} alt="Usina solar e turbinas eólicas em paisagem aberta" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, transparent 50%, rgba(13,24,77,0.65) 100%)' }} />
            <div style={{ position: 'absolute', right: 24, bottom: 24, color: '#fff', textAlign: 'right' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 22, lineHeight: 1.18, letterSpacing: '-0.01em', maxWidth: '20ch' }}>
                Cada cota é uma fração de uma usina real, gerando agora.
              </div>
            </div>
          </div>
        </FadeIn>
      </div>

      <div className="pillars">
        {PILLARS.map((p, i) =>
      <FadeIn key={i} delay={i * 80}>
            <div className={`pillar ${p.accent ? 'pillar--accent' : ''}`}>
              <div className="pillar__icon">
                <img src={p.img} width={24} height={24} style={{ display: 'block' }} alt="" />
              </div>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          </FadeIn>
      )}
      </div>
    </Container>
  </section>;


Object.assign(window, { Emotional });