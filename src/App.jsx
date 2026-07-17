import './App.css';

const projects = [
    {
        type: 'Professional system',
        visibility: 'Private',
        title: 'Enterprise Communications Platform',
        description:
            'An internal management and automation platform supporting more than 80 retail locations and 900 communications devices. It centralizes device management, configuration auditing, reporting, provisioning, and support workflows.',
        technologies: [
            'React',
            'Node.js',
            'Python',
            'MongoDB',
            'Webex APIs'
        ],
        featured: true
    },
    {
        type: 'Automation system',
        visibility: 'Private',
        title: 'Device Provisioning & Monitoring',
        description:
            'A location-aware provisioning workflow that identifies network devices, generates configuration, gathers hardware and firmware details, and supports monitoring and update operations.',
        technologies: [
            'Node.js',
            'TFTP',
            'REST APIs',
            'MongoDB',
            'Networking'
        ]
    },
    {
        type: 'Public project',
        visibility: 'Live',
        title: 'The Last Argument',
        description:
            'A timed, scenario-based AI game where players persuade, investigate, or instruct an AI opponent. The server evaluates each turn, manages hidden state, and produces structured in-character responses.',
        technologies: [
            'React',
            'Express',
            'OpenAI API',
            'Zod',
            'Render'
        ],
        links: [
            {
                label: 'View live project',
                href: 'https://thelastargument.joshsetterstrom.ca'
            },
            {
                label: 'View source',
                href: 'https://github.com/JoshSetterstrom/thelastargument'
            }
        ]
    }
];

const ProjectCard = ({ project }) => (
    <article
        className={[
            'project-card',
            project.featured ? 'project-card--featured' : ''
        ]
            .filter(Boolean)
            .join(' ')}
    >
        <div className="project-card__topline">
            <span className="project-card__type">
                {project.type}
            </span>

            <span
                className={[
                    'project-card__visibility',
                    project.visibility === 'Live'
                        ? 'project-card__visibility--live'
                        : ''
                ]
                    .filter(Boolean)
                    .join(' ')}
            >
                {project.visibility}
            </span>
        </div>

        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul
            className="tag-list"
            aria-label={`${project.title} technologies`}
        >
            {project.technologies.map(technology => (
                <li key={technology}>{technology}</li>
            ))}
        </ul>

        {project.links && (
            <div className="project-card__links">
                {project.links.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                    >
                        {link.label}
                        <span aria-hidden="true">↗</span>
                    </a>
                ))}
            </div>
        )}
    </article>
);

const App = () => {
    return (
        <div className="site-shell">
            <div
                className="page-grid"
                aria-hidden="true"
            />

            <header className="site-header">
                <a
                    className="brand"
                    href="#top"
                    aria-label="Josh Setterstrom home"
                >
                    <span className="brand__mark">JS</span>
                    <span className="brand__name">
                        Josh Setterstrom
                    </span>
                </a>

                <nav
                    className="site-nav"
                    aria-label="Primary navigation"
                >
                    <a href="#about">About</a>
                    <a href="#work">Work</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main id="top">
                <section
                    className="hero"
                    aria-labelledby="hero-title"
                >
                    <p className="eyebrow">
                        Software Developer · Automation Specialist
                    </p>

                    <h1 id="hero-title">
                        I build practical systems that replace manual work with{' '}
                        <span>reliable automation.</span>
                    </h1>

                    <p className="hero__copy">
                        I’m a Vancouver-based developer with more than eight
                        years of experience creating internal tools, system
                        integrations, reporting workflows, and business
                        automation using JavaScript, Python, APIs, and modern
                        web technologies.
                    </p>

                    <div className="hero__actions">
                        <a
                            className="button button--primary"
                            href="#work"
                        >
                            View my work
                        </a>

                        <a
                            className="button button--secondary"
                            href="https://github.com/JoshSetterstrom"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>

                    <div
                        className="hero__meta"
                        aria-label="Core areas"
                    >
                        <span>Internal tools</span>
                        <span>API integrations</span>
                        <span>Workflow automation</span>
                        <span>AI systems</span>
                    </div>
                </section>

                <section
                    id="about"
                    className="section about"
                    aria-labelledby="about-title"
                >
                    <header className="section-heading">
                        <span>01</span>
                        <h2 id="about-title">About</h2>
                    </header>

                    <div className="about__grid">
                        <p className="about__lead">
                            I focus on understanding how people actually work,
                            identifying what is repetitive or fragmented, and
                            turning it into tools that are straightforward to
                            use and maintain.
                        </p>

                        <div className="about__copy">
                            <p>
                                My professional work spans React applications,
                                Node.js and Python services, databases,
                                dashboards, device provisioning, reporting,
                                and third-party integrations.
                            </p>

                            <p>
                                I enjoy owning a problem from discovery through
                                implementation: learning the workflow,
                                designing the system, integrating the data, and
                                refining the result with the people who use it.
                            </p>
                        </div>
                    </div>
                </section>

                <section
                    id="work"
                    className="section work"
                    aria-labelledby="work-title"
                >
                    <header className="section-heading">
                        <span>02</span>
                        <h2 id="work-title">Selected work</h2>
                    </header>

                    <div className="project-grid">
                        {projects.map(project => (
                            <ProjectCard
                                key={project.title}
                                project={project}
                            />
                        ))}
                    </div>
                </section>

                <section
                    id="contact"
                    className="section contact"
                    aria-labelledby="contact-title"
                >
                    <div className="contact__panel">
                        <div>
                            <span className="contact__index">03</span>
                            <h2 id="contact-title">
                                Let’s build something useful.
                            </h2>

                            <p>
                                I’m interested in software, automation,
                                integration, and AI implementation roles where
                                practical systems can make a measurable
                                difference.
                            </p>
                        </div>

                        <div className="contact__actions">
                            <a
                                className="button button--primary"
                                href="mailto:joshsetterstrom@gmail.com"
                            >
                                Email me
                            </a>

                            <a
                                className="text-link"
                                href="https://github.com/JoshSetterstrom"
                                target="_blank"
                                rel="noreferrer"
                            >
                                github.com/JoshSetterstrom
                            </a>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="site-footer">
                <span>Josh Setterstrom</span>
                <span>
                    Software development · Automation · Integrations
                </span>
            </footer>
        </div>
    );
};

export default App;
