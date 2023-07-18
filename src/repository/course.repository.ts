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

const createCourseDB = async (course: string): Promise<iCourse[]> => {
    const client = await pool.connect();

    const sql = ` INSERT INTO courses (course)
    VALUES ($1) RETURNING *`;
    const gettingSql = (await client.query(sql, [course])).rows;

    return gettingSql;
}

const updateCourseDB = async (id: string, course: string): Promise<iCourse[]> => {
    const client = await pool.connect();

    const sql = `UPDATE courses SET course = $1
    WHERE id = $2 RETURNING *`;
    const gettingSql = (await client.query(sql, [course, id])).rows;

    return gettingSql;
}

const deleteCourseByIdDB = async (id: string): Promise<iCourse[]> => {
    const client = await pool.connect();

    const sql = `DELETE FROM courses WHERE id = $1 RETURNING *`;
    const gettingSql = (await client.query(sql, [id])).rows;

    return gettingSql;
}

export { getAllCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseByIdDB }