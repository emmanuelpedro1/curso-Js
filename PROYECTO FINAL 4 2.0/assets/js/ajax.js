$("#btnBuscar").on("click", buscarML);


function buscarML(e) {
    e.preventDefault();
    const BUSCAR = $("#Buscardor").val();
    const urlMl = `https://api.mercadolibre.com/sites/MLA/search?q='${BUSCAR}'`


    class Producto {
        constructor(id, titulo, img, precio) {
            this.id = id,
                this.titulo = titulo,
                this.img = img,
                this.precio = precio
        }
    }
  
    let misDatos = [];
    $.get(urlMl, function (data, status) {

        for (const dato of data.results) {
            let product = new Producto(dato.id, dato.title, dato.thumbnail, dato.price);
            misDatos.push(product)
        }
        pintarCards(misDatos)
    })

    
     function limpiarFormulario() {
         document.getElementById("miForm").reset();
       }
   


    /////////////////////////////// FUNCTION PARA PINTAR////////////////////////////////////////////////

    const section = document.querySelector('.contenedor');
    let deleteBoton = document.getElementById("borrarbusqueda")
    
   
    // section.appendChild(deleteBoton);
    function pintarCards(array) {
        
        
         

        for (let element of array) {
           
            let div = document.createElement('div');

            div.className = 'card row'

            div.innerHTML = `
            <img class=" col order-last " src=${element.img}>
            <h2 class="col">${element.titulo}</h2>
            <p class="col order-first" >$${element.precio}</p>`

            section.appendChild(div);
            
            deleteBoton.addEventListener("click", () => { 
                limpiarFormulario();
                div.innerHTML = ""
                section.removeChild(div);
                
             })
            

        }

    }
    

}








