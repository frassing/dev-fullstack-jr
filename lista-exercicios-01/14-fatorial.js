//  Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
// Exemplo = 5! = 5*4*3*2*1=120

const prompt = require("prompt-sync")()

let numeroInput = Number(prompt("Digite o número que deseja calcular o fatorial: "))

let num = numeroInput
let fatorial

for (let i = 0; num > 0; i++){
	fatorial = i == 0 ? num : fatorial * num
	num--
}

console.log(`O fatorial de ${numeroInput} é: ${fatorial}`)