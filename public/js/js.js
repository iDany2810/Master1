const formulario = document.getElementById("formulario")
const powered = document.getElementById("powered")
const login = document.getElementById("login")
login.addEventListener("click", () => {
    powered.className = "cambio"
    formulario.className = "formulario"
    login.className = "cambio"
})