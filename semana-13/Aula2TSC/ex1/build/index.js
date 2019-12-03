console.log("oi");
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function separarNumeros(numeros) {
    const impar = numeros.filter((number) => {
        return number % 2 !== 0;
    });
    console.log(impar);
    const quantidade = numeros.length;
    console.log(quantidade);
    var msgTotal = arrayDeNumeros.reduce(function (prev, cur) {
        return prev + cur;
    }, 0);
    console.log(msgTotal);
    return;
}
console.log(separarNumeros(arrayDeNumeros));
//# sourceMappingURL=index.js.map