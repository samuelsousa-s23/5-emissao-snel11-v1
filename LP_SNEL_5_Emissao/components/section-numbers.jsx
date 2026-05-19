/* global React, Icon, Container, FadeIn, Spark, AreaChart, BarChart, BrazilMap, PatrimonyChart, CotistasChart */
// Dobras 5, 6 — Big numbers + Result cards with charts.

const BIG_NUMS = [
{ eyebrow: 'Retorno acumulado', value: '+62', unit: '%', note: 'Desde o início (ago/22)', accent: true },
{ eyebrow: 'Dividend Yield atual', value: '13,2', unit: '%', note: 'Nos últimos 12 meses' },
{ eyebrow: 'Número de Cotistas', value: '47', unit: ' mil', note: 'Até Maio/2026' }];


const BigNumbers = () =>
<section className="section" id="numeros">
    <Container wide>
      <FadeIn>
        <div style={{ marginBottom: 24, textAlign: 'center' }}>
          <span className="eyebrow-tag eyebrow-tag--accent">[ OS NÚMEROS DO FUNDO ]</span>
        </div>
        <h2 className="h-section" style={{ marginBottom: 18, fontWeight: "600", textAlign: 'center' }}>
          Dados que justificam<br /><span style={{ color: 'var(--snel-blue-400)' }}>a decisão.</span>
        </h2>
        <p className="lede" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
          Performance auditada, portfólio real, distribuição histórica consistente.
        </p>
      </FadeIn>

      <div className="bignums">
        {BIG_NUMS.map((n, i) =>
      <FadeIn key={i} delay={i * 70}>
            <div className={`bignum ${n.accent ? 'bignum--accent' : ''}`}>
              <div>
                <div className="bignum__label">{n.eyebrow}</div>
              </div>
              <div>
                <div className="bignum__num-area">
                  <div className="bignum__value">
                    {n.prefix && <span className="prefix">{n.prefix}</span>}
                    {n.value}
                    {n.unit && <span className="unit">{n.unit}</span>}
                  </div>
                </div>
                <div className={n.noteBold ? 'bignum__note--bold' : 'bignum__sub'}>{n.note}</div>
              </div>
              {n.spark &&
          <div className="bignum__spark">
                  <Spark data={n.spark} color={n.accent ? '#FE8E23' : '#609CFC'} />
                </div>
          }
            </div>
          </FadeIn>
      )}
      </div>
    </Container>
  </section>;


