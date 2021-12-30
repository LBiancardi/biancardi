const areaDoCodigo = document.querySelector(".codigo-wrapper")
const linguagem = document.querySelector(".personalizeLanguage")
const botao = document.querySelector("#highlightButton")
const copyButton = document.querySelector("#copyButton")
const pasteButton = document.querySelector("#pasteButton")
// var preText = document.querySelector(".codeText")

// extra functions to test
var copiedCode = ""

function mudaLinguagem() {
    const codigo = areaDoCodigo.querySelector("code")
    const preText = codigo.textContent
    areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
    // areaDoCodigo.firstChild.innerText = codigo.innerText
    areaDoCodigo.firstChild.innerText = preText
}

function copyCode() {
    copiedCode = areaDoCodigo.textContent
    console.log("Code copied");
}

function pasteCode() {
    if (copiedCode != "") {
        areaDoCodigo.firstElementChild.innerText = copiedCode
        console.log("Code paste");
    } else {
        console.log("Nothing to paste");
    }
}

linguagem.addEventListener('change', () => {
    mudaLinguagem()
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})




// copyButton.addEventListener('click', () => {
//     const codigo = areaDoCodigo.querySelector('code')
//     copyCode()
//     hljs.highlightBlock(codigo)
// })

// pasteButton.addEventListener('click', () => {
//     const codigo = areaDoCodigo.querySelector('code')
//     pasteCode()
//     hljs.highlightBlock(codigo)
// })