const fs = require('fs');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

//console.log(process.argv);
//console.log(argv);

const base = argv.base;
const listar = argv.listar;
const hasta = argv.hasta;

let salida, consola = '';

salida = '================ \n';
salida += `  Tabla del ${base} \n`;
salida += '================ \n';

consola = salida;

for (let i = 1; i <= hasta; i++) {

    salida += `${base} x ${colors.red(i)} = ${ base*i } \n`;
    consola += `${base} x ${i} = ${ base*i } \n`;

}

if (listar) {
    console.log(salida);
}


nombreArch = `./salida/tabla-${base}.txt`;

fs.writeFileSync(nombreArch, consola);

nombreArch = '';
salida, consola = '';

console.log('Proceso finalizado');

//const [, , arg3 = 'base=5'] = process.argv;
//const [, base = 5] = arg3.split('=')
//console.log(base);