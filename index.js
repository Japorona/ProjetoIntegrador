function adicionarFuncionario() {
  var nome = document.getElementById("nomefuncio").value;
  var sobrenome = document.getElementById("sobrefuncio").value;
  var dataNascimento = document.getElementById("datafuncio").value;
  var senha = document.getElementById("senhafuncio").value;
  var senhaConfirmacao = document.getElementById("senhasenhafuncio").value;
  var RA = document.getElementById("RA").value;

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

  if (senha !== senhaConfirmacao) {
    alert("As senhas não coincidem. Por favor, tente novamente.");
    return;
  }

  var novoFuncionario = {
    nome: nome,
    sobrenome: sobrenome,
    dataNascimento: dataNascimento,
    senha: senha,
    RA: RA
  };

  var funcionariosCadastrados = localStorage.getItem("funcionarios");
  var funcionarios = funcionariosCadastrados ? JSON.parse(funcionariosCadastrados) : [];
  funcionarios.push(novoFuncionario);
  localStorage.setItem("funcionarios", JSON.stringify(funcionarios));

  alert("Funcionário adicionado com sucesso!");

  document.getElementById("nomefuncio").value = "";
  document.getElementById("sobrefuncio").value = "";
  document.getElementById("datafuncio").value = "";
  document.getElementById("senhafuncio").value = "";
  document.getElementById("senhasenhafuncio").value = "";
  document.getElementById("RA").value = "";

  window.location.href = "index.html";
}

function realizarLogin() {
  var RA = document.getElementById("RAlogin").value;
  var senha = document.getElementById("senhatxt").value;

  var funcionariosCadastrados = localStorage.getItem("funcionarios");
  var funcionarios = funcionariosCadastrados ? JSON.parse(funcionariosCadastrados) : [];

  for (var i = 0; i < funcionarios.length; i++) {
    var funcionario = funcionarios[i];
    if (RA === funcionario.RA && senha === funcionario.senha) {
      alert("Login bem-sucedido! Redirecionando para a página principal...");
      window.location.href = "pesqcliente.html";
      return;
    }
  }

  alert("RA ou senha inválidos. Por favor, tente novamente.");
}

var cadastrarButton = document.getElementById("gerarlogin");
if (cadastrarButton) {
  cadastrarButton.addEventListener("click", adicionarFuncionario);
}

var loginButton = document.getElementById("botaologin");
if (loginButton) {
  loginButton.addEventListener("click", realizarLogin);
}
