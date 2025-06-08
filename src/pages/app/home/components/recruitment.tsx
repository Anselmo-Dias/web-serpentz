export default function Recruitment() {
  return (
    <section id="recruitment" className="py-20 px-6 bg-black text-white">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-orange-400 mb-10">
          Faça Parte da SERPENTZ
        </h2>
        <p className="text-gray-400 mb-10">
          Está pronto para competir no mais alto nível? Preencha o formulário abaixo e venha mostrar o seu veneno.
        </p>

        <form className="space-y-6 text-left">
          <div>
            <label className="block mb-1 text-sm text-gray-300">Nome</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ex: ViperX"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Idade</label>
            <input
              type="number"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Ex: 18"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Jogo Principal</label>
            <select className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500">
              <option>Valorant</option>
              <option>League of Legends</option>
              <option>Outros</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Portfólio ou Perfil</label>
            <input
              type="url"
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Link do seu perfil, canal ou vídeos"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">Mensagem</label>
            <textarea
              rows={4}
              className="w-full px-4 py-2 rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Fale um pouco sobre você, experiência e por que quer entrar na Serpentz."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 text-black font-bold py-3 px-6 rounded hover:bg-orange-600 transition"
          >
            Enviar Candidatura
          </button>
        </form>
      </div>
    </section>
  )
}
