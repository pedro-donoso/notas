// Aquí se muestran las variables en el documento HTML
var htmlnota1 = document.getElementById("htmlnota1");
var htmlnota2 = document.getElementById("htmlnota2");
var htmlnota3 = document.getElementById("htmlnota3");
var htmlpromedio = document.getElementById("htmlpromedio");

// Aquí estamos escribiendo sobre el documento HTML
var nota1html = parseFloat(prompt("Ingrese la nota 1 de html"));
var nota2html = parseFloat(prompt("Ingrese la nota 2 de html"));
var nota3html = parseFloat(prompt("Ingrese la nota 3 de html"));

// asignando las variables al inner
htmlnota1.innerHTML = nota1html;
htmlnota2.innerHTML = nota2html;
htmlnota3.innerHTML = nota3html;

htmlpromedio.innerHTML = ((nota1html + nota2html + nota3html) / 3).toFixed(1);

// CSS
var cssnota1 = document.getElementById("cssnota1");
var cssnota2 = document.getElementById("cssnota2");
var cssnota3 = document.getElementById("cssnota3");
var csspromedio = document.getElementById("csspromedio");

var nota1css = parseFloat(prompt("Ingrese la nota 1 de css"));
var nota2css = parseFloat(prompt("Ingrese la nota 2 de css"));
var nota3css = parseFloat(prompt("Ingrese la nota 3 de css"));

// asignando las variables al inner
cssnota1.innerHTML = nota1css;
cssnota2.innerHTML = nota2css;
cssnota3.innerHTML = nota3css;

csspromedio.innerHTML = ((nota1css + nota2css + nota3css) / 3).toFixed(1);

// JS
var jsnota1 = document.getElementById("jsnota1");
var jsnota2 = document.getElementById("jsnota2");
var jsnota3 = document.getElementById("jsnota3");
var jspromedio = document.getElementById("jspromedio");

var nota1js = parseFloat(prompt("Ingrese la nota 1 de js"));
var nota2js = parseFloat(prompt("Ingrese la nota 2 de js"));
var nota3js = parseFloat(prompt("Ingrese la nota 3 de js"));

// asignando las variables al inner
jsnota1.innerHTML = nota1js;
jsnota2.innerHTML = nota2js;
jsnota3.innerHTML = nota3js;

jspromedio.innerHTML = ((nota1js + nota2js + nota3js) / 3).toFixed(1);