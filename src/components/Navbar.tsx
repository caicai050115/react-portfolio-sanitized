import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-black/15 bg-white/95 backdrop-blur">
      <nav
        className="mx-auto flex max-w-site items-center justify-between px-5 py-4 sm:px-8"
        aria-label="Primary navigation"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-black tracking-normal text-black"
        >
          TheFoxXu
        </a>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center border border-black bg-white text-black transition-colors hover:bg-black hover:text-white md:hidden"
          aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X size={19} aria-hidden="true" /> : <Menu size={19} aria-hidden="true" />}
        </button>

        <div className="hidden items-center gap-9 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-bold uppercase tracking-[0.18em] text-black transition-opacity hover:opacity-55"
            >
              {item.label}
            </a>
          ))}
        </div>
      </nav>

      <div
        className={`border-t border-black/10 bg-white px-5 transition-[max-height,opacity] duration-300 md:hidden ${
          isOpen ? 'max-h-72 opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
      >
        <div className="mx-auto grid max-w-site grid-cols-2 gap-px py-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border border-black px-4 py-3 text-center text-xs font-black uppercase tracking-[0.2em] text-black transition-colors hover:bg-black hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}
