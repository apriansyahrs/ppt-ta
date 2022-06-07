import * as React from 'react';

import { Logo, LogoCIC } from '@/components/logo';
import { Link } from '@/components/link';

export const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 z-40">
      <div className="container relative">
        <div className="flex h-16 w-full items-center justify-between">
          <div className="flex items-center">
            <Link href="https://uixars.netlify.app/" className="outline-none">
              <span className="sr-only">RegexDev</span>
              <Logo className="h-[48px] w-auto" />
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="https://cic.ac.id/" openNewTab={true} className="outline-none">
              <span className="sr-only">CIC</span>
              <LogoCIC className="h-[48px] w-auto" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
