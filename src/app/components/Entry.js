import Reveal from "./Reveal";

export default function Entry({ item, delay = 0 }) {
  const { date, title, titleLink, location, company, tags = [], body = [] } = item;
  return (
    <Reveal className="entry" delay={delay}>
      {date && <span className="date mono">{date}</span>}
      <h3 className="etitle">
        {titleLink ? (
          <a href={titleLink} target="_blank" rel="noreferrer">
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      {(company || location) && (
        <p className="eloc">
          {company && <span className="ecompany">{company}</span>}
          {company && location && " · "}
          {location}
        </p>
      )}
      {tags.length > 0 && (
        <div className="etags">
          {tags.map((t) => (
            <span className="tag" key={t}>
              {t}
            </span>
          ))}
        </div>
      )}
      {body.map((para, i) => (
        <p className="ebody" key={i}>
          {para}
        </p>
      ))}
    </Reveal>
  );
}
