var vencedor;
var jogadorPontosArray = [];
var pcPontosArray = [];
var jogadorPontos;
var pcPontos;

function jogador(){
  vencedor = ("jogador");
  jogadorPontosArray.push(1);
  let soma=0;
  for(var i=0; i<jogadorPontosArray.length; i++){
    jogadorPontos=soma += jogadorPontosArray[i];
  }
  document.getElementById('jgpontos').innerHTML=jogadorPontos;
}
function pc(){
  vencedor = ("computador");
  pcPontosArray.push(1);
  let soma=0;
  for(var i=0; i<pcPontosArray.length; i++){
   pcPontos= soma += pcPontosArray[i];
  }
  document.getElementById('pcpontos').innerHTML=pcPontos;
}



//pedra = 0
// papel = 1
//tesoura = 2

function pedra(){
  document.getElementById('jgescolha').innerHTML=("pedra");
 
  let jogo =Math.floor(Math.random() * (3 - 0)) + 0;
 
  if (jogo==0){
   vencedor = ("empate");
   document.getElementById('pcescolha').innerHTML=("pedra");

  }
  else if (jogo==1){
    document.getElementById('pcescolha').innerHTML=("papel");
    pc();
 
  }
  else {
    document.getElementById('pcescolha').innerHTML=("tesoura");
   jogador();
  }

  document.getElementById('vencedor').innerHTML=vencedor;
  
}

function papel(){
  document.getElementById('jgescolha').innerHTML=("papel");
 
  let jogo =Math.floor(Math.random() * (3 - 0)) + 0;
 
  if (jogo==0){
  jogador();
   document.getElementById('pcescolha').innerHTML=("pedra");
  
  }
  else if (jogo==1){
    vencedor = ("empate");
    document.getElementById('pcescolha').innerHTML=("papel");
  }
  else {
  pc();
    document.getElementById('pcescolha').innerHTML=("tesoura");
    
  }

  document.getElementById('vencedor').innerHTML=vencedor;
 
}

function tesoura(){
  document.getElementById('jgescolha').innerHTML=("tesoura");
 
  let jogo =Math.floor(Math.random() * (3 - 0)) + 0;
 
  if (jogo==0){
   pc();
   document.getElementById('pcescolha').innerHTML=("pedra");


  }
  else if (jogo==1){
    document.getElementById('pcescolha').innerHTML=("papel");
    jogador();
   
  }
  else {
    vencedor = ("empate");
    document.getElementById('pcescolha').innerHTML=("tesoura");
  }

  document.getElementById('vencedor').innerHTML=vencedor;
 
}

function encerrar(){

if(pcPontos>jogadorPontos){
  console.log("pc");
}
else if(jogadorPontos>pcPontos){
  console.log("jogador");
}
else{
  console.log("empate");
}
}