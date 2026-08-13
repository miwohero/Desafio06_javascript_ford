// Array global que armazena as instâncias de Carousel (usado no index.html)
var carouselArr = [];

class Carousel {

    // Índice da imagem que está sendo exibida no momento
    static current = 0;

    // Intervalo de tempo entre as trocas automáticas de imagem (ms)
    static intervalTime = 2000;

    // Referência para o setInterval, permitindo pausar/reiniciar o carrossel
    static intervalId = null;

    constructor(image, title, url) {
        this.image = image;
        this.title = title;
        this.url = url;
    }

    // Inicializa o carrossel e configura os controles de navegação
    static Start(arr) {
        if (!arr || arr.length === 0) {
            return;
        }

        Carousel.current = 0;
        Carousel.Show(arr);
        Carousel.BindControls(arr);
        Carousel.RestartInterval(arr);
    }

    // Exibe a imagem correspondente ao índice atual
    static Show(arr) {
        var item = arr[Carousel.current];
        var carouselDiv = document.getElementById('carousel');
        var titleDiv = document.getElementById('carousel-title');

        carouselDiv.innerHTML = `<img src="img/${item.image}" alt="${item.title}">`;

        // Torna a imagem clicável, redirecionando para a URL do item
        carouselDiv.style.cursor = 'pointer';
        carouselDiv.onclick = function () {
            window.location.href = item.url;
        };

        // Injeta o texto e o link dentro da div de título
        titleDiv.innerHTML = '<a href="' + item.url + '">' + item.title + '</a>';
    }

    // Avança uma imagem de forma circular
    static Next(arr) {
        Carousel.current = (Carousel.current + 1) % arr.length;
        Carousel.Show(arr);
    }

    // Volta uma imagem de forma circular
    static Previous(arr) {
        Carousel.current = (Carousel.current - 1 + arr.length) % arr.length;
        Carousel.Show(arr);
    }

    // Configura os botões da página inicial
    static BindControls(arr) {
        var previousButton = document.getElementById('carousel-prev');
        var nextButton = document.getElementById('carousel-next');

        previousButton.onclick = function () {
            Carousel.Previous(arr);
            Carousel.RestartInterval(arr);
        };

        nextButton.onclick = function () {
            Carousel.Next(arr);
            Carousel.RestartInterval(arr);
        };
    }

    // Reinicia o temporizador após uma troca manual ou nova inicialização
    static RestartInterval(arr) {
        if (Carousel.intervalId) {
            clearInterval(Carousel.intervalId);
        }

        Carousel.intervalId = setInterval(function () {
            Carousel.Next(arr);
        }, Carousel.intervalTime);
    }
}
