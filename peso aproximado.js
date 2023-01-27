<title>Peso Referencia</title>
<script>
function pesoreferencia(datoaltura=1, datopeso=1, datoedad=1, datosexo="N")
{
let altura = parseInt(datoaltura);
let edad = parseInt(datoedad);
let peso = parseInt(datopeso);
if (datosexo == "h" || datosexo=="H")
{
peso = 50 + ((altura - 150) / 4)*3 + (edad - 20)/4;
}
else peso = peso * 0.9;
document.getElementById("resultado").innerHTML = peso;
}
</script>
</head>
<body>
<form name="fdatos">
Altura en cm (ej: 155) <input type="text" size="10" name="altura"/></br></br>
Peso en kg (ej: 80) <input type="text" size="10" name="peso"/></br></br>
Edad (ej: 45) <input type="text" size="10" name="edad"/></br></br>
Sexo (H/M/O) <input type="text" size="10" name="sexo"/></br></br>
<input id="pideal" type="button" value="Calcula"
onclick="pesoreferencia(fdatos.altura.value,fdatos.peso.value,fdatos.edad.value,
fdatos.sexo.value)" />
<input type="reset" value="Reset" />
</br></br> El peso aproximado de referencia es: <span id="resultado"></span>