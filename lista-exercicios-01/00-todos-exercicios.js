const prompt = require("prompt-sync")()

// VERIFICAR SE NÚMERO É PAR OU ÍMPAR
console.log("Exercício #01 - Verificando se um número é par ou ímpar")
let numeroInput = Number(prompt("Insira um número: "))

if (isNaN(numeroInput)) {
	console.log("Verifique a entrada, algo deu errado.")
} else if ((numeroInput % 2) == 0) {
	console.log(`${numeroInput} é PAR`)
} else {
	console.log(`${numeroInput} é ÍMPAR`)
}


// CLASSIFICADOR DE IDADE
console.log("\nExercício #02 - Classificar idade")
let idadeInput = Number(prompt("Insira uma idade: "))

if ((idadeInput >= 0) && (idadeInput < 12)) {
	console.log("Considerado criança.")
} else if ((idadeInput >= 12) && (idadeInput < 18)) {
	console.log("Considerado adolescente.")
} else if ((idadeInput >= 18) && (idadeInput < 60)) {
	console.log("Considerado adulto.")
} else if (idadeInput >= 60) {
	console.log("Considerado idoso.")
} else {
	console.log("Entrada inválida. Tente novamente.")
}


// CLASSIFICAR NOTA
console.log("\nExercício #03 - Classificar Nota")
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


// MENU INTERATIVO
console.log("\nExercício #04 - Menu Interativo")
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


// CLASSIFICAR IMC
console.log("\nExercício #05 - Calcular IMC e classificar")
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

// VERIFICAR TIPO DE TRIÂNGULO
console.log("\nExercício #06 - Verificar o tipo de Triângulo")
let ladoA = Number(prompt("Digite o valor de um dos lados(A): "))
let ladoB = Number(prompt("Digite o valor de um dos lados(B): "))
let ladoC = Number(prompt("Digite o valor de um dos lados(C): "))

if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)) {
	if ((ladoA == ladoB) && (ladoB == ladoC)) {
		console.log("É um Triângulo Equilátero.")
	} else if ((ladoA == ladoB) || (ladoA == ladoC) || (ladoB == ladoC)) {
		console.log("É um Triângulo Isósceles.")
	} else {
		console.log("É um Triângulo Escaleno.")
	}
} else {
	console.log("As medidas fornecidas não formam um triângulo.")
}



// VALOR A PAGAR PELA QUANTIDADE DE MAÇÃS COMPRADAS
console.log("\nExercício #07 - Quanto deverá pagar pelas maçãs de acordo com a quantidade comprada")
let qtdMacasCompradas = Number(prompt("Digite a quantidade de maçãs compradas: "))
let precoMaca = 0.30
let valorTotal = 0

if (qtdMacasCompradas >= 12 ) {
	precoMaca = 0.25
}

valorTotal = qtdMacasCompradas * precoMaca
console.log(`O Valor total da compra é de: R$${valorTotal.toFixed(2)} e o valor unitário da maça saiu por: R$${precoMaca}`)


// IMPRIMIR VALORES EM ORDEM CRESCENTE
console.log("\nExercício #08 - Imprimir números em ordem crescente")
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


// CONTAGEM REGRESSIVA
console.log("\nExercício #09 - Contagem Regressiva")
for (let timer = 10; timer > 0; timer--) {
	console.log(timer)
}


// IMPRIMIR UM VALOR 10 VEZES
console.log("\nExercício #10 - Imprimir um valor 10 vezes no console")
let numeroImprimir = parseInt(prompt("Insira um número inteiro: "))

for (let i = 1; i <= 10; i++) {
	console.log(`${i} - ${numeroImprimir}`)
}


// SOMATÓRIO DE 5 NÚMEROS
console.log("\nExercício 11 - Somatório de 5 números")
let soma = null

for (let i = 0; i < 5; i++) {
	let numeroSomar = Number(prompt("Digite um número: "))
	soma += numeroSomar
}

console.log(`O resultado da soma é: ${soma}`)


// TABUADA
console.log("\nExercício #12 - Tabuada")
let numeroTabuada = Number(prompt("Qual o número deseja ver a tabuada? "))

for (let i = 1; i <= 10; i++) {
	console.log(`${i} x ${numeroTabuada} = ${i*numeroTabuada}`)
}


// CALCULAR MÉDIA ARITMÉTICA
console.log("\nExercício #13 - Média Aritmética")
console.log("Digite os valores que deseja calcular a média um por um, quando terminar digite 0")
let valor = null
let quantidadeNumeros = 0
let somaValores = 0
let mediaAritmetica = 0

do {
	valor = Number(prompt("Insira o número: "))
	quantidadeNumeros = valor != 0 ? quantidadeNumeros+1 : quantidadeNumeros 
	somaValores+= valor
} while(valor != 0)

mediaAritmetica = somaValores/quantidadeNumeros
console.log(`A média é: ${mediaAritmetica.toFixed(2)}`)


// CALCULAR FATORIAL
console.log("\nExercício #14 - Calcular fatorial")
let numeroFatorial = Number(prompt("Digite o número que deseja calcular o fatorial: "))
let num = numeroFatorial
let resultadoFatorial

for (let i = 0; num > 0; i++){
	resultadoFatorial = i == 0 ? num : resultadoFatorial * num
	num--
}

console.log(`O fatorial de ${numeroFatorial} é: ${resultadoFatorial}`)


// 10 PRIMEIROS TERMOS DA SEQUÊNCIA DE FIBONACCI
console.log("\nExercício #15 - Imprimir os 10 primeiros termos da Sequência de Fibonacci (considerando que o primeiro e segundo termos são 1)")
let n1 = 1
let n2 = 1
let fib = 0

// Solução #1 - Sem Recursão
for (let i = 0; i < 10; i++) {
	if (i == 0 || i == 1) {
		fib = 1
	} else {
		n2 = n1  // n-2 -> antecessor do antecessor de fib
		n1 = fib  // n-1 -> antecessor de fib
		fib = n1 + n2  // fib recebe o novo valor
	}
	console.log(fib)
}
