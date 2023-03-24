const winston = require('winston');

const logger = winston.createLogger({
    level: 'debug',   // cambiamos 'info' por 'debug'
    format: winston.format.json(),
    defaultMeta: { service: 'user-service' }, // mensaje estándar, de momento no nos sirve
    transports: [
      // estas son todas las acciones que se van a ejecutar cada vez que haya un log
      //
      // - Write all logs with importance level of `error` or less to `error.log`
      // - Write all logs with importance level of `info` or less to `combined.log`
      //
      new winston.transports.Console(), // para que se muestren los logger también por pantalla
      new winston.transports.File({ filename: 'error.log', level: 'error' }),
      new winston.transports.File({ filename: 'combined.log' }),
    ],
});

module.exports = logger;    // para poder exportar este código