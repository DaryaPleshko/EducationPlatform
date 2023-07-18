import { getAllCourseDB, getCourseByIdDB, createCourseDB } from '../repository/course.repository';
import { iCourse } from '../interfaces/index';


const getAllCourse = async (): Promise<iCourse[]> => {
    const data = await getAllCourseDB();
    return data;
}

const getCourseById = async (id: string): Promise<iCourse[]> => {
    const data = await getCourseByIdDB(id);
    return data;
}

const createCourse = async (course: string): Promise<iCourse[]> => {
    const data = await createCourseDB(course);
    return data;
}

export { getAllCourse, getCourseById, createCourse }