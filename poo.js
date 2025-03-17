//caneta bic

class caneta
{
    //atributos -> adjetivos
    cor;
    quantTinta= 100;

    constructor(cor = "Azul")
    {
        this.cor = cor;
    }

    //metodo -> função -> ação
    escrever(palavra)
    {   
        if (this.quantTinta > 0)
        {
            console.log("Escreveu: " + palavra);
            this.quantTinta = this.quantTinta - palavra.length;
        } else
        {
            console.log("Acabou a tinta");
        }

    }
}


//Herança
class CanetaQuadro extends Caneta
{
    cor = 1000;
}

// instância
let bic1 = new caneta("Verde");
let bic2 = new caneta("Preto");
let bic3 = new caneta();

let

//bic1.cor = "Preto"
//bic2.cor = "Verde"

bic1.escrever("Oi Turma, tudo bem?");
bic1.escrever("Oi Turma, tudo bem?");
bic1.escrever("Oi Turma, tudo bem?");
bic1.escrever("Oi Turma, tudo bem?");
bic1.escrever("Oi Turma, tudo bem?");
bic1.escrever("Oi Turma, tudo bem?");


console.log(bic1)
console.log(bic2)
console.log(bic3)

if (bic1 == bic2)
{
    console.log("verdade");
}else
{
    console.log("false");
}