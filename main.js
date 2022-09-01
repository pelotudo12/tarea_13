const body = document.querySelector('body')
const tbodyproducts = document.querySelector('#tbodyProducts')
const btn = document.querySelector('#btn')
body.onload = () => {
    const produst = getProducts()
    llenar_tabla(produst)

}

function llenar_tabla(produst) {
    let trs = []
    produst.forEach((p, i) => {
        const tr = crearFila(p)
        trs.push(tr)
    })
    //meter tr al body cpor medio del dom
    tbodyproducts.append(...trs)
}
function crearFila(p) {
    const tdProduc = document.createElement('td')
    tdProduc.textContent = p.name
    //columnas stock
    const tdStock = document.createElement('td')
    tdStock.textContent = p.Stock
    //columnas  precio
    const tdPrecio = document.createElement('td')
    tdPrecio.textContent = p.precio

    const trProducts = document.createElement('tr')
    trProducts.append(
        tdProduc,
        tdStock,
        tdPrecio,
    )

    return trProducts
}


btn.addEventListener('click', btnclick)

function btnclick(e) {
    const valorNombre = document.querySelector('#nombre').value
    const valorStock = parseInt(document.querySelector('#stock').value)
    const valorPrecio = parseFloat(document.querySelector('#precio').value)

    const nuevoProducto =agregarPro(valorNombre, valorStock, valorPrecio)
    const fila = crearFila(nuevoProducto)
    tbodyproducts.appendChild(fila)
    //porque se borra los dato creado se borran por q son volatil no se estan guardando en una base de datos
    alert('producto agragado')
    
    document.querySelector('#nombre').value=''
    document.querySelector('#stock').value=''
    document.querySelector('#precio').value=''

    e.preventDefault()
    
}