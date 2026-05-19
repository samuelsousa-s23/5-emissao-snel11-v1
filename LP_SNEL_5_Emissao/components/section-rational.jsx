/* global React, Icon, Container, FadeIn */
// Dobras 7, 8, 9 — Why Now + Before/After + Cronograma.

const REASONS = [
{
  num: '01',
  title: 'Preço de emissão com desconto sobre o valor patrimonial',
  text: 'Ao participar da oferta pública, o investidor acessa um preço definido previamente — frequentemente abaixo do valor negociado no mercado secundário após o encerramento da emissão.'
},
{
  num: '02',
  title: 'Captação direcionada para novos ativos',
  text: 'O recurso da 5ª Emissão está vinculado à aquisição de novas usinas. Mais ativos = mais receita de geração = potencial de crescimento nos rendimentos distribuídos.'
},
{
  num: '03',
  title: 'Proteção natural contra inflação',
  text: 'Os contratos de energia do fundo possuem reajuste anual atrelado a índices de preços. Isso faz da renda do SNEL11 uma proteção estrutural contra a corrosão do poder de compra.'
},
{
  num: '04',
  title: 'Isenção de IR para pessoa física',
  text: 'Os rendimentos distribuídos por FIIs são isentos de IR para pessoa física, desde que cumpridos os requisitos legais. Isso amplifica o rendimento líquido frente a outras classes de renda fixa.',
  accent: true
}];


const WhyNow = () =>
<section className="section" id="por-que-agora">
    <Container wide>
      <FadeIn>
        <div style={{ marginBottom: 48, textAlign: 'center' }}>
          <span className="eyebrow-tag eyebrow-tag--accent" style={{ display: 'inline-block', marginBottom: 20 }}>[ POR QUE PARTICIPAR AGORA ]</span>
          <h2 className="h-section" style={{ fontWeight: "600", marginBottom: 16 }}>
            Quatro razões para entrar<br /><span style={{ color: 'var(--snel-sun-500)' }}>na 5ª Emissão.</span>
          </h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            A emissão pública cria uma janela com condições que, depois de fechada, não se repetem no mercado secundário.
          </p>
        </div>
      </FadeIn>

      <div className="why-grid">
        <div className="reasons">
          {REASONS.map((r, i) =>
        <FadeIn key={i} delay={i * 70}>
              <div className={`reason ${r.accent ? 'reason--accent' : ''}`}>
                <div className="reason__num">{r.num}</div>
                <h4>{r.title}</h4>
                <p>{r.text}</p>
              </div>
            </FadeIn>
        )}
        </div>

        <FadeIn delay={160} style={{ height: '100%' }}>
          <div className="price-card">
            <div className="price-card__header">
              <div className="price-card__header-eyebrow">5ª Emissão de Cotas · SNEL11</div>
              <div className="price-card__header-title">Preço da Emissão</div>
              <svg style={{ position: 'absolute', right: -24, top: -24, opacity: 0.14, pointerEvents: 'none' }} width="120" height="120" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="22" fill="none" stroke="#FABE1E" strokeWidth="1.5" />
                <circle cx="50" cy="50" r="36" fill="none" stroke="#FABE1E" strokeWidth="1" />
                <circle cx="50" cy="50" r="50" fill="none" stroke="#FABE1E" strokeWidth="0.6" />
              </svg>
            </div>
            <div className="price-card__body">
              <div className="price-card__inner">
                <div className="price-card__img" style={{ backgroundImage: `url(${photos.panelsAerial})` }}>
                  <div className="price-card__img-overlay" />
                </div>
                <div className="price-card__inner-content">
                  <div className="price-card__badge">
                    <Icon name="panel" size={10} /> 5ª Emissão · SNEL11
                  </div>
                  <div className="price-card__value">
                    <span className="prefix">R$</span>10,50
                  </div>
                  <div className="price-card__label">Preço de Emissão</div>
                  <div className="price-card__divider" />
                  <div className="price-card__discount">X,X% de desconto da cotação atual</div>
                  <div className="price-card__discount-note">(Cota atual em R$ XX,XX — fechamento de 25/03)</div>
                </div>
              </div>
              <p style={{ fontSize: 12.5, color: 'var(--fg-2)', lineHeight: 1.6, flex: 1 }}>
                Consulte seu assessor de investimentos ou acesse sua corretora habilitada para realizar a reserva.
              </p>
              <p className="price-card__note">
                *O valor inclui a Taxa de Distribuição primária de R$ 0,31 por Nova Cota (preço de integralização: R$ 10,19).
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={300}>
        <div className="why-cta">
          <a className="btn btn--primary btn--lg" href="#comunidade">
            <Icon name="whatsapp" size={18} />
            ENTRE NA COMUNIDADE
          </a>
        </div>
      </FadeIn>
    </Container>

    <style>{`
      @media (max-width: 860px) {
        .why-grid { grid-template-columns: 1fr !important; }
        .price-card { position: static !important; }
      }
    `}</style>
  </section>;


const COMPARE_ROWS = [
{ metric: 'Estados com usinas', help: 'Diversificação geográfica do portfólio.', now: '11', after: '14', delta: '+3' },
{ metric: 'Patrimônio Líquido', help: 'Valor de mercado dos ativos do fundo.', now: 'R$ 1,3 bi', after: 'R$ 2,1 bi', delta: '+62%' },
{ metric: 'Número de usinas', help: 'Ativos solares em operação ou construção.', now: '23', after: '34', delta: '+11' },
{ metric: 'Capacidade instalada', help: 'Potência total de geração contratada.', now: '180 MWp', after: '290 MWp', delta: '+61%' }];


