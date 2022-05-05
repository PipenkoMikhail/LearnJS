function Animals() {

    //можно обращаться к аргументам функции как к массиву
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments[3]);

    //и можно перебирать аргументы как массив
    for(let arg of arguments) console.log(arg);
}
Animals("Elefant", "Cat", "Duck", "Mouse", "Hipopotam");
