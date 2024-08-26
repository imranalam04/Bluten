"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavLink = ({ href, children, isFirst }) => (
    <Link href={href} className="flex items-center space-x-1 text-gray-600 hover:text-primary">
      <svg className={`w-4 h-4 text-cyan-400 transform rotate-45 scale-x-75 flex-shrink-0 ${isFirst ? 'text-blue-500' : 'text-gray-400'}`} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
      <span>{children}</span>
    </Link>
  );

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}

          {/* Search bar - visible on larger screens */}
          <form className="hidden md:block flex-grow mx-4 relative">
            <input
              type="text"
              placeholder="Suchen"
              aria-label="Search"
              className="w-full px-3 py-2 pr-10 border border-gray-300 bg-blue-100 rounded-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-blue-400 absolute right-3 top-1/2 transform -translate-y-1/2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </form>

          {/* Desktop Navigation - hidden on tablets and smaller */}
          <nav className="hidden lg:flex items-center space-x-3">
            <NavLink href="#" isFirst>Rezept einlösen</NavLink>
            <NavLink href="#">Live Bestand</NavLink>
            <NavLink href="#">Videosprechstunde</NavLink>
            <NavLink href="#">FAQs</NavLink>
            <NavLink href="#">Kontakt</NavLink>
            <NavLink href="#">Warenkorb ansehen</NavLink>
            <Link href="#" className="bg-[#ECFEAA] text-primary px-6 py-2 rounded-[15px_0_15px]">
              Anmelden
            </Link>
          </nav>

          {/* Mobile menu button  */}
          <button
            className="lg:hidden ml-auto"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation - visible on tablets and smaller */}
        {isMenuOpen && (
          <nav className="lg:hidden py-4 space-y-2">
            <input
              type="text"
              placeholder="Suchen"
              aria-label="Mobile Search"
              className="w-full px-3 py-2 border border-gray-300 rounded-md mb-4"
            />
            <NavLink href="#" isFirst>Rezept einlösen</NavLink>
            <NavLink href="#">Live Bestand</NavLink>
            <NavLink href="#">Videosprechstunde</NavLink>
            <NavLink href="#">FAQs</NavLink>
            <NavLink href="#">Kontakt</NavLink>
            <NavLink href="#">Warenkorb</NavLink>
            <NavLink href="#">Anmelden</NavLink>
          </nav>
        )}
      </div>
    </header>
  );
}
