// Escreva duas funções: 
// ○ paresParaObjeto(pares) recebe um array de pares [ [chave, valor], … ] e retorna o objeto equivalente. 
// ○ objetoParaPares(obj) faz o inverso, retornando um array de pares.

function paresParaObjeto(arrPares) {
	if (arrPares.length < 1) return 'O array passado está vazio, não é possível continuar.'
	let objPares = {}
	arrPares.forEach(par => {
		for (let key in par) {
			if (key % 2 == 0) {
				let value = Number(key) + 1
				if (par[value] == undefined) continue
				objPares[par[key]] = par[value]
			}
		}
	});
	return objPares
}


function objetoParaPares(objeto) {
	return Object.entries(objeto)
}

export {paresParaObjeto, objetoParaPares}
