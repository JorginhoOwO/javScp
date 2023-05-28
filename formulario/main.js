function validarFormulario() {
    var numeroA = parseFloat(document.getElementById('campoA').value);
    var numeroB = parseFloat(document.getElementById('campoB').value);

    if (numeroB > numeroA) {
        document.getElementById('mensagem').innerHTML = 'Formulário válido!';
    } else {
        document.getElementById('mensagem').innerHTML = 'Formulário inválido!';
    }
    }