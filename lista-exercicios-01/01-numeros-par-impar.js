// Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if.

const prompt = require("prompt-sync")()

// entrada do usuário
let numeroInput = Number(prompt("Insira um número: "))

// Solução #1 - utilizando If
if (isNaN(numeroInput)) {
	console.log('Verifique a entrada, algo deu errado.')
} else if ((numeroInput % 2) == 0) {
	console.log(`${numeroInput} é PAR`)
} else {
	console.log(`${numeroInput} é ÍMPAR`)
}
