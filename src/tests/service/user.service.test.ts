import { createUser, getAllUsers, getUserById, updateUser, deleteUser } from '../../service/user.service';
import * as repository from '../../repository/user.repository';

describe('createUser:', () => {
    test('- test 1', async () => {
        const repOfFunction = jest.spyOn(repository, 'createUserDB');
        repOfFunction.mockResolvedValue([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);


        const result = await createUser('dasha', 'pleshko', 'dasha@mail.ru', '12345678');

        expect(repOfFunction).toHaveBeenCalled();
        expect(result[0].name).toBe('dasha');
        expect(result[0].surname).toBe('pleshko');
        expect(result[0].email).toBe('dasha@mail.ru');
        expect(result[0].pwd).toBe('12345678');
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);
    });
});

describe('getAllUsers:', () => {
    test('- test 1', async () => {
        const repOfFunction = jest.spyOn(repository, 'getAllUsersDB');
        repOfFunction.mockResolvedValue([
            { id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' },
            { id: '2', name: 'hanna', surname: 'pozdeeva', email: 'hanna@mail.ru', pwd: '987654321' }
        ]);

        const result = await getAllUsers();

        expect(repOfFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result[1].id).toBe('2');
        expect(result[0].name).toBe('dasha');
        expect(result[1].name).toBe('hanna');
        expect(result[0].email).toBe('dasha@mail.ru');
        expect(result[1].email).toBe('hanna@mail.ru');
        expect(result[0].pwd).toBe('12345678');
        expect(result[1].pwd).toBe('987654321');
        expect(result).toEqual([
            { id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' },
            { id: '2', name: 'hanna', surname: 'pozdeeva', email: 'hanna@mail.ru', pwd: '987654321' }
        ]);
        expect(result.length).toBe(2);
    });
});

describe('getUserById:', () => {
    test('- test 1', async () => {
        const repOfFunction = jest.spyOn(repository, 'getUserByIdDB');
        repOfFunction.mockResolvedValue([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);

        const result = await getUserById('1');

        expect(repOfFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);
    });
});

describe('updateUser:', () => {
    test('- test 1', async () => {
        const repOfFunction = jest.spyOn(repository, 'updateUserDB');
        repOfFunction.mockResolvedValue([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);

        const result = await updateUser('1', 'dasha', 'pleshko', 'dasha@mail.ru', '12345678');

        expect(repOfFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('dasha');
        expect(result[0].email).toBe('dasha@mail.ru');
        expect(result[0].pwd).toBe('12345678');

        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);
    });
});

describe('deleteUser:', () => {
    test('- test 1', async () => {
        const repOfFunction = jest.spyOn(repository, 'deleteUserDB');
        repOfFunction.mockResolvedValue([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);

        const result = await deleteUser('1');

        expect(repOfFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);
    });
});