const app = require("./app");

const port = 3001;

app.listen(port, () => {
  console.log(`Backend api available at ${process.env.API_PATH}`);
});
