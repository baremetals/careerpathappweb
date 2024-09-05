import React from 'react';
import { IToggle } from '../../interfaces';
import { FaTimes } from 'react-icons/fa';
import useWindowWidth from '../../hooks/useWindowWidth';
import Link from 'next/link';

interface IDropdown extends IToggle {
  isOpen: boolean;
}

export default function DropDownNav({ toggle, isOpen }: IDropdown) {
  const windowWidth = useWindowWidth();
  return (
    <aside
      className={`fixed z-50 w-full h-full bg-[#0d0d0d] grid items-center top-0 left-0 transition-all ease-in-out duration-300 ${
        isOpen ? 'top-0 opacity-100' : '-top-full opacity-0 pointer-events-none'
      }`}
    >
      <div className="absolute top-[1.2rem] right-[1.5rem] bg-transparent border-transparent text-[2rem] cursor-pointer outline-none">
        <FaTimes className="text-white" onClick={toggle} />
      </div>
      <div className="text-white">
        <ul
          className={`grid grid-cols-1 gap-y-4 ${
            windowWidth <= 480 ? 'gap-y-3' : 'gap-y-4'
          } text-center`}
        >
          <Link href="/articles">
            <li className="flex items-center justify-center text-[1.5rem] no-underline list-none transition-all ease-in-out duration-200 text-white cursor-pointer hover:text-[#7755E2]">
              Articles
            </li>
          </Link>
          <Link href="/courses">
            <li className="flex items-center justify-center text-[1.5rem] no-underline list-none transition-all ease-in-out duration-200 text-white cursor-pointer hover:text-[#7755E2]">
              Courses
            </li>
          </Link>
          <Link href="/books">
            <li className="flex items-center justify-center text-[1.5rem] no-underline list-none transition-all ease-in-out duration-200 text-white cursor-pointer hover:text-[#7755E2]">
              Books
            </li>
          </Link>
          <Link href="/forum">
            <li className="flex items-center justify-center text-[1.5rem] no-underline list-none transition-all ease-in-out duration-200 text-white cursor-pointer hover:text-[#7755E2]">
              Forum
            </li>
          </Link>
          <Link href="/auth/login">
            <li className="flex items-center justify-center text-[1.5rem] no-underline list-none transition-all ease-in-out duration-200 text-white cursor-pointer hover:text-[#7755E2]">
              Login
            </li>
          </Link>
        </ul>
        <div className="flex justify-center">
          <Link href="auth/register">
            <button className="rounded-full bg-[#7755E2] whitespace-nowrap px-16 py-4 text-black text-base outline-none border-none cursor-pointer transition-all ease-in-out duration-200 no-underline hover:bg-white hover:text-black">
              Register
            </button>
          </Link>
        </div>
      </div>
    </aside>
  );
}
