//Ejercicio 1
//Declare and initialize an array that contains integers
let arrayDeNumeros = [1, 2, 3, 4, 5, 6];
//Declare and initialize a variable that contains the length of arrayDeNumeros
let tamañoArray = arrayDeNumeros.length;
//Declare and initialize a variable for the while loop
let i = 0;
//Run throw arrayDeNumeros. If a number divided by two has a reminder equal to 0, then it is a multiple of 2.
while(i < tamañoArray){
    if(arrayDeNumeros[i] % 2 == 0){
        console.log(arrayDeNumeros[i]);
    }
    i++;
}

//Ejercicio 2
//Declare and initialize an array that contains integers
let arrayDeNumeros2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
//Declare and initialize a variable that contains the length of arrayDeNumeros2
let tamañoArray2 = arrayDeNumeros2.length;
//Declare and initialize variables for the while loop
let j = 0;
let k = 0;
let tieneDivisores = 0;
//Run throw arrayDeNumeros2. If a number can be divided by a number between 2 and itself minus 1, then it is not a prime.
while(j < tamañoArray2){
    let primerPrueba = 2;
    let ultimaPrueba = arrayDeNumeros2[j]-1;
    tieneDivisores = 0;
    while(primerPrueba <= ultimaPrueba){
        if(arrayDeNumeros2[j] % primerPrueba == 0){
            tieneDivisores = 1;
        }
        primerPrueba++;
    }
    if(tieneDivisores == 0){
        console.log(arrayDeNumeros2[j]);
    }
    j++;
}

//Ejercicio 3
//Math.floor(Math.random()*(25-10+1))+10;
//Declare an empty array
let arrayAleatorio = [];
//Declare a variable for the while loop
let l = 0;
//Fill the array with random numbers between 0 and 50
while(l < 30){
    arrayAleatorio[l] = Math.floor(Math.random()*(50-0+1))+0;
    l++;
}
//Declare a variable for the next while loop
l = 0;
//Run throw arrayAleatorio and show array index and value
while(l < 30){
    console.log("valor " + l + ":" + " " + arrayAleatorio[l]);
    l++;
}
