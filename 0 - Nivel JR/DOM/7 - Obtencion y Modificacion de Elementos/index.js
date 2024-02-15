let titulo = document.querySelector(".titulo");

let resultado = titulo.textContent;
alert(`textContent: ${resultado}`);

resultado = titulo.innerText;
alert(`innerText: ${resultado}`);

resultado = titulo.outerText;
alert(`outerText: ${resultado}`);

resultado = titulo.innerHTML;
alert(`innerHTML: ${resultado}`);

resultado = titulo.outerHTML;
alert(`outerHTML: ${resultado}`);