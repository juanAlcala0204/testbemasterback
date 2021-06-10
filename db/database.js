const mysql = require('mysql');
const { promisify } = require('util');
const { config } = require('../config');
const { database } = config;
// SE genera conexión a bd
const pool = mysql.createPool(database);

pool.getConnection((error, connection) => {
    if ( error ) {
        if (error.code === 'PROTOCOL_CONNECTION_LOST') {
            console.error('DATABASE CONNECTION  WAS CLOSED');
        }
        if (error.code === 'ER_CON_COUNT_ERROR') {
            console.error('DATABASE HAST TO MANY CONNECTIONS');
        }
        if (error.code === 'ECONNREFUSED') {
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log(' DB IS CONNECT');
    return;
});

// Intermedario para uso de promesas
pool.query = promisify(pool.query);

module.exports = pool;