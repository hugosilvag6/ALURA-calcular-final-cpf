var inputCpf = document.querySelector("#novedigitos");
var botao = document.querySelector("#botao-calcular");
var inputResultado = document.querySelector("#resultado");
botao.addEventListener("click", botaoHandler);

function botaoHandler(event) {
    event.preventDefault();
    var cpf = inputCpf.value;
    if (cpf.length != 9){
        alert ('O número deve ter 9 dígitos')
    } else {
        inputResultado.value = cpfCompleto(cpf);
    }
}

function primeiro(cpf) {
    var contador = 10;
    var soma = 0;
    for (let i = 0; i < cpf.length; i++) {
        soma += cpf[i] * contador;
        contador--;
    }
    if (soma % 11 == 0 || soma % 11 == 1) {
        var primeiro = 0;
    } else {
        var primeiro = 11 - (soma % 11);
    }
    return primeiro;
}
function segundo(cpf) {
    var contador = 11;
    var soma = 0;
    for (let i = 0; i < cpf.length; i++) {
        soma += cpf[i] * contador;
        contador--;
    }
    soma += primeiro(cpf) * 2;
    if (soma % 11 == 0 || soma % 11 == 1) {
        var segundo = 0;
    } else {
        var segundo = 11 - (soma % 11);
    }
    return segundo;
}
function cpfCompleto(cpf) {
    let primeiroD = primeiro(cpf);
    let segundoD = segundo(cpf);
    return `${primeiroD}${segundoD}`;
}