// BORDER COLOR CHANGE
let colorInput = document.querySelector('#color');
let hexInput = document.querySelector("#hex");
var codeBox = document.querySelector("code");
var codeBox2 = document.querySelector(".codigo-wrapper");

// SYNTAX HIGHLIGHT
const areaDoCodigo = document.querySelector(".codigo-wrapper")
const linguagem = document.querySelector(".personalizeLanguage")
const botao = document.querySelector("#highlightButton")
const copyButton = document.querySelector("#copyButton")
const pasteButton = document.querySelector("#pasteButton")

// extra functions to test
var copiedCode = ""



colorInput.addEventListener('input', () => {
  let color = colorInput.value;
  hexInput.value = color;
  codeBox.style.borderColor = color;
  codeBox2.style.borderColor = color;
})


// Dropdown menu

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


// SYNTAX HIGHLIGHT


function mudaLinguagem() {
  areaDoCodigo.innerHTML = `<code class="preview hljs ${linguagem.value}" contenteditable="true" aria-label="editor"></code>`
  areaDoCodigo.firstElementChild.innerText = copiedCode
// const codigo = areaDoCodigo.querySelector('code')
// const text = codigo.textContent
// areaDoCodigo.firstChild.innerText = codigo.innerText
// areaDoCodigo.firstChild.innerText = text
}

function copyCode() {
    copiedCode = areaDoCodigo.innerText
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
    copyCode()
    mudaLinguagem()
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})

botao.addEventListener('click', () => {
    const codigo = areaDoCodigo.querySelector('code')
    hljs.highlightBlock(codigo)
})


// copyButton.addEventListener('click', () => {
//       const codigo = areaDoCodigo.querySelector('code')
//       copyCode()
//       hljs.highlightBlock(codigo)
//   })
  
  // pasteButton.addEventListener('click', () => {
    //     const codigo = areaDoCodigo.querySelector('code')
    //     pasteCode()
    //     hljs.highlightBlock(codigo)
    // })


