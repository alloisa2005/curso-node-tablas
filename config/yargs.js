const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        describe: 'Es la base de la tabla de multiplicar',
        demandOption: true
    })
    .options('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Muestra la tabla en consola'
    })
    .options('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Número máximo hasta donde multiplica'
    })
    .check((argv, options) => {
        if (isNaN(argv.base)) {
            throw `La base tiene que ser un número.`
        }
        if (isNaN(argv.h)) {
            throw `Hasta tiene que ser un número.`
        }
        return true;
    })
    .argv;

module.exports = argv;