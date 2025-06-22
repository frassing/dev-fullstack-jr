// Implemente function memoize(fn) que armazene em cache chamadas anteriores de fn (por argumentos), retornando resultados instantâneos em repetidas invocações. 

function memoize(fn) {
	let cache = new Map()
	return (...args) => {
		let key = `${args.join('-')}`
		if (cache.has(key)) {
			console.log('>> Recuperando valor do cache...')
			return cache.get(key)
		} else {
			console.log('>> Armazenando valor em cache...')
			let resultado = fn.apply(this, args)
			cache.set(key, resultado)
			return resultado
		}
	}
}


function fibonacci(n) {
	if (n == 0) {
		return 0
	} else if (n == 1) {
		return 1
	} else {
		return fibonacci(n-1) + fibonacci(n-2)
	}
}

export {memoize, fibonacci}
