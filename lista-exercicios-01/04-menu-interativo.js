// Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.

const prompt = require("prompt-sync")()

let menuMensagem = `----------
MENU 
1-Visualizar tarefas do dia. 
2-Ignorar lista e apagar todas as tarefas. 
3-Tomar um café. 
0-Sair 
----------`
let opcao = null

do {
	console.log(menuMensagem)
	opcao = prompt("Escolha o que deseja fazer: ")

	switch (opcao) {
		case "1":
			console.log("Lista de Tarefas - Sucesso Garantido!")
			console.log("[ ] Beber água")
			console.log("[ ] Resolver um problema")
			console.log("[ ] Respirar e manter a calma")
			console.log("[ ] Verificar agenda")
			console.log("[ ] Tentar não surtar")
			break
		case "2":
			console.log("Pego no flagra! Perdeu 5 pontos por cada tarefa da lista!!")
			break
		case "3":
			console.log("Muito bem, ninguém é de ferro! Pausa para o café concedida.")
			break
		case "0":
			console.log("Encerrando...")
			break
		default:
			console.log("Opção não encontrada! Tente novamente.")
			break
	}
} while (opcao != "0")
