var server = require('./server');

module.exports = server.listen(3000, () => {
  console.log("SERVER RUNNING MY FRIEND!")
});