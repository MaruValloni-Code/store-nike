
//Mensaje de Bienvenida a la Pag
function Saludar (){
    alert("Bienvenido a Nike Store");
    console.log("Bienvenido a Nike Store");
}

Saludar()





class Zapatillas {
    constructor(id, modelo, talle, precio, cant) {
        this.id = id;
        this.modelo = modelo;
        this.talle = parseInt(talle);
        this.precio = parseFloat(precio);
        this.cant = parseInt(cant);
        this.stock = true;
    }
    fixStock() {
        this.cant = this.cant - 1;

        if (this.cant <= 0) {
            this.stock = false;
            alert("El articulo seleccionado no tiene Stock Disponible");
        }
    }
}

//BASE DE DATOS SIMULADA
const Zapatillas1 = new Zapatillas("1", "Nike SB", "40", "5900", "9");
const Zapatillas2 = new Zapatillas("2", "Nike ST", "39", "6990", "10", );
const Zapatillas3 = new Zapatillas("3", "Nike Static", "41", "4900", "16", );
const Zapatillas4 = new Zapatillas("4", "Nike", "38", "6500", "7", );
const Zapatillas5 = new Zapatillas("5", "Nike Air Max", "40", "5500", "1", );
const Zapatillas6 = new Zapatillas("5", "Nike Shokx", "40", "5900", "11", );
//END BASE SIMULADA//












/* Calculadora
function calculadora (primerNumero, segundoNumero, operacion) {
    switch (operacion){
        case "+":
            return primerNumero + segundoNumero;
            break;
        case "-":
            return primerNumero - segundoNumero;
            break;
        case "*":
            return primerNumero * segundoNumero;
            break;
        case"/":
            return primerNumero / segundoNumero;
            break;
        default: 
            return 0;
            break;
    }
}
console.log (calculadora(10,5,"*"));
*/