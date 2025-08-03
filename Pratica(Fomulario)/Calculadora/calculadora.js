function calcularIMC(){

    //entra
    let peso = document.getElementById("peso").value;
    let altura = document.getElementById("altura").value;
    //processamento
    let alturaFinal = altura / 100;
    let imc = peso / (alturaFinal * alturaFinal);
    
    let imcFinal;

    if (imc < 18) {
        imcFinal = "Magreza";
    } else if (imc >= 18.5 && imc < 25) {
        imcFinal = "Normal";
    } else if (imc >= 25 && imc < 30) {
        imcFinal = "Sobrepeso";
    } else if (imc >= 30 && imc < 35) {
        imcFinal = "Obesidade Grau I";
    } else if (imc >= 35 && imc < 40) {
        imcFinal = "Obesidade Grau II";
    } else if (imc >= 40) {
        imcFinal = "Obesidade Grau III";
    }

    //saida
    document.getElementById("resultado").textContent = "Seu IMC é:" + imc;
    document.getElementById("resultadoImc").textContent = imcFinal;
}   
   