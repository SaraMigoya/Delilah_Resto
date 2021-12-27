const winston = require('winston');
const { createLogger, transports } = require("winston");
const { combine, simple, timestamp, printf, colorize, json } = winston.format;

const timezoned = () => {
  return new Date().toLocaleString("es-AR");
};

const myCustomLevels = {
  levels: {
    error: 0,
    warn: 1,
    data: 2,
    info: 3,
    debug: 4,
    verbose: 5,
    silly: 6
  },
  colors: {
    error: "red",
    warn: "blue",
    data: "grey",
    info: "green",
    debug: "yellow",
    verbose: "cyan",
    silly: "magenta"
  },
};

const colorizer = winston.addColors(myCustomLevels.colors)



module.exports = createLogger({
  format: combine(
    simple(),
    timestamp({ format: timezoned }),
    printf((info) => `[${info.timestamp}] ${info.level} ${info.message}`)
  ),
  transports: [
    new transports.Console({
      level: 'debug',
      format: combine(
        colorize({colorizer, all: true})
      )
    }),
    new transports.File({
      level: 'info',
      maxsize: 5120000,
      maxFiles: 5,
      filename: `${__dirname}/../logs/log-ong.log`
    })
  ],
});
