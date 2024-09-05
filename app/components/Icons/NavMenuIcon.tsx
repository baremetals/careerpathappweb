'use client';
import { FaBars } from 'react-icons/fa';
import { IToggle } from '../../interfaces';
import useWindowWidth from '../../hooks/useWindowWidth';

export default function NavMenuIcon({ toggle }: IToggle) {
  const windowWidth = useWindowWidth();

  return (
    <div
      className={`transition-colors duration-300 ${
        windowWidth <= 768
          ? 'block absolute top-0 right-0 translate-x-[-100%] -translate-y-[-60%] text-[1.8rem] cursor-pointer'
          : 'hidden'
      } text-white`}
      onClick={() => {
        toggle();
      }}
    >
      <FaBars style={{ color: 'black' }} />
    </div>
  );
}
