import { getAllCourse, getCourseById, createCourse, updateCourse, deleteCourseById } from '../../service/course.service';
import * as repository from '../../repository/course.repository'

describe('getAllCourse:', () => {
    test('- test 1', async () => {
        const repOfFunction = jest.spyOn(repository, 'getAllCourseDB');
        repOfFunction.mockResolvedValue([
            { id: '1', course: 'ts' },
            { id: '2', course: 'js' }
        ]);
        const result = await getAllCourse();
        expect(repOfFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result[1].id).toBe('2');
        expect(result[0].course).toBe('ts');
        expect(result[1].course).toBe('js');
        expect(result).toEqual([
            { id: '1', course: 'ts' },
            { id: '2', course: 'js' }
        ]);
        expect(result).toHaveLength(2);
        expect(result.length).toBe(2);
    });
});

describe('getCourseById:', () => {
    test('- test 1', async () => {
        const repOfFunction = jest.spyOn(repository, 'getCourseByIdDB');
        repOfFunction.mockResolvedValue([{ id: '1', course: 'ts' }]);

        const result = await getCourseById('1');
        
        expect(repOfFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', course: 'ts' }]);
    });
});

describe('createCourse:', () => {
    test('- test 1', async () => {
        const reoOfFunction = jest.spyOn(repository, 'createCourseDB');
        reoOfFunction.mockResolvedValue([{ id: '1', course: 'js' }]);

        const result = await createCourse('js');

        expect(reoOfFunction).toHaveBeenCalled();
        expect(result[0].course).toBe('js');
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', course: 'js' }]);
    });
});

describe('updateCourse:', () => {
    test('- test 1', async () => {
        const reoOfFunction = jest.spyOn(repository, 'updateCourseDB');
        reoOfFunction.mockResolvedValue([{ id: '1', course: 'ts' }]);

        const result = await updateCourse('1', 'ts');

        expect(reoOfFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result[0].course).toBe('ts');
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', course: 'ts' }]);
    });
});



describe('deleteCourseById:', () => {
    test('- test 1', async () => {
        const repOfFunction = jest.spyOn(repository, 'deleteCourseByIdDB');
        repOfFunction.mockResolvedValue([{ id: '1', course: 'js' }]);

        const result = await deleteCourseById('1');

        expect(repOfFunction).toHaveBeenCalled();
        expect(result[0].id).toBe('1');
        expect(result.length).toBe(1);
        expect(result).toEqual([{ id: '1', course: 'js' }]);
    });
});