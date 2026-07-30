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

    // Validação simples: garante que a opção de contato foi realmente escolhida
    if (dadosContato.contato === 'COMO DESEJA SER CONTATADO') {
        alert('Por favor, selecione como deseja ser contatado.');
        return false;
    }

    // Ponto de integração: aqui os dados ficam prontos para serem enviados
    // ao sistema da companhia (ex.: via fetch/AJAX para uma API).
    console.log('Dados capturados do formulário de contato:', 'dadosContato');

    alert('Obrigado, ' + dadosContato.nome + '! Seus dados foram enviados com sucesso.');

    form.reset();
    return false;
}
