// Funções de resolução dos exercícios
import ehDataValida from "./01-validacao_datas.js"
import adivinharNumero from "./02-jogo_adivinhacao.js"
import extrairPalavrasUnicas from "./03-palavras_unicas.js"
import fatorial from "./04-fatorial_recursivo.js"
import debounce from "./05-debounce.js"
import { fibonacci, memoize } from "./06-memoization.js"
import ordenarProdutosPorPreco from "./07-mapeamento_ordenacao.js"
import calcularTotalPorCliente from "./08-agrupamento_propriedade.js"
import { objetoParaPares, paresParaObjeto } from "./09-conversao_entre_formatos.js"

import PromptSync from "prompt-sync"
const prompt = PromptSync()
const menu = `
MENU PRINCIPAL
1 - Verificar se uma data é válida
2 - Adivinhar o número secreto
3 - Extrair palavras únicas de um texto
4 - Calcular o fatorial de um número (com recursividade)
5 - Executar uma função utilizando debounce
6 - Retornar resultados em cache (memoization)
7 - Ordenar produtos pelo preço (ordem crescente)
8 - Calcular o total do carrinho de cada cliente (reduce)
9 - Converter objetos em arrays e arrays em objetos
10 - Todos os exercícios
0 - Finalizar programa
`
function imprimirSubMenu(prompt) {
	let ehEncerrar = ''
	console.log('\n--------------------------------------------------------')
	while (true) {
		ehEncerrar = prompt('Pressione ENTER para voltar ao menu ou 0 para encerrar o programa: ')
		if (ehEncerrar == '' || ehEncerrar == 0) break
	}
	return ehEncerrar == '' ? false : true
}

async function main() {
	let opcao = null
	let finalizar = null

	do {
		console.log(menu)
		opcao = prompt('Escolha o exercício que deseja executar: ')

		switch (opcao) {
			case '0':
				console.log('Finalizando execução...')
				break
			case '1':
				executarExercicio1()
				break
			case '2':
				executarExercicio2()
				break
			case '3':
				executarExercicio3()
				break
			case '4':
				executarExercicio4()
				break
			case '5':
				await executarExercicio5()
				break
			case '6':
				executarExercicio6()
				break
			case '7':
				executarExercicio7()
				break
			case '8':
				executarExercicio8()
				break
			case '9':
				executarExercicio9()
				break
			case '10':
				await executarTodos()
				break
			default:
				break
		}
		if (opcao != 0 && opcao <= 10) finalizar = imprimirSubMenu(prompt)
	} while (opcao != 0 && finalizar != true)
}

main()


// Conteúdo necessário para a execução de cada exercício
async function executarTodos() {
	console.log('\nSEÇÃO 01 - ESTRUTURAS DE CONTROLE AVANÇADAS')
	executarExercicio1()
	executarExercicio2()
	executarExercicio3()

	console.log('\nSEÇÃO 02 - FUNÇÕES E RECURSÃO')
	executarExercicio4()
	await executarExercicio5()
	executarExercicio6()

	console.log('\nSEÇÃO 03 - ARRAYS E OBJETOS COMPLEXOS')
	executarExercicio7()
	executarExercicio8()
	executarExercicio9()
}

function executarExercicio1() {
	console.log('\nExercício 1 - Verificando datas válidas')
	console.log('Data: 05/12/1070 é válida?', ehDataValida(5, 12, 1970))
	console.log('Data: 45/10/2020 é válida?', ehDataValida(45, 10, 2020))
	console.log('Data: 29/02/2024 é válida?', ehDataValida(29, 2, 2024))
	console.log('Data: 29/02/2025 é válida?', ehDataValida(29, 2, 2025))
}

function executarExercicio2() {
	console.log('\nExercício 2 - Adivinhar o número')
	adivinharNumero()
}

function executarExercicio3() {
	let mensagem = 'olá olá mundo mundo como como estão?'
	console.log('\nExercício 3 - Palavras únicas')
	console.log('Texto original:', mensagem)
	console.log('Palavras repetidas removidas:', extrairPalavrasUnicas(mensagem))
}

