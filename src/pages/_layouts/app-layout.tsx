import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex flex-col">
      <header className="flex w-full items-center justify-between bg-black px-8 py-4 max-xs:px-1 max-xs:flex-col">
        <h1 className="text-xl font-black text-white">Serpentz</h1>

        <ul className="flex w-full max-w-[300px] flex-wrap items-center justify-center gap-6 text-center text-white">
          <li className="text-center">
            <a className="link-hover-border text-center max-xs:text-xs" href="">
              Loja
            </a>
          </li>
          <li className="text-center">
            <a className="link-hover-border text-center max-xs:text-xs" href="">
              Sobre nós
            </a>
          </li>
          <li className="text-center">
            <a className="link-hover-border text-center max-xs:text-xs" href="">
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
