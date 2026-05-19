/* global React, Icon, Container, FadeIn */
// Dobras 10, 11 — Mini-tutorial + Documentos + Final CTA.

const STEPS_COTISTA = [
{ title: 'Verifique seu direito de preferência', desc: 'Cotistas têm prioridade proporcional ao número de cotas que possuem na data de corte definida no prospecto.' },
{ title: 'Acesse sua plataforma de investimentos', desc: 'Entre na sua corretora ou banco e localize a oferta pelo ticker SNEL11 ou pelo número do processo na CVM.' },
{ title: 'Faça a reserva dentro do prazo', desc: 'Indique a quantidade de cotas desejada. O valor será bloqueado apenas na data de liquidação.' },
{ title: 'Aguarde a confirmação e liquidação', desc: 'Você receberá a confirmação da alocação e as cotas serão creditadas na data de liquidação da oferta.' }];


const STEPS_NOVO = [
{ title: 'Abra conta em uma corretora habilitada', desc: 'Você precisa ter conta em uma corretora ou distribuidora participante da oferta. Verifique a lista no prospecto.' },
{ title: 'Leia o prospecto e a lâmina da oferta', desc: 'Antes de reservar, leia os documentos obrigatórios. Avalie se o fundo é adequado ao seu perfil (suitability).' },
{ title: 'Realize a reserva durante o período de sobras', desc: 'Novos investidores podem participar após o período de preferência dos cotistas, durante a fase de sobras ou bookbuilding aberto.' },
{ title: 'Confirme o saldo disponível na liquidação', desc: 'Certifique-se de ter saldo suficiente na data de liquidação. O débito ocorre automaticamente na conta vinculada à corretora.' }];


const DOCS = [
{ name: 'Prospecto Definitivo', kind: 'PDF · 4,2 MB' },
{ name: 'Lâmina da Oferta', kind: 'PDF · 820 KB' },
{ name: 'Regulamento do Fundo', kind: 'PDF · 1,1 MB' },
{ name: 'Estudo de Viabilidade', kind: 'PDF · 2,8 MB' }];


const Tutorial = () =>
<section className="section section--soft" id="documentos">
    <Container wide>
      <FadeIn>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <h2 className="h-section" style={{ fontWeight: "600" }}>
            Como fazer sua <span style={{ color: 'var(--snel-blue-400)' }}>reserva.</span>
          </h2>
          <p className="lede" style={{ margin: '14px auto 0' }}>
            O processo é simples. Veja como funciona para cada perfil de investidor.
          </p>
        </div>
      </FadeIn>

      <div className="tutorial">
        <FadeIn delay={60}>
          <div className="path path--cotista">
            <div className="path__tag">
              <Icon name="check" size={12} stroke={2.5} /> JÁ SOU COTISTA
            </div>
            <h3 className="path__title">Se você já é cotista do SNEL11</h3>
            {STEPS_COTISTA.map((s, i) =>
          <div key={i} className="step">
                <div className="step__num">{i + 1}</div>
                <div>
                  <div className="step__title">{s.title}</div>
                  <p className="step__desc">{s.desc}</p>
                </div>
              </div>
          )}
          </div>
        </FadeIn>

        <FadeIn delay={140}>
          <div className="path">
            <div className="path__tag">
              <Icon name="sparkles" size={12} stroke={2.2} /> NOVO INVESTIDOR
            </div>
            <h3 className="path__title">Se você ainda não é cotista</h3>
            {STEPS_NOVO.map((s, i) =>
          <div key={i} className="step">
                <div className="step__num">{i + 1}</div>
                <div>
                  <div className="step__title">{s.title}</div>
                  <p className="step__desc">{s.desc}</p>
                </div>
              </div>
          )}
          </div>
        </FadeIn>
      </div>

      <FadeIn delay={200}>
        <div className="docs">
          <div>
            <span className="eyebrow-tag eyebrow-tag--accent" style={{ display: 'inline-block', marginBottom: 12 }}>[ DOCUMENTOS DA OFERTA ]</span>
            <h3>Baixe e leia antes de reservar.</h3>
            <p className="docs__intro">Os materiais obrigatórios da 5ª Emissão estão disponíveis para download. Leitura recomendada antes de qualquer decisão.</p>
          </div>
          <div className="docs__list">
            {DOCS.map((d, i) =>
          <a key={i} className="doc" href="#">
                <div className="doc__icon">
                  <Icon name="file" size={18} stroke={1.6} />
                </div>
                <div className="doc__meta">
                  <span>{d.name}</span>
                  <small>{d.kind}</small>
                </div>
                <span style={{ marginLeft: 'auto', color: 'var(--snel-blue-400)' }}>
                  <Icon name="download" size={18} />
                </span>
              </a>
          )}
          </div>
        </div>
      </FadeIn>
    </Container>
  </section>;


const FinalCTA = () =>
<section className="final-cta" id="cta">
    <div className="final-cta__inner">
      <Container>
        <FadeIn delay={80}>
          <h2 style={{ fontWeight: "700" }}>
            A emissão não espera.<br />
            <span className="sun">Sua decisão pode.</span>
          </h2>
        </FadeIn>
        <FadeIn delay={140}>
          <p>
            Mas o período de reservas tem data de encerramento. Consulte seu assessor de investimentos
            e faça sua análise com base nos documentos oficiais da oferta.
          </p>
        </FadeIn>
        <FadeIn delay={200}>
          <div className="final-cta__ctas">
            <a className="btn btn--sun btn--xl" href="#comunidade" target="_blank" rel="noreferrer">
              <Icon name="whatsapp" size={20} />
              ENTRE NA COMUNIDADE
            </a>
          </div>
        </FadeIn>
      </Container>
    </div>
  </section>;


Object.assign(window, { Tutorial, FinalCTA });