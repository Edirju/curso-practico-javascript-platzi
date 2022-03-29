// Código del cuadrado
console.group("Cuadrado");
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cms");

function perimetroCuadrado(lado) {
    return lado * 4;
} 
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cms");

function areaCuadrado(lado) {
    return lado * lado;
} 
//const areaCuadrado = ladoCuadrado * ladoCuadrado;
//console.log("El área del cuadrado es: " + areaCuadrado + " cm^2");
console.groupEnd();

// Código del Triangulo
console.group("Triangulo");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6;
//const baseTriangulo = 4;


//console.log(
//    "Los lados del cuadrado miden: " 
//    + ladoTriangulo1 + "cms, " 
  //  + ladoTriangulo2 + "cms, "
    //+ baseTriangulo + "cms"
//);

//const alturaTriangulo = 5.5;
//console.log("La altura del triangulo es: " + alturaTriangulo + "cms");

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es: " + perimetroTriangulo + " cms");
function areaTriangulo(base, altura) {
    return (base * altura) / 2;
}

//const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
//console.log("El area del triangulo es: " + areaTriangulo + " cms");
console.groupEnd();

// Código del Circulo
console.group("Circulo");
// Radio
//const radioCirculo = 4;
//console.log("El radio del circulo es: " + radioCirculo + " cms");

// Diametro
function diametroCirculo(radio){
    return radio * 2;
} 
//const diametroCirculo = radioCirculo * 2;
//console.log("El diametro del circulo es: " + diametroCirculo + " cms");

// PI
const PI = Math.PI;
console.log("El Pi del circulo es: " + PI + " cms");

// Circunferencia
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
}

//const perimetroCirculo = diametroCirculo * PI;
//console.log("La circunferencia es: " + perimetroCirculo + " cms");

// Area
function areaCirculo(radio){
    return (radio * radio) * PI;
}

//const areaCirculo = (radioCirculo * radioCirculo) * PI;
//console.log("El area del circulo es: " + areaCirculo + " cms");

console.groupEnd();

// Desde aqui interactuamos con el HTML
function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert(area);
}

