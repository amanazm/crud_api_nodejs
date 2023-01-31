const express = require('express');

require("./src/config/database").connect()
const router = require("./src/routes");
const auth = require('./src/middleware/auth')

const app = express();


const port = 3000;

app.use(express.json());
app.use('/api',auth,router);

app.listen(port,()=>{
  console.log(`[INFO] : Server is running at ${port}`);
})