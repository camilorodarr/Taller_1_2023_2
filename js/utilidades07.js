function calcularMonto() {
    var capital = parseFloat(document.getElementById('capital').value);
    var tasa = parseFloat(document.getElementById('tasa').value);
    var periodo = parseInt(document.getElementById('periodo').value);

    if (isNaN(capital) || isNaN(tasa) || isNaN(periodo) || capital < 0 || tasa < 0 || periodo < 0) {
        alert('Ingrese valores válidos y positivos.');
        return;
    }

    var tasaDecimal = tasa / 100;
    var montoFinal = capital * Math.pow((1 + tasaDecimal), periodo);

    document.getElementById('resultado').innerText = `El monto final es de $${montoFinal.toFixed(2)}`;
}
