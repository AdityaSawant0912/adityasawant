import GenerativeCanvas from "./components/GenerativeCanvas";
import Orbs from "./components/Orbs";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Entry from "./components/Entry";
import Reveal from "./components/Reveal";
import { about, work, projects, education, talks, contacts } from "./data";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <GenerativeCanvas />
      <Orbs />
      <div className="bg-veil" aria-hidden="true" />
      <Nav />

      <div className="shell">
        <Hero />

        <main>
          <Section id="about" index="01" title="About">
            <Reveal>
              <p className="about-lead">{about}</p>
            </Reveal>
          </Section>

          <Section id="work" index="02" title="Work Experience">
            {work.map((item, i) => (
              <Entry key={item.title + item.date} item={item} delay={Math.min(i, 3) * 0.05} />
            ))}
          </Section>

          <Section id="projects" index="03" title="Projects">
            {projects.map((item, i) => (
              <Entry key={item.title} item={item} delay={Math.min(i, 3) * 0.05} />
            ))}
          </Section>

          <Section id="education" index="04" title="Education">
            {education.map((item) => (
              <Entry key={item.title} item={item} />
            ))}
          </Section>

          <Section id="talks" index="05" title="Featured Talks">
            {talks.map((item) => (
              <Entry key={item.title} item={item} />
            ))}
          </Section>

          <Section id="contact" index="06" title="Contact">
            <div className="contact-list">
              {contacts.map((c, i) => {
                const external = !c.href.startsWith("mailto:");
                return (
                  <Reveal
                    as="a"
                    key={c.label}
                    className="contact-row"
                    href={c.href}
                    delay={i * 0.05}
                    {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                  >
                    <span className="clabel">{c.label}</span>
                    <span className="cval">
                      {c.value}
                      <span className="arrow" aria-hidden="true">
                        ↗
                      </span>
                    </span>
                  </Reveal>
                );
              })}
            </div>
          </Section>
        </main>

        <footer className="foot">
          © {year} Aditya Sawant · built with 💖
        </footer>
      </div>
    </>
  );
}