const BeforeAfter = () =>
<section className="section section--soft" id="antes-depois">
    <Container wide>
      <FadeIn>
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <span className="eyebrow-tag eyebrow-tag--accent" style={{ display: 'inline-block', marginBottom: 20 }}>[ ANTES E DEPOIS DA 5ª EMISSÃO ]</span>
          <h2 className="h-section" style={{ fontWeight: "600", marginBottom: 16 }}>
            O que muda no fundo<br /><span style={{ color: 'var(--snel-blue-400)' }}>após a captação.</span>
          </h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            A emissão não é só uma janela de entrada — <strong style={{ color: 'var(--snel-blue-900)' }}>ela transforma o fundo</strong> e amplia sua base geradora.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="compare">
          <div className="compare__head">
            <div className="compare__head-label">Métrica</div>
            <div>
              <div className="compare__head-label" style={{ fontSize: 10, marginBottom: 4 }}>SNEL11 hoje</div>
              <div className="compare__head-now">Posição atual</div>
            </div>
            <div>
              <div className="compare__head-label" style={{ fontSize: 10, marginBottom: 4, color: 'var(--snel-blue-400)' }}>SNEL11 após a 5ª Emissão</div>
              <div className="compare__head-after">Projeção da carteira-alvo</div>
            </div>
          </div>
          {COMPARE_ROWS.map((r, i) =>
        <div key={i} className="compare__row">
              <div className="compare__metric">
                <div className="compare__metric-label">{r.metric}</div>
                <div className="compare__metric-help">{r.help}</div>
              </div>
              <div className="compare__now">{r.now}</div>
              <div className="compare__after">
                {r.after}
                <span className="delta">↑ {r.delta}</span>
              </div>
            </div>
        )}
        </div>
      </FadeIn>

      <FadeIn delay={140}>
        <p className="subtle" style={{ marginTop: 18, textAlign: 'center' }}>
          Projeções baseadas no cenário-base do estudo de viabilidade. Resultados reais podem divergir significativamente.
        </p>
      </FadeIn>
    </Container>
  </section>;


const CRONO = [
{ date: 'DD mmm 2026', tag: 'Abertura', current: true, title: 'Divulgação do Fato Relevante, Prospecto e Anúncio de Início', desc: 'Publicação dos documentos oficiais da oferta pública. A partir desta data os investidores podem consultar o Prospecto Definitivo e a Lâmina da 5ª Emissão.' },
{ date: 'DD mmm 2026', tag: 'Data-base', title: 'Data-base / Data de corte', desc: 'Quem tiver SNEL11 nesta data recebe o direito de subscrição (SNEL12), proporcional ao número de cotas detidas.' },
{ date: 'DD mmm 2026', tag: 'Preferência', title: 'Início das reservas do Direito de Preferência', desc: 'Cotistas que receberam o direito de subscrição (SNEL12) podem realizar suas reservas a partir desta data junto à sua corretora habilitada.' },
{ date: 'DD mmm 2026', tag: 'Preferência', title: 'Fim das reservas do Direito de Preferência', desc: 'Encerramento do prazo para exercício do direito de preferência. Reservas não realizadas até esta data implicam na perda do direito.' },
{ date: 'DD mmm 2026', tag: 'Liquidação', title: 'Liquidação do Direito de Preferência', desc: 'Data de liquidação financeira das cotas subscritas no período de preferência. O débito ocorre automaticamente na conta vinculada à corretora.' },
{ date: 'DD mmm 2026', tag: 'Sobras', title: 'Início das reservas de Sobras e Montante Adicional', desc: 'Abertura do período para reservas das cotas não subscritas no direito de preferência. Disponível para cotistas atuais e novos investidores.' },
{ date: 'DD mmm 2026', tag: 'Sobras', title: 'Fim das reservas de Sobras e Montante Adicional', desc: 'Encerramento do prazo para reservas de sobras e montante adicional. Após esta data, a participação nesta fase não será possível.' },
{ date: 'DD mmm 2026', tag: 'Liquidação', title: 'Liquidação das Sobras e Montante Adicional', desc: 'As cotas subscritas na fase de sobras e montante adicional são liquidadas e creditadas na conta do investidor.' }];


const Cronograma = () =>
<section className="section" id="cronograma">
    <Container wide>
      <FadeIn>
        <div style={{ marginBottom: 40, textAlign: 'center' }}>
          <span className="eyebrow-tag eyebrow-tag--accent" style={{ display: 'inline-block', marginBottom: 20 }}>[ COMO PARTICIPAR ]</span>
          <h2 className="h-section" style={{ fontWeight: "600", marginBottom: 16 }}>
            Cronograma da <span style={{ color: 'var(--snel-blue-400)' }}>5ª Emissão.</span>
          </h2>
          <p className="lede" style={{ margin: '0 auto' }}>
            Acompanhe as datas-chave e não deixe a janela de reserva fechar sem você.
          </p>
        </div>
      </FadeIn>

      <FadeIn delay={80}>
        <div className="cronograma">
          {CRONO.map((s, i) =>
        <div key={i} className={`crono-step ${s.current ? 'crono-step--current' : ''}`}>
              <div className="crono-step__date">
                {s.date}
                <span className="crono-step__tag">{s.tag}</span>
              </div>
              <div className="crono-step__body">
                <div className="crono-step__title">{s.title}</div>
                <div className="crono-step__desc">{s.desc}</div>
              </div>
            </div>
        )}
        </div>
      </FadeIn>
    </Container>
  </section>;


Object.assign(window, { WhyNow, BeforeAfter, Cronograma });