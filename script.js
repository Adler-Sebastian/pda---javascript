//Função para encontrar a frase com mais letras
function encontrarMaiorFrase(frase1, frase2, frase3) {
  const tamanhoFrase1 = frase1.length;
  const tamanhoFrase2 = frase2.length;
  const tamanhoFrase3 = frase3.length;

  if (tamanhoFrase1 >= tamanhoFrase2 && tamanhoFrase1 >= tamanhoFrase3) {
    return frase1;
  } else if (tamanhoFrase2 >= tamanhoFrase1 && tamanhoFrase2 >= tamanhoFrase3) {
    return frase2;
  } else {
    return frase3;
  }
}

// Solicitar ao usuário para inserir as frases
const frase1 = "Não sou eu!!";
const frase2 = "Eu tentei te ajudar desde o início!!";
const frase3 = "Já pensou que o monstro pode ser controlado?";

// Encontrar e exibir a frase com mais letras
const maiorFrase = encontrarMaiorFrase(frase1, frase2, frase3);
console.log("A frase com mais letras é:\n" + maiorFrase);
