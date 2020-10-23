const express = require("expresss");
const bodyParser = require("body-parser");
const db = require('./db');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.get("/", (req, res)=>{
    db.pool.query('');
});
app.post("/", (req, res)=>{
    return "Yes!"
});

app.listen(()=>console.log(`Server Listening On: ${PORT}`));