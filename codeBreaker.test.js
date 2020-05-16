const codeBreaker = require('./codeBreaker');

beforeAll(() => {
    codeBreaker.asignarCodigo("4768")
});
describe("pruebas sobre las  XXXX", () => {

    test('se ingresa el 4768 y se espera XXXX', () => {
        expect(codeBreaker.evaluar("4768")).toBe("XXXX");
    });
})
describe("prueba sobre XXX", () => {
    test('se ingresa el 4758 y se espera XXX', () => {
        expect(codeBreaker.evaluar("4758")).toBe("XXX");
    });
    test('se ingresa el 1768 y se espera XXX', () => {
        expect(codeBreaker.evaluar("1768")).toBe("XXX");
    });
    test('se ingresa el 4368 y se espera XXX', () => {
        expect(codeBreaker.evaluar("4368")).toBe("XXX");
    });
    test('se ingresa el 4769 y se espera XXX', () => {
        expect(codeBreaker.evaluar("4769")).toBe("XXX");
    });
})

describe("prueba sobre XX", () => {
    test('se ingresa el 4759 y se espera XXX', () => {
        expect(codeBreaker.evaluar("4759")).toBe("XX");
    });
    test('se ingresa el 1728 y se espera XXX', () => {
        expect(codeBreaker.evaluar("1728")).toBe("XX");
    });
})
describe("prueba sobre combinado", () => {
    test('se ingresa el 4789 y se espera XX_', () => {
        expect(codeBreaker.evaluar("4789")).toBe("XX_");
    });
    test('se ingresa el 4781 y se espera XX_', () => {
        expect(codeBreaker.evaluar("4781")).toBe("XX_");
    });
    test('se ingresa el 1687 y se espera ___', () => {
        expect(codeBreaker.evaluar("1687")).toBe("___");
    });
    test('se ingresa el 4815 y se espera X_', () => {
        expect(codeBreaker.evaluar("4815")).toBe("X_");
    });
})

describe("retorna vacio", () => {
    test('se ingresa el 9123 y se espera vacio', () => {
        expect(codeBreaker.evaluar("9123")).toBe("");
    });
})

describe("errores de sintaxis", () => {
    test('se ingresa un número, se espera mensaje de error', () => {
        expect(codeBreaker.evaluar(4848)).toBe("Debe ingresar un string");
    });
})