// declarando variables para los controles
var txtNom=document.getElementById("txtNom");
var txtApe=document.getElementById("txtApe");
var txtCor=document.getElementById("txtCor");
var btnRegistrar=document.getElementById("btnRegistrar");

// creamos un procedimiento para mostrar
function MostrarRegistro(){
    // declaramos una variable para guardar los datos
    var listaregistro=Mostrar();
    // selecciono el tbody de la tabla donde voy a mostrar la informacion
    var tbody=document.querySelector("#tbRegistro tbody");
    tbody.innerHTML="";
    // agregamos al tbody las filas que se registren
    for(var i=0;i<listaregistro.length;i++){
        // declaramos una variable para las filas
        var fila=tbody.insertRow(i);
        // declaramos variables para los titulos
        var titulonom=fila.insertCell(0);
        var tituloape=fila.insertCell(1);
        var titulocor=fila.insertCell(2);
        //agregamos los valores
        titulonom.innerHTML=listaregistro[i].nombre;
        tituloape.innerHTML=listaregistro[i].apellido;
        titulocor.innerHTML=listaregistro[i].correo;
        tbody.appendChild(fila);
    }
}
//creamos un procedimiento para registrar los datos
function RegistrarDatos(){
    //validacion de datos
    //capturando valores 
    var nom=txtNom.value;
    var ape=txtApe.value;
    var cor=txtCor.value;
    //llamamos al procedimiento registrar
    Registrar(nom,ape,cor);
    //llamamos al procedimiento para mostrar
    MostrarRegistro();
}

//agregamos un evento al evento
// btnRegistrar.addEventListener("click", function(){
//       alert("hola");
//});

//creamos un procedimiento para mostrar el mensaje
// function Mensaje(){
//    alert("Hola");
//}

//llamamos al proedimiento en el evento del boton
btnRegistrar.addEventListener("click",RegistrarDatos);