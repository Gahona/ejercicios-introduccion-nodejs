const os = require('os');
const fs = require('fs');
const path = require('path');
const pc = require('picocolors');

// 1. Construir el texto plano del informe (sin colores)
const total = os.totalmem();
const libre = os.freemem();
const porcentaje = ((total - libre) / total) * 100;
const gb = (bytes) => (bytes / 1024 ** 3).toFixed(2) + ' GB';

const informe = [
  '=== INFORME DEL SISTEMA ===',
  `Equipo:        ${os.hostname()}`,
  `Sistema:       ${os.type()} ${os.release()} (${os.arch()})`,
  `Usuario:       ${os.userInfo().username}`,
  `Memoria total: ${gb(total)}`,
  `Memoria libre: ${gb(libre)}`,
  `Memoria usada: ${porcentaje.toFixed(1)} %`,
  '',
].join('\n');

// Rutas fijas junto al script
const rutaInforme = path.join(__dirname, 'informe.txt');
const rutaHistorial = path.join(__dirname, 'historial.log');

// 2. Guardar el informe (se sobrescribe)
fs.writeFileSync(rutaInforme, informe, 'utf8');

// 3. Añadir una línea al historial
const ahora = new Date();
const fecha = ahora.toLocaleDateString('sv-SE'); // formato 2026-11-01
const hora = ahora.toTimeString().slice(0, 8);   // formato 10:32:15
const linea = `${fecha} ${hora} | RAM usada: ${Math.round(porcentaje)}%\n`;
fs.appendFileSync(rutaHistorial, linea, 'utf8');

// 4. Mostrar por consola con colores
console.log(pc.bold(pc.cyan('=== INFORME DEL SISTEMA ===')));
console.log(pc.dim('Equipo:        ') + os.hostname());
console.log(pc.dim('Sistema:       ') + `${os.type()} ${os.release()} (${os.arch()})`);
console.log(pc.dim('Usuario:       ') + os.userInfo().username);
console.log(pc.dim('Memoria total: ') + gb(total));
console.log(pc.dim('Memoria libre: ') + gb(libre));
console.log(pc.dim('Memoria usada: ') + pc.yellow(porcentaje.toFixed(1) + ' %'));
console.log(pc.green('Informe guardado en informe.txt'));
