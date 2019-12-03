console.log("oi");
const arrayDeNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function separarNumeros(numeros) {
    const impar = numeros.filter((number) => {
        return number % 2 !== 0;
    });
    console.log(impar);
    const quantidade = numeros.length;
    console.log(quantidade);
    const soma = arrayDeNumeros.reduce(function (prev, cur) {
        return prev + cur;
    }, 0);
    console.log(soma);
    return;
}
console.log(separarNumeros(arrayDeNumeros));
const postsArray = [
    {
        autor: "Ching",
        texto: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        autor: "Catarina",
        texto: "Nullam accumsan tristique urna quis dapibus.",
    },
    {
        autor: "kid",
        texto: "Duis in facilisis purus, id consectetur dolor.",
    },
    {
        autor: "Leela",
        texto: "Integer iaculis felis id turpis interdum, porta pellentesque nibh volutpat.",
    },
    {
        autor: "Ching",
        texto: "Phasellus maximus sed mi at fermentum.",
    }
];
const autor = "Ching";
function textoPorAutor(posts, autor) {
    const autorSelecionado = posts.filter((el) => {
        return el.autor === autor;
    });
    return autorSelecionado;
}
console.log(textoPorAutor(postsArray, autor));
//# sourceMappingURL=index.js.map