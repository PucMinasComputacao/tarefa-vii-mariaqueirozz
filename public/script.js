//Nome do usuário
let nome = prompt("Digite o seu nome:")

//Renda mensal
let renda = Number(prompt("Digite a sua renda mensal:"))

while (isNaN(renda)) {
    renda = Number(prompt("Digite um número válido para renda:"));
}

//Total de despesas
let qtdDespesas = Number(prompt("Quantas despesas você quer informar? (1 a 5)"));

while (isNaN(qtdDespesas)) {
    qtdDespesas = Number(prompt("Digite um número válido:"));
}

//Limitar entre 1 e 5
if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

//Loop de despesas
let totalDespesas = 0;

for (let i = 1; i <= qtdDespesas; i++) {
    let despesa = Number(prompt("Digite o valor da despesa " + i + ":"));

    while (isNaN(despesa)) {
        despesa = Number(prompt("Valor inválido. Digite novamente a despesa " + i + ":"));
    }

    totalDespesas += despesa;
}

// 5. Cálculo
let sobra = renda - totalDespesas;
let mensagem = "";

// 6. Decisão
if (totalDespesas > renda) {
    mensagem = "Atenção: você gastou mais do que ganhou.";
} else {
    if (sobra >= renda * 0.3) {
        mensagem = "Ótimo: boa margem de sobra.";
    } else {
        mensagem = "Ok: dá para melhorar a sobra.";
    }
}

// 7. Resultado final
let resultado =
"Nome: " + nome + "\n" +
"Renda: R$ " + renda.toFixed(2) + "\n" +
"Despesas: R$ " + totalDespesas.toFixed(2) + "\n" +
"Sobra: R$ " + sobra.toFixed(2) + "\n" +
"Situação: " + mensagem;

// Mostrar
alert(resultado);
console.log(resultado);