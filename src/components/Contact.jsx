import "../styles/Contact.css";

const socialLinks = [
  {
    name: "GitHub",
    description: "Explore my projects",
    url: "https://github.com/mihret-emeru",
  },
  {
    name: "LinkedIn",
    description: "Connect professionally",
    url: "https://www.linkedin.com/in/mihret-emeru-338504326/",
  },
  {
    name: "Email",
    description: "mercyemeru@gmail.com",
    url: "mailto:mercyemeru@gmail.com",
  },
];

export default function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-heading">
          <p className="contact-eyebrow">
            <span></span> GET IN TOUCH
          </p>

          <h2 className="contact-title">
            Have an idea?
            <br />
            <span>Let's build it.</span>
          </h2>

          <p className="contact-intro">
            I'm interested in connecting with people, exploring opportunities,
            and building practical solutions. Have something in mind? I'd love
            to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-info-heading">
              <span className="contact-info-label">LET'S CONNECT</span>

              <h3>Start a conversation.</h3>

              <p>
                Tell me about your idea, a project, or an opportunity to work
                together.
              </p>
            </div>

            <div className="contact-social-links">
              {socialLinks.map((link) => (
                <a
                  className="contact-social-link"
                  href={link.url}
                  key={link.name}
                  target={link.name === "Email" ? undefined : "_blank"}
                  rel={link.name === "Email" ? undefined : "noreferrer"}
                >
                  <span className="contact-social-symbol">
                    {link.name === "GitHub" && (
                      <svg
                        viewBox="0 0 24 24"
                        width="23"
                        height="23"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .9a11.1 11.1 0 0 0-3.51 21.63c.55.1.76-.24.76-.54v-2.1c-3.1.67-3.76-1.32-3.76-1.32-.5-1.29-1.24-1.63-1.24-1.63-1.01-.69.08-.68.08-.68 1.12.08 1.71 1.15 1.71 1.15.99 1.7 2.6 1.21 3.23.93.1-.72.39-1.21.71-1.49-2.48-.28-5.09-1.24-5.09-5.52 0-1.22.44-2.21 1.15-2.99-.12-.28-.5-1.42.11-2.95 0 0 .94-.3 3.05 1.14a10.6 10.6 0 0 1 5.55 0c2.11-1.44 3.05-1.14 3.05-1.14.61 1.53.23 2.67.11 2.95.72.78 1.15 1.77 1.15 2.99 0 4.29-2.61 5.23-5.1 5.51.4.35.76 1.02.76 2.06v3.09c0 .3.2.65.77.54A11.1 11.1 0 0 0 12 .9Z" />
                      </svg>
                    )}

                    {link.name === "LinkedIn" && (
                      <svg
                        viewBox="0 0 24 24"
                        width="23"
                        height="23"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.45H4.98V9h2.95v9.45ZM6.45 7.71a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12 10.74H15.5v-4.6c0-1.1-.02-2.51-1.53-2.51-1.53 0-1.76 1.2-1.76 2.43v4.68H9.26V9h2.83v1.29h.04c.39-.74 1.36-1.53 2.8-1.53 2.99 0 3.54 1.97 3.54 4.54v5.15Z" />
                      </svg>
                    )}

                    {link.name === "Email" && (
                      <svg
                        viewBox="0 0 24 24"
                        width="23"
                        height="23"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <rect x="3" y="5" width="18" height="14" rx="2" />
                        <path d="m3 7 9 6 9-6" />
                      </svg>
                    )}
                  </span>

                  <span className="contact-social-text">
                    <strong>{link.name}</strong>
                    <small>{link.description}</small>
                  </span>

                  <span className="contact-social-arrow" aria-hidden="true">
                    ↗
                  </span>
                </a>
              ))}
            </div>

            <div className="contact-note">
              <span className="contact-note-dot"></span>

              <p>Open to learning, collaboration, and new opportunities.</p>
            </div>
          </div>

          <div className="contact-form-card">
            <div className="contact-form-heading">
              <h3>Send me a message</h3>

              <p>Fill in the details below to get started.</p>
            </div>

            <form
              className="contact-form"
              action="mailto:"
              method="post"
              encType="text/plain"
            >
              <div className="contact-field-row">
                <div className="contact-field">
                  <label htmlFor="contact-name">Your name</label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    autoComplete="name"
                    required
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="contact-email">Email address</label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                  />
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="contact-subject">Subject</label>

                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="What would you like to discuss?"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-message">Message</label>

                <textarea
                  id="contact-message"
                  name="message"
                  rows="5"
                  placeholder="Tell me a little about it..."
                  required
                />
              </div>

              <button className="contact-submit" type="submit">
                Send message <span>↗</span>
              </button>

              <p className="contact-form-footnote">
                Your message form will be connected to email delivery in the
                next steps.
              </p>
            </form>
          </div>
        </div>

        <footer className="contact-footer">
          <a className="contact-footer-brand" href="#home">
            <span className="contact-footer-logo">M.</span>
            Mihret Emeru
          </a>

          <p>Designed and built with care.</p>

          <a href="#home" className="contact-back-top">
            Back to top ↑
          </a>
        </footer>
      </div>
    </section>
  );
}
