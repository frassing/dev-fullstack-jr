//  Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
const prompt = require("prompt-sync")()

let idadeInput = Number(prompt("Insira uma idade: "))

// crianca até 12 anos incompletos
// adolescente 12 até 18 anos incompletos
// adulto <= 59
// idoso a partir de 60

if ((idadeInput >= 0) && (idadeInput < 12)) {
	console.log("Considerado criança.")
} else if ((idadeInput >= 12) && (idadeInput < 18)) {
	console.log("Considerado adolescente.")
} else if ((idadeInput >= 18) && (idadeInput < 60)) {
	console.log("Considerado adulto.")
} else if (idadeInput >= 60) {
	console.log("Considerado idoso.")
} else {
	console.log("Entrada inválida. Tente novamente.")
}