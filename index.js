
let productos=[]
let carrito=[]

class Producto {
constructor(id,nombre,precio,img,descr){
this.id=id
this.nombre=nombre
this.precio=precio
this.img=img
this.descr=descr
}desplegarDiv() 
{
    const card = `
        <div class=" col-6 just "> 
            <div class="producto text-center" >
             <h2 >${this.nombre}</h2>
          
             <img src=${this.img} class="imagen " alt="jaula">
             <p>${this.descr}</p>
              
             <p>$${this.precio}</p>
             <button id=${this.id}>COMPRAR</button>
           
             </div>
         </div>
    
    `
    const contenedor = document.getElementById('contenedor')
    contenedor.innerHTML+=card



}agregandoEvento (){
 const boton= document.getElementById(this.id)
 const productoEncontrado = productos.find(product => product.id == this.id)
 
 boton.onclick =()=>{
    agregarACarrito(productoEncontrado)
 } 
}

}

let prod1 = new Producto ('1','Atomo',1500,'./images/atomo.jpg','Colgante Atomo Deco Vintage 1 Luz E27 Apto Led')
let prod2 = new Producto ('2','Diamante',1000,'./images/diamante.jpg','Colgante Jaula Diamante Deco Vintage 1 Luz E27 Apto Led')
let prod3 = new Producto ('3','Estrella',1200,'./images/estrella.jpg','Colgante Estrella Deco Vintage 1 Luz E27 Apto Led')
let prod4 = new Producto ('4','Jaula',900,'./images/jaula.jpg','Colgante Jaula Deco Vintage 1 Luz E27 Apto Led')

productos.push(prod1,prod2,prod3,prod4)

productos.forEach( e=>{
    e.desplegarDiv()
}
)
productos.forEach( e=>{
    e.agregandoEvento()
}
)
 function agregarACarrito(producto){
let enCarrito = carrito.find(product =>product.id==producto.id)
  if (!enCarrito) {
    carrito.push({...producto, cantidad:1})
  }else{
    let carritoFiltrado = carrito.filter(product =>product.id != producto.id)
    carrito =[...carritoFiltrado,{...enCarrito, cantidad: enCarrito.cantidad + 1}]

  }
  
console.log(carrito)
mostrarCarrito()
}


function mostrarCarrito (){
  document.getElementById('carrito').innerHTML= '';
  let compra= 0
let totalCompra = 0
 for (const producto of carrito) {
 compra= producto.precio* producto.cantidad
 totalCompra+=compra
 
 document.getElementById('carrito').innerHTML += `

 <table class="table table-secondary border">
  <tbody class"text-center">
  
      <tr class="text-center">
        <td >Producto</td>
        <td >${producto.nombre}</td>
        <td >Precio</td>
        <td >$${producto.precio}</td>
        <td >Cantidad</td>
        <td >${producto.cantidad}</td>
        <td >Sub-Totales</td>
        <td >$${compra}</td>
       </tr>
  </tbody>
</table>
  
  `
}
document.getElementById('carrito').innerHTML+= `
<h4 class="text-center">Compra Total: $ ${totalCompra}</h4>
`
}

localStorage.setItem('datos',JSON.stringify(productos))


