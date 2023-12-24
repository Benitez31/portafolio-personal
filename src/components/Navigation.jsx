import React from "react";
import '../styles/Navigation.css';

const Navigation = ({ handleItemClick }) => {
    const navItems = [
        { id: 'home', label: 'Home' },
        { id: 'projects', label: 'Proyectos' },
        { id: 'skills', label: 'Habilidades' },
        { id: 'education', label: 'Educacion' },        
        { id: 'contact', label: 'Contacto' }
    ];
    const handleClick = (itemId) => {
        handleItemClick(itemId);
    };
    return (
        <nav className="navBar">
            <ul className= 'list'>
                {navItems.map(item => (
                    <li className="navItem" key={item.id}>
                        <a href={`#${item.id}`} onClick={() => handleClick(item.id)}>{item.label}</a>
                    </li>
                ))}
            </ul>
        </nav>
    )
};

export default Navigation;