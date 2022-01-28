var tabela = document.querySelector("table");

tabela.addEventListener("dblclick", function () {
    var paciente = event.target.parentNode;
    paciente.classList.add("fade-out");

    setTimeout(function () {
        paciente.remove();
    }, 500);
});