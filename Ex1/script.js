function calcular() {
    const salarioBruto = Number(document.getElementById('salario').value);
    const horasNormais = Number(document.getElementById('valorHoras').value);
    const horasFinaisDeSemana = Number(document.getElementById('valorHorasFds').value);

    if (salarioBruto <= 0 || isNaN(salarioBruto)) {
        alert('Por favor, insira um salário válido!');
        return;
    }

    const valorHoraComum = salarioBruto / 200;
    const valorHoraExtra = valorHoraComum * 1.5;
    const valorHoraExtraFinalDeSemana = valorHoraComum * 2;

    const totalExtras = (valorHoraExtra * horasNormais) + (valorHoraExtraFinalDeSemana * horasFinaisDeSemana);
    const totalAReceber = salarioBruto + totalExtras;

    const displayResultado = document.getElementById('resultado');
    displayResultado.value = totalAReceber.toLocaleString('pt-br', {
        style: "currency",
        currency: "BRL"
    });
}