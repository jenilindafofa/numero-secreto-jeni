alert('Boas vindas ao numero secreto');
let numeroSecreto = 10;
console.log(numeroSecreto)
let chute
//enquanto chute não for igual ao numero Secreto
while (chute!= numerosecreto){
chute = prompt('Escolha um numero entre 1 e 20');
//se chute for igual ao número secreto
if(chute == numerosecreto){
alert('Isso aí! Você descobriu o numero secreto ${numeroSecreto}');
}else{
if(chute > numeroSecreto){
alert('O numeroSecreto é menor que ${chute}');
}else{
alert('O numeroSecreto é maior que ${chute}');
}
}
}