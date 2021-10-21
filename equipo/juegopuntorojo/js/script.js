document.getElementById('player').addEventListener("mouseover",sumarPuntos);

var puntos = 0;
var tiempo = 60;
var necesarios = 30;
function sumarPuntos(){
   puntos++;
   //Leer el id de los puntos que vamos a acumulando MENSAJE visible
   document.getElementById("puntos").innerHTML = "Puntos: <b>" + puntos + "/" + necesarios + "  </b>";
   //Asignar nuevos numeros para nuestras medidas top y left
   //Redondea numeros del 1 al 500
   randNum =  Math.round(Math.random()*500);
   randNum2 =  Math.round(Math.random()*500);
   //Asignar una nueva medida para nuestro player
   document.getElementById("player").style.marginTop =randNum + "px";
   document.getElementById("player").style.marginLeft =randNum2 + "px";
   if (puntos == 30) {
      //Manda mensaje al usuario de ganaste
   	alert("ganaste");
      // Recagar pagina
      location.reload();
   }
}

//Funcion para restar el tiempo
function restarTiempo() {
   //Tiempo va ir en decremento
	tiempo--;
   //Leera nuestro ID del HTML para posteriormente asignarle el nuevo valor
	document.getElementById("tiempo").innerHTML = "&nbsp;&nbsp;&nbsp;Tiempo: " + tiempo; 
	if (tiempo == 0) {
		alert("Perdiste amigo :(");
		tiempo = 0;
		puntos = 0;
      location.reload();
	}
}

setInterval(restarTiempo,1000);