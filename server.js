const app = require('./app');
const colors = require('colors');
const config = require('./config/config');

const PORT = config.app.port;

app.listen(PORT, () => {
  console.log(
    `Server is successfully listening at http://localhost:${PORT}`.bgCyan
  );
});
