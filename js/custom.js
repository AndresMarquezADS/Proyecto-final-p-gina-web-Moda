// Función que lee el contenido de un archivo y lo inserta en un elemento 
// HTML. Esta función se usará para cargar el menú y el pie de página. 

function cargarFragmento(idElemento, archivo) { 
  // 1. Usamos fetch para pedir el archivo
  fetch(archivo) 
    // 2. Convertimos la respuesta en texto (porque viene en bruto)
    .then(respuesta => respuesta.text()) 
    // 3. Insertamos el contenido dentro del elemento con ese ID
    .then(contenido => { 
      document.getElementById(idElemento).innerHTML = contenido; 
    }) 
    // 4. Capturamos errores (ej: archivo no existe o ruta mala)
    .catch(error => console.error(`Error cargando ${archivo}:`, error)); 
}

//Formulario
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("miformulario");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // evita que recargue o intente enviar
      alert("Gracias por tu mensaje. Pronto te contactaremos.");
      form.reset(); //Limpia los campos
    });
  }
});

