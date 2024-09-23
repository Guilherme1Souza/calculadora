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