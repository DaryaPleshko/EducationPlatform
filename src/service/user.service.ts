import { createUserDB } from '../repository/user.repository';

const createUser = async (name, surname, email, pwd) => {
    const data = await createUserDB(name, surname, email, pwd);
    return data;
}

export { createUser }