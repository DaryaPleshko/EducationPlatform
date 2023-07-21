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
    try {
        await client.query('BEGIN');
        const sql = ` INSERT INTO courses (course)
    VALUES ($1) RETURNING *`;
        const gettingSql = (await client.query(sql, [course])).rows;

        await client.query('COMMIT');

        return gettingSql;
    } catch (error) {
        await client.query('ROLLBACK');
        return [];
    };
}

const updateCourseDB = async (id: string, course: string): Promise<iCourse[]> => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `UPDATE courses SET course = $1
    WHERE id = $2 RETURNING *`;
        const gettingSql = (await client.query(sql, [course, id])).rows;

        await client.query('COMMIT');

        return gettingSql;
    } catch (error) {
        await client.query('ROLLBACK');
        return [];
    };
}

const deleteCourseByIdDB = async (id: string): Promise<iCourse[]> => {
    const client = await pool.connect();
    try {
        await client.query('BEGIN');
        const sql = `DELETE FROM courses WHERE id = $1 RETURNING *`;
        const gettingSql = (await client.query(sql, [id])).rows;

        await client.query('COMMIT');

        return gettingSql;
    } catch (error) {
        await client.query('ROLLBACK');
        return [];
    };
}

export { getAllCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseByIdDB }