// Array para armazenar os funcionários cadastrados
var funcionarios = [];

// Capturando referências dos elementos do formulário de cadastro de funcionário
var nomeInput = document.getElementById("nomefuncio");
var sobrenomeInput = document.getElementById("sobrefuncio");
var dataNascimentoInput = document.getElementById("datafuncio");
var senhaInput = document.getElementById("senhafuncio");
var senhaConfirmacaoInput = document.getElementById("senhasenhafuncio");
var RAInput = document.getElementById("RA");
var cadastrarButton = document.getElementById("gerarlogin");

// Evento de clique no botão de cadastro
cadastrarButton.addEventListener("click", function () {
  // Obter valores dos campos de entrada
  var nome = nomeInput.value;
  var sobrenome = sobrenomeInput.value;
  var dataNascimento = dataNascimentoInput.value;
  var senha = senhaInput.value;
  var senhaConfirmacao = senhaConfirmacaoInput.value;
  var RA = RAInput.value;

  // Verificar se todos os campos estão preenchidos
  if (
    nome === "" ||
    sobrenome === "" ||
    dataNascimento === "" ||
    senha === "" ||
    senhaConfirmacao === "" ||
    RA === ""
  ) {
    alert("Por favor, preencha todos os campos!");
    return;
  }

  // Verificar se as senhas coincidem
  if (senha !== senhaConfirmacao) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return;
  }

  // Verificar se o RA já está cadastrado
  for (var i = 0; i < funcionarios.length; i++) {
    if (RA === funcionarios[i].RA) {
      alert("O RA já está cadastrado. Por favor, insira outro RA.");
      return;
    }
  }

  // Criar um objeto de funcionário com os dados fornecidos
  var novoFuncionario = {
    nome: nome,
    sobrenome: sobrenome,
    dataNascimento: dataNascimento,
    senha: senha,
    RA: RA
  };

  // Adicionar o novo funcionário ao array de funcionários cadastrados
  funcionarios.push(novoFuncionario);

  // Exibir mensagem de sucesso e limpar os campos
  alert("Cadastro realizado com sucesso!");
  nomeInput.value = "";
  sobrenomeInput.value = "";
  dataNascimentoInput.value = "";
  senhaInput.value = "";
  senhaConfirmacaoInput.value = "";
  RAInput.value = "";

  // Redirecionar para o index.html
  window.location.href = "index.html";
});
