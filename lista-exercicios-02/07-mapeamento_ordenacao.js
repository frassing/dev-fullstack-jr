// Dado um array produtos = [{ nome, preco }, …], crie uma função que retorne um novo array apenas com os nomes, ordenados por preço crescente, usando map, sort. 

function ordenarProdutosPorPreco(arrProdutos) {
	let produtos = arrProdutos.slice()  // preservar a ordenação original do array passado
	produtos.sort((a, b) => a.preco - b.preco)
	let nomeProdutosOrdenados = produtos.map((produto) => produto.nome)
	return nomeProdutosOrdenados
}

export default ordenarProdutosPorPreco
