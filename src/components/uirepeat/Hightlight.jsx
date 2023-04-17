function Hightlight({ highlight_subtitle, highlight_para, highlight_img }) {
  return (
    <div className="highlight">
      <div className="highlight__img">{highlight_img}</div>
      <h3 className="hightlight__subtitle">{highlight_subtitle}</h3>
      <p className="highlight__para">{highlight_para}</p>
    </div>
  );
}

export default Hightlight;
