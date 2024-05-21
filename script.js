alert("Churrasco");

let adultosComAlcool = parseFloat(prompt("Adultos que consomem bebidas alcoólicas"));
let adultosSemAlcool = parseFloat(prompt("Adultos que não consomem bebidas alcoólicas"));
let criancas = parseFloat(prompt("Crianças"));

let adultos = adultosComAlcool + adultosSemAlcool;
let pessoas = adultos + criancas;

let carne = 0.4 * adultos + 0.2 * criancas;
alert("Carne: " + carne.toFixed(1));

let acompanhamentos = 0.2 * pessoas;
alert("Acompanhamentos: " + acompanhamentos.toFixed(1));

let cerveja = 2 * adultosComAlcool;
alert("Cerveja: " + cerveja.toFixed(1));

let refrigerante = 0.5 * (adultosSemAlcool + criancas);
alert("Refrigerante: " + refrigerante.toFixed(1));

let agua = 0.4 * pessoas;
alert("Água: " + agua.toFixed(1));
