/* global React */
// SVG mini chart placeholders for result cards.

// Line area chart with subtle grid
const AreaChart = ({ data = [], width = 480, height = 180, color = '#609CFC', fill = 'rgba(96,156,252,0.15)', comparison = null, comparisonColor = '#A0ABB9' }) => {
  const max = Math.max(...data, ...(comparison || [])) * 1.08;
  const min = Math.min(...data, ...(comparison || [])) * 0.95;
  const w = width;
  const h = height;
  const padL = 28, padR = 12, padT = 14, padB = 22;
  const innerW = w - padL - padR;
  const innerH = h - padT - padB;
  const toPt = (arr) => arr.map((v, i) => {
    const x = padL + (i / (arr.length - 1)) * innerW;
    const y = padT + (1 - (v - min) / (max - min)) * innerH;
    return [x, y];
  });
  const pts = toPt(data);
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${pts[pts.length - 1][0]},${padT + innerH} L${pts[0][0]},${padT + innerH} Z`;
  const cmpLine = comparison ? toPt(comparison).map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ') : null;

  return (
    <svg viewBox={`0 0 ${w} ${h}`} width="100%" height="100%" preserveAspectRatio="none">
      {/* gridlines */}
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={padL} x2={w - padR} y1={padT + innerH * t} y2={padT + innerH * t} stroke="rgba(13,24,77,0.06)" strokeDasharray="2 4" />
      ))}
      {cmpLine && (
        <path d={cmpLine} stroke={comparisonColor} strokeWidth="1.5" fill="none" strokeDasharray="3 3" opacity="0.7" />
      )}
      <path d={area} fill={fill} />
      <path d={line} stroke={color} strokeWidth="2.2" fill="none" strokeLinejoin="round" />
      {pts.map((p, i) => i === pts.length - 1 && (
        <circle key={i} cx={p[0]} cy={p[1]} r="4" fill={color} stroke="#fff" strokeWidth="2" />
      ))}
      {/* y-axis labels */}
      <text x={padL - 6} y={padT + 4} fill="#A0ABB9" fontSize="10" textAnchor="end" fontFamily="Inter">{Math.round(max)}</text>
      <text x={padL - 6} y={padT + innerH} fill="#A0ABB9" fontSize="10" textAnchor="end" fontFamily="Inter">{Math.round(min)}</text>
    </svg>
  );
};

// Bar chart for monthly distribution
const BarChart = ({ data = [], width = 360, height = 180, color = '#609CFC', highlightColor = '#FABE1E' }) => {
  const max = Math.max(...data) * 1.05;
  const padL = 28, padR = 10, padT = 10, padB = 22;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const bw = innerW / data.length;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" preserveAspectRatio="none">
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={padL} x2={width - padR} y1={padT + innerH * t} y2={padT + innerH * t} stroke="rgba(13,24,77,0.06)" strokeDasharray="2 4" />
      ))}
      {data.map((v, i) => {
        const x = padL + i * bw + 1.5;
        const bh = (v / max) * innerH;
        const y = padT + innerH - bh;
        const isLast = i === data.length - 1;
        return <rect key={i} x={x} y={y} width={bw - 3} height={bh} rx="2" fill={isLast ? highlightColor : color} opacity={isLast ? 1 : 0.8} />;
      })}
    </svg>
  );
};

// Brazil silhouette with pin clusters
const BrazilMap = ({ pins = [], width = 360, height = 240 }) => {
  // Stylized Brazil polygon (simplified outline)
  const brPath = "M165,12 L194,18 L210,30 L218,48 L230,52 L240,72 L260,80 L286,96 L296,116 L302,140 L312,152 L312,170 L306,184 L290,196 L286,212 L272,222 L260,232 L246,240 L218,246 L198,254 L184,258 L168,260 L148,264 L130,260 L114,256 L100,248 L86,234 L72,224 L60,212 L52,196 L44,178 L40,158 L40,140 L46,122 L52,108 L62,90 L72,76 L82,66 L96,54 L110,40 L128,28 L146,18 Z";
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%">
      <path d={brPath} fill="rgba(96,156,252,0.18)" stroke="#609CFC" strokeWidth="1.2" />
      {pins.map((p, i) => (
        <g key={i}>
          <circle cx={p.x} cy={p.y} r={p.size || 8} fill="#FABE1E" opacity="0.25" />
          <circle cx={p.x} cy={p.y} r={(p.size || 8) * 0.5} fill="#FE8E23" />
          {p.label && (
            <text x={p.x + 12} y={p.y + 3} fill="#0D184D" fontSize="10" fontWeight="600" fontFamily="Inter">{p.label}</text>
          )}
        </g>
      ))}
    </svg>
  );
};

// Stacked area / patrimony growth
const PatrimonyChart = ({ data = [], labels = [], width = 360, height = 180 }) => {
  const max = Math.max(...data) * 1.1;
  const padL = 16, padR = 12, padT = 12, padB = 26;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const bw = innerW / data.length;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" preserveAspectRatio="none">
      <line x1={padL} x2={width - padR} y1={padT + innerH} y2={padT + innerH} stroke="rgba(13,24,77,0.08)" />
      {data.map((v, i) => {
        const x = padL + i * bw + 4;
        const bh = (v / max) * innerH;
        const y = padT + innerH - bh;
        const isLast = i === data.length - 1;
        return (
          <g key={i}>
            <rect x={x} y={y} width={bw - 8} height={bh} rx="4" fill={isLast ? '#0D184D' : '#609CFC'} opacity={isLast ? 1 : 0.85} />
            {labels[i] && (
              <text x={x + (bw - 8) / 2} y={padT + innerH + 14} fill="#A0ABB9" fontSize="9" textAnchor="middle" fontFamily="Inter">{labels[i]}</text>
            )}
            {isLast && (
              <text x={x + (bw - 8) / 2} y={y - 6} fill="#0D184D" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="Roboto Flex">R$ {v}</text>
            )}
          </g>
        );
      })}
    </svg>
  );
};

// Cotistas growth — line with markers
const CotistasChart = ({ data = [], labels = [], width = 360, height = 180 }) => {
  const max = Math.max(...data) * 1.12;
  const padL = 28, padR = 14, padT = 16, padB = 24;
  const innerW = width - padL - padR;
  const innerH = height - padT - padB;
  const pts = data.map((v, i) => {
    const x = padL + (i / (data.length - 1)) * innerW;
    const y = padT + (1 - v / max) * innerH;
    return [x, y, v];
  });
  const line = pts.map((p, i) => `${i ? 'L' : 'M'}${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(' ');
  const area = `${line} L${pts[pts.length - 1][0]},${padT + innerH} L${pts[0][0]},${padT + innerH} Z`;
  return (
    <svg viewBox={`0 0 ${width} ${height}`} width="100%" height="100%" preserveAspectRatio="none">
      {[0.25, 0.5, 0.75].map((t, i) => (
        <line key={i} x1={padL} x2={width - padR} y1={padT + innerH * t} y2={padT + innerH * t} stroke="rgba(255,255,255,0.06)" strokeDasharray="2 4" />
      ))}
      <path d={area} fill="rgba(250,190,30,0.22)" />
      <path d={line} stroke="#FABE1E" strokeWidth="2.2" fill="none" strokeLinejoin="round" />
      {pts.map((p, i) => (
        <circle key={i} cx={p[0]} cy={p[1]} r={i === pts.length - 1 ? 5 : 3.5} fill={i === pts.length - 1 ? '#FABE1E' : '#fff'} stroke={i === pts.length - 1 ? '#fff' : '#FABE1E'} strokeWidth="1.5" />
      ))}
      {labels.map((l, i) => (
        <text key={i} x={pts[i][0]} y={padT + innerH + 16} fill="rgba(255,255,255,0.45)" fontSize="10" textAnchor="middle" fontFamily="Inter">{l}</text>
      ))}
    </svg>
  );
};

// Tiny sparkline (for big number cards)
const Spark = ({ data = [3, 5, 4, 7, 6, 9, 8, 11], color = '#609CFC', width = 86, height = 28 }) => {
  const max = Math.max(...data), min = Math.min(...data);
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * width;
    const y = height - 2 - ((v - min) / (max - min || 1)) * (height - 4);
    return `${x},${y.toFixed(1)}`;
  });
  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
      <polyline points={pts.join(' ')} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
};

Object.assign(window, { AreaChart, BarChart, BrazilMap, PatrimonyChart, CotistasChart, Spark });
