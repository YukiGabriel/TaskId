const form = document.querySelector("#form")
const input = document.querySelector("#input")
const lista = document.querySelector("#lista")
const erroDiv = document.getElementById("mensagem-erro");
const statusDiv = document.getElementById("mensagem-status");

document.addEventListener("contextmenu", e => e.preventDefault());
document.addEventListener("keydown", e => {
  if (e.ctrlKey && e.key === "c") {
    e.preventDefault();
  }
});


form.addEventListener("submit", adicionarTarefa)


function adicionarTarefa(event) {
    event.preventDefault()

    const texto = input.value.trim()

    if (texto === "") {
        mostrarErro("Por favor, insira uma tarefa valida.");
        return
    }

    criarTarefa(texto);
    input.value = ""
}

function mostrarErro(mensagem) {
  erroDiv.textContent = mensagem;
  erroDiv.style.display = "block";

  clearTimeout(erroDiv.timeout);
  erroDiv.timeout = setTimeout(limparErro, 5000);
 
}


function limparErro() {
  erroDiv.textContent = "";
  erroDiv.style.display = "none";
}

function criarTarefa(texto) {
    const li = document.createElement("li")
    li.textContent = texto

    li.addEventListener("click", () => {
        li.classList.toggle("concluida")
    })

    li.addEventListener("dblclick", () => {
        li.remove()
    })

    lista.appendChild(li)
}

function apagarTarefa(index) {
    lista.splice(index, 1)
}
