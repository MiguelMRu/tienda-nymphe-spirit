import { useState,useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../styles/Catalogo.css';


export function Catalogo() {

  const [error, setError] = useState('');
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current.name.value || !form.current.email.value || !form.current.message.value) {
      setError('Por favor, completa todos los campos obligatorios.');
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.current.email.value)) {
      setError('Por favor, introduce un correo electrónico válido.');
      return;
    }

    emailjs
      .sendForm(import.meta.env.VITE_EMAIL_SERVICE, import.meta.env.VITE_EMAIL_TEMPLATE, form.current, {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          //Si hay un previo, al enviar se debe borrar
          setError('');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <main>
      <h1>Catálogo</h1>
      <p>Descubre los productos que ofrecemos para llevar tus ideas al siguiente nivel.</p>
      <form ref={form} onSubmit={sendEmail} method='POST' enctype="multipart/form-data"> 

          <input type="text" name="name" placeholder='Nombre*'/>

          <input type="email" name="email" placeholder='Correo electrónico*'/>

          <textarea name="message" placeholder='Mensaje*' />

          <input type="file" name="file" accept='image/*,.pdf,.doc,.docx' />

          {error && <p className="error">{error}</p>}

        <input type="submit" value="Enviar" />

        
      </form>
    </main>
  );
}
