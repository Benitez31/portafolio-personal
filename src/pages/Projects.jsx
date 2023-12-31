import React from "react";
import Carousel from '../components/Carousel'
import '../styles/Projects.css'

const Projects = () => {
  const imagesData = [
    {
      id: 1,
      title: 'Proyecto 1',
      description: 'Descripción del Proyecto 1',
      url: 'https://www.xnxx.com/search-video/eAE9kd1uE0EMhV8FzbVJ_e-ZfQIQVVW15QJRtNr8NN0q2a3aFCIh3h0vIK5mdCx_59j-Wb6UrnwoUD7le57O5_x-LB2jmWIQlMvSfbVwUnECaRENOcAMm6gFeERgxUVpzB4GVIOJVUCR1agSRLVgawSqhlqbwH-8SNVK0kDNslkMgoRCW0BwVNVUnIXZJNK9NkQWMKVaYyEbIRotSgpGBpbWIdHAWILqAnR05sysTTwBmVlzBue2eAW25Airu-liqugaCt68ac6THDPKZFkiJ6-Y41AuZOkKpfCMal4rpz0QStZUv0H5nPu8v_g-bnfz-019Oj6Q3F9s33aHcdr3j8PLcZ7GzfDab-e39WHXrw_zj6d53Q_TeBxOu22_Hx_6zXx8Hg_DaZynPMt16RqUq9IhlLukv55ehnH_eFpKN3_U21T_8t7942XtLlUKzLnEVfO6ySmMtKKIlcdKuPz6DbplfIQ=/dabf976f6542ec4e254d2ecb8d90a288',
    },
    {
      id: 2,
      title: 'Proyecto 2',
      description: 'Descripción del Proyecto 2',
      url: 'https://www.xnxx.com/search/anal?id=32600217',
    },
    {
      id: 3,
      title: 'Proyecto 3',
      description: 'Descripción del Proyecto 3',
      url: 'https://www.xnxx.com/search/sexy?id=55234697',
    },
    {
      id: 4,
      title: 'Proyecto 4',
      description: 'Descripción del Proyecto 4',
      url: 'https://www.xnxx.com/search/gapes?id=69679563',
    },
    {
      id: 5,
      title: 'Proyecto 5',
      description: 'Descripción del Proyecto 5',
      url: 'https://www.xnxx.com/search/big+black+cock?top&id=78869387',
    },
    {
      id: 6,
      title: 'Proyecto 6',
      description: 'Descripción del Proyecto 6',
      url: 'https://www.xnxx.com/search/que?top&id=78801093',
    }
    ,
    {
      id: 7,
      title: 'Proyecto 7',
      description: 'Descripción del Proyecto ',
      url: 'https://www.xnxx.com/search/oral?top&id=60336237',
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
