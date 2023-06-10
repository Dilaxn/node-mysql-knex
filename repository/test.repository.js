const conn = require('../db/dbConn');

const createTest = async (name,timestamp_value,datetime_value) => {
    const db = conn.getDbConnection();
    const [id] = await db('test').insert({name,timestamp_value,datetime_value});
    return id;
};

const getTests = async () => {
    const db = conn.getDbConnection();
    return db('test').select('*');
}

const getTestById = async (id) => {
    const db = conn.getDbConnection();
    return db('test').select('*').where({id: id});
}

const updateTest = async (id, name) => {
    const db = conn.getDbConnection();
    return db('test').update({name}).where({id: id});
}

const deleteTest = async (id) => {
    const db = conn.getDbConnection();
    return db('test').delete().where({id: id});
}

module.exports = {
    createTest,
    getTests,
    getTestById,
    updateTest,
    deleteTest
}