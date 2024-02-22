const productos = document.querySelectorAll(".btn");//cojemos la clase
const pantalla = document.getElementById("buy");
const resultado = document.getElementById("result");
const envia = document.getElementById("envia");

for (const producto of productos) {
    producto.addEventListener('click', () => {

        const precioEm = producto.querySelector('.Precio').innerText;
        const nombreEm = producto.querySelector('.Nombre').innerText;

        let imagen = document.createElement("img");//creamos un nuevo elemento tipo imagen
        //y ese elemento imagen sera la imagen del boton
        imagen.src = producto.querySelector('img').src;//obtenemos el src del archivo html
        imagen.alt = producto.querySelector('img').alt;//obtneemos el alt del html

        imagen.style.height = '80px';
        imagen.style.width = 'auto';
        imagen.style.borderRadius = '20px';

        // Crear elementos para mostrar el nombre y el precio en la sección
        let precio = document.createElement('p');
        precio.textContent = precioEm;//obtennemos el valor del precio

        let nombre = document.createElement('p');
        nombre.textContent = nombreEm;

        let elimina = document.createElement('button');
        //agregamos a mi section los elementos

        elimina.style.height = '20px';
        elimina.style.width = '50px';
        elimina.textContent = 'D';

        pantalla.appendChild(elimina);
        pantalla.appendChild(imagen);
        pantalla.appendChild(nombre);
        pantalla.appendChild(precio);

        const preci = precioEm.replace('$', '');
        let total = parseFloat(resultado.innerText);//obtenemos la info de resultado
        total += parseFloat(preci);//sumamos
        resultado.textContent = total.toFixed(2);//agregamos dos decimales


        elimina.addEventListener('click', () => {
            pantalla.removeChild(imagen);
            pantalla.removeChild(nombre);
            pantalla.removeChild(precio);
            pantalla.removeChild(elimina);

            let resta = parseFloat(resultado.innerText);
            resta -= parseFloat(preci);
            resultado.textContent = resta.toFixed(2);
        })

        

    })
}
envia.addEventListener("click",()=>{
    if(pantalla.querySelector('*')!==null)
    {
        alert("ENVIADO EFECTIVAMENTE");
        
    }
    else
    {
        alert("EL CARRO ESTA VACIO");
    }
})



