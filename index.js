/* var array = ["primero", "segundo", "tercero", "cuarto"];
var newArray = ["Quinto", "Sexto"];

array.push("Soy el ultimo elemento");

array.splice(4, 0, newArray[0], newArray[1]) 


for(var i = 0; i < array.length; i++){
    console.log(array[i]);
}*/
/*
var persona = {
    nombre: "Dario",
    apellido: "dinas",
    edad: 25
}


for(var llave in persona){
    if(persona.hasOwnProperty(llave))
    console.log(persona[llave]);
}

var llaves = Object.keys(persona);
for(var i = 0; i < llaves.length; i++){
    var llave = llaves[i];
    console.log(persona[llave]);
}

var products = [
    {id: 1, name: "Leche", price: 120, categories: ["familiar", "comida"]},
    {id: 2, name: "arroz", price: 80, categories: ["familiar", "comida"]}
]

for (var i = 0; i < products.length; i++){
    var product = products[i];
    console.log(product.name);
    console.log(" id: " + product.id);
    console.log("  Precio: " + product.price);
  console.log("  Categorías: " + product.categories.join(", "));
*/

var recipe = {
    "leche en polvo": "1 litro",
    "chocolate": "3 barras",
    "azucar": "30 gramos",
}

recipe.mixIngredients = function(texto){
    return texto
}

console.log(recipe.mixIngredients("mezclando ingredientes...."));;