// ============ RESULT CARDS ============
const ResultCards = () => {
  const rentab = [100, 102, 105, 108, 112, 116, 121, 127, 134, 142, 149, 156, 162];
  const cdi = [100, 101, 103, 105, 107, 109, 111, 113, 116, 119, 122, 125, 128];
  const ifix = [100, 102, 104, 103, 105, 108, 111, 113, 115, 118, 121, 123, 126];

  const distribuicao = [0.78, 0.82, 0.84, 0.86, 0.88, 0.91, 0.93, 0.95, 0.98, 1.02, 1.05, 1.08];

  const pins = [
  { x: 130, y: 100, size: 12, label: 'BA' },
  { x: 200, y: 130, size: 10, label: 'MG' },
  { x: 240, y: 90, size: 9 },
  { x: 170, y: 175, size: 14, label: 'SP' },
  { x: 105, y: 75, size: 8, label: 'PI' },
  { x: 75, y: 50, size: 7 },
  { x: 220, y: 200, size: 8, label: 'RJ' },
  { x: 165, y: 220, size: 10, label: 'PR' },
  { x: 145, y: 240, size: 8 },
  { x: 95, y: 200, size: 7 },
  { x: 270, y: 60, size: 9 }];


  const patrimonio = [120, 240, 480, 820, 1320];
  const patLabels = ['1ª (2020)', '2ª (2021)', '3ª (2022)', '4ª (2023)', '5ª (2026)'];

  const cotistas = [2.1, 5.4, 12.8, 26.5, 47];
  const cotLabels = ['1ª', '2ª', '3ª', '4ª', '5ª'];

  return (
    <section className="section section--soft" id="resultados">
      <Container wide>
        <FadeIn>
          <div style={{ marginBottom: 24, textAlign: 'center' }}>
            <span className="eyebrow-tag eyebrow-tag--accent">[ RESULTADOS DETALHADOS ]</span>
          </div>
          <h2 className="h-section" style={{ marginBottom: 18, fontWeight: "600", textAlign: 'center' }}>
            Cinco anos de história<br /><span style={{ color: 'var(--snel-blue-400)' }}>visíveis num só lugar.</span>
          </h2>
          <p className="lede" style={{ margin: '0 auto 48px', textAlign: 'center' }}>
            Performance, distribuição, geografia e crescimento — auditados e disponíveis para download.
          </p>
        </FadeIn>

        <div className="result-grid">
          {/* Card 1 — Rentabilidade Histórica */}
          <FadeIn delay={0}>
            <div className="result-card">
              <div className="result-card__head">
                <span className="result-card__num">01</span>
                <span className="subtle">2020–2026 · base 100</span>
              </div>
              <div className="result-card__chart">
                <AreaChart data={rentab} comparison={cdi} comparisonColor="#A0ABB9" width={260} height={160} />
                <div style={{ display: 'flex', gap: 12, marginTop: 8, fontSize: 10, color: 'var(--fg-3)' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ width: 12, height: 3, background: '#609CFC', borderRadius: 2 }} /> SNEL11
                  </span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    <span style={{ width: 12, height: 3, background: '#A0ABB9', borderRadius: 2 }} /> CDI
                  </span>
                </div>
              </div>
              <h4>Rentabilidade Histórica</h4>
              <p>Evolução do valor da cota desde o início, comparada ao CDI. O SNEL11 demonstra consistência na preservação de capital e geração de renda.</p>
            </div>
          </FadeIn>

          {/* Card 2 — Distribuição */}
          <FadeIn delay={80}>
            <div className="result-card">
              <div className="result-card__head">
                <span className="result-card__num">02</span>
                <span className="subtle">12 meses · R$/cota</span>
              </div>
              <div className="result-card__chart">
                <BarChart data={distribuicao} width={260} height={160} />
                <div style={{ position: 'absolute', top: 14, right: 14, textAlign: 'right' }}>
                  <div style={{ fontSize: 10, color: 'var(--fg-3)' }}>último mês</div>
                  <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 20, color: 'var(--snel-blue-900)', letterSpacing: '-0.01em', lineHeight: 1 }}>R$ 1,08</div>
                </div>
              </div>
              <h4>Histórico de Distribuição</h4>
              <p>Rendimentos distribuídos mês a mês com crescimento gradual nos proventos por cota.</p>
            </div>
          </FadeIn>

          {/* Card 3 — Mapa Brasil */}
          <FadeIn delay={140}>
            <div className="result-card">
              <div className="result-card__head">
                <span className="result-card__num">03</span>
                <span className="subtle">11 estados · 23 usinas</span>
              </div>
              <div className="result-card__chart" style={{ display: 'grid', placeItems: 'center' }}>
                <BrazilMap pins={pins} />
              </div>
              <h4>Localização das Usinas</h4>
              <p>Portfólio posicionado nas regiões com maior irradiação solar do país, maximizando geração.</p>
            </div>
          </FadeIn>

          {/* Card 4 — Patrimônio */}
          <FadeIn delay={200}>
            <div className="result-card">
              <div className="result-card__head">
                <span className="result-card__num">04</span>
                <span className="subtle">Por emissão · R$ mi</span>
              </div>
              <div className="result-card__chart">
                <PatrimonyChart data={patrimonio} labels={patLabels} width={260} height={160} />
              </div>
              <h4>Evolução do Patrimônio</h4>
              <p>Cada captação direcionada para aquisição ou construção de novas usinas — ampliando a base geradora de renda.</p>
            </div>
          </FadeIn>

          {/* Card 5 — Cotistas */}
          <FadeIn delay={260}>
            <div className="result-card">
              <div className="result-card__head">
                <span className="result-card__num">05</span>
                <span className="subtle">Cotistas · em milhares</span>
              </div>
              <div className="result-card__chart">
                <CotistasChart data={cotistas} labels={cotLabels} width={260} height={160} />
              </div>
              <h4>Evolução dos Cotistas</h4>
              <p>Base cresceu a cada emissão — reflexo da confiança do mercado. Mais cotistas melhora liquidez e reduz concentração.</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn delay={320}>
          <div className="result-cta">
            <a className="btn btn--primary btn--lg" href="#comunidade">
              <Icon name="whatsapp" size={18} />
              ENTRE NA COMUNIDADE
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>);

};

Object.assign(window, { BigNumbers, ResultCards });