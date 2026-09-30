import "../styles/Projects.css";

const projects = [
  {
    number: "01",
    category: "FULL-STACK DEVELOPMENT",
    title: "Real Estate CRM",
    description:
      "A property and client management platform with lead tracking, agent workflows, payment management, and AI-based property recommendations.",
    technologies: ["Next.js", "MongoDB", "Mongoose"],
    status: "In Progress",
    visual: "real-estate",
    url: "https://everhomerealestate.vercel.app/",
  },
  {
    number: "02",
    category: "WEB APPLICATION",
    title: "Vintage Photo Archive",
    description:
      "A digital archive for preserving historical Ethiopian and Eritrean photographs, with user registration and administrator approval.",
    technologies: ["Next.js", "MongoDB", "Cloudinary"],
    status: "Completed",
    visual: "vintage",
    url: "https://vintagephotoarchive.vercel.app/",
  },
  {
    number: "03",
    category: "API INTEGRATION",
    title: "Bakery Management System",
    description:
      "A bakery management application developed during my internship, working with a mentor-provided API.",
    technologies: ["Next.js", "JavaScript", "REST API"],
    status: "Project",
    visual: "bakery",
    url: "https://bakery-theta-bay.vercel.app/",
  },
];

export default function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <div className="projects-heading">
          <div>
            <p className="projects-eyebrow">
              <span></span> SELECTED WORK
            </p>

            <h2 className="projects-title">
              Ideas turned into
              <br />
              <span>real projects.</span>
            </h2>
          </div>

          <p className="projects-intro">
            A selection of applications I've worked on, the problems they
            address, and the technologies behind them.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <a
              className="project-card"
              key={project.number}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} project`}
            >
              <div
                className={`project-visual project-visual-${project.visual}`}
              >
                <div className="project-visual-top">
                  <span>PROJECT / {project.number}</span>
                  <span className="project-visual-arrow">↗</span>
                </div>

                {project.visual === "real-estate" && (
                  <div className="project-mockup real-estate-mockup">
                    <div className="mockup-sidebar">
                      <span className="mockup-logo">M.</span>
                      <span className="mockup-sidebar-active">▦</span>
                      <span>⌂</span>
                      <span>◎</span>
                      <span>▤</span>
                    </div>

                    <div className="mockup-main">
                      <div className="mockup-heading">
                        <span>Property overview</span>
                        <span className="mockup-avatar">M</span>
                      </div>

                      <div className="mockup-stats">
                        <div>
                          <small>Properties</small>
                          <strong>124</strong>
                        </div>
                        <div>
                          <small>Active leads</small>
                          <strong>38</strong>
                        </div>
                      </div>

                      <div className="mockup-chart">
                        <span style={{ height: "35%" }}></span>
                        <span style={{ height: "58%" }}></span>
                        <span style={{ height: "45%" }}></span>
                        <span style={{ height: "78%" }}></span>
                        <span style={{ height: "62%" }}></span>
                        <span style={{ height: "92%" }}></span>
                        <span style={{ height: "72%" }}></span>
                      </div>
                    </div>
                  </div>
                )}

                {project.visual === "vintage" && (
                  <div className="project-mockup vintage-mockup">
                    <div className="vintage-heading">
                      <span>THE ARCHIVE</span>
                      <span>ETHIOPIA · ERITREA</span>
                    </div>

                    <div className="vintage-photos">
                      <div className="vintage-photo vintage-photo-one">
                        <span>HISTORICAL</span>
                      </div>
                      <div className="vintage-photo vintage-photo-two">
                        <span>MEMORIES</span>
                      </div>
                      <div className="vintage-photo vintage-photo-three">
                        <span>HERITAGE</span>
                      </div>
                    </div>

                    <p className="vintage-caption">
                      Every photograph tells a story.
                    </p>
                  </div>
                )}

                {project.visual === "bakery" && (
                  <div className="project-mockup bakery-mockup">
                    <div className="bakery-heading">
                      <span>BAKERY MANAGER</span>
                      <span>OVERVIEW</span>
                    </div>

                    <div className="bakery-highlight">
                      <span>Today's overview</span>
                      <strong>Orders & inventory</strong>
                    </div>

                    <div className="bakery-order">
                      <span className="bakery-order-icon">▤</span>
                      <span>
                        <strong>Orders</strong>
                        <small>Order management</small>
                      </span>
                      <span>↗</span>
                    </div>

                    <div className="bakery-order">
                      <span className="bakery-order-icon">◫</span>
                      <span>
                        <strong>Inventory</strong>
                        <small>Product management</small>
                      </span>
                      <span>↗</span>
                    </div>
                  </div>
                )}
              </div>

              <div className="project-card-content">
                <div className="project-meta">
                  <span>{project.category}</span>
                  <span
                    className={`project-status ${
                      project.status === "Completed"
                        ? "project-status-completed"
                        : ""
                    }`}
                  >
                    {project.status}
                  </span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="projects-footer">
          <p>MORE IDEAS. MORE THINGS TO BUILD.</p>
          <a href="#contact">
            Have a project in mind? <span>Let's talk ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
