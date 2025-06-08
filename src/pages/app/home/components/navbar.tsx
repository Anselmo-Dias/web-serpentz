export default function Navbar() {
  const links = [
    { label: 'Início', href: '#home' },
    { label: 'Sobre Nós', href: '#sobre' },
    { label: 'Equipes', href: '#equipes' },
    { label: 'Conquistas', href: '#conquistas' },
    { label: 'Calendário', href: '#calendario' },
    { label: 'Comunidade', href: '#comunidade' },
    { label: 'Recrutamento', href: '#recrutamento' },
    { label: 'Parceiros', href: '#parceiros' },
    { label: 'Hall da Fama', href: '#hall-da-fama' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Contato', href: '#contato' },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="text-green-400 text-2xl font-bold tracking-wider">
          SERPENTZ
        </div>
        <div className="hidden md:flex gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-300 hover:text-green-400 transition text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
