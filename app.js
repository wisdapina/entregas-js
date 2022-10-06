const boton = document.getElementById('boton6')
const publicidad = document.getElementById('publicidad')

boton.onclick = async ()=> {
let items = await fetch ('./api.json')
let itemsJson = await items.json()



for (const items of itemsJson) {
   
 
    publicidad.innerHTML+= `
   
   
   
   
   
    <div class="accordion" id="accordionPanelsStayOpenExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="panelsStayOpen-headingOne">
      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
      ${items.nombre}
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
      <div class="accordion-body">
      <img src=${items.img} class="imagen " >
      <strong>${items.descr}</strong> 
      
      </div>
    </div>
 
    `
    
}

}
 
/*<h3 class="producto text-center"> </h3>
    <img src=${items.img} class="imagen " >
    <p class="producto text-center">${items.descr}</p>
   */