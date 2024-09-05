'use client';
import { useState } from 'react';
import { LogoShape } from '@/public/assets/icons/LogoShape';
import Link from 'next/link';
import NavMenuIcon from '../Icons/NavMenuIcon';
import DropDownNav from '../DropDownNav';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const windowWidth = useWindowWidth();

  function toggleMenu() {
    setIsOpen(!isOpen);
  }
  return (
    <>
      <header className="min-h-[90px] py-8">
        <div className="w-full max-w-[1260px] mx-auto px-4">
          <div className="flex justify-between items-center ">
            <Link href={'/'}>
              <div className="flex items-center cursor-pointer justify-self-start ml-0">
                <LogoShape color="#5634bf" width="40" height="40" />
              </div>
            </Link>
            {windowWidth > 768 ? (
              <>
                <div className="flex items-center cursor-pointer justify-self-start ml-0">
                  <nav className="flex items-center justify-center">
                    <ul className="flex items-center space-x-4">
                      <li className="">
                        <Link
                          href="/articles"
                          className="font-normal text-lg text-black hover:text-[#7755E2] no-underline"
                        >
                          Articles
                        </Link>
                      </li>
                      <li className="my-0 mx-1">
                        <Link
                          href="/courses"
                          className="font-normal text-lg text-black hover:text-[#7755E2] no-underline"
                        >
                          Courses
                        </Link>
                      </li>
                      <li className="my-0 mx-6">
                        <Link
                          href="/books"
                          className="font-normal text-lg text-black hover:text-[#7755E2] no-underline"
                        >
                          Books
                        </Link>
                      </li>
                      <li className="my-0 mx-6">
                        <Link
                          href="/forum"
                          className="font-normal text-lg text-black hover:text-[#7755E2] no-underline"
                        >
                          Forum
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="flex items-center cursor-pointer justify-self-start ml-0">
                  <div className="flex items-center justify-end">
                    <Link href="/login" className="ml-2.5">
                      <button className="h-[47px] flex items-center min-w-[133px] justify-center font-normal text-lg border-none cursor-pointer hover:text-[#7755E2] text-black bg-transparent font-inherit">
                        Login
                      </button>
                    </Link>
                    <Link href="/login" className="ml-2.5">
                      <button className="h-[47px] flex items-center min-w-[133px] justify-center font-normal text-lg border-none cursor-pointer bg-[#7755E2] hover:bg-[#F28C1C] rounded-md text-white transition duration-300 font-inherit">
                        Register
                      </button>
                    </Link>
                  </div>
                </div>
              </>
            ) : null}
            <NavMenuIcon toggle={toggleMenu} />
          </div>
        </div>
      </header>
      <DropDownNav toggle={toggleMenu} isOpen={isOpen} />
    </>
  );
}
