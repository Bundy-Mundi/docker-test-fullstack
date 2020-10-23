const express = require("expresss");
const bodyParser = require("body-parser");
const db = require('./db');
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

// Create DB Table
db.pool.query(`CREATE TABLE lists (
    id INTEGER AUTO_INCREMENT,
    value TEXT,
    PRIMARY KEY (id)
)`, (err, results, fields) => {
    if (err) console.log(err)
    else console.log(results)
})

app.get("/api/values", function(req, res){
    db.pool.query(`SELECT * FROM lists;`, (err, results, fields) => {
        if(err) return res.status(500).send(err)
        else return res.json.status(200).send(results)
    });
});
app.post("/api/values", function(req, res){
    console.log(req.body.value);
    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}");`, (err, results) => {
        if(err) return res.status(500).send(err)
        else return res.status(200).json({ success: true })
    })
});

app.listen(()=>console.log(`Server Listening On: ${PORT}`));