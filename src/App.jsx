import "./App.css";
import CaseStudies from "./CaseStudies";
import "./CaseStudies.css";

function App() {
  return (
    <div className="portfolio">
      <header className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">TGG</span>
          <span>TINOTENDA GRACIA GWATI</span>
        </a>

        <nav aria-label="Main navigation">
          <a href="#work">Case studies</a>
          <a href="#approach">My approach</a>
          <a href="#skills">Skills</a>
          <a href="#about">About</a>
          <a className="nav-contact" href="#contact">
            Get in touch ↗
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <p className="eyebrow">
              LEARNING DESIGN · INSTRUCTIONAL DESIGN · PROJECT DELIVERY
            </p>

            <h1>
              Learning that works.
              <br />
              <span>Delivery with impact.</span>
            </h1>

            <p className="hero-description">
              I turn complex content into effective learning experiences
              and lead the teams and delivery that bring them to life.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore case studies <span>↗</span>
              </a>
            </div>

          </div>

          <aside className="hero-proof" aria-label="Selected experience and recognition">
            <p className="hero-proof-label">SELECTED EXPERIENCE</p>

            <div className="hero-proof-metrics">
              <div className="hero-proof-metric">
                <strong>97+</strong>
                <span>courses delivered</span>
              </div>
              <div className="hero-proof-metric">
                <strong>20%</strong>
                <span>reduction in resource design time</span>
              </div>
            </div>

            <div className="hero-proof-detail">
              <span className="hero-proof-mark" aria-hidden="true">↗</span>
              <p>Managed learning design teams</p>
            </div>

            <div className="hero-proof-award">
              <span className="hero-proof-label">TEAM RECOGNITION</span>
              <p>
                Part of the team awarded <strong>2024 LearnX Best Learning
                Design Team — Work from home team</strong>.
              </p>
            </div>
          </aside>
        </section>

        <section className="expertise-strip" aria-label="Areas of expertise">
          <span>LEARNING DESIGN</span>
          <span>CURRICULUM ALIGNMENT</span>
          <span>DIGITAL LEARNING</span>
          <span>PROJECT DELIVERY</span>
        </section>

        <CaseStudies />
       

        <section className="approach-section section" id="approach">
          <p className="eyebrow">HOW I WORK</p>
          <h2>My Learning Design Approach</h2>
          <div className="approach-intro">
            <p>
              I use a backward-designed, learner-centred approach to create
              meaningful, accessible and effective digital learning
              experiences.
            </p>
            <p>
              Starting with the desired learning outcomes and working
              backwards, I align learner needs, learning activities,
              assessments and technology to ensure every design decision
              serves a clear purpose. Throughout the process, I consider
              accessibility, usability and technical delivery to create
              experiences that work for learners and achieve meaningful
              outcomes.
            </p>
          </div>

          <div className="approach-grid">
            <article>
              <span className="approach-number">01</span>
              <h3>Understand</h3>
              <strong>Start with the learner, the problem and the desired outcomes.</strong>
              <p>
                Identify learner needs, performance gaps, stakeholder
                expectations and the context in which learning takes place.
                Define what learners need to know, understand or be able to
                do, and establish what success looks like.
              </p>
            </article>
            <article>
              <span className="approach-number">02</span>
              <h3>Design</h3>
              <strong>Work backwards from the desired outcomes.</strong>
              <p>
                Define how learning and performance will be demonstrated and
                assessed. Align learning strategies, activities, content and
                feedback to the intended outcomes, creating a purposeful
                learning experience grounded in sound instructional design
                principles.
              </p>
            </article>
            <article>
              <span className="approach-number">03</span>
              <h3>Develop</h3>
              <strong>Bring the learning experience to life.</strong>
              <p>
                Create accessible digital content, meaningful interactions
                and practical learning activities that support the intended
                outcomes. Apply user-centred design principles, prioritise
                usability and accessibility, and ensure the experience is
                technically robust across relevant platforms and devices.
              </p>
            </article>
            <article>
              <span className="approach-number">04</span>
              <h3>Evaluate &amp; Improve</h3>
              <strong>Test, measure and refine the experience.</strong>
              <p>
                Evaluate usability, accessibility and technical performance,
                gather learner and stakeholder feedback, and review evidence
                of learning and performance. Use these insights to refine the
                experience and inform future design decisions.
              </p>
            </article>
          </div>

          <div className="guiding-principles">
            <div className="guiding-principles-heading">
              <p className="eyebrow">WHAT GUIDES MY WORK</p>
              <h3>Guiding principles</h3>
            </div>
            <ul className="principles-grid">
              <li>
                <strong>Outcomes first</strong>
                <span>Design backwards from the desired learning and performance outcomes.</span>
              </li>
              <li>
                <strong>Learner-centred</strong>
                <span>Consider learner needs, context, accessibility and experience throughout.</span>
              </li>
              <li>
                <strong>Purposeful by design</strong>
                <span>Ensure content, activities, interactions and assessments serve a clear learning purpose.</span>
              </li>
              <li>
                <strong>Accessible and usable</strong>
                <span>Create inclusive experiences that are intuitive and work for the intended audience.</span>
              </li>
              <li>
                <strong>Evidence-led</strong>
                <span>Use feedback, testing and learning evidence to guide decisions and improvements.</span>
              </li>
              <li>
                <strong>Iterative by nature</strong>
                <span>Revisit and refine decisions as new insights emerge throughout the process.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="skills-section section" id="skills">
          <p className="eyebrow">SKILLS & TOOLKIT</p>
          <h2>The capabilities and tools behind the work.</h2>

          <div className="skills-toolkit-grid">
            <div className="skills-column">
              <h3 className="skills-column-heading">Skills & abilities</h3>
              <div className="skill-groups">
                <article className="skill-group">
                  <h4>Learning & digital solutions</h4>
                  <ul>
                    <li>Technical communication</li>
                    <li>Learning technology & digital solutions</li>
                    <li>Learning Management Systems administration</li>
                    <li>Technical training development</li>
                  </ul>
                </article>
                <article className="skill-group">
                  <h4>Project delivery & governance</h4>
                  <ul>
                    <li>Technical project management</li>
                    <li>Project planning and delivery</li>
                    <li>Requirements & quality management</li>
                    <li>Risk, issue & dependency management</li>
                    <li>Process improvement</li>
                    <li>Change management</li>
                  </ul>
                </article>
                <article className="skill-group">
                  <h4>Leadership & collaboration</h4>
                  <ul>
                    <li>Cross-functional team leadership</li>
                    <li>Stakeholder management</li>
                  </ul>
                </article>
              </div>
            </div>

            <div className="tools-column">
              <h3 className="skills-column-heading">Tools & technologies</h3>
              <div className="tool-groups">
                <article className="tool-group">
                  <h4>Project management</h4>
                  <ul className="tool-list">
                    <li>Monday.com</li>
                    <li>Trello</li>
                    <li>Jira</li>
                    <li>Smartsheet</li>
                  </ul>
                </article>
                <article className="tool-group">
                  <h4>Document management & collaboration</h4>
                  <ul className="tool-list">
                    <li>Microsoft 365</li>
                    <li>Google Workspace</li>
                    <li>Miro</li>
                    <li>Slack</li>
                  </ul>
                </article>
                <article className="tool-group">
                  <h4>Web development & deployment</h4>
                  <ul className="tool-list">
                    <li>Netlify</li>
                    <li>VS Code</li>
                  </ul>
                </article>
                <article className="tool-group">
                  <h4>LMS & learning tools</h4>
                  <ul className="tool-list">
                    <li>Canvas</li>
                    <li>Moodle</li>
                    <li>H5P</li>
                    <li>Articulate Rise</li>
                    <li>Bespoke LMSs</li>
                  </ul>
                </article>
              </div>
            </div>
          </div>
        </section>

        <section className="about-section section" id="about">
          <p className="eyebrow">A LITTLE ABOUT ME</p>
          <h2>Learning design meets delivery.</h2>
          <p className="about-copy">
            I'm a learning design and project management professional
            passionate about creating meaningful, accessible and engaging
            digital learning experiences. I combine learner-centred design,
            creative problem-solving and a structured, outcomes-driven
            approach to transform complex ideas into effective learning
            experiences.
          </p>
          <p className="about-copy">
            I enjoy collaborating with subject-matter experts and
            multidisciplinary teams to understand learner needs, explore new
            possibilities with technology, and design solutions that make
            learning practical, inclusive and impactful. I'm particularly
            interested in the intersection of learning design, digital
            experience and innovation, continually exploring ways to improve
            how people learn through thoughtful design and continuous
            improvement.
          </p>
        </section>

        <section className="contact-section" id="contact">
          <p className="eyebrow">LET'S CONNECT</p>
          <h2>Get in touch</h2>
          <p>
            Interested in my approach to instructional design and digital
            learning? I'd love to connect.
          </p>
          <div className="contact-options">
            <a className="contact-option" href="mailto:gracia.gwati@gmail.com">
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
              <span>Email</span>
              <strong>gracia.gwati@gmail.com</strong>
            </a>
            <a
              className="contact-option"
              href="https://www.linkedin.com/in/tinotenda-gracia-gwati"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14Zm-11.7 7H4.6v9h2.7v-9Zm-1.35-4.5a1.57 1.57 0 1 0 0 3.14 1.57 1.57 0 0 0 0-3.14ZM19.4 13.5c0-2.72-1.45-3.99-3.38-3.99a2.92 2.92 0 0 0-2.63 1.45V10h-2.7v9h2.7v-4.46c0-1.18.22-2.32 1.69-2.32 1.45 0 1.47 1.35 1.47 2.4V19h2.7l.15-5.5Z" />
              </svg>
              <span>LinkedIn</span>
              <strong>Connect with me</strong>
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">TGG</span>
          <span>TINOTENDA GRACIA GWATI</span>
        </a>
        <p>Designed with intention. Built for learning.</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </div>
  );
}

export default App;