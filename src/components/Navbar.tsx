import { useEffect, useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [current, setCurrent] = useState('#home');

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter((node): node is HTMLElement => node instanceof HTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setCurrent(`#${visible.target.id}`);
        }
      },
      { rootMargin: '-30% 0px -50% 0px', threshold: [0.05, 0.2, 0.45] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-black bg-white">
      <nav
        className="mx-auto flex h-16 max-w-site items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Primary navigation"
      >
        <a href="#home" onClick={closeMenu} className="text-base font-semibold tracking-[-0.03em]">
          TheFoxXu
        </a>

        <button
          type="button"
          className="min-h-10 text-sm md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? 'Close' : 'Menu'}
        </button>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => {
            const active = current === item.href;

            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? 'true' : undefined}
                className={`text-sm ${active ? 'border-b border-black' : ''}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>
      </nav>

      {isOpen ? (
        <div className="fixed inset-x-0 bottom-0 top-16 z-30 overflow-y-auto bg-white px-5 md:hidden">
          <div className="mx-auto flex max-w-site flex-col">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                aria-current={current === item.href ? 'true' : undefined}
                className="border-b border-black py-5 text-4xl font-semibold tracking-[-0.04em]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
}
