"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Synapse
        </Link>
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:space-x-6 absolute md:static bg-blue-600 md:bg-transparent p-4 md:p-0 top-16 right-4 md:flex-row flex-col`}
        >
          <li>
            <Link href="/records" className="hover:text-gray-200">
              Records
            </Link>
          </li>
          <li>
            <Link href="/diagnostics" className="hover:text-gray-200">
              Diagnostics
            </Link>
          </li>
          <li>
            <Link href="/share" className="hover:text-gray-200">
              Share
            </Link>
          </li>
          <li>
            <button className="bg-white text-blue-600 px-4 py-2 rounded hover:bg-gray-100">
              Connect Wallet
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}