const baseDeDatos = [
    {
        id: 1,
        nombre: 'Remera Boca Juniors 1970',
        descripcion: 'Remera retro perteneciente a la temporadaa 1970',
        precio: 1000,
        imagen: './remeras/remera-1.jpg'
    },
    {
        id: 2,
        nombre: 'Remera Boca Juniors 1981',
        descripcion: 'Remera `81 de Diego Armando Maradona',
        precio: 2000,
        imagen: './remeras/remera-2.jpg'
    },
    {
        id: 3,
        nombre: 'Remera Boca Juniors 1991',
        descripcion: 'Remera suplente Fiat perteneciente a la temporada 1991',
        precio: 3000,
        imagen: './remeras/remera-3.jpg'
    },
    {
        id: 4,
        nombre: 'Remera Boca Juniors 1987',
        descripcion: 'Remera suplente Parmalat edicion 1987 retro',
        precio: 4000,
        imagen: './remeras/remera-4.jpg'
    },
    {
        id: 5,
        nombre: 'Remera Boca Juniors 1975',
        descripcion: 'Remera retro Chapa Suñe temporada 1970',
        precio: 5000,
        imagen: './remeras/remera-5.jpg'
    },
    {
        id: 6,
        nombre: 'Remera Boca Juniors 1994',
        descripcion: 'Remera titular retro Parmalat temporada 1994',
        precio: 6000,
        imagen: './remeras/remera-6.jpg '
    },
    {
        id: 5,
        nombre: 'Remera Boca Juniors 1975',
        descripcion: 'Remera retro Chapa Suñe temporada 1970',
        precio: 5000,
        imagen: './remeras/remera-5.jpg'
    },
    {
        id: 5,
        nombre: 'Remera Boca Juniors 1975',
        descripcion: 'Remera retro Chapa Suñe temporada 1970',
        precio: 5000,
        imagen: './remeras/remera-5.jpg'
    },
    {
        id: 5,
        nombre: 'Remera Boca Juniors 1975',
        descripcion: 'Remera retro Chapa Suñe temporada 1970',
        precio: 5000,
        imagen: './remeras/remera-5.jpg'
    }
    
]

let carrito = [];
let total = 0;
const DOMitems = document.querySelector('#items');
const DOMcarrito = document.querySelector('#carrito');
const DOMtotal = document.querySelector('#total');
const DOMmodal = document.querySelector('#modal');


function renderizarProductos() {
    baseDeDatos.forEach((info) => {

        const div = document.createElement('div');

        const tarjetas = document.createElement('div');
        tarjetas.classList.add("a");

        const Title = document.createElement('h5');

        Title.textContent = info.nombre;

        const Imagen = document.createElement('img');
        Imagen.classList.add("imagen_card");

        Imagen.setAttribute('src', info.imagen);
        const descripcion = document.createElement('p');
        descripcion.textContent = info.descripcion;
        const Precio = document.createElement('p');
        Precio.classList.add("precio");
        Precio.textContent = info.precio + '$';
        
        const Boton = document.createElement('button');
        Boton.textContent = 'Agregar al carrito';
        Boton.setAttribute('marcador', info.id);
        Boton.addEventListener('click', agregarProducto);

        tarjetas.appendChild(Imagen);
        tarjetas.appendChild(Title);
        tarjetas.appendChild(descripcion);
        tarjetas.appendChild(Precio);
        tarjetas.appendChild(Boton);
        div.appendChild(tarjetas);
        DOMitems.appendChild(div);
    });

}

function agregarProducto(evento) {

    carrito.push(evento.target.getAttribute('marcador'))

    calcularTotal();

    renderizarCarrito();

}


function renderizarCarrito() {

    DOMcarrito.textContent = '';

    const carritoSinDuplicados = [...new Set(carrito)];

    carritoSinDuplicados.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });

        const numeroUnidadesItem = carrito.reduce((total, itemId) => {
            return itemId === item ? total += 1 : total;
        }, 0);

        const miNodo = document.createElement('li');

        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}$`;
        const miBoton = document.createElement('button');
        DOMcarrito.appendChild(miNodo);
    });
}


function calcularTotal() {
    total = 0;
    carrito.forEach((item) => {
        const miItem = baseDeDatos.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        total = total + miItem[0].precio;
    });
    DOMtotal.textContent = `Pagás: $${total}`;
}



renderizarProductos();

