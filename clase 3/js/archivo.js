let Juego = prompt("HOLA QUERES JUGAR A ADIVINAR UN NUMERO? RESPONDE SI O NO:")

if (Juego.toLowerCase() == "si"){
alert("VAMOS A JUGAR :D");
alert("ADIVINA EL NUMERO DEL 0 AL 10");
let numeroalazar = parseInt(prompt("ingresa un numero: "));
while (numeroalazar !== 6 ){
    alert("No ese no es el numero sigue intentado...")
   
    numeroalazar =parseInt( prompt("ingresa otro numero: "));
}
alert("SI!! adivinaste felicitaciones!")
}
    else{ 
    alert("QUE LASTIMA :C")
}   