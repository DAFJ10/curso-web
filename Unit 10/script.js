//var frase = "Olá Mundo!"
//window.alert(5 + 9)

//boleana
var chuva = false
var sol = true

console.log(chuva)
console.log(sol)


//number
var idade = 18
var altura = 1.70

//string
var nome = "Pedro"

console.log(typeof(chuva))
console.log(typeof(idade))
console.log(typeof(nome))

//var = escopo global, pode ter seu valor alterado,

var sobrenome = "Silva"
sobrenome = "Rocha"

var pessoa //null
console.log(pessoa)

//let = escopo local, pode ter seu valor alterado, permite criar variaveis vazias
let aluno = "Ana"
aluno = "Bia"

//const = escopo local, não pode ser alterada, não permite criar variaveis vazias
const comida = "lasanha"
//const bebida 


if (true){
    let animal = "gato"
    console.log("dentro do bloco " + animal)
}

//console.log(animal)
document.getElementById("teste").innerHTML = nome;

var comparacao = "0" == 0
console.log(comparacao)

var comparacao2 = "0" === 0
console.log(comparacao2)