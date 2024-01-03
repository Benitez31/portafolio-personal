import React from "react";
import '../styles/Home.css';

const Home = () => {
    return (
        <>
            <img src="/san-petesburgo.jpg" />
            <div className="home-container">
                <h1 className="home-title">HUGO BENITEZ</h1>
                <h2 className="home-subtitle">Desarrollador Web</h2>
                <p className="home-text">Soy una persona autodidacta, lectora, me gusta aprender,
                    mi experiencia laboral esencialmente ha sido en el rubro logistico,
                    actualmente formandome como desarrollador web,
                    me apasiona la economia y las finanzas, el mundo del dinero.
                    Siempre en busqueda de personas y
                    grupos que sean mas capaces en donde pueda apalancar mis conocimientos y ser mejor cada dia..
                </p>
            </div>
        </>

    )
}

export default Home;