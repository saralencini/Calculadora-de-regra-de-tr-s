//Declaração das variaveis do histórico.
var historicoantigo01 = "", historicoantigo02 = "", historicoantigo03 = "", historicoantigo04 = "", historicoantigo05 = "", resultado = "";

function calcularregrade3() {
    var primeirovalor, segundovalor, terceirovalor;

    //Recebimento dos valores.
    primeirovalor = document.getElementById('1Valor').value
    segundovalor = document.getElementById('2Valor').value
    terceirovalor = document.getElementById('3Valor').value

   //Atribuição do histórico.
   historicoantigo05 = historicoantigo04
   historicoantigo04 = historicoantigo03
   historicoantigo03 = historicoantigo02
   historicoantigo02 = historicoantigo01
   historicoantigo01 = resultado

   //Calculo da regra de três.
  resultado = (segundovalor * terceirovalor) / primeirovalor

  // Exibição dos valores no h1 e impunt resultado.
  document.getElementById('resultadoo').value = resultado;
  document.getElementById("expressaoatual").textContent = resultado;
  document.getElementById("historico01").textContent = historicoantigo01;
  document.getElementById("historico02").textContent = historicoantigo02;
  document.getElementById("historico03").textContent = historicoantigo03;
  document.getElementById("historico04").textContent = historicoantigo04;
  document.getElementById("historico05").textContent = historicoantigo05;
}
