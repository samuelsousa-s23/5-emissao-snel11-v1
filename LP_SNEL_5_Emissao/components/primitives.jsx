/* global React, Icon */
// Shared primitives — eyebrow, sectionHeader, button, lockup, container.

const Container = ({ children, wide = false, className = '' }) =>
<div className={`container ${wide ? 'container--wide' : ''} ${className}`}>{children}</div>;


const Btn = ({ variant = 'primary', size = '', children, withArrow = true, ...rest }) =>
<button className={`btn btn--${variant} ${size ? 'btn--' + size : ''}`} {...rest}>
    {children}
    {withArrow &&
  <span className="btn-arrow">
        <Icon name="arrow" size={12} stroke={2.2} />
      </span>
  }
  </button>;


const EmissionLockup = ({ children = 'EMISSÃO SNEL11' }) =>
<img
  src="assets/snel11-campaign-horizontal.svg"
  alt={typeof children === 'string' ? children : '5ª Emissão SNEL11'}
  className="hero__lockup-img" style={{ height: "65px", width: "175px" }} />;



const SectionHeader = ({ eyebrow, title, lede, align = 'left', children }) =>
<header className={`section-header section-header--${align}`} style={{ marginBottom: 48, maxWidth: 880, textAlign: align }}>
    {eyebrow &&
  <div style={{ marginBottom: 18 }}>
        <span className="eyebrow-tag eyebrow-tag--accent">[ {eyebrow} ]</span>
      </div>
  }
    {title && <h2 className="h-section">{title}</h2>}
    {lede && <p className="lede" style={{ marginTop: 16, marginInline: align === 'center' ? 'auto' : 0 }}>{lede}</p>}
    {children}
  </header>;


// Use IntersectionObserver to fade-in elements
const FadeIn = ({ children, delay = 0, as = 'div', ...rest }) => {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          io.disconnect();
        }
      });
    }, { threshold: 0.12 });
    io.observe(ref.current);
    return () => io.disconnect();
  }, [delay]);
  const Tag = as;
  return (
    <Tag ref={ref} className={`fade-in ${visible ? 'visible' : ''} ${rest.className || ''}`} {...rest}>
      {children}
    </Tag>);

};

Object.assign(window, { Container, Btn, EmissionLockup, SectionHeader, FadeIn });