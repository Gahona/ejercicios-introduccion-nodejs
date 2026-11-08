const os = require("os");
const pc = require("picocolors");

function formatearBytes(bytes) {
  return (bytes / 1024 / 1024 / 1024).toFixed(2) + " GB";
}

function formatearUptime(segundos) {
  const horas = Math.floor(segundos / 3600);
  const minutos = Math.floor((segundos % 3600) / 60);
  return `${horas}h ${minutos}m`;
}

function colorearPorcentaje(valor) {
  if (valor < 60) return pc.green(valor.toFixed(1) + "%");
  if (valor <= 85) return pc.yellow(valor.toFixed(1) + "%");
  return pc.red(valor.toFixed(1) + "%");
}

const titulo = (texto) => pc.bold(pc.cyan(texto));
const etiqueta = (texto) => pc.dim(texto + ":");

const total = os.totalmem();
const libre = os.freemem();
const porcentajeUsado = ((total - libre) / total) * 100;

console.log(titulo("=== INFORME DEL SISTEMA ==="));
console.log(etiqueta("Equipo"), os.hostname());
console.log(etiqueta("Sistema"), `${os.type()} ${os.release()} (${os.arch()})`);
console.log(etiqueta("Usuario"), os.userInfo().username);
console.log(etiqueta("Procesador"), `${os.cpus()[0].model} (${os.cpus().length} CPUs)`);
console.log(etiqueta("Memoria total"), formatearBytes(total));
console.log(etiqueta("Memoria libre"), formatearBytes(libre));
console.log(etiqueta("Memoria usada"), colorearPorcentaje(porcentajeUsado));
console.log(etiqueta("Tiempo activo"), formatearUptime(os.uptime()));