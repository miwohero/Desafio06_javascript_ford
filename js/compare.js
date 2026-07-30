// Array global que guarda até 2 carros selecionados para comparação
var carArrToCompare = [];

class Car {
    constructor(modelo, preco, alturaCacamba, alturaVeiculo, alturaSolo,
                capacidadeCarga, motor, potencia, volumeCacamba, roda, imagem) {
        this.modelo = modelo;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.imagem = imagem;
    }
}

// Percorre o array e retorna a posição do carro informado. Se não encontrar, retorna -1
function GetCarArrPosition(car) {
    for (var i = 0; i < carArrToCompare.length; i++) {
        if (carArrToCompare[i].modelo === car.modelo) {
            return i;
        }
    }
    return -1;
}

// Adiciona ou remove o carro do array de comparação, de acordo com o estado do checkbox
function SetCarToCompare(checkbox, car) {
    if (checkbox.checked) {
        // Não permite marcar mais de 2 veículos
        if (carArrToCompare.length >= 2) {
            checkbox.checked = false;
            alert('Você já selecionou 2 veículos. Desmarque um deles antes de escolher outro.');
            return;
        }
        carArrToCompare.push(car);
    } else {
        var pos = GetCarArrPosition(car);
        if (pos !== -1) {
            carArrToCompare.splice(pos, 1);
        }
    }
}

// Exibe o pop-up de comparação, validando se 2 veículos foram selecionados
function ShowCompare() {
    if (carArrToCompare.length < 2) {
        alert('Selecione dois veículos para realizar a comparação.');
        return;
    }

    UpdateCompareTable();
    document.getElementById('compare').style.display = 'block';
}

// Oculta o pop-up de comparação
function HideCompare() {
    document.getElementById('compare').style.display = 'none';
}

// Preenche a tabela de comparação com os dados dos dois carros selecionados
function UpdateCompareTable() {
    for (var i = 0; i < carArrToCompare.length; i++) {
        var car = carArrToCompare[i];

        document.getElementById('compare_image_' + i).innerHTML =
            '<img src="' + car.imagem + '" width="120">';
        document.getElementById('compare_modelo_' + i).innerHTML = car.modelo;
        document.getElementById('compare_alturacacamba_' + i).innerHTML = car.alturaCacamba;
        document.getElementById('compare_alturaveiculo_' + i).innerHTML = car.alturaVeiculo;
        document.getElementById('compare_alturasolo_' + i).innerHTML = car.alturaSolo;
        document.getElementById('compare_capacidadecarga_' + i).innerHTML = car.capacidadeCarga;
        document.getElementById('compare_motor_' + i).innerHTML = car.motor;
        document.getElementById('compare_potencia_' + i).innerHTML = car.potencia;
        document.getElementById('compare_volumecacamba_' + i).innerHTML = car.volumeCacamba;
        document.getElementById('compare_roda_' + i).innerHTML = car.roda;
        document.getElementById('compare_preco_' + i).innerHTML =
            'R$ ' + car.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
    }
}
