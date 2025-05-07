// Implemente um programa que recebe uma nota de 0 a 10 e classifica como:
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.

const prompt = require("prompt-sync")()

let notaInput = Number(prompt("Digite a nota: "))

if ((notaInput >= 0) && (notaInput < 5)) {
	console.log("REPROVADO")
} else if ((notaInput >= 5) && (notaInput < 7)) {
	console.log("RECUPERAÇÃO")
} else if (notaInput >= 7 && (notaInput <=10)) {
	console.log("APROVADO")
} else {
	console.log("Inválido!")
}
