import React from 'react';
import '../styles/Skills.css'

const skillsData = [
  {
    category: 'Desarrollo Web',
    skills: [
      'JavaScript',
      'Algoritmos y Estructuras de Datos',
      'React.js',
      'Angular',
      'Bootstrap',
      'CSS Flexbox',
      'HTML5',      
    ],
  },
  {
    category: 'Herramientas y Tecnologías',
    skills: ['Git', 'GitHub', 'SQL', 'MySQL', 'TypeScript', 'Java'],
  },
  {
    category: 'Habilidades adicionales',
    skills: [
      'Gestión Operativa',
      'Atención al Cliente',
      'Control de Existencias',
      'Trabajo en Equipo',
      'Resolución de Conflictos',
      'Liderazgo',
    ],
  },
];

const Skills = () => {
  return (
    <div className='skillContainer'>
      <h2 className='skillTitle'>Habilidades</h2>
      <div className='cardContainer'>
        {skillsData.map((category, index) => (
          <div className='skillCard' key={index}>
            <h3 className='category'>{category.category}</h3>
            <ul className='skillList'>
              {category.skills.map((skill, idx) => (
                <li className='skillItem' key={idx}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}</div>
    </div>
  );
};

export default Skills;
