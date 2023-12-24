import React from 'react';
import '../styles/Education.css';

const Education = () => {
  const educationData = [
    {
      institution: 'freeCodeCamp',
      degree: 'Front End Development Libraries',
      date: 'Expedición: oct. 2023',
      description: 'Aptitudes: React.js · Bootstrap · Lenguaje SASS · jQuery',
      'credential': 'https://freecodecamp.org/certification/fcc9a6ff0aa-4cbc-4c3b-ac11-fe9bcd1d0ea4/front-end-development-libraries'
    },
    {
      institution: 'freeCodeCamp',
      degree: 'JavaScript Algorithms and Data Structures',
      date: 'Expedición: oct. 2023',
      description: 'Código de depuración · Estructuras de datos · Programación orientada a objetos (POO) · Algoritmos',
      credential: 'https://freecodecamp.org/certification/fcc9a6ff0aa-4cbc-4c3b-ac11-fe9bcd1d0ea4/javascript-algorithms-and-data-structures'
    },
    {
      institution: 'freeCodeCamp',
      degree: 'Responsive Web Design',
      date: 'Expedición: jun. 2023',
      description: 'Formacion especializada en diseño web responsivo',
      credential: 'https://freecodecamp.org/espanol/certification/fcc9a6ff0aa-4cbc-4c3b-ac11-fe9bcd1d0ea4/responsive-web-design'
    },
    {
      institution: 'MindHub LA',
      degree: 'Bootcamp Desarrollador Web Front End',
      date: 'Expedición: abr. 2023',
      credential: 'https://www.credly.com/badges/cd262b9a-9883-44be-9fd5-e03418c7a5af/linked_in_profile'
    },
    {
      institution: 'Inverarg',
      degree: 'Analisis tecnico de activos financieros',
      date: 'Expedición: may. 2020',
      credential: 'https://ude.my/UC-bc3343a0-03dc-4eb7-8efd-64e9fef09f02',
    },
    {
      institution: 'Fundamentos de la logística: Comprender la logística',
      date: 'Expedición: oct. 2023',
      description: 'Administración logística',
      credential: 'https://www.linkedin.com/learning/certificates/d007b0345be73dc1379f4213b0e46f9fc044af26b668d2043c1e85bd110ad84c?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0aKNEOw2Q9mN0MrmrP047A%3D%3D',
    },
    {
      institution: 'Fundamentos de la logística: Gestionar la logística',
      date: 'Expedición: oct. 2023',
      description: 'Administración logística',
      credential: 'https://www.linkedin.com/learning/certificates/ff0600a5a7b4c0ecca6e05b9b4ccd6b7c2f6ce71722604af39e6e7170f2d5608?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B0aKNEOw2Q9mN0MrmrP047A%3D%3D',
    },
    {
      institution: 'Argentina Programa',
      degree: 'Full Stack Developer jr',
      date: 'jul. 2022 - ene. 2023',
      description: 'HTML5 · CSS · Bibliotecas de JavaScript · Flexbox · Bootstrap · Angular · Base de datos SQL · MySQL ·  TypeScript · Git · Scrum · jQuery · DevOps · Diseño responsivo ·  GitHub · Programación orientada a objetos · Java',
    },
    {
      institution: 'Universidad Nacional del Oeste',
      degree: 'Licenciatura, Administración y gestión de empresas',
      date: 'mar. 2016 - 2017',
      description: '9 materias aprobadas ( sistemas contables, contabilidad, marketing, ciencias de la adm., economia, etc)',
    },
    {
      institution: 'Capacitarte UBA',
      degree: 'Técnico en desarrollos Logisticos, Logistica Integral',
      date: '2015 - 2015',
      description: 'Conocimientos de procesos Logísticos, armado de redes de Supply Chain y el manejo eficiente de los inventarios.',
    },
    {
      institution: 'Instituto Cetia',
      degree: 'Técnico, armado y reparación de Pc; Informática',
      date: '2010 - 2011',
    },
    {
      institution: 'Instituto Bernardino Rivadavia',
      degree: 'Perito Mercantil con Orientacion en Computacion, Comercial',
      date: '1990 - 1996',
    },
  ];


  return (
    <div className='educationData'>
      {educationData.map((education, index) => (
        <div className='educationCard' key={index}>
          {education.institution && (<h3 className='card-title'>{education.institution}</h3>)}
          {education.degree && (<h4 className='card-subtitle'>{education.degree}</h4>)}          
          {education.description && (<p className='edu-text'>{education.description}</p>)}
          {education.date && (<p className='date'>{education.date}</p>)}
          {education.credential && (<button className='button'><a href={education.credential} target='blank'>Mostrar credencial</a></button>)}
        </div>
      ))}
    </div>
  );
};

export default Education;
