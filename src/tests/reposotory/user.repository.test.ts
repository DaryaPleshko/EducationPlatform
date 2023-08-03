import { createUserDB, getAllUsersDB, getUserByIdDB, updateUserDB, deleteUserDB } from '../../repository/user.repository';

const client = { query: jest.fn() }

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) }
    return {
        Pool: jest.fn(() => pool)
    }
});

describe('getAllUsersDB', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }] });

        const result = await getAllUsersDB();

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('dasha');
        expect(result[0].surname).toBe('pleshko');
        expect(result[0].email).toBe('dasha@mail.ru');
        expect(result[0].pwd).toBe('12345678');
    });
});

describe('getUserByIdDB:', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }] });

        const result = await getUserByIdDB('1');

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('dasha');
        expect(result[0].surname).toBe('pleshko');
        expect(result[0].email).toBe('dasha@mail.ru');
        expect(result[0].pwd).toBe('12345678');
    });
});

describe('createUserDB:', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }] });

        const result = await createUserDB('dasha', 'pleshko', 'dasha@mail.ru', '12345678');

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('dasha');
        expect(result[0].surname).toBe('pleshko');
        expect(result[0].email).toBe('dasha@mail.ru');
        expect(result[0].pwd).toBe('12345678');
    });
});

describe('updateUserDB:', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }] });

        const result = await updateUserDB('1', 'dasha', 'pleshko', 'dasha@mail.ru', '12345678');

        expect(client.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1',  name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('dasha');
        expect(result[0].surname).toBe('pleshko');
        expect(result[0].email).toBe('dasha@mail.ru');
        expect(result[0].pwd).toBe('12345678');
    })
});

describe('deleteUserDB:', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }] });

        const result = await deleteUserDB('1');

        expect(client.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: '12345678' }]);
        expect(result[0].id).toBe('1');
        expect(result[0].name).toBe('dasha');
        expect(result[0].surname).toBe('pleshko');
        expect(result[0].email).toBe('dasha@mail.ru');
        expect(result[0].pwd).toBe('12345678');
    });
});