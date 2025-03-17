// E -> P -> S  | Entrada, Processamento, Saída|

let n1 = 2;
let n2 = 3;
let n3 = 4;

function soma(n1, n2) //Entrada
{
    let resultado = n1 + n2 + n3; // Logica / processamento
    return resultado; // saída
}

let res = soma(3,5);
console.log(res);

// Função anonima

let mult = function(n1, n2)
{
    return n1 * n2;
}

let sub = function(n1, n2)
{
    return n1 - n2;
}

//console.log(mult(2,4))

function calc(n1, n2, op)
{
    return op(n1, n2);
}

console.log( calc(3,5, mult));
console.log( calc(3,5, soma));
console.log( calc(5,3, sub));
