const precio = 400000;

const precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio;

let contador = 0
let cantidad = document.querySelector('.cantidad');
let aumentarBtn = document.querySelector("#boton1");
let disminuirBtn = document.querySelector("#boton2");
let valorTotal = document.querySelector(".valor-total")

aumentarBtn.addEventListener('click', aumentarCantidad);
disminuirBtn.addEventListener('click', disminuirCantidad);


function aumentarCantidad(){
    contador++
    cantidad.innerHTML = contador
    calcularPrecio()
}
function disminuirCantidad(){
    if(contador>0){
        contador--
        cantidad.innerHTML = contador
        calcularPrecio()

    }

}

function calcularPrecio(){
    valorTotal.innerHTML = contador * precio

}