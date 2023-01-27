<title>Modules - CommonJS</title>
<!-- Teoria:
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes -->
<script>
function ficha() {
let alumno = {
nombre: "Caterina",
edad: 18
};
this.verNombre = function ()
{
return alumno.nombre;
}
this.verEdad = function ()
{
var resultado = alumno.edad;
return resultado;
}
}
function programa() {
let obj = new ficha();
document.writeln(`El nombre es ${obj.verNombre()} <br>`);
document.writeln(`La edad es ${obj.verEdad()} <br>`);
}
</script>
</head>
<body>
<h3>Clase ficha </h3>
<input type="button" value="Pulsa aquí" onclick="programa()" />


<title>ObjectInterface - Clases1</title>
<script>
let ficha = (function () {
let alumno;
this.alumno ="Marga";
return {
inicio ()
{
this.alumno = "Norat"
},
verNombre()
{
return this.alumno;
},
} // fin return
})(); //fin 'clase'
function programa() {
ficha.inicio();
document.writeln(`El nombre es ${ficha.verNombre()} <br>`);
//document.writeln(`La edad es ${ficha.verEdad()} <br>`);
}
</script>
</head>
<body>
<h3>Clase ficha </h3>
<input type="button" value="Pulsa aquí" onclick="programa()" />
class EntradaDatos {
constructor (){
let nombre;
let contrasenya;
this.nombre ="admin";
this.contrasenya ="1234"
}
introduceNombre ()
{
let valorEntrada = document.formEntrada.txtInicial.value;
if (this.compruebaNombre(valorEntrada))
this.nombre = valorEntrada;
else
this.nombre ="No valido";
}
compruebaNombre (valor)
{
let flag = true;
if (valor == null || valor == "") flag = false;
return flag
}
verNombre()
{
return this.nombre;
}
}
function programa() {
let obj = new EntradaDatos();
obj.introduceNombre ();
document.writeln(`El nombre es ${obj.verNombre()} <br>`);
}
</script>
</head>
class EntradaDatos {
    constructor (){
    let nombre;
    let contrasenya;
    this.nombre ="admin";
    this.contrasenya ="1234"
    }
    introduceNombre ()
    {
    let valorEntrada = document.formEntrada.txtInicial.value;
    if (this.compruebaNombre(valorEntrada))
    this.nombre = valorEntrada;
    else
    this.nombre ="No valido";
    }
    compruebaNombre (valor)
    {
    let flag = true;
    if (valor == null || valor == "") flag = false;
    return flag
    }
    verNombre()
    {
    return this.nombre;
    }
    }
    function programa() {
    let obj = new EntradaDatos();
    obj.introduceNombre ();
    document.writeln(`El nombre es ${obj.verNombre()} <br>`);
    }
    </script>
    </head>
    <body>
<h3>Clase Entrada Datos </h3>
<form name="formEntrada">
<input type="text" name="txtInicial" />
<input type="button" value="Pulsa aquí" onclick="programa()" />
</form>
</body>