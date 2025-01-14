'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const MenuLink: React.FC<{ name: string; href: string }> = ({ name, href }) => {
  const pathname = usePathname();

  return (
    <li className="ml-5">
      <Link
        aria-current="page"
        className={`transition duration-200 ease-in-out flex flex-row items-center hover:text-red-600 uppercase text-xs${pathname === href ? ' font-bold' : ''}`}
        href={href}
      >
        {name}
      </Link>
    </li>
  )
}
