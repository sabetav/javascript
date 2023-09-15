
// Calcula area de un triangulo

function areaTriangulo() {
    var Base = 5;
    var Altura = 8;
    var Area = ((Base * Altura)/2);
    
console.log("El area de tu triangulo es " + Area);
}

areaTriangulo();

// Celsius a Farenheit

function Temperatura() {
    var centigrados = 21;
    var farenheit = ((centigrados * 1.8)+32)

    console.log(centigrados + "°C son " + farenheit + "°F");
}

Temperatura();

// Maximo de dos numeros

function numMayor() {
    var num1 = 31;
    var num2 = 54;
    
    console.log(Math.max(num1, num2))
}

numMayor();

// Calcular factorial

function numFactorial() {
    var resultado = 1;

    for (let num = 10; num > 0; num--) {
        resultado *= num;
    }

    console.log( resultado )
}

numFactorial();

// Numeros primos


// Revertir cadena de texto.

function revertir() {
    var texto = "Tengo una serpiente en mi bota";
    var revertir = "";

    for (let rv = texto.length - 1; rv >= 0; rv--){
        revertir += texto[rv];
    }

    console.log(revertir)
}

revertir();

// Suma de los N numeros naturales

function sumNatural() {
    var resultado = 0;

    for (let num = 10; num > 0; num--){
        resultado = (resultado + num)
    }

    console.log(resultado)
}

sumNatural();

// Elemento mas grande de un arreglo

function elemMayor() {

}

// Palindromo

// Numero aleatorio (en un rango)