// exportar -> escribir "export" antes de funciONES que se quieran exportar

export function suma(a, b) {
    return a + b;
}

export function multiplica(a, b) {
    return a * b;
}

export function eleva(a, b) {
    return a ** b;
}

export function factorial(a) {
    if (a === 1) {
        return 1;
    }
    return a * factorial(a-1);
}

export const nombre = "matematicas";