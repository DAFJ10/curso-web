//Retorna todos os elementos que possuem a classe className:
//document.getElementsByClassName("className teste")

//Retorna todos os elementos que possuem a classe
//tsete dentro do elemento que possuir o ID principal
//document.getElementById("principal").getElementsByClassName("teste")

//Retorna todas as tags h1 encontradas no documento HTML
//document.getElementsByTagName("h1")
//Retorna todas as tags
//document.getElementsByTagName("*")

//Retorna a quantidade de tags:
var x = document.getElementsByTagName("h1").length;
console.log(x)

//Array/Matriz

var listaCompras = ["leite", "pão", "queijo", "presunto"]

//indice
console.log(listaCompras[1])

// JS permite criar listas com dados de tipos diferentes
var dadosDiferentes = ["dia", 23, true]

//Tamanho da lista
console.log(dadosDiferentes.length)

//adicionando elementos na lista
listaCompras = ["leite", "pão", "queijo", "presunto"]
listaCompras.push("banana")
console.log(listaCompras)

//removendo elementos da lista
listaCompras.pop()
console.log(listaCompras)

//adicionando elementos em uma posição específica
listaCompras.splice(2, 0, "banana")
console.log(listaCompras)

//remover elemento um uma posição específica
listaCompras.splice(2, 0)
console.log(listaCompras)

var compras = ["leite", "queijo", "presunto"]

function preencherSelect(){
    var htmlFinal = ""
    var tamanhoLista = compras.length

    for (var i = 0; i < tamanhoLista; i++) {
        htmlFinal += "<option>" + compras[i] + "</option>"
        
    }

    document.getElementById("meuSelect").innerHTML  = htmlFinal
}



