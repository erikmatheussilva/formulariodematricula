function phone_validation(phone) {
  //retira todos os caracteres menos os numeros
  phone = phone.replace(/\D/g, "");

  //verifica se tem a qtde de numero correto
  if (!(phone.length >= 10 && phone.length <= 11)) return false;

  //Se tiver 11 caracteres, verificar se começa com 9 o celular
  if (phone.length == 11 && parseInt(phone.substring(2, 3)) != 9)
    return false;

  //verifica se não é nenhum numero digitado errado (propositalmente)
  for (var n = 0; n < 10; n++) {
    //um for de 0 a 9.
    //estou utilizando o metodo Array(q+1).join(n) onde "q" é a quantidade e n é o
    //caractere a ser repetido
    var temp = phone.substring(2);
    if (
      temp == new Array(9).join(n.toString()) ||
      temp == new Array(10).join(n.toString())
    )
      return false;
  }
  //DDDs validos
  var codigosDDD = [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35,
    37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 64, 63,
    65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88,
    89, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  ];
  //verifica se o DDD é valido (sim, da pra verificar rsrsrs)
  if (codigosDDD.indexOf(parseInt(phone.substring(0, 2))) == -1)
    return false;

  //  E por ultimo verificar se o numero é realmente válido. Até 2016 um celular pode
  //ter 8 caracteres, após isso somente numeros de phone e radios (ex. Nextel)
  //vão poder ter numeros de 8 digitos (fora o DDD), então esta função ficará inativa
  //até o fim de 2016, e se a ANATEL realmente cumprir o combinado, os numeros serão
  //validados corretamente após esse período.
  //NÃO ADICIONEI A VALIDAÇÂO DE QUAIS ESTADOS TEM NONO DIGITO, PQ DEPOIS DE 2016 ISSO NÃO FARÁ DIFERENÇA
  //Não se preocupe, o código irá ativar e desativar esta opção automaticamente.
  //Caso queira, em 2017, é só tirar o if.
  if (new Date().getFullYear() < 2017) return true;
  if (
    phone.length == 10 &&
    [2, 3, 4, 5, 7].indexOf(parseInt(phone.substring(2, 3))) == -1
  )
    return false;

  //se passar por todas as validações acima, então está tudo certo
  return true;
}

function validatePhoneNumber(input) {
  if (!input.value.trim()) return;

  const isValid = phone_validation(input.value);
  const error = document.getElementById("phone-error");

  error.hidden = isValid;
  input.classList.toggle("invalid", !isValid);
}


//chamada simples
//phone_validation("(11)99000-3777"); // retorna true
//phone_validation("11-99000-3777"); // retorna true
//phone_validation("11990003777"); // retorna true
//phone_validation("1111111111"); // retorna false
//phone_validation("1111111111"); // retorna false
//phone_validation("(01)3444-4444"); // retorna false
//phone_validation("(01)43444-4444"); // retorna false

// code from Jonathan Gonçalves gist: https://gist.github.com/jonathangoncalves/7bdec924e9bd2bdf353d6b7520820b62
