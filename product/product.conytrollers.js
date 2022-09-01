const Prod =[
    new products('Lapiz',10,0,40),
    new products('Borrador',20,0,15),
    new products('Esfero Azul',30,0,25),
    new products('Compaz',40,2),
    new products('Cartulina',10,0,40),
    new products('Cuaderno',20,0,15),
    new products('Esfero Rojo',30,0,25),
    new products('Lamina',40,0,0),
    
]

function getProducts(){
    return Prod
}
function agregarPro(name ,stock,precio){
    const nuevoProducto= new products(name,stock,precio)
    Prod.push(nuevoProducto)
    return nuevoProducto
}