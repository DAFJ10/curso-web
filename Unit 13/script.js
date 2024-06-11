//JQuerry; biblioteca do JS que permite simplificar a sintaxe

//JavaScript
//document.getElementById("nomeId");
//JQuerry
//$("#nomeId");

//JavaScript - Classe
//document.getElementsByClassName("nomeClasse");
//JQuerry - Classe
//$(".nomeClasse");

//JavaScript - Tag
//document.getElementsByTagName("p");
//JQuerry - Tag
//$("p")

//Seleciona todos os elementos de um HTML
//$("*");
//Seleciona o primeiro elemento <p></p>
//$("p:first");
//Seleciona o ultimo elemento <p></p>
//$("p:last");
//Seleciona todos os elementos com o atributo disabled
//$("[disabled]")

//COMBINANDO SELEÇÕES
//JS
//document.getElementById("nomeId").getElementsByTagName("p");
//QJ
//$("#nomeId p")

//Programação oritentada a objetos

var nome = "Zezinho";
var sobrenome ="Silva";
var idade = 12;

var pessoa = {
    nome: "Zezinho", 
    sobrenome: "Silva", 
    idade: 12
}

console.log(pessoa.nome)

var novaPessoa = {
    nome: "Zezinha", 
    sobrenome: "Silvio", 
    idade: 21,
    andar:  function() {
        alert(this.nome +" está andando e tem "+ this.idade+ " anos." )
    }
}

novaPessoa.andar()

function People(_nome, _sobrenome, _idade){
    this.nome = _nome;
    this.sobrenome = _sobrenome;
    this.idade = _idade;
}

var Pessoa1 = new People("julia", "amaral", 16);
var Pessoa2 = new People("paulo", "cesar", 16);
var Pessoa3 = new People("eric", "enzo", 15);
var Pessoa4 = new People("dario", "junior", 14);

function Item(nome, quantidade, preco){
    this.nomeItem = nome;
    this.quantidadeItem = quantidade;
    this.precoItem = preco;

}

var itens = []

function adicionarItem(){
    var nomeItemNovo = $("#nomeItemId").val();
    var quantidadeNovo = $("#quantidadeId").val();
    var precoNovo = $("#precoId").val();

    var novoItem = new Item(nomeItemNovo, quantidadeNovo, precoNovo)

    itens.push(novoItem);
    console.log(itens);
    atualizaTabela(novoItem);
}

function atualizaTabela(item){
    var htmlFinal = "<tr>"

    htmlFinal +="<td>" + item.nomeItem + "</td>";
    htmlFinal +="<td>" + item.quantidadeItem + "</td>";
    htmlFinal +="<td>" + item.precoItem + "</td>";

    htmlFinal += "</tr>"

    $("tabelaItens").append(htmlFinal);
}