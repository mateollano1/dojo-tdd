const app = require('./app')
const supertest = require('supertest');
const request = supertest(app);
const codebreaker = require('./codeBreaker')



test('pruebas sobre las  XXXX', async done => {
    codebreaker.asignarCodigo("4768")
    const response = await request.get('/codebreaker?value=4768');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json')
    expect(response.body.result).toBe("XXXX")
    done()
})

test('se ingresa el 1768 y se espera XXX', async done => {
    codebreaker.asignarCodigo("4768")
    const response = await request.get('/codebreaker?value=1768');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json')
    expect(response.body.result).toBe("XXX")
    done()
})

test('se ingresa el 4789 y se espera XX_', async done => {
    codebreaker.asignarCodigo("4768")
    const response = await request.get('/codebreaker?value=4789');
    expect(response.status).toBe(200);
    expect(response.type).toBe('application/json')
    expect(response.body.result).toBe("XX_")
    done()
})