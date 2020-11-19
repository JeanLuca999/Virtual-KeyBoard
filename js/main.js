const $keyBoard = document.getElementById('keyboard')
let shiftOn = false

const teclas = [
    'q','w','e','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l',
    'z','shift','x','c','v','b','n','m','backspace',
    '?123','space','.'
]

window.addEventListener('load', () => {
    gerarTeclasDeEscrita()
})


const gerarTecla = (tecla) => `<div class="tecla" onclick="digitar(this)">${tecla}</div>`


const gerarTeclasDeEscrita = () =>{
    teclas.forEach(tecla => {
        $keyBoard.innerHTML += gerarTecla(tecla)
    })
}

const digitar = (that) => {
    const $textArea = document.getElementById('keyboard-text')
    let txt
    switch(that.innerText){
        case 'BACKSPACE':
            txt = $textArea.value
            txt = txt.substr(0,txt.length-1)
            $textArea.innerText = txt
            return
        case 'SPACE':
            $textArea.innerText = $textArea.value + ' '
            return
        case 'SHIFT':
            shiftOn = true
            return
    }

    if(shiftOn){
        $textArea.innerHTML = $textArea.value + that.innerText.toUpperCase()
        shiftOn = false
        return
    }
    $textArea.innerHTML += that.innerText.toLowerCase()
}

