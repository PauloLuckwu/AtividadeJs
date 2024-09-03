const valor = Number(prompt("Qual o valor da sua compra"))

for (let count = 1; count<=12; count++) {
  const parcelas = valor / count;
  const formatado = parcelas.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
console.log(valor + " em " + count + "x de " + formatado)
}
