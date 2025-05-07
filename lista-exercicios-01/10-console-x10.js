//  Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const prompt = require("prompt-sync")()

let numero = parseInt(prompt("Insira um número inteiro: "))

for (let i = 1; i <= 10; i++) {
	console.log(`${i} - ${numero}`)
}