//varible global
var fecha_final;
var flujo=0;
var comision=0;
var iva = 0.16;
var importesglobal;
var total=0;
var pagos =0;
var intereses=0;
var dias;
//funciones
function funcionboton() {
    
    //Mandar a llamar los valores
    var importes = document.getElementById("importe").value;
    var plazos = document.getElementById("plazo").value;
    var tazas = document.getElementById("taza").value;
    var fechas = document.getElementById("fecha").value;
    //var frcs = document.getElementById("frc").value;
    //var pagoi = document.getElementById("pagoinicial").value;
    //alert('El prestamo es: '+ importes + 'plazo es:' + plazos + 'La taza es: '+tazas+'la fecha es: '+fechas);
    //variables necesarias para el calculo
    fecha_final = fechas;
    // calculos
    pagos = importes/12;
    comision = importes*0.01;
    intereses = importes*0.16/360*30;
    iva = comision+intereses*0.16;
    flujo = pagos+iva;
    console.log('Los pagos son de: '+pagos);
    console.log('El importe es: ' + importes);
    console.log('El iva es: ' + iva);
    console.log('el flujo es: '+flujo);
    console.log('la comision es: ' + comision);
    console.log('Los intereses son: '+intereses);
    importesglobal = importes;
    //Botones si estan en true radios
    if(document.getElementById('pago').checked==true){
        //calculos
        var amortizacion = 0;
        amortizacion = importes/plazos;
        console.log('La amortizacion es: '+ amortizacion);
        //si no hace esto con el radios
    }if(document.getElementById('frc').checked==true){
        //calculos
        let amortizacion = 0;
        amortizacion = tazas/plazos;
        amortizacion = amortizacion * 1 + amortizacion;
        amortizacion = Math.pow(amortizacion, plazos);
        //parte 2 de frc
        let amortizacion2 = 0;
        amortizacion2 = tazas/plazos;
        amortizacion2 = amortizacion2 + 1;
        amortizacion2 = Math.pow(amortizacion2, plazos);
        amortizacion2 = amortizacion2 - 1;
        //Division
        total=amortizacion/amortizacion2;
        total = importes * total;
        console.log('El pago es: ' + total);
    }
    calculo();
    fechafinal();
    
}
function fechafinal(){
    //diferencia de fecha
    var fecha = new Date(fecha_final); //11-10-21 11-12-21
    var fechaN = new Date(fecha.setMonth(fecha.getMonth() + 1));
    //Para mostrar en consola o ya sea en un document.write usa toLocalDateString
    console.log('La fecha de pago es: '+fechaN.toLocaleDateString());
    var contador=0;
    while(contador<12){
        var fechanueva = new Date(fechaN.setMonth(fechaN.getMonth()+1));
        console.log('La fecha de pago es: '+fechanueva.toLocaleDateString());
        fechanueva = new Date(fechanueva);
        contador=contador+1;
    }
}
function calculo(){
    //un bloque de acciones con condiones
    var importenuevo =  importesglobal;
    importenuevo = importenuevo - flujo;
    let contador = 1;
    while(contador<13){
        let interesesnuevos = importenuevo*0.16/360*30;
        let amortizacionueva = pagos-interesesnuevos;
        let ivanuevo = comision+interesesnuevos*0.16;
        let flujonuevo = pagos+ivanuevo;
        console.log('El importe es: '+importenuevo);
        console.log('El interes es: '+interesesnuevos);
        console.log('La amortizacion es: '+amortizacionueva);
        console.log('El iva es: '+ivanuevo);
        console.log('El flujo es: '+flujonuevo);
        console.log('La comision es de: '+comision);
        importenuevo=importenuevo-flujonuevo;
        document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+
                    `<tr>
                        <th scope="row">${contador}</th>
                        <td>${fecha_final}</td>
                        <td>YYYY-MM-DD</td>
                        <td>Dias</td>
                        <td>${importesglobal}</td>
                        <td>${importenuevo}</td>
                        <td>${comision}</td>
                        <td>${amortizacionueva}</td>
                        <td>${interesesnuevos}</td>
                        <td>${ivanuevo}</td>
                        <td>${flujonuevo}</td>
                    </tr>`;
                    contador=contador+1;
        //saldo_insoluto = 
        //let flujo=0;
        //let comision=0;
        //let iva = 0.16;
        //iva = saldo_insoluto*iva;
        //comision = saldo_insoluto*0.01;
        //flujo = comision*1+iva;
        //saldo_insoluto = saldo_insoluto - iva 
        //saldo_insoluto= saldo_insoluto - comision;
        //console.log('El saldo insoluto es: ' + saldo_insoluto + ' El flujo es: ' + flujo);
       // console.log('El iva es: ' + iva);
        //console.log('La comision es: '+comision);
        //contador=contador+1;
    }
}
