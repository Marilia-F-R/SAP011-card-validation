import validator from './validator.js';

console.log(validator);


//Fazer com que o DOM seja completamente carregado (DOM é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estrutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página e fazer alterações.) 
document.addEventListener('DOMContentLoaded', function() {
  // Encontrar o botão de verificação pelo ID "verifyButton"
  const verifyButton = document.getElementById('verifyButton');
  // Quando o botão for clicado, a função "checkCardValidity" será chamada
  verifyButton.addEventListener('click', checkCardValidity);
 
});

//Interação do usuário no DOM, quando o DOM é carregado, encontra o botão "verifyButton", quando clica, chama a função checkCardValidity
function checkCardValidity() {
  //Obter a entrada do nome
  const cardHolder = document.getElementById("cardHolder").value; //.value é usado para acessar o valor atual inserido (campos de entrada)
  //Obter a entrada do numero do cartão / // Substitui tudo que não for dígito por vazio
  const cardNumber = document.getElementById("cardNumber").value.replace(/\D/g, ''); 
  //Verifica se o cartão é válido usando a função validateCardNumber. "Chame a função validateCardNumber com o valor da variável cardNumber como argumento e atribua o resultado retornado por essa função à variável isValid."
  const Valid = validateCardNumber(cardNumber);
  // Obter o resultado pelo ID result 
  const result = document.getElementById("result");
  // variável criada para construir o número mascarado
 
  
  // Verifica se os campos estão preenchidos. Se um ou outro não estiver, aparece o aviso.   
  if (!cardNumber || !cardHolder) {
    alert("Por favor, insira o seu nome e número do cartão de crédito.");
    return;
  }

  
  if (Valid) {
    const maskedNumber_1 = maskCardNumber(cardNumber);

    result.innerHTML = "Olá, " + cardHolder + "!" + " O cartão " + maskedNumber_1 + " é válido. Boas compras!";
  } else {
    const maskedNumber_1 = maskCardNumber(cardNumber);

    result.innerHTML = "Olá, " + cardHolder + "!" + " O cartão " + maskedNumber_1 + " é inválido, por favor tente outro cartão.";
  }
}

  
function validateCardNumber(cardNumber) {
  // Validação para garantir que o número do cartão tenha exatamente 16 dígitos
  if (/^\d{16}$/.test(cardNumber))
    var sum = 0;
  let double = false;

  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i));

    if (double) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }

    sum += digit;
    double = !double;
  }

  return sum % 10 === 0;
}
// Substituir os dígitos por "#" exceto os últimos 4 dígitos
function maskCardNumber(cardNumber) {
// cria uma variável iniciada com uma string vazia. Será usada para construir o número mascarado
  let maskedNumber_1 = "";
  //Extrai os últimos 4 digítos e armazena na variável lastFour. O sinal de menos siginifica que devemos contar os dígitos de tras para frente na string.
  const lastFour = cardNumber.slice(-4);
  // Inicia um loop que irá percorrer os caracteres do número do cartão, menos os últimos 4 dígitos (por isso cardNumber.length - 4). A cada iteração, um caractere "#" é adicionado à variável maskedNumber.
  for (let i = 0; i < cardNumber.length - 4; i++) {
  // Dentro do loop, o caractere "#" é adicionado à variável maskedNumber a cada iteração, substituindo os dígitos do cartão.
    maskedNumber_1 += "#";
  }
  // Depois do loop, os últimos 4 dígitos do número do cartão, armazenados em lastFour, são anexados à variável maskedNumber.
  maskedNumber_1 += lastFour;
  // A função retorna o número do cartão completamente mascarado, onde os dígitos foram substituídos por "#", menos os últimos 4 que permanecem visíveis.
  return maskedNumber_1;
}
  
  
  



