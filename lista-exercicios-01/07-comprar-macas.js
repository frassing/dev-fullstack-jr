// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$0,25 se forem compradas pelo menos doze. 
// Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.

const prompt = require("prompt-sync")()

let qtdMacasCompradas = Number(prompt("Digite a quantidade de maçãs compradas: "))
let precoMaca = 0.30
let valorTotal = 0

if (qtdMacasCompradas >= 12 ) {
	precoMaca = 0.25
}

valorTotal = qtdMacasCompradas * precoMaca

console.log(`O Valor total da compra é de: R$${valorTotal.toFixed(2)} e o valor unitário da maça saiu por: R$${precoMaca}`)
