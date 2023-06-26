document.addEventListener("DOMContentLoaded", function () {
  function adicionarCliente(nome, sobrenome, cpf, nomePet) {
    var clientesCadastrados = localStorage.getItem("clientes");
    var clientes = clientesCadastrados ? JSON.parse(clientesCadastrados) : [];

    // Verificar se o CPF já existe na lista de clientes
    var clienteExistente = clientes.find(function (cliente) {
      return cliente.cpf === cpf;
    });

    if (clienteExistente) {
      alert("CPF já cadastrado!");
      return;
    }

    var novoCliente = {
      nome: nome,
      sobrenome: sobrenome,
      cpf: cpf,
      nomePet: nomePet,
    };

    clientes.push(novoCliente);

    localStorage.setItem("clientes", JSON.stringify(clientes));

    exibirClientes();
  }

  function redirecionar(event) {
    event.preventDefault();

    var nomeTutor = document.getElementById("nometutor").value;
    var sobrenomeTutor = document.getElementById("sobretutor").value;
    var cpfTutor = document.getElementById("cpftutor").value;
    var numeroTutor = document.getElementById("numerotutor").value;
    var enderecoTutor = document.getElementById("endetutor").value;
    var nomePet = document.getElementById("namepet").value;
    var idadePet = document.getElementById("idadepet").value;
    var racaPet = document.getElementById("racapet").value;
    var pesoPet = document.getElementById("pesopet").value;

    if (
      nomeTutor === "" ||
      sobrenomeTutor === "" ||
      cpfTutor === "" ||
      numeroTutor === "" ||
      enderecoTutor === "" ||
      nomePet === "" ||
      idadePet === "" ||
      racaPet === "" ||
      pesoPet === ""
    ) {
      alert("Por favor, preencha todos os campos!");
      return;
    }

    adicionarCliente(nomeTutor, sobrenomeTutor, cpfTutor, nomePet);

    alert("Cadastro realizado com sucesso!");

    window.location.href = "cssAnamese.html";
  }

  function exibirClientes() {
    var clientesCadastrados = localStorage.getItem("clientes");
    var clientes = clientesCadastrados ? JSON.parse(clientesCadastrados) : [];

    var divClientes = document.getElementById("clientes");

    if (!divClientes) {
      return;
    }

    divClientes.innerHTML = "";

    clientes.forEach(function (cliente) {
      var clienteElement = document.createElement("a");
      clienteElement.classList.add("cliente1");
      clienteElement.href = "Fichabob.html";

      var nomeCliente = document.createElement("h1");
      nomeCliente.classList.add("nomecliente");
      nomeCliente.textContent = cliente.nome + " " + cliente.sobrenome;

      var txtGeneric = document.createElement("p");
      txtGeneric.classList.add("txtgeneric");
      txtGeneric.textContent = "Tutor";

      var cpfCliente = document.createElement("h1");
      cpfCliente.classList.add("CPF");
      cpfCliente.textContent = "CPF: " + cliente.cpf;

      var nomePet = document.createElement("h1");
      nomePet.classList.add("nomepet");
      nomePet.textContent = "Nome do Pet: " + cliente.nomePet;

      clienteElement.appendChild(nomeCliente);
      clienteElement.appendChild(txtGeneric);
      clienteElement.appendChild(cpfCliente);
      clienteElement.appendChild(nomePet);

      divClientes.appendChild(clienteElement);
    });
  }

  var botaoProsseguir = document.getElementById("concluido");
  if (botaoProsseguir) {
    botaoProsseguir.addEventListener("click", redirecionar);
  }

  var isCadastroPage = document.body.classList.contains("cadastro");

  if (isCadastroPage) {
    exibirClientes();
  }

});
