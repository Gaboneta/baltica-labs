import {
	ArrowRight,
	Bot,
	Building2,
	CheckCircle2,
	Cloud,
	Code2,
	Database,
	GitBranch,
	Globe2,
	Layers3,
	ShieldCheck,
	Sparkles,
} from "lucide-react";

const services = [
	{
		title: "Enterprise Web Applications",
		description:
			"Custom platforms built to support internal operations, workflows, reporting, and business-critical processes.",
		icon: Building2,
	},
	{
		title: "SaaS Product Development",
		description:
			"From MVPs to scalable platforms, we help companies design, build, and evolve modern SaaS products.",
		icon: Layers3,
	},
	{
		title: "Backend Engineering",
		description:
			"Robust REST APIs, Spring Boot architectures, PostgreSQL databases, authentication, and integrations.",
		icon: Database,
	},
	{
		title: "Frontend Development",
		description:
			"Modern, responsive, and maintainable React interfaces focused on usability, performance, and clarity.",
		icon: Code2,
	},
	{
		title: "Cloud & Docker Deployments",
		description:
			"Containerized applications, production-ready environments, scalable infrastructure, and deployment workflows.",
		icon: Cloud,
	},
	{
		title: "Automation & AI Solutions",
		description:
			"Process automation, internal tools, AI-assisted workflows, and integrations that reduce manual work.",
		icon: Bot,
	},
];

const values = [
	"Boutique software engineering",
	"Modern cloud-ready architecture",
	"High-quality code and long-term maintainability",
	"Clear communication with international teams",
	"Built on experience, designed for the future",
];

const process = [
	{
		step: "01",
		title: "Understand",
		description:
			"We analyze your business, workflows, users, technical constraints, and long-term objectives.",
	},
	{
		step: "02",
		title: "Design",
		description:
			"We define the architecture, user experience, data model, integrations, and delivery roadmap.",
	},
	{
		step: "03",
		title: "Build",
		description:
			"We develop clean, scalable, and maintainable software using modern technologies and best practices.",
	},
	{
		step: "04",
		title: "Evolve",
		description:
			"We help you improve, scale, automate, and modernize your software as your business grows.",
	},
];

