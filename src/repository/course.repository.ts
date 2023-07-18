import { pool } from '../db';
import { iCourse } from '../interfaces/index';


const getAllCourseDB = async (): Promise<iCourse[]> => {
    const client = await pool.connect();

    const sql = `SELECT * FROM courses`;
    const gettingSql = (await client.query(sql)).rows;

    return gettingSql;
}

const getCourseByIdDB = async (id: string): Promise<iCourse[]> => {
    const client = await pool.connect();

    const sql = `SELECT * FROM courses WHERE id = $1`;
    const gettingSql = (await client.query(sql, [id])).rows;

    return gettingSql;
}

const createCourseDB = async (course: string) => {
    const client = await pool.connect();

    const sql = ` INSERT INTO courses (course)
    VALUES ($1) RETURNING *`;
    const gettingSql = (await client.query(sql, [course])).rows;

    return gettingSql;
}

export { getAllCourseDB, getCourseByIdDB, createCourseDB }