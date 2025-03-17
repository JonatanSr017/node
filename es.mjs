// expressões idiomaticas

export let vetor = ["a", "b", "c"];


vetor.forEach((item) => console.log(item))

let soma = function (a, b) {
    return a + b;    
}

// arrow function
let mult = (a,b) => a + b;


let acordado = null;

let deitado = false;



if (deitado == true)
{
    acordado = false;
}else
{
    acordado = true;
}


// if ternario
acordado = (deitado == true)? false : true;


// destructuring
let cidades = ["Curitiba", "Colombo", "Pinhais"]

let a = cidades[0];

// quebrando array
let [b, c, ...resto] = cidades;

console.log(a, b, c, resto, cidades)

//mesclando array
let novo = [...cidades, ...vetor];

console.log(novo);


let pessoa = {
    nome: "Maria",
    idade: 23,
    peso: 45.3
}

let maria = pessoa.nome;

console.log(maria, pessoa);

let {nome, idade} = pessoa;

console.log(nome, idade);

nome = "João";

console.log(pessoa, nome);

