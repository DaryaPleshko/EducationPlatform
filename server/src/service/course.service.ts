import { getAllCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseByIdDB } from '../repository/course.repository';
import { iCourse } from '../interfaces/index';


const getAllCourse = async (): Promise<iCourse[]> => {
    const data = await getAllCourseDB();
    if (data.length == 0) throw new Error('БД не заполнена');
    return data;
}

const getCourseById = async (id: string): Promise<iCourse[]> => {
    const data = await getCourseByIdDB(id);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
}

const createCourse = async (course: string): Promise<iCourse[]> => {
    const data = await createCourseDB(course);
    if (data.length == 0) throw new Error('Данные не сохранены');
    return data;
}

const updateCourse = async (id: string, course: string): Promise<iCourse[]> => {
    const data = await updateCourseDB(id, course);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
}

const deleteCourseById = async (id: string): Promise<iCourse[]> => {
    const data = await deleteCourseByIdDB(id);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
}

export { getAllCourse, getCourseById, createCourse, updateCourse, deleteCourseById }