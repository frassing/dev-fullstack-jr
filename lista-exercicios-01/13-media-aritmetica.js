//  Fazer um algoritmo para receber números decimais até que o usuário digite 0 
// e fazer a média aritmética desses números.
const prompt = require("prompt-sync")()

let numero = null
let quantidadeNumeros = 0
let soma = 0
let mediaAritmetica = 0

console.log("Digite os valores que deseja calcular a média um por um, quando terminar digite 0")
do {
	numero = Number(prompt("Insira o número: "))
	quantidadeNumeros = numero != 0 ? quantidadeNumeros+1 : quantidadeNumeros 
	soma+= numero
} while(numero != 0)

mediaAritmetica = soma/quantidadeNumeros
console.log(`A média é: ${mediaAritmetica.toFixed(2)}`)
