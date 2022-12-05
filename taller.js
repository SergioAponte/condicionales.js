// 1.

// let num=+prompt('digite el primer numero')
// let num2=+prompt('digite el segundo numero')
// if (num<num2){
//     document.write(num)
//     document.write(num2)
// } 
// else if(num2<num){
//     document.write(num2)
//     document.write(num)
// }else{
//     document.write(num)
//     document.write(num2)
// }

// 2. 

// let num=+prompt('digite el numero')
// if (num>0 && num<=10){
//     paroimpar=num%2
//     switch (num){
//         case 1:
//             if (paroimpar==0){
//                     document.write('par')
//             }
//             else {
//                 document.write('impar')
//             }
//             break
//         case 2:
//             if (paroimpar==0){
//                     document.write('par')
//             }
//             else {
//                 document.write('impar')
//             }      break
//         case 3:
//                 if (paroimpar==0){
//                         document.write('par')
//                 }
//                 else {
//                     document.write('impar')
//                 }     break
//         case 4:
//             if (paroimpar==0){
//                     document.write('par')
//             }
//             else {
//                 document.write('impar')
//             }     break
//         case 5:
//             if (paroimpar==0){
//                     document.write('par')
//             }
//             else {
//                 document.write('impar')
//             }     break
//         case 6:
//             if (paroimpar==0){
//                     document.write('par')
//             }
//             else {
//                 document.write('impar')
//             }     break
//         case 7:
//             if (paroimpar==0){
//                     document.write('par')
//             }
//             else {
//                 document.write('impar')
//             }     break
//         case 8:
//             if (paroimpar==0){
//                     document.write('par')
//             }
//             else {
//                 document.write('impar')
//             }      break
//         case 9:
//             if (paroimpar==0){
//                     document.write('par')
//             }
//             else {
//                 document.write('impar')
//             }      break
//         case 10:
//             if (paroimpar==0){
//                     document.write('par')
//             }
//             else {
//                 document.write('impar')
//             }     break
// }
// }

// 3.

// let num=+prompt('digite el numero')
// if (num>0 && num<=10){
//     paroimpar=num%2
//     switch (num){
//         case 1:
//              document.write('Uno')
//             break
//         case 2:        
//             document.write('Dos')
//             break
//         case 3:
//             document.write('Tres')
//             break
//         case 4:
//             document.write('cuatro')
//             break
//         case 5:
//             document.write('Cinco')
//             break
//         case 6:
//             document.write('Seis')
//             break
//         case 7:
//             document.write('Siete')

//         case 8:
//             document.write( 'Ocho')
//             break
//         case 9:        
//             document.write('Nueve')
//             break
//         case 10:
//             document.write('Diez')
//             break
//         }
//     }

// 4.
// valor=200
// min=parseFloat(prompt('digite los minutos en llamada'))
// if (min>0 && min<=3){
//     precio=valor
// }else {
//     precio=200+((min-3)*100)
// }
// console.log(`el precio de la llamda es de ${precio}`)

// 5.
// let precioN=50000
// let precioB=50000
// let blancos=0
// let negros=0
// let c1=+prompt('digite la cantidad de conejos blancos')
// let c2=+prompt('digite la cantidad de conejos negros')
// while (c1!='' && c2!=''){
// let v1=+prompt('cuantos conejos blancos se vendieron')
//     blancos+=v1
// let v2=+prompt('cuantos conejos negros se vendieron')
//     negros+=v2
// if (v1!=0 && v2!=0){
//     montonegro=negros*precioN
//     montoblanco=blancos*precioB
// }
// console.log(`la cantidad de conejos vendida fue de ${blancos+negros}`)
// console.log(`el monto de los conejos blancos es de ${montoblanco}`)
// console.log(`el monto de los conejos negros es de ${montonegro}`)
// if (blancos>negros){
//     console.log(`la cantidad mas vendida fueron los blancos, con un total de ${blancos} conejos vendidos`)
// }else{
//     console.log(`la cantidad mas vendida fueron los negros, con un total de ${negros} conejos vendidos`)
// }
// break
// }

// 6

// let nombre=prompt('digite el nombre del estudiante')
// if (nombre!=''){
//     let evaluacion1=parseFloat(prompt('digite la nota de la evaluacion 1'))
//     let evaluacion2=parseFloat(prompt('digite la nota de la evaluacion 2'))
//     let evaluacion3=parseFloat(prompt('digite la nota de la evaluacion 3'))
//     if (evaluacion1>=0 && evaluacion2>=0 && evaluacion3>=0){
//         promEva=((evaluacion1+evaluacion2+evaluacion3)/3)*0.6
//     }
//     else{
//         console.log('error en las notas')
//     }
//     trabajo1=parseFloat(prompt('digite la nota del trabajop 1'))
//     trabajo2=parseFloat(prompt('digite la nota del trabajop 2'))
//     if (trabajo1>=0 && trabajo2>=0){
//         promTrabajo=((trabajo1+trabajo2)/2)*0.4
//     }
//     notafinal=promTrabajo+promEva
//     if (notafinal>=1 && notafinal<=5){
//         console.log(`el estudiante ${nombre} tiene como nota final ${notafinal}`)
//     }
//     else{
//         console.log('error en las notas')
//     }
// }

// 7

// producto=prompt('digite el nombre del articulo')
// while (producto!=''){
//     precioOrig=+prompt('digite el precio del articulo')
//     cantidad=+prompt('digite la cantidad de articulos')
//     clave=+prompt(`digite la clave del producto
//     1. 1
//     2. 2`)
//     if (clave==1){
//         descuento=0.1
//     }else{
//         descuento=0.2
//     }
//     preioDescu=precioOrig-
//     (precioOrig*descuento)
//     console.log(`el articulo ${producto} tiene un precio con descuento de ${preioDescu} y sus cantidades fueron de ${cantidad}, su precio en total fue de ${preioDescu*cantidad}`)
//     console.log(`su clave fue de ${clave} y su precio original fue de ${precioOrig}`)
//     break
// }

// 8

// anual=+prompt('digite su presupuesto anual')
// if (anual>0){
//     psiquiatria=parseFloat(prompt('digite el porcentaje para psiquiatria'))
//     traumatologia=parseFloat(prompt('digite el porcentaje para psiquiatria'))
//     pediatria=parseFloat(prompt('digite el porcentaje para psiquiatria'))
//     suma=psiquiatria+traumatologia+pediatria
//     if (suma==100){
//         procentajePsiqui=anual*(psiquiatria/100)
//         procentajetrauma=anual*(traumatologia/100)
//         procentajepediatria=anual*(pediatria/100)
//     }else{
//         console.log('error en los valores')
//     }
//     console.log(`el presupuesto para psiquiatria es de ${procentajePsiqui}`)
//     console.log(`el presupuesto para traumatologia es de ${procentajetrauma}`)
//     console.log(`el presupuesto para pediatria es de ${procentajepediatria}`)
// }

// 9.
// km=2.5
// distancia=+prompt('digite la distancia a recorrer')
// dias=+prompt('digite los dias de estancia')
// if (dias>=7 && distancia>800){
//     tiquete=(distancia*km)-(distancia*km)*0.3
//     console.log(`el valor del tiquete es de ${tiquete}`)

// }else{
//     console.log(`el valor del tiquete es de ${distancia*km}`)
// }