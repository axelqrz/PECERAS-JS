//alert("Bienvenido!!");

function rectangular(){
  let num1;
  let num2;
  let num3;

  let resultado;

  num1 = parseInt(document.getElementById("txtNum1").value);
  num2 = parseInt(document.getElementById("txtNum2").value);
  num3 = parseInt(document.getElementById("txtNum3").value);

  resultado = num1 * num2 * num3;

  return resultado;
  //document.getElementById("txtResultado").innerHTML = resultado;

}

function cuadrada(){

  let num1;
  let num2;
  let num3;

  let resultado;

  num1 = parseInt(document.getElementById("txtNum1").value);
  num2 = parseInt(document.getElementById("txtNum2").value);
  num3 = parseInt(document.getElementById("txtNum3").value);

  resultado = num1 * num2 * num3;

  return resultado;

}

function cilindrico(){

  let num3;

  let resultado;

  num3 = parseInt(document.getElementById("txtNum3").value);
  num4 = parseInt(document.getElementById("txtNum4").value);

  resultado = num3 * 3.1415 * num4 * num4;

  return resultado;
}

function semiCircular(){

  let num3;

  let resultado;

  num3 = parseInt(document.getElementById("txtNum3").value);
  num4 = parseInt(document.getElementById("txtNum4").value);

  resultado = num3 * 3.1415 * num4 * num4 / 2;

  return resultado;
}

function panoramico(){

  let num3;

  let resultado;

  num3 = parseInt(document.getElementById("txtNum3").value);
  num4 = parseInt(document.getElementById("txtNum4").value);

  resultado = num3 * 3.1415 * num4 * num4 / 4 ;

  return resultado;
}

function panoramicoR(){

  let num1;

  let resultado;

  num1 = parseInt(document.getElementById("txtNum1").value);
  num2 = parseInt(document.getElementById("txtNum2").value);
  num3 = parseInt(document.getElementById("txtNum3").value);
  num4 = parseInt(document.getElementById("txtNum4").value);

  resultado1 = num1 / 2;

  resultado2 = num1 * num2 * num3;

  resultado3 = resultado1 * 3.1415 * num4 * num4  /2;

  resultado = resultado2 + resultado3;

  return resultado;
}

function triangular(){

  let num1;
  let num2;
  let num3;

  let resultado;

  num1 = parseInt(document.getElementById("txtNum1").value);
  num2 = parseInt(document.getElementById("txtNum2").value);
  num3 = parseInt(document.getElementById("txtNum3").value);

  resultado = num1 * num2 *num3 / 2;

  return resultado;
}

function esferico(){

  let num4;

  let resultado;

  num4 = parseInt(document.getElementById("txtNum4").value);


  resultado = 67 / 16  * num4 * num4 * num4;

  return resultado;
}

function calcular(){
  let rect;
  let cuadra;

  let resultadoTxt;

  rect = rectangular();
  cuadra = cuadrada();
  ci = cilindrico();
  se = semiCircular();
  pana = panoramico();
  r = panoramicoR();
  tri = triangular();
  es = esferico();
  //div = dividir();
  //mult = multiplicar();

  resultadoTxt = "La percera es Rectangular: "+ rect +"<br>La pecera cuadra: " +cuadra+ "<br>La pecera ciclindrica: "+ci+
  "<br>La pecera semiCircular: "+se+"<br>La pecera Panoramico: "+pana+"<br>La pecera Panoramico Rectangular: "+r+
  "<br>La pecera triangular: "+tri+"<br>La pecera esferica: "+es;
  document.getElementById("txtResultado").innerHTML = resultadoTxt;
}
