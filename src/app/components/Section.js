import Reveal from "./Reveal";

export default function Section({ id, index, title, children }) {
  return (
    <section id={id} className="section">
      <Reveal className="section-head">
        <span className="idx">{index}</span>
        <h2>{title}</h2>
      </Reveal>
      {children}
    </section>
  );
}
