// criar um arquivo
//const fs = require("fs");

//let conteudo = "arquivo criado pelo nodejs.";
//console.log("Antes");

//fs.writeFile("texto.txt", conteudo, function(erro){
//    console.log(erro);
//    console.log("gravou")

//});

console.log("Digite o n1:");
process.stdin.on('data', function(dados){
    let n1 = dados.toString().trim();
    console.log(n1);
    if (n1 == "s")
    {
        process.exit();
    }
});