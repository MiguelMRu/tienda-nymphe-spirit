  // Variantes para elementos impares (aparecen desde la izquierda)
 export const leftItemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        //el tipo spring emula la animación de un resorte, hace que sea mas natural la animacion
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    },
    closed: {
      x: -100,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  // Variantes para elementos pares (aparecen desde la derecha)
  export const rightItemVariants = {
    open: {
      x: 0,
      opacity: 1,
      transition: {
        
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    },
    closed: {
      x: 100,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };


// Enlaces del menu, si se queire añadir una nueva pagina, se debe añadir aquí
  export const menuItems = [
    { to: "/#home", text: "Inicio" },
    { to: "/#about", text: "Sobre mi" },
    { to: "/portfolio", text: "Portafolio" },
    { to: "/catalogo", text: "Catálogo" },
    { to: "/shop", text: "Tienda" },
  ];