import { createUserDB, getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../repository/user.repository';
import { iUser } from '../interfaces/index';

const createUser = async (name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
    const data = await createUserDB(name, surname, email, pwd);
    if (data.length == 0) throw new Error('БД не заполнена');
    return data;
}

const getAllUsers = async (): Promise<iUser[]> => {
    const data = await getAllUsersDB();
    if (data.length == 0) throw new Error('такого id нет');
    return data;
}

const getUserById = async (id: string): Promise<iUser[]> => {
    const data = await getUserByIdDB(id);
    if (data.length == 0) throw new Error('данные не сохранены');
    return data;
}

const updateUser = async (id: string, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
    const data = await updateUserDB(id, name, surname, email, pwd);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
}

const deleteUser = async (id: string): Promise<iUser[]> => {
    const data = await deleteUserDB(id);
    if (data.length == 0) throw new Error('такого id нет');
    return data;
}

export { createUser, getAllUsers, getUserById, updateUser, deleteUser }