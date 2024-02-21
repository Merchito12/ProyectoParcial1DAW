
const productos=document.querySelectorAll(".btn");//cojemos la clase
const eliminar=document.getElementById("elimina");
const pantalla=document.getElementById("buy");

for(const producto  of productos)
{
    producto.addEventListener('click',()=>{
        console.log(producto);
        const id=producto.id;
        const precio=producto.querySelector('.Precio').innerText;
        const nombre=producto.querySelector('.Nombre').innerHTML;
        console.log(id);
        console.log(precio);
        let imagen=document.createElement("img");//creamos un nuevo elemento tipo imagen
        //y ese elemento imagen sera la imagen del boton
        imagen.src=producto.querySelector('img').src;//obtenemos el src del archivo html
        imagen.alt=producto.querySelector('img').alt;//obtneemos el alt del html

       

        

        pantalla.appendChild(imagen);//agregamos a mi section los elementos
        pantalla.appendChild(id);
        pantalla.appendChild(precio);
        


    })
}  
