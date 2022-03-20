const db = require('mongoose');

db.Promise = global.Promise;

function connect(url) {
  db.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(db => console.log('[database] connected in port', db.connection.port))
    .catch(error => console.error(error));
}

module.exports = connect;