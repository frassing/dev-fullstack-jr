# Lista de Exercícios 02 — Lógica de Programação

Esta pasta contém os exercícios da **Lista 02** da jornada Dev FullStack Jr. da +PraTi.
O foco é resolver questões utilizando **JavaScript** e **Node.js**, pensando em funções, recursividade, otimização, métodos de arrays e objetos, além de reforçar as estruturas já estudadas.

## 📂 Arquivos
- `00-todos-exercicios.js`: script principal para visualizar exemplos práticos da resolução dos exercícios
- `01-**.js` a `15-**.js`: funções com as resoluções individuais de cada exercício proposto

## ▶️ Como Executar
1. Instale o Node.js se ainda não o tiver: [nodejs.org](https://nodejs.org/)
2. Instale a dependência `prompt-sync` (para entrada de dados via terminal):

```bash
npm install prompt-sync
```
3. A execução das resoluções deve ser feita a partir do arquivo geral
```bash
# entrar na pasta específica da lista
cd lista-exercicios-02/
# executar o arquivo com os exercícios:
node 00-todos-exercicios.js
# ou, da pasta raiz
node ./lista-exercicios-02/00-todos-exercicios.js
```
4. Indicar, no terminal, se deseja executar um exercício específico ou todos sequencialmente através das opções oferecidas no menu (1-10)
5. Finalizar a execução ao indicar, no terminal, a opção 0.

## 📌 Conteúdo da Lista
| Nº | Tema                                                                                |
| -- | ----------------------------------------------------------------------------------- |
| 01 | Validar se uma data é real considerando dia, mês e ano inserido                     |
| 02 | Gerar um número secreto aleatório (entre 0 e 100) e pedir que o usuário dê palpites |
| 03 | A partir de um texto com palavras repetidas, retornar o texto sem repetição         |
| 04 | Calcular o fatorial de um número utilizando recursão                                |
| 05 | Otimizando performance utilizando debounce                                          |
| 06 | Otimizar tempo de execução armazenando resultados em cache com memoize              |
| 07 | Utilizar sort e map em um array de objetos para ordenar e retornar um novo array    |
| 08 | Usar o reduce para retornar um objeto com totais agrupados por cliente              |
| 09 | Converter arrays de pares em objeto e objeto em arrays de pares                     |


## 💡 Observações
- Todos os exercícios são executados no terminal.
- Nem todas as resoluções precisam de entrada do usuário.
- A entrada de dados é feita com prompt-sync, e a saída é exibida via console.log.