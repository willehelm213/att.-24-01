let tela = document.getElementById("tela");
let entradaAtual = "";

function adicionarNumero(numero) {
    if (entradaAtual === "0" && numero !== ".") {
        entradaAtual = numero;
    } else {
        entradaAtual += numero;
    }
    tela.textContent = entradaAtual;
}

function adicionarOperador(operador) {
    if (entradaAtual !== "" && !isNaN(entradaAtual.slice(-1))) {
        entradaAtual += operador;
        tela.textContent = entradaAtual;
    }
}

function limparEntrada() {
    entradaAtual = "";
    tela.textContent = "0";
}

function limparTudo() {
    entradaAtual = "";
    tela.textContent = "0";
}

function apagarUltimo() {
    entradaAtual = entradaAtual.slice(0, -1);
    tela.textContent = entradaAtual || "0";
}

function calcularResultado() {
    try {
        entradaAtual = eval(entradaAtual).toString();
        tela.textContent = entradaAtual;
    } catch {
        tela.textContent = "Erro";
    }
}
