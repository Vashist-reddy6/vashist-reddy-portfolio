const projects = [
  {
    number: "01",
    title: "ScrapeIQ",
    subtitle: "RAG-native web intelligence",
    description:
      "Turns public web pages into queryable, source-grounded knowledge through an asynchronous scraping, embedding, and retrieval pipeline.",
    stack: ["FastAPI", "ChromaDB", "MongoDB", "Ollama", "Gemini"],
    href: "https://github.com/Vashist-reddy6/ScrapeIQ",
  },
  {
    number: "02",
    title: "WeatherGuard AI",
    subtitle: "Disaster risk prediction and multilingual alerts",
    description:
      "Combines live weather data and historical baselines with an XGBoost classifier, then routes high-risk results into SMS and voice alerts.",
    stack: ["FastAPI", "XGBoost", "React", "MapLibre", "Twilio"],
    href: "https://github.com/Vashist-reddy6/Weather_Project",
  },
];

const achievements = [
  {
    figure: "4,065",
    label: "EAMCET rank",
    detail: "among more than 2 lakh candidates",
  },
  {
    figure: "1512",
    label: "LeetCode contest rating",
    detail: "built through consistent problem solving",
  },
  {
    figure: "R2",
    label: "Smart India Hackathon",
    detail: "qualified for the second round",
  },
];

const certifications = [
  "Data Structures and Algorithms — Smart Interviews",
  "Python for Data Science — Infosys Springboard",
  "Data Visualization with Tableau — Udemy, 59 hours",
];

function ExternalArrow() {
  return <span className="external-arrow" aria-hidden="true" />;
}

export default function Home() {
  return (
    <main>
      <a className="skip-link" href="#work">
        Skip to selected work
      </a>

      <div className="page-shell">
        <header className="site-header">
          <a className="wordmark" href="#top" aria-label="Vashist Reddy, home">
            Vashist Reddy
          </a>
          <nav className="primary-nav" aria-label="Primary navigation">
            <a href="#work">Work</a>
            <a className="nav-optional" href="#about">
              About
            </a>
            <a href="/vashist-reddy-mosra-resume.pdf" download>
              Résumé
            </a>
            <a
              className="nav-optional"
              href="https://github.com/Vashist-reddy6"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/vashist-reddy-mosra-3950652bb/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </nav>
        </header>

        <section className="hero" id="top" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Computer Science · Class of 2027</p>
            <h1 id="hero-title">
              Building practical systems across AI, data, and full-stack
              engineering.
            </h1>
            <p className="hero-intro">
              I&apos;m Vashist, a computer science student focused on how
              software works end to end — from data flow and model behavior to
              APIs, reliability, and real users.
            </p>
            <div className="hero-actions">
              <a className="primary-action" href="#work">
                View selected work <span aria-hidden="true">↓</span>
              </a>
              <a
                className="text-action"
                href="/vashist-reddy-mosra-resume.pdf"
                download
              >
                Download résumé <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>

          <aside className="work-index" aria-label="Selected project index">
            <p className="index-label">Selected work / 02</p>
            {projects.map((project) => (
              <a
                className="index-row"
                href={`#project-${project.number}`}
                key={project.number}
              >
                <span className="index-number">{project.number}</span>
                <span>
                  <strong>{project.title}</strong>
                  <small>{project.subtitle}</small>
                </span>
              </a>
            ))}
          </aside>

          <p className="location">Hyderabad, India</p>
        </section>

        <section className="selected-work" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="eyebrow">Selected work</p>
            <h2 id="work-title">Two systems, built around useful outcomes.</h2>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className="project"
                id={`project-${project.number}`}
                key={project.number}
              >
                <div className="project-number">{project.number}</div>
                <div className="project-body">
                  <p className="project-kicker">{project.subtitle}</p>
                  <h3>{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <ul className="stack-list" aria-label={`${project.title} technologies`}>
                    {project.stack.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
                <a
                  className="project-link"
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  View repository <ExternalArrow />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <div className="section-heading about-heading">
            <p className="eyebrow">About / approach</p>
            <h2 id="about-title">Understanding the system is part of the work.</h2>
          </div>

          <div className="about-grid">
            <div className="about-statement">
              <p>
                I&apos;m pursuing a B.Tech in Computer Science and Engineering
                (Data Science) at VNR Vignana Jyothi Institute of Engineering
                and Technology. My projects sit where backend engineering,
                data, and applied machine learning meet.
              </p>
              <p>
                I care about the mechanics beneath the interface: how data
                moves, where a model can fail, how an API behaves under real
                conditions, and which trade-offs actually matter.
              </p>
            </div>

            <dl className="fact-list">
              <div>
                <dt>Education</dt>
                <dd>
                  B.Tech CSE (Data Science)
                  <span>2023–2027 · CGPA 7.6 / 10</span>
                </dd>
              </div>
              <div>
                <dt>Programming</dt>
                <dd>Java · Python · C</dd>
              </div>
              <div>
                <dt>Systems & data</dt>
                <dd>FastAPI · SQL · MongoDB · ChromaDB</dd>
              </div>
              <div>
                <dt>Working tools</dt>
                <dd>Git · GitHub · Tableau · Power BI</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="credentials" aria-labelledby="credentials-title">
          <div className="section-heading">
            <p className="eyebrow">Evidence, not adjectives</p>
            <h2 id="credentials-title">A few markers of consistent work.</h2>
          </div>

          <div className="achievement-grid">
            {achievements.map((achievement) => (
              <article className="achievement" key={achievement.label}>
                <strong>{achievement.figure}</strong>
                <h3>{achievement.label}</h3>
                <p>{achievement.detail}</p>
              </article>
            ))}
          </div>

          <div className="certifications">
            <p className="eyebrow">Selected certifications</p>
            <ol>
              {certifications.map((certification, index) => (
                <li key={certification}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  {certification}
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className="contact" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Contact / Hyderabad, India</p>
          <h2 id="contact-title">Let&apos;s build something useful.</h2>
          <a className="email-link" href="mailto:vashistreddy794@gmail.com">
            vashistreddy794@gmail.com <ExternalArrow />
          </a>

          <footer className="site-footer">
            <p>Vashist Reddy Mosra · 2026</p>
            <div>
              <a
                href="https://github.com/Vashist-reddy6"
                target="_blank"
                rel="noreferrer"
              >
                GitHub <ExternalArrow />
              </a>
              <a
                href="https://www.linkedin.com/in/vashist-reddy-mosra-3950652bb/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn <ExternalArrow />
              </a>
              <a href="/vashist-reddy-mosra-resume.pdf" download>
                Résumé ↓
              </a>
            </div>
          </footer>
        </section>
      </div>
    </main>
  );
}
