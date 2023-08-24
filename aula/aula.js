var botao = document.getElementById("botao");
var limpar = document.getElementById("limpar");

function Ltabela(){
    //limpar dados da tabela 
    var tabela = document.getElementById("tabela");
    tabela.innerHTML="";
}

 function testar(){
     var texto = document.getElementById("valor").value;
     var tabela = document.getElementById("tabela");
     //criar linha
     var linha = document.createElement("tr");
     //criar coluna
     var coluna = document.createElement("td");
//atribuir conteudo par a coluna
     coluna.appendChild(document.createTextNode(texto));
     //add coluna na linha
     linha.appendChild(coluna);
     tabela.appendChild(linha);

 }
 //como atribuir uma função no click no objeto (botao )
 botao.addEventListener("click", testar);
 limpar.addEventListener('click', Ltabela);