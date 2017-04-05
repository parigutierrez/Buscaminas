
var numero=document.getElementsByClassName("numero");
var bomba=document.getElementsByClassName("bomba");

for(var i = 0;i<numero.length;i++){
  numero[i].addEventListener("click", mostrar);
}

for(var i = 0;i<bomba.length;i++){
  bomba[i].addEventListener("click", mostrar);
  bomba[i].addEventListener("click", fin);
}

function mostrar(event){
  this.innerHTML=this.value;
}

function clickFuera(){
  event.stopPropagation();
}
tabla.addEventListener("click", clickFuera);

document.addEventListener('click', seguirJugando);
function seguirJugando(){
  alert("Sigue jugango");

}

var reiniciar = document.getElementById("reset");
reiniciar.addEventListener("click", reset);
function reset(e){
  e.stopPropagation();
  location.reload()
}

function fin() {
    setTimeout(function(){ alert("¡¡ B O M B A !! Esto ha explotado. Click en Reset para volver a jugar"); }, 300);
    deshabilitar();
}

function deshabilitar(){
     var botones = document.getElementsByTagName('button');
     for(var i = 0; i< botones.length; i++){
       botones[i].disabled = true;
     }
}
