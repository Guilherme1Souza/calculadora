let operador = '';
let valorAnterior = '';
let valorAtual = '';

function adicionar(valor) {
    const display = document.getElementById('display');
    
    if (['+', '-', '*', '/'].includes(valor)) {
        operador = valor;
        valorAnterior = valorAtual;
        valorAtual = '';
    } else {
        valorAtual += valor;  
    }

    display.value = valorAtual || valorAnterior + operador;
}

function limpar() {
    operador = '';
    valorAnterior = '';
    valorAtual = '';
    document.getElementById('display').value = '';
}

function apagar() {
    if (valorAtual !== '') {
        valorAtual = valorAtual.slice(0, -1);
        document.getElementById('display').value = valorAtual;
    }
}

function calcular() {
    if (!valorAnterior || !operador || !valorAtual) return;

    const num1 = parseFloat(valorAnterior);
    const num2 = parseFloat(valorAtual);
    let resultado = 0;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num2 !== 0 ? num1 / num2 : 'Erro';
            break;
    }

    document.getElementById('display').value = resultado;
    valorAnterior = resultado.toString();
    valorAtual = '';
    operador = '';
}
