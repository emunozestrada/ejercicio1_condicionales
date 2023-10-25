// ===========Ejecicio1=============================================

function enviarRespuesta1() {
  let respuesta1 = document.getElementById("respuesta1").value;

  if (respuesta1 == "si") {
    alert("¡Ciertamente!");
  }else if (respuesta1 == "no") {
    alert("¡No te creo!");
  }else if (respuesta1 == "") {
    alert("Debes escribir una respuesta");
  }else {
    alert("Escribe si o no en tu respuesta");    
  } 
}

// ===========Ejecicio2=============================================

function enviarNumero() {
  let numero = document.getElementById("numero").value; 
  let cualquierNumero =parseInt(numero); 

  if (numero === "") {
      alert("Ingresa un valor");      
  }else if(cualquierNumero % 2 === 0) {
    alert(cualquierNumero + " es un número es divisible entre 2");     
  }else{
    alert(cualquierNumero + " es un número que no es divisible entre 2");    
    }  
}

// ===========Ejecicio3=============================================

let apertura = document.getElementById("botonDePrueba")
let modal = document.getElementById("prompt")
let cierraModal = document.getElementById("cierraModal")
let numeroParImpar = document.getElementById("numeroParImpar")
let sendValor = document.getElementById("sendValor")

apertura.addEventListener("click", () => {
  modal.showModal()
})

sendValor.addEventListener("click", () => {
  if (numeroParImpar.value === "") {
    alert("Ingresa un numero")
    modal.close()    
  }else{
    let cualquierNumero = parseInt(numeroParImpar.value);

    if(cualquierNumero % 2 === 0) {
     alert(cualquierNumero + " es un número par")
     modal.close() 

    }else{
      alert(cualquierNumero + " es un número impar")
      modal.close()     
    }
  }
})

cierraModal.addEventListener("click", () => {
  modal.close()
})

// ===========Ejecicio4=============================================

function winnerNumber() {
  let winnerNumber = document.getElementById("winnerNumber").value;

  if (winnerNumber === "") {
    alert("Ingresa un numero");
  }else{
    let winnerNumberNumber = parseInt(winnerNumber);

    if(winnerNumberNumber === 1000){
      alert(winnerNumberNumber +" ¡Ganaste un premio!");
    }else{
      alert(winnerNumberNumber + " Lo sentimos, sigue participando"); 
    }         
  } 
}

// ===========Ejecicio5=============================================

function enviarNumeros() {
  let numero1 = document.getElementById("numero1").value;
  let numero2 = document.getElementById("numero2").value;


  if (numero1 === "" || numero2 === "") {
    alert("Ingresa un número en el campo/s faltante cuyo valor sea diferente del otro")
  }else{
    let cualquierNumero1 = parseInt(numero1);
    let cualquierNumero2 = parseInt(numero2);
 
    if(cualquierNumero1 < cualquierNumero2) {
      alert(cualquierNumero1 + " es el menor de los dos")
    }else if(cualquierNumero2 < cualquierNumero1) {
      alert(cualquierNumero2 + " es el menor de los dos")
    }else{
      cualquierNumero1 === cualquierNumero2;
      alert(cualquierNumero1 + " y " + cualquierNumero2 + " deben ser dos numeros diferentes")
    }
  }
}

// ===========Ejecicio6=============================================

function enviarNumerosAComparar() {
  let primerNumero = document.getElementById("primerNumero").value;
  let segundoNumero = document.getElementById("segundoNumero").value;
  let tercerNumero = document.getElementById("tercerNumero").value;


  if (primerNumero === "" || segundoNumero === "" || tercerNumero === "") {
    alert("Ingresa un número en cada campo")
  }else {
    let cualquierPrimerNumero = parseInt(primerNumero);
    let cualquierSegundoNumero = parseInt(segundoNumero);
    let cualquierTercerNumero = parseInt(tercerNumero);
 
    if(cualquierPrimerNumero > cualquierSegundoNumero && cualquierPrimerNumero > cualquierTercerNumero) {
     alert(cualquierPrimerNumero + " es el mayor de los tres")
    }else if(cualquierSegundoNumero > cualquierPrimerNumero && cualquierSegundoNumero > cualquierTercerNumero) {
      alert(cualquierSegundoNumero + " es el mayor de los tres")
    }else if(cualquierTercerNumero > cualquierPrimerNumero && cualquierTercerNumero > cualquierSegundoNumero) {
      alert(cualquierTercerNumero + " es el mayor de los tres")
    }else{
      cualquierPrimerNumero === cualquierSegundoNumero === cualquierTercerNumero;
      alert(cualquierPrimerNumero +  " = " + cualquierSegundoNumero + " = " + cualquierTercerNumero + " Los tres son iguales")
    }      
  }
}

