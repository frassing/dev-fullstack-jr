// Escreva um script que gere um número aleatório de 1 a 100 e peça ao usuário, para adivinhar. 
// Use while para repetir até acertar, contando tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado. 
import PromptSync from "prompt-sync"
const prompt = PromptSync()

function adivinharNumero() {
	let numeroSorteado = Math.floor(Math.random() * 100)
	let tentativa = 1
	let palpite = Number(prompt("Faça um palpite entre 1 e 100: "))
	while (palpite != numeroSorteado) {
		if (palpite < numeroSorteado) {
			console.log("Mais alto!")
		} else {
			console.log("Mais baixo!")
		}
		palpite = Number(prompt("Faça um palpite entre 1 e 100: "))
		tentativa++
	}
	let palavraTentativa = tentativa > 1 ? "tentativas" : "tentativa"
	console.log(`Você acertou o número secreto utilizando ${tentativa} ${palavraTentativa}`)
}

export default adivinharNumero
