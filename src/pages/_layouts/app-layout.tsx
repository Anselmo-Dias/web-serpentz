import { Outlet } from "react-router-dom";

export function AppLayout() {
  return (
    <div className="flex flex-col">
      <header className="flex w-full items-center justify-between bg-black px-8 py-4">
        <h1 className="text-xl font-black text-white">Serpentz</h1>

        <ul className="flex w-full max-w-[300px] items-center justify-center gap-6 text-white">
          <li>
            <a className="link-hover-border" href="">Loja</a>
          </li>
          <li>
            <a className="link-hover-border" href="">Sobre nós</a>
          </li>
          <li>
            <a className="link-hover-border" href="">junte-se à equipe</a>
          </li>
        </ul>
      </header>

      <div>
        <Outlet />
      </div>
    </div>
  );
}
