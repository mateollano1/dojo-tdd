var code = ""
asignarCodigo = (input) => {
    code = input
}
generarAleatorio = () => {
    for (let index = 0; index < 4; index++) {
        const element = Math.floor(Math.random() * 10) + ""
        if (!code.includes(element)) {
            code = code + element
        } else {
            index--
        }
    }
}
evaluar = (input) => {
    let resultado = ""
    if (typeof input !== "string") {
        return "Debe ingresar un string"
    }
    if (input == code) {
        return "XXXX"
    }
    for (let index = 0; index < input.length; index++) {
        const element = input[index];

        for (let indexCode = 0; indexCode < code.length; indexCode++) {
            const elementCode = code[indexCode];
            if (element == elementCode) {
                if (index == indexCode) {
                    resultado = "X" + resultado
                } else {
                    resultado = resultado + "_"
                }
            }
        }
    }
    return resultado
}

module.exports = {
    evaluar,
    asignarCodigo
}