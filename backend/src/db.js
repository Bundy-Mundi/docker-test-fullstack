const db = require('mysql');
const pool = db.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER || "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE || "myapp",
    port: process.env.MYSQL_PORT || 3306
});
exports.pool = pool;