// ===========Ejecicio7=============================================
function quitarTildes(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function enviarDia() {
  let dia = document.getElementById("dia").value.toLowerCase();  
  let textoNormalizado = quitarTildes(dia);
   
  if (textoNormalizado == "lunes") {
    alert("¡Vaya! vas empezando la semana");
  }else if (textoNormalizado == "viernes") {
    alert("¡fin de la jornada laboral!");
  }else if (textoNormalizado == "sabado" || textoNormalizado == "domingo") {
    alert("¡Llegó al fin el finde!");
  }else if (textoNormalizado == "martes") {      
    alert("Segundo día de la semana, ¡no vas ni por la mitad!");    
  }else if (textoNormalizado == "miércoles"){
    alert("¡Al fin vas por la mitad de la semana!");
  }else{
    alert("El día que faltaba: ¡jueves cultural!")
  }
}

// ===========Ejecicio8=============================================
  
function enviarnotas() {
  let nota = document.getElementById("nota").value;

  if (nota === "") {
    alert("Ingresa un numero");      
  }else{
   let numeroNota = parseFloat(nota);

   if(numeroNota > 10 || numeroNota === 0) {
    alert(" Error: debes poner un numero entre 1 y 10");     
    }else if(numeroNota < 6) {
      alert("Reprobado");
    }else if(numeroNota > 6 && numeroNota < 8) {
      alert("Regular");
    }else if(numeroNota === 9){
      alert("Bien");
    }else{
      numeroNota === 10;
      alert("Excelente");
    }            
  }     
}  

// ===========Ejecicio9=============================================

function enviarTopping() {
  let opciones = document.getElementById("opciones").value;

  if(opciones == "Selecciona un topping"){
    alert("Selecciona una opción válida");
  }else if(opciones == "sin topping"){
    alert("Total a pagar helado sin topping = 50 MXN");
  }else if(opciones == "topping de oreo"){
    alert("Total a pagar helado con topping de oreo = 60 MXN");
  }else if(opciones == "topping de KitKat"){
    alert("Total a pagar helado con topping de KitKat = 65 MXN");
  }else {
    opciones == "topping de brownie";
    alert("Total a pagar helado con topping de brownie = 70 MXN");
  }     
}

// ===========Ejecicio10=============================================

function enviarInfoProgramas() {
  
  let programas = document.getElementById("programas").value;
  let becas = document.getElementById("becas").value;
  
  if(programas == "Seleccione el tipo de programa" || becas == "Seleccione tipo de beca"){
    alert("Selecciona una opción válida");
  }else if(programas == "curso" && becas == "Beca Facebook"){
    alert("Duración del curso: 2 meses. Costo mensual: 4999 MXN. Descuento: 20%. Monto a pagar mensual con descuento aplicado = 999.8 MXN.Monto a pagar por los dos meses de duración con el descuento = 1999.6 MXN");
  }else if(programas == "curso" && becas == "Beca Google"){
    alert("Duración del curso: 2 meses. Costo mensual: 4999 MXN. Descuento: 15%. Monto a pagar mensual con descuento aplicado = 749.85 MXN. Monto a pagar por los dos meses de duración con el descuento = 1499.7 MXN");
  }else if(programas == "curso" && becas == "Beca Jesua"){
    alert("Duración del curso: 2 meses. Costo mensual: 4999 MXN. Descuento: 50%. Monto a pagar mensual con descuento aplicado = 2499.5 MXN. Monto a pagar por los dos meses de duración con el descuento = 4999 MXN");
  }else if(programas == "carrera" && becas == "Beca Facebook"){
    alert("Duración del curso: 6 meses. Descuento: 20%. Monto a pagar mensual con descuento aplicado = 799.8 MXN.Monto a pagar por los dos meses de duración con el descuento = 4798.8 MXN");
  }else if(programas == "carrera" && becas == "Beca Google"){
    alert("Duración del curso: 6 meses. Descuento: 15%. Monto a pagar mensual con descuento aplicado = 749.85 MXN. Monto a pagar por los dos meses de duración con el descuento = 1499.7 MXN");
  }else if(programas == "carrera" && becas == "Beca Jesua"){
    alert("Duración del curso: 6 meses. Descuento: 50%. Monto a pagar mensual con descuento aplicado = 1999.5 MXN. Monto a pagar por los dos meses de duración con el descuento = 3999 MXN");
  }else if(programas == "master" && becas == "Beca Facebook"){
    alert("Duración del curso: 6 meses. Descuento: 20%. Monto a pagar mensual con descuento aplicado = 599.8 MXN. Monto a pagar por los dos meses de duración con el descuento = 1199.6 MXN");
  }else if(programas == "master" && becas == "Beca Google"){
    alert("Duración del curso: 6 meses. Descuento: 15%. Monto a pagar mensual con descuento aplicado = 449.85 MXN. Monto a pagar por los dos meses de duración con el descuento = 899.7 MXN");
  }else{
    programas == "master" && becas == "Beca Jesua";
    alert("Duración del curso: 6 meses. Descuento: 50%. Monto a pagar mensual con descuento aplicado = 1499.5 MXN. Monto a pagar por los dos meses de duración con el descuento = 2999 MXN");
  }                      
}

// ===========Ejecicio10=============================================
            
function enviarInfoPago () {
  let tipoVehiculo = document.getElementById("tipoVehiculo").value; 
  let litrosConsumidos = document.getElementById("litrosConsumidos").value; 
  let distanciaRecorrida = document.getElementById("distanciaRecorrida").value; 
  let cualquierNumero1 =parseFloat(litrosConsumidos); 
  let cualquierNumero2 =parseFloat(distanciaRecorrida); 

  if (tipoVehiculo === "Seleccione tipo de vehículo" || litrosConsumidos == "" || distanciaRecorrida == "") {
      alert("Selecciona un tipo de vehículo o ingresa un valores para cada dato faltante"); 
          
  }else if(tipoVehiculo === "automóvil" && 0 < litrosConsumidos <100 & distanciaRecorrida !== 0 ) {
    let precioPorKilometro = 0.20;
    let extraPorLitro = 5;

    totalPagar = (precioPorKilometro * distanciaRecorrida) + extraPorLitro;
    alert("El total a pagar es " + totalPagar);

  }else if(tipoVehiculo === "automóvil" && litrosConsumidos > 100 & distanciaRecorrida !== 0){
    let precioPorKilometro = 0.20;
    let extraPorLitro = 10;

    totalPagar = (precioPorKilometro * distanciaRecorrida) + extraPorLitro;
    alert("El total a pagar es " + totalPagar);

  }else if(tipoVehiculo === "motocicleta" && 0 < litrosConsumidos <100 & distanciaRecorrida !== 0 ){
    let precioPorKilometro = 0.10;
    let extraPorLitro = 5;

    totalPagar = (precioPorKilometro * distanciaRecorrida) + extraPorLitro;
    alert("El total a pagar es " + totalPagar);

  }else if(tipoVehiculo === "motocicleta" && litrosConsumidos > 100 & distanciaRecorrida !== 0){
    let precioPorKilometro = 0.10;
    let extraPorLitro = 10;

    totalPagar = (precioPorKilometro * distanciaRecorrida) + extraPorLitro;
    alert("El total a pagar es " + totalPagar);

  }else if(tipoVehiculo === "autobus" && 0 < litrosConsumidos <100 & distanciaRecorrida !== 0 ){
    let precioPorKilometro = 0.5;
    let extraPorLitro = 5;

    totalPagar = (precioPorKilometro * distanciaRecorrida) + extraPorLitro;
    alert("El total a pagar es " + totalPagar);

  }else{
    tipoVehiculo === "automóvil" && litrosConsumidos > 100 & distanciaRecorrida !== 0;

    let precioPorKilometro = 0.5;
    let extraPorLitro = 10;

    totalPagar = (precioPorKilometro * distanciaRecorrida) + extraPorLitro;
    alert("El total a pagar es " + totalPagar);    
  }
}   
    


    
   
   
    
  

