// Swiper para o Slider de Imagens
var mySwiper = new Swiper('.destaque', {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 5000,
    },
});

// Função para mostrar/ocultar categorias
function toggleCategorias() {
    var categorias = document.querySelector('.categorias');
    categorias.classList.toggle('visivel');
}

// Adicionando um ouvinte de evento para o botão
document.getElementById('toggleCategorias').addEventListener('click', toggleCategorias);
