let nome = document.querySelector("#nome")
let numero = document.querySelector("#numero")
let lista = " "
let listas = []
let Number = numero.value.length
let corpoTabela = document.querySelector("tbody")

document.addEventListener("submit", function(evento){
evento.preventDefault()
modificaLista()

validaForm()
nome.value =""
numero.value = ""
})

function modificaLista(){
  lista = `<tr>`
  lista += `<td> ${nome.value} </td>`
  lista +=  `<td>${numero.value} </td>`
  lista += `</tr>`;
}

function validaForm(){
  let Number = numero.value.length
  if(corpoTabela.innerText.includes(nome.value) && Number < 9 || Number > 15){
    alert(`O contato "${nome.value}" já foi inserido e o número ${numero.value} não é um número de telefone válido`)
    console.log("if 1")
  }else if(corpoTabela.innerText.includes(nome.value) && corpoTabela.innerText.includes(numero.value)){
    alert(  `O contato "${nome.value}" já foi inserido e o numero ${numero.value} ja foi inserido`)
    console.log("if 2")
  } 
  else if(corpoTabela.innerText.includes(nome.value)){
    alert(`O contato "${nome.value}" já foi inserido`)
    console.log("if 3")
  }
  else if(Number < 9 || Number > 15){
    alert("insira um número de telefone valido")
    console.log("if 4")
  }
  else if(corpoTabela.innerText.includes(numero.value)){
    alert(`O numero ${numero.value} ja foi inserido`)
    console.log("if 5")
  } 
  else{console.log("if 6")
    listas+= lista
    corpoTabela.innerHTML = listas
  }
}
