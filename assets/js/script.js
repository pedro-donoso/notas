function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacion = document.getElementById("operacion").value;
}

let resultado;
if (operacion === "*") {
    resultado = num1 * num2;
} else if (operacion === "+") {
    resultado = num1 + num2;
} else if (operacion === "-") {
    resultado = num1 - num2;
} else if (operacion === "/") {
    resultado = num1 / num2;
} else {
    resultado = "operación inválida";
}
console.log(resultado)
//Mostrar
document.getElementById("resultado").textContent = resultado;