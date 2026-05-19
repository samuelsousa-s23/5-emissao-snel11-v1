/* global React, Icon, Container, FadeIn */
// Dobras 12, 13 — Discrete risk factors + obligatory disclaimer + footer.

const RISKS = [
  { num: 'i', title: 'Não concretização da Oferta', desc: 'A oferta pode não atingir o volume mínimo ou ser cancelada. Reservas são devolvidas sem correção.' },
  { num: 'ii', title: 'Risco do Estudo de Viabilidade', desc: 'As projeções podem não se concretizar. Premissas econômicas e operacionais são estimativas, não garantias.' },
  { num: 'iii', title: 'Não materialização das perspectivas', desc: 'Rentabilidade, distribuições e crescimento são projeções. Resultados reais podem divergir significativamente.' },
  { num: 'iv', title: 'Risco de mercado externo', desc: 'Instabilidade em economias emergentes ou nos EUA pode impactar o preço das cotas no mercado secundário.' },
  { num: 'v', title: 'Distribuição parcial', desc: 'Se a captação for parcial, o plano de aquisição de novos ativos pode ser reduzido ou adiado.' },
];

const RiskFactors = () => (
  <section className="risk-disclaimer-section">
    <Container wide>
      <div className="risk-disclaimer-grid">
        <div>
          <div className="risk-disclaimer-col__heading">
            <span className="risk-disclaimer-col__heading-icon">!</span>
            Fatores de Risco — Leia antes de investir
          </div>
          <ul className="risk-list">
            {RISKS.map((r, i) => (
              <li key={i} className="risk-list__item">
                <span className="risk-list__num">({r.num})</span>
                <div>
                  <strong style={{ color: 'var(--fg-1)', fontWeight: 600 }}>{r.title}</strong>
                  {' — '}{r.desc}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="risk-disclaimer-col__heading">Disclaimer obrigatório</div>
          <p className="disclaimer-body">
            <strong>LEIA O PROSPECTO E O REGULAMENTO DO FUNDO ANTES DE ACEITAR A OFERTA</strong>, em especial a seção dos Fatores de Risco.
            Entre em contato com o seu assessor de investimentos e avalie a adequação do investimento ao seu perfil.
            Os fundos de investimento não contam com garantia do administrador do fundo, do gestor da carteira, de qualquer mecanismo de seguro
            ou do Fundo Garantidor de Crédito (FGC). A seguir seguem listados os 5 principais fatores de risco da Oferta e do Fundo:
            (i) Risco de não concretização da Oferta, (ii) Risco do Estudo de Viabilidade,
            (iii) Risco de não Materialização das Perspectivas Contidas nos Documentos da Oferta,
            (iv) Acontecimentos e a percepção de riscos em outros países, sobretudo em países de economia emergente e nos Estados Unidos,
            podem prejudicar o preço de mercado dos valores mobiliários brasileiros, inclusive o preço de mercado das Cotas e
            (v) Risco da Distribuição Parcial. O Prospecto está disponível na seguinte página:{' '}
            <a href="https://www.suno.com.br/asset/fundos/snel11/" target="_blank" rel="noreferrer">suno.com.br/asset/fundos/snel11/</a>{' '}
            (Para acessar o documento, neste website acessar o botão "Relat. em destaque").
            O REGISTRO DA OFERTA NÃO IMPLICA, POR PARTE DA CVM, EM GARANTIA DE VERACIDADE DAS INFORMAÇÕES PRESTADAS
            OU EM JULGAMENTO SOBRE A QUALIDADE DO FUNDO OU DAS COTAS A SEREM DISTRIBUÍDAS.
            AS INFORMAÇÕES APRESENTADAS NESTE MATERIAL SÃO BASEADAS NA ANÁLISE E NA ESTRATÉGIA DE INVESTIMENTO QUE O GESTOR PRETENDE ADOTAR PARA O FUNDO.
            OS RESULTADOS REAIS DO FUNDO PODERÃO SER SIGNIFICATIVAMENTE DIFERENTES.
            NÃO HÁ GARANTIA DE QUE A CARTEIRA DO FUNDO APRESENTARÁ CARACTERÍSTICAS SEMELHANTES ÀS APRESENTADAS NESTE MATERIAL.
            A RENTABILIDADE PASSADA NÃO REPRESENTA GARANTIA DE RENTABILIDADE FUTURA.
            A CVM NÃO REALIZOU ANÁLISE PRÉVIA DO CONTEÚDO DO PROSPECTO NEM DOS DOCUMENTOS DA OFERTA.
            Saiba mais em <a href="https://www.suno.com.br/asset/fundos/snel11/" target="_blank" rel="noreferrer">suno.com.br/asset/fundos/snel11/</a>.
          </p>
        </div>
      </div>
    </Container>
  </section>
);

const Disclaimer = () => null;

const SiteFooter = () => (
  <footer className="site-footer">
    <Container wide>
      <div className="site-footer__cols">
        <div className="site-footer__col">
          <h5>SNEL11</h5>
          <p>
            Fundo de Investimento Imobiliário 100% dedicado à geração de energia solar.
            Gestão Suno Asset · Negociado na B3.
          </p>
        </div>
        <div className="site-footer__col">
          <h5>Oferta</h5>
          <ul>
            <li><a href="#numeros">Os números do fundo</a></li>
            <li><a href="#resultados">Resultados detalhados</a></li>
            <li><a href="#cronograma">Cronograma</a></li>
            <li><a href="#documentos">Documentos</a></li>
          </ul>
        </div>
        <div className="site-footer__col">
          <h5>Suno Asset</h5>
          <ul>
            <li><a href="https://www.suno.com.br/asset/" target="_blank" rel="noreferrer">Sobre a gestora</a></li>
            <li><a href="https://www.suno.com.br/asset/fundos/snel11/" target="_blank" rel="noreferrer">Página oficial do SNEL11</a></li>
            <li><a href="#">Política de privacidade</a></li>
            <li><a href="#">Fale com a RI</a></li>
          </ul>
        </div>
      </div>

      <div className="site-footer__main">
        <div className="site-footer__logos">
          <img src="assets/snel-logo-white.svg" alt="SNEL11" className="snel" style={{ filter: 'none' }} />
          <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.18)' }} />
          <img src="assets/suno-asset-negative.svg" alt="Suno Asset · Gestora" />
          <div style={{ width: 1, height: 28, background: 'rgba(255,255,255,0.18)' }} />
          <img src="assets/qitech-positive.svg" alt="QI Tech · Coordenador Líder" style={{ filter: 'brightness(0) invert(1)' }} />
        </div>
        <div className="site-footer__logos" style={{ justifyContent: 'flex-end', gap: 10 }}>
          <div className="anbima-badge"><img src="assets/anbima-administracao-fiduciaria.png" alt="ANBIMA · Administração Fiduciária" /></div>
          <div className="anbima-badge"><img src="assets/anbima-gestao-de-recursos.png" alt="ANBIMA · Gestão de Recursos" /></div>
          <div className="anbima-badge"><img src="assets/anbima-ofertas-publicas.png" alt="ANBIMA · Ofertas Públicas" /></div>
          <div className="anbima-badge"><img src="assets/anbima-coordenadores-ofertas-publicas.png" alt="ANBIMA · Coordenadores" /></div>
        </div>
      </div>

      <div className="site-footer__copy">
        <span>© 2026 SNEL11 · Suno Asset. Todos os direitos reservados.</span>
        <span style={{ color: 'rgba(255,255,255,0.4)' }}>Investindo hoje na energia do amanhã.</span>
      </div>
    </Container>
  </footer>
);

Object.assign(window, { RiskFactors, Disclaimer, SiteFooter });
