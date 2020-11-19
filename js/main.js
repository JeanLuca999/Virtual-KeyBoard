const $keyBoard = document.getElementById('keyboard')

const teclas = [
    'q','w','e','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l',
    'z','shift','x','c','v','b','n','m','backspace',
    '?123','space','.'
]

const gerarTecla = (tecla) => `<div class="tecla" >${tecla}</div>`


const gerarTeclasDeEscrita = () =>{
    teclas.forEach(tecla => {
        $keyBoard.innerHTML += gerarTecla(tecla)
    })
}


window.addEventListener('load', () => {
    gerarTeclasDeEscrita()
})