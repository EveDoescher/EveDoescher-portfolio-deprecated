import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GearsImage from "../../assets/Gears.jpg";
import PasseImage from "../../assets/Passe_onibus.jpg";
import PortfolioImage from "../../assets/Portfolio.png";
import PIMImage from "../../assets/PIM.png";

export default function ProgrammingProjectsCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "20%",
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          centerPadding: "15%",
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "15%",
          dots: false,
          arrows: false,
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          centerPadding: "10%",
          dots: false,
          arrows: false,
        }
      }
    ]
  };

  const projects = [
    {
      id: 1,
      title: "Calculadora de Passe",
      description: "Sistema calculadora de duração de crédito de passe de ônibus, considerando perfil de consumo do usuário e valor depositado.",
      image: PasseImage,
      tags: ["Java"],
      github: "https://github.com/EveDoescher/Calculadora-de-Passe/blob/main/Calculadora%20de%20passe/src/Main.java",
    },
    {
      id: 2,
      title: "Sistema Acadêmico Colaborativo",
      description: "Desenvolvimento de um Sistema Desktop para Gestão Acadêmica entre professores e alunos, realizado como Projeto Integrador Multidisciplinar (PIM) para a faculdade de Análise e Desenvolvimento de Sistemas. O projeto implementa uma arquitetura em camadas , utilizando Python e Flet  para o front-end desktop. O back-end é integrado ao MySQL via SQLAlchemy ORM , e conta com um sistema de autenticação com controle de acesso por perfis. A solução é containerizada via Docker e inclui um módulo de estatísticas em C para otimizar a performance dos cálculos.",
      image: PIMImage,
      tags: ["Python", "C", "Flet", "MySQL","SQLAlchemy","Docker"],
      github: "https://github.com/EveDoescher/PIM",
    },
    {
      id: 3,
      title: "Portfólio",
      description: "Desenvolvimento de um site de portfólio moderno e performático, com design responsivo e experiência de usuário otimizada. O projeto utiliza React.js e TypeScript para uma base sólida e escalável, Vite para build rápido e eficiente, e Tailwind CSS para estilização ágil e consistente.",
      image: PortfolioImage,
      tags: ["React.js", "Vite", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/EveDoescher/EveDoescher-portfolio",
    },
    {
      id: 4,
      title: "Projeto em desenvolvimento",
      description: "Projeto em desenvolvimento ativo com objetivo de construir solução robusta e eficiente usando tecnologias modernas.",
      image: GearsImage,
      tags: ["TypeScript", "React.js", "Java", "Tailwind CSS"],
      github: "https://github.com/EveDoescher",
    }
  ];

  return (
    <div className="w-full max-w-full mx-auto py-4 sm:py-8 px-1 sm:px-2">
      <Slider {...settings}>
        {projects.map((project) => (
          <div key={project.id} className="px-2">
            <div className="bg-white rounded-xl overflow-hidden transform transition-transform duration-300 hover:scale-101 shadow-lg min-h-[400px] sm:min-h-[420px] md:min-h-[450px] flex flex-col">
              <div className="relative flex-shrink-0">
                <img 
                  className="w-full h-32 sm:h-36 md:h-40 object-cover" 
                  src={project.image} 
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-grow">
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight">
                  {project.title}
                </h3>
                <p className="text-gray-600 py-4 text-xs sm:text-base  flex-grow text-start">
                  {project.description}
                </p>
                
                <div className="hidden sm:flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-gray-800 text-xs sm:text-sm px-2 py-1 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto">
                  <a 
                    href={project.github} 
                    className="w-full bg-gray-900 text-white text-center py-2.5 px-4 rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm sm:text-base block"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Ver Código
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
