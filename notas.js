let nota1, nota2, nota3;
let media;
dato1 = prompt("Primer número?", "0");
dato2 = prompt("Segundo número?", "0");
dato3 = prompt("Tercer número?", "0");
nota1 = parseInt(dato1);
nota2 = parseInt(dato2);
nota3 = parseInt(dato3);
media = (nota1 + nota2 + nota3)/3;
if (media >8)
{
resultat = " Excelente";
}
else
{
if (media >=7)
resultat = " Notable";
else
resultat = " Aprobado";
}
document.write(`La nota final es ${media} y eso es ${resultat}`);let nota1, nota2, nota3;
let media;
dato1 = prompt("Primer número?", "0");
dato2 = prompt("Segundo número?", "0");
dato3 = prompt("Tercer número?", "0");
nota1 = parseInt(dato1);
nota2 = parseInt(dato2);
nota3 = parseInt(dato3);
media = (nota1 + nota2 + nota3)/3;
if (media >8)
{
resultat = " Excelente";
}
else
{
if (media >=7)
resultat = " Notable";
else
resultat = " Aprobado";
}
document.write(`La nota final es ${media} y eso es ${resultat}`);