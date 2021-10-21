function validar(){
    var correo, contraseña, repetirCorreo, repetirContraseña, nombre, telefono, calle, ciudad, sitioWeb, expresion;
      correo = document.getElementById("correo").value;
      contraseña = document.getElementById("contraseña").value;
      repetirCorreo = document.getElementById("repetirCorreo").value;
      repetirContraseña = document.getElementById("repetirContraseña").value;
      nombre = document.getElementById("nombre").value;
      telefono = document.getElementById("telefono").value;
      calle = document.getElementById("calle").value;
      ciudad = document.getElementById("ciudad").value;
      sitioWeb = document.getElementById("sitioWeb").value;
     
      
      /*if(nombre === "" || apellidos === "" || correo === "" || usuario === "" || clave === "" || telefono === ""){
          alert("Todos los campos son obligatorios");
          return false;
      }*/
      if(correo === ""){
          alert("El campo, correo, esta vacio");
          return false;
      } else if(contraseña ===""){
          alert("El campo contraseña esta vacio");
          return false;
      } else if(repetirCorreo ===""){
        alert("El campo, repetir correo, esta vacio");
        return false;
      } else if(repetirContraseña ===""){
        alert("El campo, repetir contraseña, esta vacio");
        return false;
      } else if(nombre ===""){
        alert("El campo, nombre, esta vacio");
        return false;
      } else if(telefono ===""){
        alert("El campo, telefono, esta vacio");
        return false;
      } else if(calle ===""){
        alert("El campo, calle, esta vacio");
        return false;
      } else if(ciudad ===""){
        alert("El campo, ciudad, esta vacio");
        return false;
      } else if(sitioWeb ===""){
        alert("El campo, sitio web, esta vacio");
        return false;
      } 
      }