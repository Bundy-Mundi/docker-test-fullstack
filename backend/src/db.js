const db = require('mysql');
const pool = db.createPool({
    connectionLimit: 10,
    host: 'mysql',
    user: 'root',
    password: 'bennie',
    database: "myapp"
});
exports.pool = pool;