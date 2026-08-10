// Captura os dados do formulário de contato para futura integração com o sistema da empresa
function Post(event, form) {
    // Impede o recarregamento da página ao enviar o formulário
    if (window.event) {
        window.event.preventDefault();
    }

    var formData = new FormData(form);
    var dadosContato = {};

    formData.forEach(function (valor, campo) {
        dadosContato[campo] = valor;
    });

    // Validação simples: garante que o tipo de contato foi realmente escolhido
    if (dadosContato.tipoContato === 'TIPO DE CONTATO') {
        alert('Por favor, selecione o tipo de contato.');
        return false;
    }

    // Ponto de integração: aqui os dados ficam prontos para serem enviados
    // ao sistema da companhia (ex.: via fetch/AJAX para uma API).
    console.log('Dados capturados do formulário de contato:', dadosContato);

    alert('Obrigado, ' + dadosContato.nome + '! Seus dados foram enviados com sucesso.');

    form.reset();
    return false;
}
