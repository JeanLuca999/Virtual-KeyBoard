const $keyBoard = document.getElementById('keyboard')
const $quadroTexto = document.getElementById('quadro-texto')
let shiftOn = false
let capsOn = false

const teclas = [
    'q','w','e','r','t','y','u','i','o','p',
    'a','s','d','f','g','h','j','k','l',
    'z','shift','x','c','v','b','n','m','backspace',
    '?123','space','.','caps','enter'
]

const teclasEspeciais = [
    '1','2','3','4','5','6','7','8','9','0','-','+',
    '=','´','[',']','@','#','$','%','&','*','(',')',,'!','?','.',
    ',',,':',';','ABC','?','/','\\','|',"'",'"',`&lt;`,'&gt;'
]

window.addEventListener('load', () => {
    gerarTeclasDeEscrita()
})


const gerarTecla = (tecla) => `<div id="${tecla}" class="tecla" onclick="digitar(this)">${tecla}</div>`


const gerarTeclasDeEscrita = () =>{
    teclas.forEach(tecla => {
        $keyBoard.innerHTML += gerarTecla(tecla)
    })
}

const gerarTeclasEspeciais = () => {
    teclasEspeciais.forEach(tecla => {
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
        case 'CAPS':
            if(capsOn == true) {
                capsOn = false
            } else {
                capsOn = true
            }
            return
        case '?123':
            document.querySelectorAll('.tecla').forEach(v => $keyBoard.removeChild(v))
            gerarTeclasEspeciais()
            return
        case 'ABC':
            document.querySelectorAll('.tecla').forEach(v => $keyBoard.removeChild(v))
            gerarTeclasDeEscrita()
            return
        case 'ENTER':
            if($textArea.value == ''){
                return
            } else {
                $quadroTexto.innerHTML = $quadroTexto.innerHTML + `<p>${$textArea.value}</p>`
                $textArea.innerHTML = ''
                return
            }
    }

    if(shiftOn){
        $textArea.innerHTML = $textArea.value + that.innerText.toUpperCase()
        shiftOn = false
        return
    }
    if(capsOn) {
        $textArea.innerHTML = $textArea.value + that.innerText.toUpperCase()
        return
    }
    $textArea.innerHTML += that.innerText.toLowerCase()
}

