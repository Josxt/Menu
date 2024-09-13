const iconoMenu = document.querySelector('#icono-menu');
      menu = document.querySelector('#menu');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    
    const rutaActual = e.target.getAttibute('src');
    if(rutaActual = 'imagen.jpg'){
        e.target.setAttribute('src', 'imagen2.jpg');
    }else{
        e.target.setAttribute('src', 'imagen.jpg');
    }
})