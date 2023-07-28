import validator from './validator.js';

// Encontrar o botão de verificação pelo ID "verifyButton"
const verifyButton = document.getElementById('verifyButton');
// Quando o botão for clicado, a função "checkCardValidity" será chamada
verifyButton.addEventListener('click', checkCardValidity);

//Interação do usuário no DOM, quando o DOM é carregado, encontra o botão "verifyButton", quando clica, chama a função checkCardValidity
function checkCardValidity() {
  //Obter a entrada do nome
  const cardHolder = document.getElementById("cardHolder").value; //.value é usado para acessar o valor atual inserido (campos de entrada)
  //Obter a entrada do numero do cartão 
  const cardNumber = document.getElementById("cardNumber").value; 
  //Verifica se o cartão é válido usando a função validateCardNumber. "Chame a função validateCardNumber com o valor da variável cardNumber como argumento e atribua o resultado retornado por essa função à variável isValid."
  const valid = validator.isValid(cardNumber);
  // Obter o resultado pelo ID result 
  const result = document.getElementById("result");
    
  // Verifica se os campos estão preenchidos. Se um ou outro não estiver, aparece o aviso.   
  if (!cardNumber || !cardHolder) {
    alert("Por favor, insira o seu nome e número do cartão de crédito.");
    return;
  }

  // Exibe a mensagem de resultado (válido ou não) com o nome e número do cartão mascarado
  if (valid) {
    const maskedNumber_1 = validator.maskify(cardNumber);

    result.innerHTML = "Olá, " + cardHolder + "!" + " O cartão " + maskedNumber_1 + " é válido. Boas compras!";
  } else {
    const maskedNumber_1 = validator.maskify(cardNumber);

    result.innerHTML = "Olá, " + cardHolder + "!" + " O cartão " + maskedNumber_1 + " é inválido, por favor tente outro cartão.";
  }
}


console.log(validator); 

  
  
  



