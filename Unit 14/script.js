//API - Application Programing Interface
//Interface de Programação de Aplicações

//REST - Representational State Transfer 
// Transferencia de Estado Representacional

//Recursos

//Manipulações
// -GET  acessar/visualizar
// -POST  criar
// -PUT   atualizar
// -DELETE apagar

//Status Respostas

//100 - Informações gerais;
//200 - Sucesso;
//300 - Redirecionamento;
//400 - Erro no cliente;
//500 - Erro no servidor;

//AJAX - recurso que permite enviar requisições

//EX:
// $.get(URL, funcao_callback)
// $.post(URL, data, funcao_callback)

$("#botaoBuscaPersonagem").click(buscarPersonagemAleatorio);

function buscarPersonagemAleatorio(){
    $.get("https://swapi.dev/api/people/" + Math.floor(Math.random()* 9 ) + 1, preencherLabelPersonagem);
}

function preencherLabelPersonagem(data){
    console.log(data.name);

    $("#personagemAleatorioId").text(data.name);
}

$("#botaoBuscaFilmeId").click(buscarFilmePorPersonagem);

function buscarFilmePorPersonagem(){
    var nome = $("#buscaFilmePorNomePersonagem").val();
    $.get("https://swapi.dev/api/people/?search="+nome, popularTabela);
}

function popularTabela(data){
    console.log(data.results[0].name);
    $("#labelFilmeId").text(data.results[0].name);

    $("#tabelaFilmesId").find("tr:gt(0)").remove();

    for (var i = 0; i < data.results[0].films.length; i++){
        $.get(data.results[0].films[i], criaLinha);
    }
}

function criaLinha(data){
    var htmlFinal =
    "<tr><td>" + data.title + "</td>"+
    "<td>" + data.episode_id + "</td>"+
    "<td>" + data.director + "</td></tr>";

    $("#tabelaFilmesId").append(htmlFinal)
}
    