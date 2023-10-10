function calcularIMC() {
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);

    if ((peso) || (altura) || peso <= 0 || altura <= 0) {
        alert('Por favor, ingrese valores válidos para peso y altura.');
        return;
    }

    var imc = peso / (altura * altura);

    var categoria = "";
    if (imc < 18.5) {
        categoria = 'peso bajo';
    } else if (imc < 25) {
        categoria = 'peso normal';
    } else if (imc < 30) {
        categoria = 'sobrepeso';
    } else {
        categoria = 'obesidad';
    }

    document.getElementById('resultado').innerHTML = `Tu IMC es ${imc.toFixed(2)}, estás en el rango de ${categoria}.`;
}