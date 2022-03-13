const {crearArchivo} = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear()

const base = argv.b;
const l = argv.l
const h = argv.h
crearArchivo(base, l, h)
    .then(tabla => console.log(tabla.rainbow, 'creado'))
    .catch(error => console.log(error))

// console.log(process.argv)
// console.log(argv)

// const [, , arg3= '--base=5'] = process.argv
// const [, base = 5] = arg3.split('=')
// // const base = 4;
// crearArchivo(base)
//     .then(tabla => console.log(tabla, 'creado'))
//     .catch(error => console.log(error))