function executarExercicio4() {
	console.log('\nExercício 4 - Fatorial recursivo')
	let numInput = parseInt(prompt("Digite um número para descobrir o fatorial: "))
	console.log(fatorial(numInput))
}

async function executarExercicio5() {
	console.log('\nExercício 5 - Debounce')
	console.log('Utilizando uma função de debounce, vamos simular a digitação de "olá, mundo!" num campo.')
	console.log('Em vez de imprimir cada letra digitada, a função imprime no console apenas quando a frase estiver completa')
	console.log('Serão feitas 10 chamadas (1 para cada caractere), mas só teremos como resultado a impressão da frase completa.')
	
	// Aplicando o Debounce
	let printHelloDebounced = debounce((str) => { console.log(str) }, 2000)

	// Chamadas
	printHelloDebounced('o')
	printHelloDebounced('ol')
	printHelloDebounced('olá')
	printHelloDebounced('olá,')
	printHelloDebounced('olá, m')
	printHelloDebounced('olá, mu')
	printHelloDebounced('olá, mun')
	printHelloDebounced('olá, mund')
	printHelloDebounced('olá, mundo')
	printHelloDebounced('olá, mundo!')

	await new Promise(resolve => setTimeout(resolve, 2200))  // aguardar até que debounce termine de executar
}

function executarExercicio6() {
	console.log('\nExercício 6 - Memoization')
	const fibonacciMemoized = memoize(fibonacci)

	console.log('Buscar o 36º termo da sequência de Fibonacci:')
	console.time("Tempo de execução fibonacci SEM MEMOIZE")
	console.log("Resultado:", fibonacci(36))
	console.timeEnd('Tempo de execução fibonacci SEM MEMOIZE')
	console.log('')
	console.time("Tempo de execução fibonacci COM MEMOIZE - 1ª chamada (executar o cálculo)")
	console.log("Resultado:", fibonacciMemoized(36))
	console.timeEnd('Tempo de execução fibonacci COM MEMOIZE - 1ª chamada (executar o cálculo)')
	console.log('')
	console.time('Tempo de execução para a RECUPERAÇÃO com memoize - buscar o valor')
	console.log("Resultado:", fibonacciMemoized(36))
	console.timeEnd('Tempo de execução para a RECUPERAÇÃO com memoize - buscar o valor')
}

function executarExercicio7() {
	let listaProdutos = [
		{ nome: "produto1", preco: 21.50 },
		{ nome: "produto6", preco: 12.00 },
		{ nome: "produto3", preco: 50.80 },
		{ nome: "produto5", preco: 35.23 },
		{ nome: "produto2", preco: 7.10 }
	]
	console.log('\nExercício 7 - Mapeamento e ordenação')
	console.log('Lista de produtos de entrada:', listaProdutos)
	console.log('\nProdutos ordenados por preço:', ordenarProdutosPorPreco(listaProdutos))
}

function executarExercicio8() {
	let vendas = [
		{ nome: 'Ana', total: 30.00 },
		{ nome: 'Bianca', total: 25.00 },
		{ nome: 'Carlos', total: 45.00 },
		{ nome: 'Ana', total: 28.00 },
		{ nome: 'Carlos', total: 12.00 },
		{ nome: 'Diego', total: 67.00 },
	]
	console.log('\nExercício 8 - Agrupamento por propriedade')
	console.log('Vendas:', vendas)
	console.log('Total por cliente:', calcularTotalPorCliente(vendas))
}

function executarExercicio9() {
	let arr = [['a', 20, 'b', 10], ['c', 5], ['d', 30, 'e', 50], ['f', 42, 'g', 23, 'h'], ['i']]
	let obj = { 'a': 20, 'b': 50, 'c': 85, 'd': 40, 'e': 28 }

	console.log('\nExercício 9 - Conversão entre formatos')
	console.log('Array para converter:', arr)
	console.log("Conversão de pares para objeto:", paresParaObjeto(arr))
	console.log('---------------\n')
	console.log('Objeto para converter:', obj)
	console.log("Conversão de objeto para pares:", objetoParaPares(obj))
}
