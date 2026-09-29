import "../styles/About.css";

const interests = [
  "Full-Stack Development",
  "Frontend Development",
  "Backend & API Integration",
  "Building Practical Solutions",
];

const skills = [
  { name: "JavaScript", level: "LANGUAGE" },
  { name: "React", level: "FRONTEND" },
  { name: "Next.js", level: "FULL-STACK" },
  { name: "MongoDB", level: "DATABASE" },
  { name: "Mongoose", level: "DATABASE" },
  { name: "CSS", level: "STYLING" },
  { name: "Git & GitHub", level: "VERSION CONTROL" },
  { name: "Figma", level: "UI DESIGN" },
];

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <div className="about-heading">
          <p className="about-eyebrow">
            <span></span> A LITTLE ABOUT ME
          </p>

          <h2 className="about-title">
            Curious by nature.
            <br />
            <span>Builder by choice.</span>
          </h2>
        </div>

        <div className="about-grid">
          <div className="about-story">
            <p className="about-lead">
              Hi, I'm Mihret Emeru — a software engineering student who enjoys
              turning ideas into practical web applications.
            </p>

            <p className="about-description">
              My development journey has given me experience working on
              different kinds of projects, from digital photo archives to
              management systems. Each project is an opportunity to learn, solve
              problems, and improve my skills.
            </p>

            <p className="about-description">
              I enjoy working across the frontend and backend, understanding how
              the pieces fit together, and building applications that serve a
              real purpose. I'm always exploring new ideas and looking for ways
              to turn them into working products.
            </p>

            <div className="about-interests">
              <h3>WHAT I ENJOY WORKING ON</h3>

              <div className="about-interest-list">
                {interests.map((interest) => (
                  <span key={interest}>
                    <span className="about-check">↗</span>
                    {interest}
                  </span>
                ))}
              </div>
            </div>

            <a className="about-contact-link" href="#contact">
              Let's build something meaningful
              <span>↗</span>
            </a>
          </div>

          <aside className="about-skills-panel">
            <div className="about-panel-heading">
              <div>
                <span className="about-panel-label">MY TOOLKIT</span>
                <h3>Technologies & tools</h3>
              </div>

              <span className="about-panel-icon">{"</>"}</span>
            </div>

            <p className="about-panel-description">
              Technologies I've worked with across my learning journey and
              projects.
            </p>

            <div className="about-skills-list">
              {skills.map((skill, index) => (
                <div className="about-skill" key={skill.name}>
                  <span className="about-skill-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span className="about-skill-name">{skill.name}</span>

                  <span className="about-skill-level">{skill.level}</span>
                </div>
              ))}
            </div>

            <div className="about-panel-footer">
              <span className="about-panel-dot"></span>
              Always learning. Always building.
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
