//  Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
const prompt = require("prompt-sync")()

let altura = Number(prompt("Digite a altura: "))
let peso = Number(prompt("Digite o peso: "))

altura = (altura / 100) > 1 ? altura/100 : altura

let imc = peso / (altura**2)

if (imc < 18.5) {
	console.log(`Baixo peso - ${imc.toFixed(2)}`)
} else if ((imc >= 18.5) && (imc < 25)) {
	console.log(`Normal - ${imc.toFixed(2)}`)
} else if ((imc >= 25) && (imc < 30)) {
	console.log(`Sobrepeso - ${imc.toFixed(2)}`)
} else if ((imc >= 30) && (imc < 40)) {
	console.log(`Obesidade - ${imc.toFixed(2)}`)
} else if ((imc >= 40)) {
	console.log(`Obesidade Grave - ${imc.toFixed(2)}`)
} else {
	console.log("Algo deu errado, verifique os valores inseridos.")
}
