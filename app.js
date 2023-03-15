// Definimos el array que almacenará las gafas
let listaGafa = [];

const objGafa = {
    name:'',
    description: '',
    price: ''
}

let editando = false;

const formulario = document.querySelector('#formulario');
const nombreInput = document.querySelector('#name');
const descriptionInput = document.querySelector('#description');
const priceInput = document.querySelector('#price');
const btnAgregar = document.querySelector('#btnAgregar');
const listaGafas = document.querySelector('.item-list');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario(e) {
    e.preventDefault();

    if(nombreInput.value ==='' || priceInput.value === ''){
        alert('Todos los campos son obligatorios.');
        return;
    }

    // Creamos un objeto de gafa a partir de los valores del formulario
    const gafa = Object.create(objGafa);
    gafa.name = nombreInput.value;
    gafa.description = descriptionInput.value;
    gafa.price = priceInput.value;

    // Agregamos la gafa a la lista
    listaGafa.push(gafa);

    // Limpiamos el formulario
    nombreInput.value = '';
    descriptionInput.value = '';
    priceInput.value = '';

    // Mostramos la lista de gafas
    mostrarGafas();
}

function mostrarGafas() {
    // Limpiamos la lista de gafas
    listaGafas.innerHTML = '';

    // Recorremos la lista de gafas y creamos un elemento de lista para cada una
    for(let i = 0; i < listaGafa.length; i++) {
        const gafa = listaGafa[i];

        const li = document.createElement('li');
        li.innerHTML = `
            <p><strong>Nombre:</strong> ${gafa.name}</p>
            <p><strong>Descripción:</strong> ${gafa.description}</p>
            <p><strong>Precio:</strong> $${gafa.price}</p>
        `;

        listaGafas.appendChild(li);
    }
}
