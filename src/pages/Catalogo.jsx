import { useRef } from 'react';
import emailjs from '@emailjs/browser';
export function Catalogo() {
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_rc2e8n8', 'template_ov96b6d', form.current, {
        publicKey: '0I1EqHAzq6oiHJHkb',
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
  return (
    <main>
      <h1>Catálogo</h1>
      <p>Descubre los productos que ofrecemos para llevar tus ideas al siguiente nivel.</p>
      <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />

      <label>Email</label>
      <input type="email" name="email" />

      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </main>
  );
}
