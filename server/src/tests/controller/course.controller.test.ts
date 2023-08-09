import request from 'supertest';
import app from '../../app';

let id;

test('post:', async () => {
    const res = await request(app).post('/course').send({ course: 'intrgrtest' });
    id = res.body[0].id;

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
});

test('get:', async () => {
    const res = await request(app).get('/course');

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
});

test('getById:', async () => {
    const res = await request(app).get(`/course/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
});

test('updateById:', async () => {
    const res = await request(app).put(`/course/${id}`).send({ course: 'intrgrtest2' });

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
});

test('delete:', async () => {
    const res = await request(app).delete(`/course/${id}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBe(1);
});