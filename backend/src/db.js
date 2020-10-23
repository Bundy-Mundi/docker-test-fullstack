const db = require("mysql");
const pool = db.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: '1234',
    database: "myapp"
});
exports.pool = pool;