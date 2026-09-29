import "../styles/Hero.css";

const technologies = ["Next.js", "React", "JavaScript", "MongoDB"];

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner container">
        <div className="hero-content">
          <div className="hero-availability">
            <span className="availability-dot"></span>
            OPEN TO OPPORTUNITIES
          </div>

          <p className="hero-eyebrow">HELLO, I'M MIHRET EMERU</p>

          <h1 className="hero-title">
            Full-Stack
            <br />
            <span>Developer.</span>
          </h1>

          <p className="hero-description">
            I build practical web applications and turn ideas into real-world
            solutions. I enjoy creating useful, accessible, and thoughtful
            digital experiences.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button-primary">
              Explore my work <span aria-hidden="true">↗</span>
            </a>

            <a href="#contact" className="hero-button-secondary">
              Let's connect
            </a>
          </div>

          <div className="hero-tech">
            <span className="hero-tech-label">TECH I WORK WITH</span>

            <div className="hero-tech-list">
              {technologies.map((technology) => (
                <span className="hero-tech-item" key={technology}>
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="hero-visual" aria-label="Code illustration">
          <div className="hero-orbit hero-orbit-one"></div>
          <div className="hero-orbit hero-orbit-two"></div>

          <div className="hero-code-card">
            <div className="hero-code-header">
              <div className="hero-window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <span className="hero-code-filename">developer.js</span>
              <span className="hero-code-status">● LIVE</span>
            </div>

            <div className="hero-code-body">
              <p>
                <span className="code-purple">const</span>{" "}
                <span className="code-blue">developer</span> = {"{"}
              </p>

              <p className="code-indent">
                name: <span className="code-green">'Mihret Emeru'</span>,
              </p>

              <p className="code-indent">
                role: <span className="code-green">'Full-Stack Developer'</span>
                ,
              </p>

              <p className="code-indent">stack: [</p>

              <p className="code-indent code-indent-more">
                <span className="code-green">'Next.js'</span>,
              </p>

              <p className="code-indent code-indent-more">
                <span className="code-green">'React'</span>,
              </p>

              <p className="code-indent code-indent-more">
                <span className="code-green">'MongoDB'</span>
              </p>

              <p className="code-indent">],</p>

              <p className="code-indent">
                mindset: <span className="code-green">'Keep building'</span>
              </p>

              <p>{"};"}</p>

              <div className="hero-code-footer">
                <span className="code-footer-symbol">{"</>"}</span>
                <span>Ideas into reality.</span>
              </div>
            </div>
          </div>

          <div className="hero-floating-badge hero-badge-top">
            <span className="hero-badge-icon">✳</span>
            <span>
              <strong>Build</strong>
              <small>With purpose</small>
            </span>
          </div>

          <div className="hero-floating-badge hero-badge-bottom">
            <span className="hero-badge-icon">↗</span>
            <span>
              <strong>Always learning</strong>
              <small>Always creating</small>
            </span>
          </div>

          <div className="hero-visual-caption">
            <span></span>
            DESIGNED TO SOLVE REAL PROBLEMS
          </div>
        </div>
      </div>

      <div className="hero-bottom-line">
        <span>SCROLL TO EXPLORE</span>
        <span className="hero-scroll-arrow">↓</span>
      </div>
    </section>
  );
}
