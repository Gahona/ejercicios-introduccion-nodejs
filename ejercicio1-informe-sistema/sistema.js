const os = require("os");
const pc = require("picocolors");

function formatearBytes(bytes) {
  // Convierte bytes a GB con 2 decimales
}

function formatearUptime(segundos) {
  // Devuelve el tiempo como "Xh Ym"
}

function colorearPorcentaje(valor) {
  // Verde si es menor de 60, amarillo entre 60 y 85, rojo si es mayor de 85
}

// Aquí obtienes los datos con os (hostname, type, cpus, totalmem...)
// y los imprimes con console.log, usando pc.cyan, pc.bold, pc.dim...
console.log(pc.bold(pc.cyan("Equipo:")), os.hostname());