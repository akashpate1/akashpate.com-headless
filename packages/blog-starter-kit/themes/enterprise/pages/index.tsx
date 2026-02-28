import request from 'graphql-request';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { AppProvider } from '../components/contexts/appContext';
import { IDEFooter } from '../components/ide-footer';
import { IDENavbar } from '../components/ide-navbar';
import { Layout } from '../components/layout';
import {
	PublicationByHostDocument,
	PublicationByHostQuery,
	PublicationByHostQueryVariables,
	PublicationFragment,
} from '../generated/graphql';

/* ── Static data ─────────────────────────────────────────────── */
const EXPERIENCE = [
	{
		role: 'Backend Developer',
		company: 'Cronix LLC',
		dates: 'July 2023 – Present',
	},
	{
		role: 'PHP Developer',
		company: 'Innovins Softtech Solutions',
		dates: 'Aug 2022 – July 2023',
	},
	{
		role: 'Full Stack Developer',
		company: 'Freelancer',
		dates: 'June 2021 – July 2022',
	},
	{
		role: 'CTO',
		company: 'Divspace LLP',
		dates: 'Jan 2019 – May 2021',
	},
];

const PROJECTS = [
	{
		title: 'LaraCron',
		description: 'Laravel scheduled task monitor. Track, manage and debug cron jobs with a clean dashboard.',
		stack: ['Laravel', 'Livewire', 'MySQL'],
	},
	{
		title: 'DevFlow',
		description: 'Dev productivity tool at Zapiet. Streamlines internal workflows for the engineering team.',
		stack: ['Laravel', 'PHP', 'Shopify'],
	},
];

const SKILLS = [
	'Laravel', 'PHP', 'MySQL', 'AWS', 'React',
	'Next.js', 'Shopify', 'BigCommerce', 'DigitalOcean',
];

const EDUCATION = [
	{
		degree: 'B.Tech CS&E',
		institution: 'Sandip University',
		year: '2022',
	},
	{
		degree: 'Diploma CE',
		institution: 'Sandip Polytechnic',
		year: '2019',
	},
];

/* ── Component ───────────────────────────────────────────────── */
type Props = {
	publication: PublicationFragment;
};

export default function Home({ publication }: Props) {
	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>Akash Pate — Backend Developer</title>
					<meta name="description" content="Backend Developer specializing in Laravel, Shopify Apps, and SaaS. Based in Nashik, India." />
					<meta property="og:title" content="Akash Pate — Backend Developer" />
					<meta property="og:description" content="Backend Developer specializing in Laravel, Shopify Apps, and SaaS." />
				</Head>

				<IDENavbar />

				<div className="ide-container">
					{/* ── Hero ────────────────────────────────────────── */}
					<section className="hero">
						<div className="hero__code-block">
							<div className="hero__comment">// backend developer</div>
							<div>
								<span className="hero__keyword">const </span>
								<span className="hero__var-name">engineer</span>
								<span className="hero__brace"> = &#123;</span>
							</div>
							<div>
								<span className="hero__indent" />
								<span className="hero__key">name</span>
								<span className="hero__brace">:     </span>
								<span className="hero__string">&quot;Akash Pate&quot;</span>
								<span className="hero__comma">,</span>
							</div>
							<div>
								<span className="hero__indent" />
								<span className="hero__key">location</span>
								<span className="hero__brace">: </span>
								<span className="hero__string">&quot;Nashik, India 🇮🇳&quot;</span>
								<span className="hero__comma">,</span>
							</div>
							<div>
								<span className="hero__indent" />
								<span className="hero__key">role</span>
								<span className="hero__brace">:     </span>
								<span className="hero__string">&quot;Backend Developer @ Cronix LLC&quot;</span>
								<span className="hero__comma">,</span>
							</div>
							<div>
								<span className="hero__indent" />
								<span className="hero__key">focus</span>
								<span className="hero__brace">:    </span>
								<span className="hero__array-bracket">[</span>
								<span className="hero__item">&quot;Laravel&quot;</span>
								<span className="hero__comma">, </span>
								<span className="hero__item">&quot;Shopify Apps&quot;</span>
								<span className="hero__comma">, </span>
								<span className="hero__item">&quot;SaaS&quot;</span>
								<span className="hero__array-bracket">]</span>
								<span className="hero__comma">,</span>
							</div>
							<div>
								<span className="hero__brace">&#125;</span>
								<span className="cursor">▌</span>
							</div>
						</div>

						<div className="hero__ctas">
							<a href="#projects" className="hero__cta">→ view my work</a>
							<Link href="/blog" className="hero__cta">→ read blog</Link>
						</div>
					</section>

					{/* ── Experience ──────────────────────────────────── */}
					<section className="portfolio-section" id="experience">
						<p className="section-label">/* experience */</p>
						<ul className="timeline">
							{EXPERIENCE.map((item) => (
								<li key={`${item.role}-${item.company}`} className="timeline__item">
									<p className="timeline__role">{item.role}</p>
									<p className="timeline__company">{item.company}</p>
									<p className="timeline__dates">{item.dates}</p>
								</li>
							))}
						</ul>
					</section>

					{/* ── Projects ────────────────────────────────────── */}
					<section className="portfolio-section" id="projects">
						<p className="section-label">// projects</p>
						<div className="projects-grid">
							{PROJECTS.map((project) => (
								<div key={project.title} className="project-card">
									<h3 className="project-card__title">{project.title}</h3>
									<p className="project-card__desc">{project.description}</p>
									<div className="project-card__stack">
										{project.stack.map((tech) => (
											<span key={tech} className="code-pill">{tech}</span>
										))}
									</div>
									<span className="project-card__link">→ view project</span>
								</div>
							))}
						</div>
					</section>

					{/* ── Skills ──────────────────────────────────────── */}
					<section className="portfolio-section" id="skills">
						<p className="section-label">// skills</p>
						<ul className="skills-list">
							{SKILLS.map((skill) => (
								<li key={skill} className="code-pill">{skill}</li>
							))}
						</ul>
					</section>

					{/* ── Education ───────────────────────────────────── */}
					<section className="portfolio-section" id="education">
						<p className="section-label">// education</p>
						<ul className="timeline">
							{EDUCATION.map((item) => (
								<li key={`${item.degree}-${item.institution}`} className="timeline__item">
									<p className="timeline__role">{item.degree}</p>
									<p className="timeline__company">{item.institution}</p>
									<p className="timeline__dates">{item.year}</p>
								</li>
							))}
						</ul>
					</section>
				</div>

				<IDEFooter />
			</Layout>
		</AppProvider>
	);
}

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const getStaticProps: GetStaticProps<Props> = async () => {
	const data = await request<PublicationByHostQuery, PublicationByHostQueryVariables>(
		GQL_ENDPOINT,
		PublicationByHostDocument,
		{ host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST },
	);

	const publication = data.publication;
	if (!publication) {
		return { notFound: true };
	}

	return {
		props: { publication },
		revalidate: 60,
	};
};
