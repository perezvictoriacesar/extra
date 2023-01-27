<title>Calculadora IP Class</title>
<script>
function getClass(i)
{
if(i>=240) {
return alert("Clase E");
}
else {
if(i>=224) {
return alert("Clase D");
}
else {
if(i>=192) {
return alert("Clase C");
}
else {
if(i>=128) {
// Completar código !!
}
else // Completar código
}
}
}
}</script>
</head>
<body>
<h2>Calculadora Clase IP</h2>
<h3>Introducir 8 bits en cada campo.</h3>
<input type="text" name="oc1" id="octal1">
<!-- <input type="text" name="oc2" id="octal2">
<input type="text" name="oc3" id="octal3">
<input type="text" name="oc4" id="octal4"> -->
<input type="button" value="Obtener Clase" onClick="getOctal()"></input>