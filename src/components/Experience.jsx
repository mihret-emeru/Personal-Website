import "../styles/Experience.css";

const experiences = [
  {
    period: "MONTH 01",
    title: "UI/UX Design",
    description:
      "Worked with Figma to explore interface design, layouts, and user experience.",
    technology: "Figma",
  },
  {
    period: "MONTH 02",
    title: "Frontend Development",
    description:
      "Worked on the Cacookie marketing and advertising website using React.",
    technology: "React",
  },
  {
    period: "MONTH 03",
    title: "Vintage Photo Archive",
    description:
      "Developed a web application for preserving historical Ethiopian and Eritrean photographs.",
    technology: "Next.js · MongoDB · Cloudinary",
  },
  {
    period: "MONTH 04",
    title: "Bakery Management System",
    description:
      "Worked on a bakery management application and integrated with a mentor-provided API.",
    technology: "Next.js · REST API",
  },
];

export default function Experience() {
  return (
    <section className="experience-section" id="experience">
      <div className="container">
        <p className="experience-eyebrow">
          <span></span> MY JOURNEY
        </p>

        <div className="experience-heading">
          <h2 className="experience-title">
            Experience that
            <br />
            <span>shapes my growth.</span>
          </h2>

          <p className="experience-intro">
            Learning through hands-on projects, collaboration, and building
            practical software solutions.
          </p>
        </div>

        <div className="experience-company">
          <div className="experience-company-icon">K</div>

          <div>
            <h3>Kekros Smart Agriculture Solutions PLC</h3>
            <p>Software Development Internship</p>
          </div>

          <span className="experience-duration">4 MONTHS</span>
        </div>

        <div className="experience-timeline">
          {experiences.map((experience, index) => (
            <article className="experience-item" key={experience.period}>
              <div className="experience-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="experience-content">
                <span className="experience-period">{experience.period}</span>

                <h3>{experience.title}</h3>

                <p>{experience.description}</p>

                <span className="experience-technology">
                  {experience.technology}
                </span>
              </div>
            </article>
          ))}
        </div>

        <div className="education-card">
          <div className="education-icon">✳</div>

          <div className="education-content">
            <span className="education-label">EDUCATION</span>
            <h3>Software Engineering</h3>
            <p>
              Building a foundation in software development, system design, and
              problem-solving.
            </p>
            <span className="education-graduation">
              Expected graduation · Tir 2019 E.C.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
