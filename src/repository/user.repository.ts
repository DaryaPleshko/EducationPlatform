import { pool } from '../db';
import { iUser } from '../interfaces/index';

const createUserDB = async (name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
    const client = await pool.connect();
    const sql = `
    INSERT INTO users (name, surname, email, pwd)
    VALUES ($1, $2, $3, $4) RETURNING *`;

    const gettingSql = (await client.query(sql, [name, surname, email, pwd])).rows;
    return gettingSql;
}

const getAllUsersDB = async (): Promise<iUser[]> => {
    const client = await pool.connect();

    const sql = `SELECT * FROM users`;
    const gettingSql = (await client.query(sql)).rows;

    return gettingSql;
}

const getUserByIdDB = async (id: string): Promise<iUser[]> => {
    const client = await pool.connect();

    const sql = `SELECT * FROM uSERS where id = $1`;
    const gettingSql = (await client.query(sql, [id])).rows;

    return gettingSql;
}

const updateUserDB = async (id: string, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
    const client = await pool.connect();

    const sql = `UPDATE users SET name = $1, surname = $2, email = $3, pwd = $4
    WHERE id = $5 RETURNING *`;
    const gettingSql = (await client.query(sql, [name, surname, email, pwd, id])).rows;

    return gettingSql;
}

const deleteUserDB = async (id: string): Promise<iUser[]> => {
    const client = await pool.connect();

    const sql = `DELETE FROM users WHERE id = $1 RETURNING *`;
    const gettingSql = (await client.query(sql, [id])).rows;

    return gettingSql;
}

export { createUserDB, getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB };