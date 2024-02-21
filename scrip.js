const productos=document.querySelectorAll(".btn");//cojemos la clase
const pantalla=document.getElementById("buy");

for(const producto  of productos)
{
    producto.addEventListener('click',()=>{
        let contador=0;

        const precioEm=producto.querySelector('.Precio').innerText;
        const nombreEm=producto.querySelector('.Nombre').innerHTML;
    
        let imagen=document.createElement("img");//creamos un nuevo elemento tipo imagen
        //y ese elemento imagen sera la imagen del boton
        imagen.src=producto.querySelector('img').src;//obtenemos el src del archivo html
        imagen.alt=producto.querySelector('img').alt;//obtneemos el alt del html

        
        let elementos=[];
        let actual = nombreEm;
        if(!(elementos.includes(actual)))
        {
            elementos.push(actual);
            imagen.style.height='50px';
            imagen.style.width='50%';
            imagen.style.borderRadius='0';
            
            // Crear elementos para mostrar el nombre y el precio en la sección
            let precio=document.createElement('p');
            precio.textContent=precioEm;//obtennemos el valor del precio

            let nombre=document.createElement('p');
            nombre.textContent=nombreEm;

            let añade=document.createElement('p');
            añade.textContent=contador;

            let elimina=document.createElement('button');
            //agregamos a mi section los elementos
            pantalla.appendChild(elimina);
            pantalla.appendChild(imagen);
            pantalla.appendChild(nombre);
            pantalla.appendChild(precio);
            pantalla.appendChild(añade);

            contador+=1;
            
            console.log("el contador es: "+contador+" y el actual es "+actual);
            console.log(elementos);
            elimina.addEventListener('click',()=>{

                if(contador===0)
                {
                    pantalla.removeChild(imagen);
                    pantalla.removeChild(nombre);
                    pantalla.removeChild(precio);
                    pantalla.removeChild(elimina);
                }
                else
                {
                    contador--;
                }
                
            })
        }
        else
        {
            contador++;
        }
    })
}  
