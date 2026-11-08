const fs = require("fs");
const path = require("path");
const pc = require("picocolors");

const ruta = process.argv[2] || process.cwd();

if (!fs.existsSync(ruta)) {
  console.log(pc.bgRed(pc.white(` La ruta no existe: ${ruta} `)));
  process.exit(1);
}

const elementos = fs.readdirSync(ruta, { withFileTypes: true });

let carpetas = 0;
let archivos = 0;
let bytesTotales = 0;

console.log(pc.bold(pc.cyan(`Contenido de ${ruta}`)));

for (const elemento of elementos) {
  const rutaCompleta = path.join(ruta, elemento.name);
  const oculto = elemento.name.startsWith(".");

  if (elemento.isDirectory()) {
    carpetas++;
    const texto = elemento.name + "/";
    console.log(oculto ? pc.dim(texto) : pc.blue(texto));
  } else {
    archivos++;
    const tamanio = fs.statSync(rutaCompleta).size;
    bytesTotales += tamanio;
    const kb = (tamanio / 1024).toFixed(1) + " KB";
    console.log(oculto ? pc.dim(`${elemento.name}  ${kb}`) : `${pc.green(elemento.name)}  ${pc.dim(kb)}`);
  }
}

console.log(
  pc.bold(`\n${carpetas} carpetas, ${archivos} archivos, ${(bytesTotales / 1024).toFixed(1)} KB en total`)
);