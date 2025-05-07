//  Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.

const prompt = require("prompt-sync")()

let num1 = Number(prompt("Insira um número: "))
let num2 = Number(prompt("Insira outro número (diferente do primeiro): "))

if (num1 > num2) {
	console.log(`${num2}, ${num1}`)
} else if (num2 > num1) {
	console.log(`${num1}, ${num2}`)
} else if (num1 == num2) {
	console.log("Números iguais! Tente novamente.")
} else {
	console.log("Algo deu errado. Verifique os valores inseridos.")
}