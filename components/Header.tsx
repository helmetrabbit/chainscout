'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MenuLinks from './MenuLinks';
import ExplorerDropdown from './ExplorerDropdown';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-0 bottom-0 pt-[104px] bg-white transition-transform duration-300 ease-in-out overflow-y-auto z-10 ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="px-5 pt-8 space-y-6">
          <MenuLinks isMobile />
          <ExplorerDropdown isMobile onClose={() => setIsMobileMenuOpen(false)} />
        </div>
      </div>
      <header className="fixed w-full z-10">
        <div className="bg-[#161616] text-white text-sm h-[44px] flex items-center justify-center gap-[14px]">
          <span>Support Open Source 🔭</span>
          <Link href="#" className="underline">
            Donate to Blockscout Today!
          </Link>
        </div>
        <div className="flex items-center justify-between bg-white h-[60px] md:h-[94px] px-4 md:px-10 border-b border-[#e6e8ec]">
          <div className="flex-1">
            <div className="w-[150px] md:w-[115px] relative">
              <Image
                src="/logo.svg"
                alt="Blockscout Logo"
                layout="responsive"
                width={150}
                height={150 * (22/115)} // Maintain aspect ratio
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-8">
            <MenuLinks />
          </div>
          {/* Mobile menu button */}
          <button
            className="w-6 h-6 flex flex-col justify-center items-end md:hidden gap-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className={`block w-5 h-0.5 bg-black ${isMobileMenuOpen ? 'rotate-45 translate-y-[3px]' : ''}`}></div>
            <div className={`block w-5 h-0.5 bg-black ${isMobileMenuOpen ? '-rotate-45 -translate-y-[3px]' : ''}`}></div>
          </button>
          {/* Desktop Explorer Dropdown */}
          <div className="hidden md:flex flex-1 justify-end">
            <ExplorerDropdown />
          </div>
        </div>
      </header>
    </>
  );
}
