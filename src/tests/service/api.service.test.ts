import { createUser, authorizationUser } from '../../service/api.service';
import * as repository from '../../repository/api.repository';
import bcrypt from 'bcrypt';

describe('createUser:', () => {
    test('- test 1', async () => {
        const mockUserByEmail = jest.spyOn(repository, 'getUserByEmailDB');
        const mockUserCreate = jest.spyOn(repository, 'createUserDB');
        const mockHash = jest.spyOn(bcrypt, 'hash');

        mockUserByEmail.mockResolvedValue([]);
        mockHash.mockResolvedValue('njnwfwh#468$%^&(*6');
        mockUserCreate.mockResolvedValue([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: 'njnwfwh#468$%^&(*6' }])

        const result = await createUser('dasha', 'pleshko', 'dasha@mail.ru', '12345678');

        expect(mockUserByEmail).toHaveBeenCalled();
        expect(mockUserCreate).toHaveBeenCalled();
        expect(mockHash).toHaveBeenCalled();
        expect(mockHash).toHaveBeenCalledWith('12345678', 2);
    });

    test('- test 2', async () => {
        const mockUserByEmail = jest.spyOn(repository, 'getUserByEmailDB');
        mockUserByEmail.mockResolvedValue([]);
        try {
            await authorizationUser('dasha@mail.ru', 'njnwfwh#468$%^&(*6');
        } catch (error: any) {
            expect(mockUserByEmail).toHaveBeenCalled();
            expect(error.message).toBe('такого пользователя нет')
        }
    });
});

describe('authorizationUser:', () => {
    test('- test 1', async () => {
        const getEmailDbMock = jest.spyOn(repository, 'getUserByEmailDB');
        const hashMock = jest.spyOn(bcrypt, 'compare');

        getEmailDbMock.mockResolvedValue([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: 'njnwfwh#468$%^&(*6' }])
        hashMock.mockResolvedValue(true);

        const result = await authorizationUser('dasha@mail.ru', 'njnwfwh#468$%^&(*6');
        expect(getEmailDbMock).toHaveBeenCalled();
        expect(hashMock).toHaveBeenCalled();
        expect(hashMock).toHaveBeenCalledWith('njnwfwh#468$%^&(*6', 'njnwfwh#468$%^&(*6')
        expect(result).toEqual([{ id: '1', name: 'dasha', surname: 'pleshko', email: 'dasha@mail.ru', pwd: 'njnwfwh#468$%^&(*6' }])
    });
});
