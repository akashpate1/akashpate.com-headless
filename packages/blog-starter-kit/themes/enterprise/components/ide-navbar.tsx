import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

/* ── Inline SVG icons (no extra deps) ─────────────────────── */
const SunIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<circle cx="12" cy="12" r="5" />
		<line x1="12" y1="1" x2="12" y2="3" />
		<line x1="12" y1="21" x2="12" y2="23" />
		<line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
		<line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
		<line x1="1" y1="12" x2="3" y2="12" />
		<line x1="21" y1="12" x2="23" y2="12" />
		<line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
		<line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
	</svg>
);

const MoonIcon = () => (
	<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
	</svg>
);

const MenuIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<line x1="3" y1="6" x2="21" y2="6" />
		<line x1="3" y1="12" x2="21" y2="12" />
		<line x1="3" y1="18" x2="21" y2="18" />
	</svg>
);

const CloseIcon = () => (
	<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
		<line x1="18" y1="6" x2="6" y2="18" />
		<line x1="6" y1="6" x2="18" y2="18" />
	</svg>
);

/* ── Nav links config ──────────────────────────────────────── */
const NAV_LINKS = [
	{ label: '~/home', href: '/' },
	{ label: '~/blog', href: '/blog' },
];

export const IDENavbar = () => {
	const router = useRouter();
	const [theme, setTheme] = useState<'dark' | 'light'>('dark');
	const [menuOpen, setMenuOpen] = useState(false);

	/* Read stored theme on mount */
	useEffect(() => {
		const stored = (localStorage.getItem('theme') as 'dark' | 'light') || 'dark';
		setTheme(stored);
	}, []);

	const toggleTheme = () => {
		const next = theme === 'dark' ? 'light' : 'dark';
		setTheme(next);
		localStorage.setItem('theme', next);
		document.documentElement.setAttribute('data-theme', next);
	};

	const isActive = (href: string) => {
		if (href === '/') return router.pathname === '/';
		return router.pathname.startsWith(href);
	};

	return (
		<nav className="ide-nav">
			<div className="ide-nav__inner">
				{/* Logo */}
				<Link href="/" className="ide-nav__logo">
					akash.pate<span className="ide-nav__logo-cursor">▌</span>
				</Link>

				{/* Desktop nav links */}
				<ul className="ide-nav__links">
					{NAV_LINKS.map((link) => (
						<li key={link.href}>
							<Link
								href={link.href}
								className={`ide-nav__link${isActive(link.href) ? ' active' : ''}`}
							>
								{link.label}
							</Link>
						</li>
					))}
				</ul>

				{/* Right side controls */}
				<div className="ide-nav__right">
					<button
						className="ide-theme-toggle"
						onClick={toggleTheme}
						aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
					>
						{theme === 'dark' ? <SunIcon /> : <MoonIcon />}
					</button>

					{/* Mobile hamburger */}
					<button
						className="ide-nav__hamburger"
						onClick={() => setMenuOpen((o) => !o)}
						aria-label="Toggle menu"
					>
						{menuOpen ? <CloseIcon /> : <MenuIcon />}
					</button>
				</div>
			</div>

			{/* Mobile dropdown */}
			<div className={`ide-nav__mobile-menu${menuOpen ? ' open' : ''}`}>
				{NAV_LINKS.map((link) => (
					<Link
						key={link.href}
						href={link.href}
						className={`ide-nav__mobile-link${isActive(link.href) ? ' active' : ''}`}
						onClick={() => setMenuOpen(false)}
					>
						{link.label}
					</Link>
				))}
			</div>
		</nav>
	);
};
