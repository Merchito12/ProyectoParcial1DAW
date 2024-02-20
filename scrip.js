const menu=document.getElementById("menu");
const eliminar=document.getElementById("elimina");
const pantalla=document.getElementById("buy");

menu.forEach(boton => {
    boton.addEventListener("click",()=>{
        let imagen=document.createElement("img");//creamos un nuevo elemento tipo imagen
        //y ese elemento imagen sera la imagen del boton
        imagen.src=boton.querySelector('img').src;//obtenemos el src del archivo html
        imagen.alt=boton.querySelector('img').alt;//obtneemos el alt del html

        let precio=document.createElement("Precio");
        precio.textContent=querySelector("Precio").textContent;

        let nombre=document.createElement("span");
        nombre.textContent=querySelector("span").textContent;


        pantalla.appendChild(imagen);//agregamos a mi section los elementos
        pantalla.appendChild(precio);
        pantalla.appendChild(nombre);

    })
});

        
