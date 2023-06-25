// Capturando referências dos elementos do formulário
var nomeInput = document.getElementById("nomefuncio");
var sobreInput = document.getElementById("sobrefuncio");
var dataInput = document.getElementById("datafuncio");
var senhaInput = document.getElementById("senhafuncio");
var senhasenhaInput = document.getElementById("senhasenhafuncio");
var raInput = document.getElementById("RA");

// Função para salvar os valores e redirecionar
function salvarDados() {
  var nomefuncio = nomeInput.value;
  var sobrefuncio = sobreInput.value;
  var datafuncio = dataInput.value;
  var senhafuncio = senhaInput.value;
  var senhasenhafuncio = senhasenhaInput.value;
  var ra = raInput.value;

  // Verificando se todos os campos foram preenchidos
  if (nomefuncio === "" || sobrefuncio === "" || datafuncio === "" || senhafuncio === "" || senhasenhafuncio === "" || ra === "") {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Exibindo os valores salvos
  console.log("Nome:", nomefuncio);
  console.log("Sobre:", sobrefuncio);
  console.log("Data:", datafuncio);
  console.log("Senha:", senhafuncio);
  console.log("SenhaSenha:", senhasenhafuncio);
  console.log("RA:", ra);

  // Redirecionando para a página index.html
  window.location.href = "index.html";
}

// Adicionando um evento de clique ao botão de envio
var enviarButton = document.getElementById("gerarlogin");
enviarButton.addEventListener("click", salvarDados);
