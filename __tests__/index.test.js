const request = require('supertest');
const app = require('../index');

describe('API Endpoints', () => {
	test("GET / responde '¡Hola Mundo!'", async () => {
		const res = await request(app).get('/');
		expect(res.statusCode).toBe(200);
		expect(res.text).toBe('¡Hola Mundo!');
	});
});
