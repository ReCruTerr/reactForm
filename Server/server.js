const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = 3001;
const app = express();
const corsOptions = {
  origin: "http://localhost:5173",
};
const urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(bodyParser.json());
app.use(urlencodedParser);
app.use(cors(corsOptions));

app.get("/", (res) => {
  res.send("server");
});
app.post("/data", (req, res) => {
  const request = req.body;
  if (!request) return res.sendStatus(401);
  return request;
});
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
