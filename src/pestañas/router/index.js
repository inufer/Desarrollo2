const basedatos = require('./basedatos');
module.exports = (App) => {
  App.use('/basedatos', basedatos);
};