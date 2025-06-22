// Em vendas = [{ cliente, total }, …], use reduce para gerar um objeto onde cada chave é um cliente e o valor é a soma de todos os seus total. 

function calcularTotalPorCliente(arr) {
	return arr.reduce((totaisAcumulados, cliente) => {
		let key = cliente.nome   
		if (!totaisAcumulados[key]) {   
			totaisAcumulados[key] = 0    
		}
		totaisAcumulados[key] += cliente.total    
		return totaisAcumulados  
	}, {})
}

export default calcularTotalPorCliente
