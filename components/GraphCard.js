export default function GraphCard({ title, series = [], projection = [] }) {
  const width = 320, height = 90, padding = 10;
  const data = series[0]?.values || [0,0,0,0,0,0,0];
  const proj = projection || [];
  const all = data.concat(proj);
  const max = Math.max(...all, 1);
  const points = data.map((v,i) => {
    const x = padding + (i/(data.length -1)) * (width - padding*2 || 1);
    const y = height - padding - (v/max)*(height - padding*2);
    return `${x},${y}`;
  }).join(' ');
  const projPoints = proj.map((v,i) => {
    const idx = data.length + i;
    const x = padding + (idx/(data.length + proj.length -1)) * (width - padding*2 || 1);
    const y = height - padding - (v/max)*(height - padding*2);
    return `${x},${y}`;
  }).join(' ');

  return (
    <div className="card">
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div>
          <h4 style={{margin:0}}>{title}</h4>
          <div className="small">Last 7 days vs projected</div>
        </div>
        <div style={{textAlign:'right'}} className="small">Est. next 7 days ↑ <strong style={{color:'#2EA78B'}}>+12%</strong></div>
      </div>

      <div className="chart-wrap" style={{marginTop:12}}>
        <svg width="100%" viewBox={`0 0 ${width} ${height}`} preserveAspectRatio="none">
          {[0.25,0.5,0.75].map((p,i) => (
            <line key={i} x1={padding} x2={width-padding} y1={padding + p*(height-padding*2)} y2={padding + p*(height-padding*2)} stroke="#eee" />
          ))}
          <polyline fill="none" stroke="#FF6B6B" strokeWidth="2.5" points={points} strokeLinecap="round" strokeLinejoin="round" />
          {proj.length>0 && <polyline fill="none" stroke="#4ECDC4" strokeWidth="1.8" points={`${points} ${projPoints}`} strokeDasharray="4 6" />}
          {data.map((v,i) => {
            const x = padding + (i/(data.length -1)) * (width - padding*2 || 1);
            const y = height - padding - (v/max)*(height - padding*2);
            return <circle key={'d'+i} cx={x} cy={y} r="3" fill="#FF6B6B" />;
          })}
        </svg>
      </div>

      <div style={{marginTop:12, display:'flex', gap:12, justifyContent:'space-between', alignItems:'center'}}>
        <div className="small">Avg/day <strong>842</strong></div>
        <div style={{display:'flex', gap:8}}>
          <div style={{fontSize:12, color:'#FF6B6B'}}>● Historical</div>
          <div style={{fontSize:12, color:'#4ECDC4'}}>● Projection</div>
        </div>
      </div>
    </div>
  );
}
