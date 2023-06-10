

const knex = require('knex');
const knexFile = require('../config/knex.config');

let _DBConnection;

const connectDatabase =  () => {
    if(process.env.NODE_ENV === 'test') {
        return knex(knexFile.test);
    }else{
        return knex(knexFile.development);
    }
};


const getDbConnection =  () => {
    if (!_DBConnection) {
        _DBConnection =  connectDatabase();
    }
    return _DBConnection;
};

const closeDbConnection =  (conn) => {
    if(conn){
        return conn.close();
    }
};

module.exports = {
    getDbConnection,
    closeDbConnection
};