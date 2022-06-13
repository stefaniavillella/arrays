
// DESAFIO 3 - OBJETOS Y ARRAYS


/*
class Producto {
    constructor (id, categoria, nombre, precio){
        this.id = id;
        this.categoria = categoria;
        this.nombre = nombre;
        this.precio = precio;
    }
}

const producto1 = new Producto ("01", "Cumpleaños", "Kit Selva", 600);
const producto2 = new Producto ("02", "Cumpleaños", "Kit Bosque", 700);
const producto3 = new Producto ("03", "Bautismo", "Kit Paloma", 750);
const producto4 = new Producto ("04", "Especiales", "Kit Día de la Madre", 800);

const arrayProductos = [producto1, producto2, producto3, producto4]
console.log (arrayProductos);
*/



const carrito = [];
const productos = [
    {id:1, categoria:'Cumpleaños', nombre: 'Kit Selva', precio: 600},
    {id:2, categoria:'Cumpleaños', nombre: 'Kit Bosque', precio: 700},
    {id:3, categoria:'Bautismo', nombre: 'Kit Paloma', precio: 750},
    {id:4, categoria:'Especiales', nombre: 'Kit Día de la Madre', precio: 800}
]

let cartas = ``;
for (let i = 0; i < productos.length; i++){
    cartas += `<div>
            ${productos[i].nombre} <br>
            $${productos[i].precio} <br>
            <button onclick="agregarAlCarrito(${productos[i].id})">Agregar al carrito</button>
            </div>`;
        }
        
document.write(cartas);

function agregarAlCarrito(idProducto){
    const indiceProducto = productos.findIndex(producto => producto.id == idProducto);
    carrito.push(productos[indiceProducto]);
    console.log(carrito);
}




