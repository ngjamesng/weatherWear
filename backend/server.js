const app = require("./app");

const app = require('./app');
const { PORT } = require("./config");

app.listen(port, () => {
  console.log(`Server listening on ${port}`)
});