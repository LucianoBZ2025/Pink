let body = document.body

function clear() {
    body.classList.remove("tema_escuro", "tema_claro", "original-theme")
}

document.getElementById("escuro").addEventListener("click", function () {
    clear()
    body.classList.add("tema_escuro")
});

document.getElementById("claro").addEventListener("click", function () {
    clear()
    body.classList.add("tema_claro")
});

document.getElementById("original").addEventListener("click", function () {
    clear()
});