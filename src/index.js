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
  const valid = validateCardNumber(cardNumber);
  // Obter o resultado pelo ID result 
  const result = document.getElementById("result");
  
 
  
  // Verifica se os campos estão preenchidos. Se um ou outro não estiver, aparece o aviso.   
  if (!cardNumber || !cardHolder) {
    alert("Por favor, insira o seu nome e número do cartão de crédito.");
    return;
  }

  // Exibe a mensagem de resultado (válido ou não) com o nome e número do cartão mascarado
  if (valid) {
    const maskedNumber_1 = maskCardNumber(cardNumber);

    result.innerHTML = "Olá, " + cardHolder + "!" + " O cartão " + maskedNumber_1 + " é válido. Boas compras!";
  } else {
    const maskedNumber_1 = maskCardNumber(cardNumber);

    result.innerHTML = "Olá, " + cardHolder + "!" + " O cartão " + maskedNumber_1 + " é inválido, por favor tente outro cartão.";
  }
}
// Algoritmo de Luhn
function validateCardNumber(cardNumber) {
  
  // Inicializar a variável "sum" com valor 0. Ela será usada para somar os dígitos do cartão.
  let sum = 0;
  // Inicializar a variável "double" com valor false (false porque o primeiro numero de trás para frente não precisa ser duplicado). Essa variável indica se o próximo dígito deve ser duplicado.
  let double = false;
  //  inicializar a variável i com o valor do comprimento da sequência cardNumber menos 1, então length - 1 dá o índice do último dígito da sequência do número. i >= 0;: Esta é a condição que deve ser verdadeira para que o loop continue a ser executado. i-- Esta é a atualização que ocorre após cada iteração do loop. Vai diminuir 1 do valor de i em cada iteração, o que significa que o loop está retrocedendo do último dígito até o primeiro dígito do número.
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    // cardNumber.charAt(i): O método charAt(i) é usado para obter o caractere na posição i da sequência cardNumber. Então i representa a posição do dígito atual que estamos analisando na sequência. parseInt para converter para número inteiro.
    let digit = parseInt(cardNumber.charAt(i));
    // Se double for true, vai multiplicar o valor por 2 e armazenar em digit
    if (double) {
      digit *= 2;
      // Se o valor armazenado em digit for > que 9, vai diminuir 9 (é o mesmo que somar os dois digitos que são maiores que 9)
      if (digit > 9) {
        digit -= 9;
      }
    }
    // O dígito atual (seja ele duplicado ou não) é somado ao valor acumulado sum. Essa variável sum é usada para armazenar a soma de todos os dígitos após a aplicação das regras do algoritmo de Luhn.
    sum += digit;
    // Após processar um dígito, a variável double é alternada para o valor oposto. Se estava como true, agora será definida como false, e vice-versa. Isso garante que o próximo dígito seja tratado de forma diferente do atual.
    double = !double;
  }
  // verifica se o valor acumulado sum é um múltiplo de 10. Se for verdadeiro (ou seja, sum % 10 é igual a 0), o número de cartão de crédito é considerado válido, e a função retorna true. Caso contrário, a função retorna false.
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

console.log(validator); 

  
  
  



