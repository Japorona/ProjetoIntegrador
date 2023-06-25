// Função para adicionar funcionários ao cadastro
function adicionarFuncionario() {
    // Obter os valores dos campos de cadastro
    var nome = document.getElementById("nomefuncio").value;
    var sobrenome = document.getElementById("sobrefuncio").value;
    var dataNascimento = document.getElementById("datafuncio").value;
    var senha = document.getElementById("senhafuncio").value;
    var senhaConfirmacao = document.getElementById("senhasenhafuncio").value;
    var RA = document.getElementById("RA").value;
  
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
  
    // Criar um objeto de funcionário com os dados fornecidos
    var novoFuncionario = {
      nome: nome,
      sobrenome: sobrenome,
      dataNascimento: dataNascimento,
      senha: senha,
      RA: RA
    };
  
    // Armazenar o funcionário cadastrado localmente (usando localStorage)
    var funcionariosCadastrados = localStorage.getItem("funcionarios");
    var funcionarios = funcionariosCadastrados ? JSON.parse(funcionariosCadastrados) : [];
    funcionarios.push(novoFuncionario);
    localStorage.setItem("funcionarios", JSON.stringify(funcionarios));
  
    // Exibir mensagem de sucesso
    alert("Funcionário adicionado com sucesso!");
  
    // Limpar os campos de cadastro
    document.getElementById("nomefuncio").value = "";
    document.getElementById("sobrefuncio").value = "";
    document.getElementById("datafuncio").value = "";
    document.getElementById("senhafuncio").value = "";
    document.getElementById("senhasenhafuncio").value = "";
    document.getElementById("RA").value = "";
  
    // Redirecionar para a página de login
    window.location.href = "index.html";
  }
  
  // Função para realizar o login
  function realizarLogin() {
    // Obter os valores dos campos de login
    var RA = document.getElementById("RAlogin").value;
    var senha = document.getElementById("senhatxt").value;
  
    // Obter os funcionários cadastrados
    var funcionariosCadastrados = localStorage.getItem("funcionarios");
    var funcionarios = funcionariosCadastrados ? JSON.parse(funcionariosCadastrados) : [];
  
    // Verificar as credenciais de login
    for (var i = 0; i < funcionarios.length; i++) {
      var funcionario = funcionarios[i];
      if (RA === funcionario.RA && senha === funcionario.senha) {
        // Credenciais válidas, redirecionar para a página principal
        alert("Login bem-sucedido! Redirecionando para a página principal...");
        window.location.href = "index.html";
        return;
      }
    }
  
    // Credenciais inválidas, exibir mensagem de erro
    alert("RA ou senha inválidos. Por favor, tente novamente.");
  }
  
  // Evento de clique no botão de cadastro
  var cadastrarButton = document.getElementById("gerarlogin");
  if (cadastrarButton) {
    cadastrarButton.addEventListener("click", adicionarFuncionario);
  }
  
  // Evento de clique no botão de login
  var loginButton = document.getElementById("botaologin");
  if (loginButton) {
    loginButton.addEventListener("click", realizarLogin);
  }
  