// =============================================================
//  Salário - Cálculo de Aumento salarial
//  Autora: Maria Júllia
//  Objetivo: Calcular o aumento com base nos inputs do usuário.
// =============================================================

function calcularAumento() {

    const inputSalarioAtual = document.getElementById("salarioAtual");
    const inputPercentualAumento = document.getElementById("percentualAumento");
    const campoResultado = document.getElementById("resultadoAumento");

    const salarioAtual = parseFloat(inputSalarioAtual.value);
    const percentualAumento = parseFloat(inputPercentualAumento.value);

    if (isNaN(salarioAtual) || salarioAtual <= 0) {
        alert("Por favor, insira um salário atual válido.");
        return;
    }

    if (isNaN(percentualAumento) || percentualAumento < 0) {
        alert("Por favor, insira um percentual de aumento válido.");
        return;
    }

    const valorAumento = salarioAtual * (percentualAumento / 100);
    const novoSalario = salarioAtual + valorAumento;

    const salarioFormatado = novoSalario.toLocaleString('pt-BR', { 
        style: 'currency', 
        currency: 'BRL' 
    });

    campoResultado.value = `Novo salário: ${salarioFormatado}`;
}
