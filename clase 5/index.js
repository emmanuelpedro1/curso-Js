function Autos(caracteristicas){
    this.puertas = caracteristicas.puertas;
    this.año = caracteristicas.año;
    this.marca = caracteristicas.marca;
}
const car = {
    puertas: "5",
    año: "2021",
    marca: "Fiat"
};
const auto1 = new Autos(car);
console.log(auto1);