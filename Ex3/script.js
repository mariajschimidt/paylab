function calcularTransporte() {
    const pessoas = parseInt(document.getElementById("quantidadePessoas").value);
    const dias = parseInt(document.getElementById("quantidadeDias").value);
    const resultado = document.getElementById("resultado");

    if (isNaN(pessoas) || pessoas <= 0 || isNaN(dias) || dias <= 0) {
        alert("Por favor, insira valores válidos para pessoas e dias.");
        return;
    }

    let valorPorPessoa = 0;

    if (pessoas <= 49) {
        valorPorPessoa = 4.50;
    } else if (pessoas <= 99) {
        valorPorPessoa = 4.10;
    } else if (pessoas <= 149) {
        valorPorPessoa = 3.80;
    } else {
        valorPorPessoa = 3.60;
    }

    const valorTotal = pessoas * valorPorPessoa * dias;

    // Exibindo o resultado formatado em Moeda Real
    const displayResultado = document.getElementById('resultado')
            displayResultado.innerText = valorTotal.toLocaleString('pt-br',{
                style:"currency",
                currency: "BRL"
            })
        }