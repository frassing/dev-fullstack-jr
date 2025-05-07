# Lista de Exercícios 01 — Lógica de Programação

Esta pasta contém os exercícios da **Lista 01** da jornada Dev FullStack Jr. da +PraTi.  
O foco é praticar lógica de programação utilizando **JavaScript** e **Node.js**, utilizando estruturas condicionais, laços de repetição, entrada de dados e cálculos diversos.

## 📂 Arquivos
- `00-geral.js`: script que executa todos os exercícios sequencialmente
- `01-**.js` a `15-**.js`: resoluções individuais de cada exercício proposto

## ▶️ Como Executar
1. Instale o Node.js se ainda não o tiver: [nodejs.org](https://nodejs.org/)
2. Instale a dependência `prompt-sync` (para entrada de dados via terminal):

```bash
npm install prompt-sync
```
3. Para executar um exercício (individual ou arquivo geral) certifique-se de, no terminal, indicar a pasta e o nome do arquivo correto
```bash
# entrar na pasta específica da lista
cd lista-exercicios-01/
# e executar um exercício individual: 
node 01-numeros-par-impar.js
# executar o arquivo com todos os exercícios:
node 00-todos-exercicios.js
# ou, da pasta raiz
node ./lista-exercicios-01/01-numeros-par-impar.js
node ./lista-exercicios-01/00-todos-exercicios.js
```

## 📌 Conteúdo da Lista
| Nº | Tema                                                            |
| -- | --------------------------------------------------------------- |
| 01 | Verificação de número par ou ímpar com `if`                     |
| 02 | Classificação de idade: criança, adolescente, adulto, idoso     |
| 03 | Classificação de nota: aprovado, recuperação ou reprovado       |
| 04 | Menu interativo com `switch-case`                               |
| 05 | Cálculo do IMC e classificação de peso                          |
| 06 | Identificação do tipo de triângulo a partir dos lados           |
| 07 | Cálculo do valor total de maçãs com base na quantidade comprada |
| 08 | Ordenação crescente de dois valores distintos                   |
| 09 | Contagem regressiva de 10 a 1 com `for`                         |
| 10 | Impressão repetida de um número inteiro 10 vezes                |
| 11 | Soma de 5 números fornecidos pelo usuário                       |
| 12 | Tabuada de um número com `for`                                  |
| 13 | Média de números decimais até digitar 0                         |
| 14 | Cálculo do fatorial de um número com `for` ou `while`           |
| 15 | Geração dos 10 primeiros números da sequência de Fibonacci      |

## 💡 Observações
- Todos os exercícios são executados no terminal.
- A entrada de dados é feita com prompt-sync, e a saída é exibida via console.log.