import React from "react";
import Carousel from '../components/Carousel'
import '../styles/Projects.css'

const Projects = () => {
  const imagesData = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1',
      url: 'https://cdn.pixabay.com/vimeo/268112360/saigon-15952.mp4?width=640&hash=2b457c9d2035b8ef353bd1ac1670037c3bfda98b',
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2',
      url: '/src/images/saigon.mp4',
    },
    {
      id: 3,
      title: 'Proyecto 3',
      description: 'Descripción del Proyecto 3',
      url: 'src/images/web_resto.mp4',
    },
    {
      id: 4,
      title: 'Proyecto 4',
      description: 'Descripción del Proyecto 4',
      url: 'src/images/lista_de_tareas.mp4',
    },
    {
      id: 5,
      title: 'Proyecto 5',
      description: 'Descripción del Proyecto 5',
      url: 'src/images/calculadora_free.mp4',
    },
    {
      id: 6,
      title: 'Proyecto 6',
      description: 'Descripción del Proyecto 6',
      url: 'src/images/boca_urna.mp4',
    }
    ,
    {
      id: 7,
      title: 'Proyecto 7',
      description: 'Descripción del Proyecto ',
      url: 'src/images/plantilla.mp4',
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
