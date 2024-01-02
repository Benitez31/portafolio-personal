import React from "react";
import Carousel from '../components/Carousel'
import '../styles/Projects.css'

const Projects = () => {
  const imagesData = [
    {
      id: 1,
      title: 'Web Agencia Turismo',
      description: 'Prototipo agencia viaje en vanilla',
      url: '/web_viajes.mp4',
      link:'https://github.com/Benitez31/MyTinerary-BenitezHugo.git'
    },
    {
      id: 2,
      title: 'Web Gaming',
      description: 'Prototipo pagina de Juegos en Html, Css, JS',
      url: '/web_gaming.mp4',
      link:'https://github.com/Benitez31/Paginas-Web/tree/848c57772e3c783b567acc3e1131c68193a53ea6/pagina%20web%203'
    },
    {
      id: 3,
      title: 'Web Comidas',
      description: 'Prototipo Web Restaurante en Vanilla',
      url: '/web_resto.mp4',
      link:'https://github.com/Benitez31/Paginas-Web/tree/848c57772e3c783b567acc3e1131c68193a53ea6/pagina%20web%202'
    },
    {
      id: 4,
      title: 'Gestor de Tareas',
      description: 'Desafio FreeCodeCamp en ReactJS',
      url: '/lista_de_tareas.mp4',
      link:'https://github.com/Benitez31/Paginas-Web/tree/848c57772e3c783b567acc3e1131c68193a53ea6/proyectosReact/gestor-de-tareas'
    },
    {
      id: 5,
      title: 'Calculadora',
      description: 'Desafio FreeCodeCamp en ReactJS',
      url: '/calculadora_free.mp4',
      link:'https://github.com/Benitez31/Paginas-Web/tree/848c57772e3c783b567acc3e1131c68193a53ea6/proyectosReact/calculadora'
    },
    {
      id: 6,
      title: 'Contador boca de urna',
      description: 'Desafio Argentina Programa en React',
      url: '/boca_urna.mp4',
      link:''
    }
    ,
    {
      id: 7,
      title: 'Portfolio de Negocio',
      description: 'Prototipo web Business en Vanilla',
      url: '/plantilla.mp4',
      link:'https://github.com/Benitez31/Paginas-Web/tree/848c57772e3c783b567acc3e1131c68193a53ea6/pagina%20web%201'
    }

  ];
  return (
    <div className="project-container">
    <h2 className='projectsTitle'>Proyectos</h2>
      <Carousel images={imagesData} />
    </div>
  )
}

export default Projects;
