                                    //* cabeçalho
    var myCarousel = document.getElementById('carouselExampleCaptions')
    var carousel = new bootstrap.Carousel(myCarousel, {
      interval: 2000,
      ride: 'carousel'
    })


  document.addEventListener('DOMContentLoaded', () => {
    // ID do botão
    const menuHamburguer = document.getElementById('menu-hamburguer');
    // ID da lista de navegação
    const navList = document.getElementById('nav-list');

    // Verifica se os elementos foram encontrados antes de adicionar o listener
    if (menuHamburguer && navList) {
        menuHamburguer.addEventListener('click', () => {
            // Esta linha alterna a classe 'active'
            navList.classList.toggle('active');
        });
    } else {
        console.error("Erro: Elementos do menu não encontrados. Verifique os IDs.");
    }
});
    