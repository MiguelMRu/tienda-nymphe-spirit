import { useRef } from 'react';
import emailjs from '@emailjs/browser';


export function Catalogo() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(import.meta.env.VITE_EMAIL_SERVICE, import.meta.env.VITE_EMAIL_TEMPLATE, form.current, {
        publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  //Pendiente validar que el email tenga un formato correcto
  //Pendiente validar que los campos no estén vacíos
  //Borrar los campos del formulario después de enviar
  return (
    <main>
      <h1>Catálogo</h1>
      <p>Descubre los productos que ofrecemos para llevar tus ideas al siguiente nivel.</p>
      <form ref={form} onSubmit={sendEmail}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" />

        <label htmlFor="message">Message</label>
        <textarea name="message" />
        <input type="submit" value="Send" />
      </form>
    </main>
  );
}
