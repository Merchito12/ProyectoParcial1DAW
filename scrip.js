const productos=document.querySelectorAll(".btn");//cojemos la clase
const pantalla=document.getElementById("buy");

const elementos={};

for(const producto  of productos)
{
    producto.addEventListener('click',()=>{
        
        const precioEm=producto.querySelector('.Precio').innerText;
        const nombreEm=producto.querySelector('.Nombre').innerText;
    
        let imagen=document.createElement("img");//creamos un nuevo elemento tipo imagen
        //y ese elemento imagen sera la imagen del boton
        imagen.src=producto.querySelector('img').src;//obtenemos el src del archivo html
        imagen.alt=producto.querySelector('img').alt;//obtneemos el alt del html

        imagen.style.height='50px';
        imagen.style.width='50%';
        imagen.style.borderRadius='0';
          
        
        if(!(nombreEm in elementos))
        {
            elementos[nombreEm]=1;
            // Crear elementos para mostrar el nombre y el precio en la sección
            let precio=document.createElement('p');
            precio.textContent=precioEm;//obtennemos el valor del precio

            let nombre=document.createElement('p');
            nombre.textContent=nombreEm;

            let añade=document.createElement('li');
            añade.textContent = `${nombreEm}: 1`;
            
            let elimina=document.createElement('button');
            //agregamos a mi section los elementos
            

            
            pantalla.appendChild(elimina);
            pantalla.appendChild(imagen);
            //pantalla.appendChild(nombre);
            pantalla.appendChild(precio);
            pantalla.appendChild(añade);
            
            

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
            elementos[nombreEm]++;
            // Si el menú ya existe en la lista, buscar el elemento existente y actualizar su contenido
            let listaElementos = pantalla.getElementsByTagName('li');
            let elementoExistente;

            for (let i = 0; i < listaElementos.length; i++) 
            {
                if (listaElementos[i].textContent.includes(nombreEm)) {
                    elementoExistente = listaElementos[i];
                    break;
                }
            }
            if (elementoExistente) {
                let cantidad = elementos[nombreEm];
                elementoExistente.textContent = `${nombreEm}: ${cantidad}`;
            }
        }

         
    })
}
 

