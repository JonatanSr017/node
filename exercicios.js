const readline = require('readline');

// Função que verifica o turno e retorna a saudação
function saudacaoPorTurno(turno) {
  turno = turno.toUpperCase(); // garantir maiúscula

  if (turno === "M") {
    return "Bom Dia!";
  } else if (turno === "V") {
    return "Boa Tarde!";
  } else if (turno === "N") {
    return "Boa Noite!";
  } else {
    return "Turno inválido.";
  }
}

// Entrada de dados com readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Qual turno você estuda? (M - Matutino, V - Vespertino, N - Noturno): ", function(entrada) {
  const resultado = saudacaoPorTurno(entrada); // chama a função
  console.log(resultado); // mostra o resultado
  rl.close();
});
