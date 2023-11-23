function sumar() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
    alert("Por favor, ingrese dos números válidos.");
    return;
  }

  let resultado = num1 + num2;
  document.getElementById("resultado").textContent = "Resultado: " + resultado;
}
