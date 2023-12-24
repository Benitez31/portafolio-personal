import React, { useState } from 'react';
import '../styles/Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch('https://formspree.io/f/mgegwdpw', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Formulario enviado correctamente');
        console.log('Formulario enviado correctamente');
        // Aquí puedes hacer algo después de enviar el formulario, como mostrar un mensaje de éxito
      } else {
        alert('Hubo un error al enviar el formulario');
        console.error('Hubo un error al enviar el formulario');
        // Puedes manejar el error de alguna manera, como mostrar un mensaje al usuario
      }
      
      // Restablecer el formulario después de enviarlo
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Hubo un error al enviar el formulario:', error);
      // Puedes manejar errores de conexión, etc., aquí
    }
  };

  return (
    <div className='formContainer'>
      <h2>Contacto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Correo Electrónico:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="subject">Asunto:</label>
        <input
          type="text"
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          required
        />

        <label htmlFor="message">Mensaje:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;
