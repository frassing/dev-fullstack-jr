// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair todas as palavras únicas e exibi-las em um array. 

function extrairPalavrasUnicas(string) {
	let palavras = string.split(" ")
	let novaString = ""
	for (let i = 0; i < palavras.length; i++) {
		if (!novaString.includes(palavras[i])) {
			novaString += palavras[i] + " "
		}
	}
	return novaString
}

export default extrairPalavrasUnicas