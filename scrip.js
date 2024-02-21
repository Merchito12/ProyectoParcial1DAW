
const productos=document.querySelectorAll(".btn");//cojemos la clase
const eliminar=document.getElementById("elimina");
const pantalla=document.getElementById("buy");

for(const producto  of productos)
{
    producto.addEventListener('click',()=>{

        const precioEm=producto.querySelector('.Precio').innerText;
        const nombreEm=producto.querySelector('.Nombre').innerHTML;
    
        let imagen=document.createElement("img");//creamos un nuevo elemento tipo imagen
        //y ese elemento imagen sera la imagen del boton
        imagen.src=producto.querySelector('img').src;//obtenemos el src del archivo html
        imagen.alt=producto.querySelector('img').alt;//obtneemos el alt del html

        // Crear elementos para mostrar el nombre y el precio en la sección
        let precio=document.createElement('p');
        precio.textContent=precioEm;//obtennemos el valor del precio

        let nombre=document.createElement('p');
        nombre.textContent=nombreEm;

        pantalla.appendChild(imagen);//agregamos a mi section los elementos
        pantalla.appendChild(nombre);
        pantalla.appendChild(precio);

    })
}  