export default function HomePage() {
	return (
		<main className="min-h-screen bg-slate-950 text-white">
			<div className="pointer-events-none fixed inset-0 overflow-hidden">
				<div className="absolute left-1/2 top-[-10rem] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-3xl" />
				<div className="absolute bottom-[-12rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-blue-700/20 blur-3xl" />
			</div>

			<header className="relative z-10 border-b border-white/10 bg-slate-950/70 backdrop-blur-xl">
				<div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
					<a href="#" className="flex items-center gap-3">
						<div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10">
							<Sparkles className="h-5 w-5 text-cyan-300" />
						</div>

						<div>
							<p className="text-lg font-semibold tracking-tight">
								Baltica Labs
							</p>
							<p className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">
								Software Boutique
							</p>
						</div>
					</a>

					<nav className="hidden items-center gap-8 text-sm text-slate-300 md:flex">
						<a href="#services" className="transition hover:text-white">
							Services
						</a>
						<a href="#about" className="transition hover:text-white">
							About
						</a>
						<a href="#process" className="transition hover:text-white">
							Process
						</a>
						<a href="#contact" className="transition hover:text-white">
							Contact
						</a>
					</nav>

					<a
						href="#contact"
						className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-medium text-slate-950 transition hover:bg-cyan-100 md:inline-flex"
					>
						Start a Project
					</a>
				</div>
			</header>

			<section className="relative z-10 px-6 py-24 lg:px-8 lg:py-32">
				<div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
					<div>
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
							<Globe2 className="h-4 w-4" />
							Modern software engineering for global businesses
						</div>

						<h1 className="max-w-4xl text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
							Modern Software.
							<span className="block bg-gradient-to-r from-cyan-200 via-blue-200 to-white bg-clip-text text-transparent">
								Built on Legacy.
							</span>
						</h1>

						<p className="mt-8 max-w-2xl text-lg leading-8 text-slate-300">
							Baltica Labs is a boutique software studio building scalable web
							applications, SaaS platforms, REST APIs, automation systems, and
							modern digital products for companies worldwide.
						</p>

						<div className="mt-10 flex flex-col gap-4 sm:flex-row">
							<a
								href="#contact"
								className="inline-flex items-center justify-center gap-2 rounded-full bg-cyan-300 px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-200"
							>
								Work With Us
								<ArrowRight className="h-5 w-5" />
							</a>

							<a
								href="#services"
								className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
							>
								Explore Services
							</a>
						</div>

						<div className="mt-12 grid max-w-xl grid-cols-3 gap-6 border-t border-white/10 pt-8">
							<div>
								<p className="text-3xl font-semibold text-white">Java</p>
								<p className="mt-1 text-sm text-slate-400">Spring Boot</p>
							</div>
							<div>
								<p className="text-3xl font-semibold text-white">React</p>
								<p className="mt-1 text-sm text-slate-400">Modern UI</p>
							</div>
							<div>
								<p className="text-3xl font-semibold text-white">Cloud</p>
								<p className="mt-1 text-sm text-slate-400">Docker Ready</p>
							</div>
						</div>
					</div>

					<div className="relative">
						<div className="absolute inset-0 rounded-[2rem] bg-cyan-300/20 blur-3xl" />

						<div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur-xl">
							<div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6">
								<div className="mb-8 flex items-center justify-between">
									<div>
										<p className="text-sm text-slate-400">
											Baltica Labs System Core
										</p>
										<p className="mt-1 text-xl font-semibold">
											Engineering Dashboard
										</p>
									</div>

									<div className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-medium text-emerald-300">
										Live
									</div>
								</div>

								<div className="space-y-4">
									<FeatureRow
										icon={ShieldCheck}
										title="Reliable Architecture"
										description="Designed for security, maintainability, and scale."
									/>
									<FeatureRow
										icon={GitBranch}
										title="Clean Delivery"
										description="Structured development workflows and clear communication."
									/>
									<FeatureRow
										icon={Sparkles}
										title="Future-Ready Systems"
										description="Modern stacks, automation, AI workflows, and cloud adoption."
									/>
								</div>

								<div className="mt-8 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
									<p className="text-sm uppercase tracking-[0.3em] text-cyan-200">
										Brand Statement
									</p>
									<p className="mt-3 text-2xl font-semibold leading-snug">
										Engineering the next generation of software.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			<section id="services" className="relative z-10 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="max-w-3xl">
						<p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
							What We Build
						</p>
						<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
							Software solutions for companies that need quality, speed, and
							long-term reliability.
						</h2>
						<p className="mt-6 text-lg leading-8 text-slate-300">
							We combine strong engineering foundations with modern technologies
							to create platforms that are easy to use, easy to maintain, and
							ready to grow.
						</p>
					</div>

					<div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						{services.map((service) => {
							const Icon = service.icon;

							return (
								<article
									key={service.title}
									className="group rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:-translate-y-1 hover:bg-white/[0.07]"
								>
									<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/10 text-cyan-300">
										<Icon className="h-6 w-6" />
									</div>

									<h3 className="text-xl font-semibold">{service.title}</h3>
									<p className="mt-4 leading-7 text-slate-400">
										{service.description}
									</p>
								</article>
							);
						})}
					</div>
				</div>
			</section>

			<section id="about" className="relative z-10 px-6 py-24 lg:px-8">
				<div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
					<div>
						<p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
							Our Origin
						</p>
						<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
							A new generation of builders, shaped by experience.
						</h2>
					</div>

					<div className="space-y-7 text-lg leading-8 text-slate-300">
						<p>
							Baltica Labs was created by two software developers with a clear
							mission: to build modern, reliable, and scalable software for
							companies that value quality engineering.
						</p>

						<p>
							Our story is built on a strong professional legacy. We carry
							forward years of experience, discipline, and real-world business
							knowledge, while bringing a new vision focused on cloud, AI,
							automation, modern web architectures, and global collaboration.
						</p>

						<p>
							Inspired by Baltic roots, our name reflects resilience, clarity,
							craft, and long-term thinking. We are not just building software.
							We are building the next stage.
						</p>

						<div className="grid gap-4 pt-4 sm:grid-cols-2">
							{values.map((value) => (
								<div
									key={value}
									className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
								>
									<CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-cyan-300" />
									<p className="text-base leading-7 text-slate-300">{value}</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			<section id="process" className="relative z-10 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-7xl">
					<div className="max-w-3xl">
						<p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
							How We Work
						</p>
						<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
							A clear process for building software with confidence.
						</h2>
					</div>

					<div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
						{process.map((item) => (
							<div
								key={item.step}
								className="rounded-3xl border border-white/10 bg-white/[0.04] p-7"
							>
								<p className="text-sm font-semibold text-cyan-300">
									{item.step}
								</p>
								<h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
								<p className="mt-4 leading-7 text-slate-400">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="relative z-10 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/15 via-white/[0.06] to-blue-500/10 p-8 md:p-12 lg:p-16">
					<div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
						<div>
							<p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-200">
								Why Baltica Labs
							</p>
							<h2 className="text-4xl font-semibold tracking-tight sm:text-5xl">
								Small team. Senior focus. Global mindset.
							</h2>
							<p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
								We work as a focused boutique team, giving each project direct
								attention, technical ownership, and a high level of care. Our
								goal is not to deliver more code. Our goal is to build better
								systems.
							</p>
						</div>

						<div className="rounded-3xl border border-white/10 bg-slate-950/60 p-7">
							<p className="text-sm uppercase tracking-[0.3em] text-cyan-300">
								Ideal For
							</p>

							<ul className="mt-6 space-y-4 text-slate-300">
								<li className="flex gap-3">
									<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-300" />
									<span>Companies modernizing legacy systems</span>
								</li>
								<li className="flex gap-3">
									<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-300" />
									<span>Startups building SaaS products</span>
								</li>
								<li className="flex gap-3">
									<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-300" />
									<span>Businesses that need automation and integrations</span>
								</li>
								<li className="flex gap-3">
									<CheckCircle2 className="mt-1 h-5 w-5 text-cyan-300" />
									<span>Teams looking for reliable technical partners</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			<section id="contact" className="relative z-10 px-6 py-24 lg:px-8">
				<div className="mx-auto max-w-4xl text-center">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-300">
						Let’s Build
					</p>
					<h2 className="text-4xl font-semibold tracking-tight sm:text-6xl">
						Have a project in mind?
					</h2>
					<p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
						We help companies design, build, modernize, and scale software
						products with clarity, quality, and long-term thinking.
					</p>

					<div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
						<a
							href="mailto:hello@balticalabs.com"
							className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-4 font-semibold text-slate-950 transition hover:bg-cyan-100"
						>
							hello@balticalabs.com
							<ArrowRight className="h-5 w-5" />
						</a>

						<a
							href="https://www.linkedin.com"
							target="_blank"
							rel="noreferrer"
							className="inline-flex items-center justify-center rounded-full border border-white/15 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
						>
							Connect on LinkedIn
						</a>
					</div>
				</div>
			</section>

			<footer className="relative z-10 border-t border-white/10 px-6 py-8 lg:px-8">
				<div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm text-slate-400 md:flex-row">
					<p>© {new Date().getFullYear()} Baltica Labs. All rights reserved.</p>
					<p>Modern Software. Built on Legacy.</p>
				</div>
			</footer>
		</main>
	);
}

function FeatureRow({
	icon: Icon,
	title,
	description,
}: {
	icon: React.ElementType;
	title: string;
	description: string;
}) {
	return (
		<div className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4">
			<div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-300/10 text-cyan-300">
				<Icon className="h-5 w-5" />
			</div>

			<div>
				<p className="font-semibold text-white">{title}</p>
				<p className="mt-1 text-sm leading-6 text-slate-400">{description}</p>
			</div>
		</div>
	);
}