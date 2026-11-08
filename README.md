# Ejercicios: Introducción a Node.js

**Integrante:** Unax Gahona Grupo Azul

## Ejercicio 1 · Informe del sistema
Carpeta `ejercicio1-informe-sistema`. Muestra por consola los datos del equipo (nombre, sistema, usuario, procesador, memoria y tiempo activo). El porcentaje de memoria usada se colorea en verde, amarillo o rojo según el valor.

## Ejercicio 2 · Explorador de carpetas
Carpeta `ejercicio2-explorador-carpetas`. Recibe una ruta (o usa la carpeta actual) y lista su contenido: carpetas en azul, archivos en verde con su tamaño y ocultos en gris. Al final muestra un resumen. Si la ruta no existe, muestra un error y termina.

## Ejercicio 3 · Informe a archivo con historial
Carpeta `ejercicio3-informe-archivo`. Guarda el informe en `informe.txt`, que se sobrescribe en cada ejecución, y añade una línea a `historial.log` con la fecha y el porcentaje de RAM usada.

## Ejercicio 4 · Organizador de archivos (opcional)
Carpeta `ejercicio4-organizador`. Clasifica los archivos de una carpeta en subcarpetas según su extensión. Con `--dry-run` solo muestra los movimientos sin hacerlos.

## Cómo ejecutar
En cada carpeta:

```bash
npm install
node nombre-del-archivo.js
```
