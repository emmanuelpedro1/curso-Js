const clientes = [
    { Nombre: "Ema", Edad: 27, Gastos: 1050, Productos: 50 },
    { Nombre: "Carla", Edad: 25, Gastos: 500, Productos: 31 },
    { Nombre: "Renzo", Edad: 20, Gastos: 450, Productos: 22 },
    { Nombre: "Oliver",Edad: 26, Gastos: 970, Productos: 47 },
    { Nombre: "Pocho", Edad: 15, Gastos: 115, Productos: 5 }
]
const Clientes_Edad = clientes.sort((cli1, cli2) => {
    return cli1.Edad - cli2.Edad;

})
const Clientes_Gastos = clientes.sort((cli1, cli2) => {
    return cli1.Gastos - cli2.Gastos;

})
const Clientes_Productos = clientes.sort((cli1, cli2) => {
    return cli1.Productos - cli2.Productos;

})
console.log("Clientes ordenados de menor a mayor de edad");
console.log(Clientes_Edad);
console.log("Clientes ordenados de menor a mayor segun sus gastos");
console.log(Clientes_Gastos);
console.log("clientes ordenados de menor a mayor segun sus productos comoprados");
console.log(Clientes_Productos);
