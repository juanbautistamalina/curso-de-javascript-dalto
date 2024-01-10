// Métodos para Definir, Obtener y Eliminar valores de Atriutos

let nombre = document.querySelector(".nombre");
nombre.setAttribute("type", "color"); // Modificando Atributo

let valor = nombre.getAttribute("type"); // Obteniendo el valor del Atributo
document.write("Atributo: "+ valor)

// nombre.removeAttribute("type"); // Eliminando el Atributo