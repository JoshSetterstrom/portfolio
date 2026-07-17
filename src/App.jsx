import './App.css';

const projects = [
    {
        category: 'Professional work',
        title: 'Enterprise Communications Platform',
        description:
            'An internal platform used across more than 80 retail locations and 900 communications devices. It brings device management, configuration auditing, reporting, provisioning, and support workflows into one application.',
        technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'Webex APIs']
    },
    {
        category: 'Professional work',
        title: 'Device Provisioning & Monitoring',
        description:
            'A location-aware provisioning system that identifies network devices, generates configuration, gathers hardware and firmware details, and supports monitoring and update workflows.',
        technologies: ['Node.js', 'TFTP', 'REST APIs', 'MongoDB', 'Networking']
    },
    {
        category: 'Personal project',
        title: 'The Last Argument',
        description:
            'A timed AI game where players persuade, investigate, or instruct an AI opponent. The server evaluates each turn, manages hidden state, and returns structured in-character responses.',
        technologies: ['React', 'Express', 'OpenAI API', 'Zod', 'Render'],
        links: [
            {
                label: 'Live site',
                href: 'https://thelastargument.joshsetterstrom.ca'
            },
            {
                label: 'GitHub',
                href: 'https://github.com/JoshSetterstrom/thelastargument'
            }
        ]
    }
];

const Project = ({ project }) => (
    <article className="project">
        <p className="project__category">{project.category}</p>

        <div className="project__content">
            <div>
                <h3>{project.title}</h3>
                <p className="project__description">{project.description}</p>
            </div>

            <ul className="project__technologies" aria-label={`${project.title} technologies`}>
                {project.technologies.map(technology => (
                    <li key={technology}>{technology}</li>
                ))}
            </ul>

            {project.links && (
                <div className="project__links">
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
        </div>
    </article>
);

const App = () => (
    <div className="portfolio">
        <header className="header">
            <a className="header__name" href="#top">
                Josh Setterstrom
            </a>

            <nav className="header__links" aria-label="Primary navigation">
                <a href="#work">Work</a>
                <a href="mailto:joshsetterstrom@gmail.com">Email</a>
                <a
                    href="https://github.com/JoshSetterstrom"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
            </nav>
        </header>

        <main id="top">
            <section className="intro" aria-labelledby="page-title">
                <p className="intro__location">Port Coquitlam, BC</p>
                <h1 id="page-title">Josh Setterstrom</h1>
                <p className="intro__role">
                    Software Developer &amp; Automation Specialist
                </p>
                <p className="intro__summary">
                    I’m a software developer with more than eight years of
                    experience working with enterprise communications systems
                    and internal software. I build React applications, Node.js
                    and Python services, API integrations, reporting tools, and
                    automation.
                </p>
            </section>

            <section id="work" className="work" aria-labelledby="work-title">
                <div className="section-title">
                    <h2 id="work-title">Work</h2>
                    <p>Professional systems and public projects.</p>
                </div>

                <div className="projects">
                    {projects.map(project => (
                        <Project key={project.title} project={project} />
                    ))}
                </div>
            </section>
        </main>

        <footer className="footer">
            <a href="mailto:joshsetterstrom@gmail.com">
                joshsetterstrom@gmail.com
            </a>
            <span>© {new Date().getFullYear()} Josh Setterstrom</span>
        </footer>
    </div>
);

export default App;
