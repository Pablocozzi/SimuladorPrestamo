const EDAD = prompt (("Ingresa tu edad"));
let tasaUno = 1.90
let tasaDos = 1.85
let tasaTres = 1.75

function prestarPrivado (valorUno, valorDos, valorTres) {
    let resultado = valorUno * valorDos / valorTres;
    let resultadoRedondo = resultado.toFixed(2)
    return resultadoRedondo
}
function prestarMonotributista (valorUno, valorDos, valorTres) {
    let resultado = valorUno * valorDos / valorTres;
    let resultadoRedondo = resultado.toFixed(2)
    return resultadoRedondo

}
function prestarEmpleado (valorUno, valorDos, valorTres) {
    let resultado = valorUno * valorDos / valorTres;
    let resultadoRedondo = resultado.toFixed(2)
    return resultadoRedondo
}

if ( EDAD >= 18 && EDAD <= 84 ){

    alert ("Puedes solicitar tu prestamo")

    let eleccionPrestamo = parseInt(
        prompt("Tipo de cliente: \n 1.Privado \n 2.Monotributista \n 3.Empleado del banco \n 4.Salir"));
        
    while (eleccionPrestamo != 4 ){
        const DINERO = parseFloat (prompt("Cuanto dinero necesitas?"));
        const CUOTAS = parseFloat (prompt("En cuantas cuotas?"));
        
            if (eleccionPrestamo == 1) {
            prestarPrivado (DINERO, tasaUno, CUOTAS);
            alert ("Solicitas $" + DINERO + " en " + CUOTAS + ", tu cuota promedio es de $" + prestarPrivado (DINERO, tasaUno, CUOTAS));
            break;
            }
            if (eleccionPrestamo == 2) {
            prestarMonotributista (DINERO, tasaDos, CUOTAS);
            alert ("Solicitas $" + DINERO + " en " + CUOTAS + ", tu cuota promedio es de $" + prestarMonotributista (DINERO, tasaDos, CUOTAS));
            break;
            }
            if (eleccionPrestamo == 3) {
            prestarEmpleado (DINERO, tasaTres, CUOTAS);
            alert ("Solicitas $" + DINERO + " en " + CUOTAS + ", tu cuota promedio es de $" + prestarEmpleado (DINERO, tasaTres, CUOTAS));
            break;
            }
        }
    

} else{
    alert ("No puedes solicitar tu prestamo")
} 




