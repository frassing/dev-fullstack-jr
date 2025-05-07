// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for
// 1,1,2,3,5,8,13,21,34,55
// Fórmula: Fn = (n-1) + (n-2)


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

console.log("-----------------------")


// Solução #2 - Com Recursão
function calcular_fib(n) {
	if (n == 0 || n == 1) {
		return 1
	} else {
		return calcular_fib(n-1) + calcular_fib(n-2)
	}
}

for (j = 0; j < 10; j++) {
	console.log(calcular_fib(j))
}