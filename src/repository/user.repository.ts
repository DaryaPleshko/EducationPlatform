import { pool } from '../db';

const createUserDB = async (name, surname, email, pwd) => {
    const client = await pool.connect();
    const sql = `
    INSERT INTO users (name, surname, email, pwd)
    VALUES ($1, $2, $3, $4) RETURNING *`;

    const gettingSql = (await client.query(sql, [name, surname, email, pwd])).rows;
    return gettingSql;
}

export { createUserDB };