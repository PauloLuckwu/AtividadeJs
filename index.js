function calculadoraIcms () {
    const valor1 = Number(prompt("Insira o valor de compra"))
    const customin = (valor1+valor1*0.20)
    const formatado = customin.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    alert("O custo total do produto é de" +(formatado))
  }
  
  calculadoraIcms()


