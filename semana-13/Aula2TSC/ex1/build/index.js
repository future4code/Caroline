console.log("oi");
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function separarNumeros(numeros) {
    const impar = numeros.filter((el) => {
        return el % 2 !== 0;
    });
    console.log(separarNumeros(arrayDeNumeros));
    return;
}
//# sourceMappingURL=index.js.map