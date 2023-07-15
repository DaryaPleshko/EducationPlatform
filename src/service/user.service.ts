import { createUserDB, getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../repository/user.repository';
import { iUser } from '../interfaces/index'

const createUser = async (name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
    const data = await createUserDB(name, surname, email, pwd);
    return data;
}

const getAllUsers = async (): Promise<iUser[]> => {
    const data = await getAllUsersDB();
    return data;
}

const getUserById = async (id: string): Promise<iUser[]> => {
    const data = await getUserByIdDB(id);
    return data;
}

const updateUser = async (id: string, name: string, surname: string, email: string, pwd: string): Promise<iUser[]> => {
    const data = await updateUserDB(id, name, surname, email, pwd);
    return data;
}

const deleteUser = async (id: string): Promise<iUser[]> => {
    const data = await deleteUserDB(id);
    return data;
}

export { createUser, getAllUsers, getUserById, updateUser, deleteUser }