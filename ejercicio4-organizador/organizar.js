const fs = require('fs');
const path = require('path');
const pc = require('picocolors');

// Extensión → carpeta destino
const CATEGORIAS = {
  '.jpg': 'imagenes', '.jpeg': 'imagenes', '.png': 'imagenes', '.gif': 'imagenes',
  '.pdf': 'documentos', '.docx': 'documentos', '.txt': 'documentos', '.xlsx': 'documentos',
  '.mp3': 'audio', '.wav': 'audio',
  '.mp4': 'video', '.mkv': 'video',
  '.zip': 'comprimidos', '.rar': 'comprimidos',
};

// Uso: node organizar.js <carpeta> [--dry-run]
const dryRun = process.argv.includes('--dry-run');
const carpeta = process.argv.slice(2).find((a) => !a.startsWith('--')) || '.';
const resumen = {};

for (const nombre of fs.readdirSync(carpeta)) {
if (nombre.startsWith('.')) continue;
  const origen = path.join(carpeta, nombre);

  // Saltar carpetas
  if (fs.statSync(origen).isDirectory()) continue;

  const ext = path.extname(nombre).toLowerCase();
  const categoria = CATEGORIAS[ext] || 'otros';
  const destinoDir = path.join(carpeta, categoria);

  console.log(`${pc.yellow(nombre)} → ${pc.green(categoria + '/')}`);
  resumen[categoria] = (resumen[categoria] || 0) + 1;

    const destinoFinal = path.join(destinoDir, nombre);

  if (!dryRun) {
    if (fs.existsSync(destinoFinal)) {
      console.log(pc.red(`  Ya existe ${destinoFinal}, se omite`));
      continue;
    }
    fs.mkdirSync(destinoDir, { recursive: true });
    fs.renameSync(origen, destinoFinal);
  }
}
console.log(pc.bold('\nResumen:'));
for (const [categoria, n] of Object.entries(resumen)) {
  console.log(`  ${categoria}: ${n}`);
}
if (dryRun) console.log(pc.cyan('\n(Modo simulación: no se ha movido nada)'));