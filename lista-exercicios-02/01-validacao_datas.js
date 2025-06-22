// Criar uma função ehDataValida(dia, mes, ano) que retorne true se os valores  formarem uma data real (meses de 28–31 dias, ano bissexto para fevereiro) e false caso contrário. 
// Para ser um ano bissexto: 
// - precisa ser divisível por 4 e não por 100. Exemplo: 2020
// - ou precisa ser divisível por 400. Exemplo: 2000

function ehBissexto(ano) {
	return ano % 4 == 0 && ano % 100 != 0 || ano % 400 == 0
}

function ehDataValida(dia, mes, ano) {
	const meses31Dias = [1,3,5,7,8,10,12]
	const meses30Dias = [4,6,9,11]

	if (ano < 1582 || mes < 1 || mes > 12 || dia < 1) return false
	
	if (meses31Dias.includes(mes)) return dia <= 31
	if (meses30Dias.includes(mes)) return dia <= 30
	if (mes == 2) {
		return dia <= (ehBissexto(ano) ? 29 : 28)
	} 
		return false
}

export default ehDataValida
