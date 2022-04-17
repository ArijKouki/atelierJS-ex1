var chiffre=(Math.floor(Math.random()*10));
var compteur=0;

do{
var utilisateur=prompt("Donnez un chiffre:");
	compteur ++;
}while (compteur<3 && utilisateur!==chiffre);

if(utilisateur===chiffre) 
{alert("You win!!");}
else 
{alert("Game Over");}