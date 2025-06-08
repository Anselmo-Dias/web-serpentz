import { useEffect, useState } from "react";
import { BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { ImYoutube } from "react-icons/im";
import { Outlet } from "react-router-dom";

export function AppLayout() {
  const [scrollPosition, setScrollPosition] = useState(0);

  function handleScroll() {
    const position = window.pageYOffset;
    setScrollPosition(position);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <header
      style={{backgroundColor: scrollPosition > 0 ? "black" : "transparent"}}
        className='fixed flex w-full items-center justify-between gap-6 transition-all duration-500 ease-in-out px-8 py-4 max-xs:flex-col max-xs:px-1 z-20'
      >
        <h1 className="text-xl font-black text-white">Serpentz</h1>

        <ul className="flex w-full max-w-[300px] flex-wrap items-center justify-center gap-6 text-center text-white">
          <li className="text-center">
            <a
              className="link-hover-border max-xs:text-xxl text-center"
              href=""
            >
              Loja
            </a>
          </li>
          <li className="text-center">
            <a
              className="link-hover-border max-xs:text-xxl text-center"
              href=""
            >
              Sobre nós
            </a>
          </li>
          <li className="text-center">
            <a
              className="link-hover-border max-xs:text-xxl text-center"
              href=""
            >
              junte-se à equipe
            </a>
          </li>
        </ul>
      </header>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
