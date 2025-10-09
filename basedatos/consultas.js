function obtenerServicios(categoria = "") {
    /*
    let lista_filtrada = [];
    for (let i = 0; i < lista_servicios.length; i++) {
        if (lista_servicios[i].codigo_categoria === categoria) {
            lista_filtrada.push(lista_servicios[i]);
        } 
    }
    return lista_filtrada;
    */

    if (categoria === null || categoria === "") {
        return lista_servicios; //  al inicio devuelve todos
    } else {
        let lista_filtrada = lista_servicios.filter(
            servicio => servicio.codigo_categoria === categoria
        );
        return lista_filtrada; //  si hay categoría, devuelve solo filtrados
    }
}

// Función que devuelve la información de un servicio dado su código.
function obtenerServicioPorCodigo(codigo) {
    /*
    for (let index = 0; index < servicios.length; index++) {
        if (servicios[index].codigo === codigo) {
            return servicios[index];
        }
    }
    return null;
    */

    // Versión simplificada con find()
    return lista_servicios.find(servicio => servicio.codigo === codigo);
}

//
// Funciones relacionadas con el carrito de compras
//
function mostrarCarrito() {
    let etiqueta_carrito = document.getElementById("etiqueta_carrito");
    etiqueta_carrito.innerHTML = "";
    let costoTotal = 0;

    //Va al local stogare y lo lee
    carrito = obtenerCarrito();
    
    carrito.forEach((elemento, posicion) => {

        let li = document.createElement("li");
        li.innerHTML = `
                <div class="d-flex justify-content-between align-items-center p-2 border-bottom border-dark">
                    <div class="row">
                        <p class="my-0">${elemento.nombre}</p>
                        <small>${elemento.precio}</small>
                    </div>
                    <a class="btn bg-warning text-decoration-none text-dark"
                        onclick="eliminarServicio('${posicion}')">
                        <i class="fa fa-times"></i>
                    </a>


                </div>`;
        etiqueta_carrito.appendChild(li);
        costoTotal = costoTotal + elemento.precio;
    });
    let etiqueta_total = document.getElementById("etiqueta_total");
    //Etiqueta_total.innerText = carrito.reduce((total, elemento) => total + elemento.precio, 0).toFixed(2);
    etiqueta_total.innerText = costoTotal.toLocaleString("es-CO", { 
    style: "currency", 
    currency: "COP", 
    minimumFractionDigits: 0 //evita los ,00
});
;

}

// Guardar articulos del carrito en storage
function obtenerCarrito() {
    let carrito = [];
    const str = localStorage.getItem("carrito");
    if (str) {
        carrito = JSON.parse(str) ;
    }
    return carrito;
}

function agregarServicio(servicio, mostrar = true) {
    let carrito = obtenerCarrito();
    carrito.push(servicio);
    // Almacenar la información del carrito de compras en el local storage
localStorage.setItem("carrito", JSON.stringify(carrito));
if (mostrar === true) {
    mostrarCarrito();
    }
}

function eliminarServicio(posicion) {
     let carrito = obtenerCarrito();
    carrito.splice(posicion, 1);
    // Almacenar la información del carrito de compras en el local storage
localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();
} 

function vaciarCarrito() {
    carrito = [];
    // Almacenar la información del carrito de compras en el local storage
localStorage.setItem("carrito", JSON.stringify(carrito));
    mostrarCarrito();

}