import { getAllCourseDB, getCourseByIdDB, createCourseDB, updateCourseDB, deleteCourseByIdDB } from '../../repository/course.repository';

const client = { query: jest.fn() };

jest.mock('pg', () => {
    const pool = { connect: jest.fn(() => client) };
    return {
        Pool: jest.fn(() => pool)
    }
});

describe('getAllCourseDB:', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });

        const result = await getAllCourseDB();

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');   
    });
});

describe('getCourseByIdDB:', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });

        const result = await getCourseByIdDB('1');

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
    })
});

describe('createCourseDB:', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });

        const result = await createCourseDB('js');

        expect(client.query).toHaveBeenCalled()
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result.length).toBe(1);
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
    });
});

describe('updateCourseDB:', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });

        const result = await updateCourseDB('1', 'js');

        expect(client.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
    })
});

describe('deleteCourseByIdDB:', () => {
    test('- test 1', async () => {
        client.query.mockResolvedValue({ rows: [{ id: '1', course: 'js' }] });

        const result = await deleteCourseByIdDB('1');

        expect(client.query).toHaveBeenCalled();
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', course: 'js' }]);
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('js');
    });
});