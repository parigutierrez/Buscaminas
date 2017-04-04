
var numero=document.getElementsByClassName("numero");
var bomba=document.getElementsByClassName("bomba");

for(var i = 0;i<numero.length;i++){
  numero[i].addEventListener("click", mostrar);
}

for(var i = 0;i<bomba.length;i++){
  bomba[i].addEventListener("click", mostrar);
}

function mostrar(event){
  this.innerHTML=this.value;
}


//location.reload()
