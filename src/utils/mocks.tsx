import { IEvents } from "@/types";
import { FaDiscord, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";

export const teams = [
  {
    game: "Valorant",
    players: [
      {
        name: "CICADA",
        function: "Master",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZDlNf0Fv4KMyIUl_rYa2mxub3Nyf88wu1g&s",
        bio: "Especialista em jogadas agressivas e decisões rápidas. Sempre busca o destaque nas partidas.",
      },
      {
        name: "VENOM",
        function: "Duelista",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZDlNf0Fv4KMyIUl_rYa2mxub3Nyf88wu1g&s",
        bio: "Especialista em jogadas agressivas e decisões rápidas. Sempre busca o destaque nas partidas.",
      },
      {
        name: "SHADOW",
        function: "Sentinela",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZDlNf0Fv4KMyIUl_rYa2mxub3Nyf88wu1g&s",
        bio: "Responsável pela defesa e suporte, protege a equipe em todos os rounds.",
      },
      {
        name: "BLAZE",
        function: "Iniciador",
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIZDlNf0Fv4KMyIUl_rYa2mxub3Nyf88wu1g&s",
        bio: "Inicia as jogadas com precisão, abrindo caminho para as vitórias do time.",
      },
    ],
  },
  {
    game: "League of Legends",
    players: [
      {
        name: "CICADA",
        function: "Master",
        avatar: "https://www.gamechampions.com/media/htsjknfq/demon1.webp",
        bio: "Domina a rota superior com resistência e agressividade. Pilar do time nas lutas.",
      },
      {
        name: "SNAKE",
        function: "Top",
        avatar: "https://www.gamechampions.com/media/htsjknfq/demon1.webp",
        bio: "Domina a rota superior com resistência e agressividade. Pilar do time nas lutas.",
      },
      {
        name: "PIXEL",
        function: "Mid",
        avatar: "https://www.gamechampions.com/media/htsjknfq/demon1.webp",
        bio: "Versátil e criativo, dita o ritmo do jogo no meio do mapa.",
      },
      {
        name: "BOLT",
        function: "ADC",
        avatar: "https://www.gamechampions.com/media/htsjknfq/demon1.webp",
        bio: "Atirador preciso, responsável pelo dano massivo nas batalhas decisivas.",
      },
    ],
  },
];

export const achievements = [
  {
    title: "Campeões - Torneio Valorant Arena",
    year: "2024",
    image:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2019/10/18/1571438686252.jpg",
    description: "1º lugar com campanha invicta na final nacional.",
  },
  {
    title: "Top 3 - Circuito LoL Pro-Am",
    year: "2023",
    image:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2019/10/18/1571438686252.jpg",
    description: "Semi-final memorável contra equipe favorita.",
  },
  {
    title: "MVP do Split - Snake",
    year: "2023",
    image:
      "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2019/10/18/1571438686252.jpg",
    description: "Reconhecimento individual no cenário de LoL.",
  },
];

export const events: IEvents[] = [
  {
    title: "Treino Aberto - LoL",
    data: "10/06/2025",
    hours: "19h00",
    type: "Treino",
  },
  {
    title: "Qualifier Valorant - Liga X",
    data: "15/06/2025",
    hours: "18h00",
    type: "Campeonato",
  },
  {
    title: "Live com Players - Discord",
    data: "18/06/2025",
    hours: "20h00",
    type: "Live",
  },
];

export const networks = [
  { name: "Discord", url: "https://discord.gg/serpentzgaming", icon: <FaDiscord /> },
  {
    name: "Instagram",
    url: "https://www.instagram.com/serpentzgaming",
    icon: <FaInstagram />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com/@serpentzgaming",
    icon: <FaTiktok />,
  },
  {
    name: "YouTube",
    url: "https://youtube.com/@serpentz.gaming",
    icon: <FaYoutube />,
  },
];

export const highlights = [
  {
    type: "Clipe da Semana",
    title: "Ace de Viper no Valorant",
    image:
      "https://www.riotgames.com/darkroom/1440/8d5c497da1c2eeec8cffa99b01abc64b:5329ca773963a5b739e98e715957ab39/ps-f2p-val-console-launch-16x9.jpg",
  },
  {
    type: "Fanart",
    title: "Arte feita por @venenosaa",
    image:
      "https://www.sigamais.com/arquivo/uploads/lol3jpg170610528665b119c6c5eec.jpg",
  },
  {
    type: "Evento Comunidade",
    title: "Serpentz Fan Cup - edição 2025",
    image:
      "https://s2.glbimg.com/akp4kqfeqxks6yajTTlILGr1dbM=/0x0:640x427/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2019/S/G/wAvVotSryAOEiDjRtVjA/all-star.jpg",
  },
];

export const partners = [
  {
    id: 1,
    name: "GameFuel",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0uvjrLD9ef4twQyqpoefizpVsxEZkI8ewmA&s",
    description: "Energia oficial dos nossos players.",
  },
  {
    id: 2,
    name: "GearPro",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0uvjrLD9ef4twQyqpoefizpVsxEZkI8ewmA&s",
    description: "Equipamentos de alto desempenho para eSports.",
  },
  {
    id: 3,
    name: "SnakeTech",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0uvjrLD9ef4twQyqpoefizpVsxEZkI8ewmA&s",
    description: "Parceiros em tecnologia e análise de dados.",
  },
];

export const feedbacks = [
  {
    name: 'Bruno "Shadow" Souza',
    text: "Fazer parte da SERPENTZ foi o maior passo da minha carreira. Aqui eu evoluí de verdade.",
    avatar:
      "https://img.redbull.com/images/c_crop,x_368,y_0,h_2130,w_2663/c_fill,w_400,h_320/q_auto:low,f_auto/redbullcom/2020/12/16/c61kpj1fxidgnwiqgz2h/games-faker-t1",
  },
  {
    name: 'Lívia "LIV" Mendes',
    text: "O respeito pela comunidade é o diferencial dessa organização. Eles ouvem os fãs!",
    avatar:
      "https://img.redbull.com/images/c_crop,x_368,y_0,h_2130,w_2663/c_fill,w_400,h_320/q_auto:low,f_auto/redbullcom/2020/12/16/c61kpj1fxidgnwiqgz2h/games-faker-t1",
  },
  {
    name: "Felipe - GearPro",
    text: "Uma parceria que nos orgulha. A Serpentz representa profissionalismo e paixão.",
    avatar:
      "https://img.redbull.com/images/c_crop,x_368,y_0,h_2130,w_2663/c_fill,w_400,h_320/q_auto:low,f_auto/redbullcom/2020/12/16/c61kpj1fxidgnwiqgz2h/games-faker-t1",
  },
];

export const members = [
  {
    name: "Egípcio",
    position: "Fundador & CEO",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslXl6m6-Of3iQYpd5wgBMF3O2zOOWk75vGg&s",
    bio: "Ex-pro player, fundador da SERPENTZ. Liderança e estratégia são seu DNA.",
  },
  {
    name: 'Carlos "Strat" Silva',
    position: "Coach - Valorant",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslXl6m6-Of3iQYpd5wgBMF3O2zOOWk75vGg&s",
    bio: "Treinador com táticas afiadas. Cria rotas impossíveis para vitórias certas.",
  },
  {
    name: 'Ana "Data" Torres',
    position: "Analista de Desempenho",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslXl6m6-Of3iQYpd5wgBMF3O2zOOWk75vGg&s",
    bio: "Transforma dados em decisões. Analítica, fria, essencial.",
  },
  {
    name: 'Hudson "Oryon" Lima',
    position: "Manager de Operações",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslXl6m6-Of3iQYpd5wgBMF3O2zOOWk75vGg&s",
    bio: "Comanda os bastidores da equipe como se fosse o último round.",
  },
  {
    name: 'Anselmo "Cicada" Dias',
    position: "Software Engineer",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSslXl6m6-Of3iQYpd5wgBMF3O2zOOWk75vGg&s",
    bio: "Responsável pelo desenvolvimento de software e infraestrutura digital da equipe.",
  },
];
