                                    //* cabeçalho
    var myCarousel = document.getElementById('carouselExampleCaptions')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      ride: 'carousel'
    })


   document.addEventListener('DOMContentLoaded', () => {
      const menuHamburguer = document.getElementById('menu-hamburguer');
      const navList = document.getElementById('nav-list');

      if (menuHamburguer && navList) {
        menuHamburguer.addEventListener('click', () => {
          navList.classList.toggle('active');
          menuHamburguer.classList.toggle('open');
        });
      }
    });
    
