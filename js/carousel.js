// Array global que armazena as instâncias de Carousel (usado no index.html)
var carouselArr = [];

class Carousel {

    // Atributo estático: controla qual imagem está sendo exibida no momento
    static current = 0;

    // Atributo estático: guarda o intervalo de tempo entre as trocas de imagem (ms)
    static intervalTime = 2000;

    // Atributo estático: referência para o setInterval, permite pausar/reiniciar o carrossel
    static intervalId = null;

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    // Inicializa o carrossel: recebe o array de imagens e começa a exibição
    static Start(arr) {
        if (!arr || arr.length === 0) {
            return;
        }

        Carousel.current = 0;

        // Exibe a primeira imagem imediatamente, sem esperar o primeiro intervalo
        Carousel.Next(arr);

        // Reinicia o intervalo, caso Start seja chamado mais de uma vez
        if (Carousel.intervalId) {
            clearInterval(Carousel.intervalId);
        }

        Carousel.intervalId = setInterval(function () {
            Carousel.Next(arr);
        }, Carousel.intervalTime);
    }

    // Exibe o item atual na tela e avança o contador para o próximo
    static Next(arr) {
        var item = arr[Carousel.current];

        var carouselDiv = document.getElementById('carousel');
        var titleDiv = document.getElementById('carousel-title');

        // Altera o estilo via JavaScript para exibir a imagem de fundo
        carouselDiv.style.backgroundImage = "url('img/" + item.image + "')";
        carouselDiv.style.backgroundSize = 'cover';
        carouselDiv.style.backgroundPosition = 'center';
        carouselDiv.style.backgroundRepeat = 'no-repeat';

        // Injeta o texto e o link dentro da div de título
        titleDiv.innerHTML = '<a href="' + item.url + '">' + item.title + '</a>';

        // Incrementa o contador de forma circular (volta ao início ao chegar no fim)
        Carousel.current = (Carousel.current + 1) % arr.length;
    }
}
