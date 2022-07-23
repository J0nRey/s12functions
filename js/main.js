/* 
    calcular el valor + iva de los sigioentes costos


    245.56
    97.45
    23.15
    54.96
    12.16

*/

//const IVA = 1.16

//var costo1 = 245.56
//var costo1masiva = costo1 * IVA
//console.log(costo1masiva)

//var costo2 = 97.45
//var costo2masiva = costo2 * IVA
//console.log(costo2masiva)


function addTax( price ){
    const IVA = 1.16
    let result = price * IVA 
//    console.log(result)   
}


addTax( 245.56 )
addTax( 97.45 )
addTax( 23.15 )
addTax( 54.96 )
addTax( 12.16 )



/*
-Crear una funcion que pida al usuario el numero de koders a registrar

    -tantas veces como koders se deceen registrar
        -pedir el nombre del koder
        -pedir el apellido del koder
        -imprimir el nombre completo del koder

    -pedir al usuario la cantidad de personas a guardar
    -pedir nombre , apellido de cada persona
    -guardar cada persona en un array
    imprimir cada uno de las personas
*/


function getUserName(){
//    let num = prompt(parseInt("digite el numero de koders a registrar"))
    let num = prompt("digite el numero de koders a registrar")
    for(i=0; i<num; i++){
            let userName = prompt("Digite su nombre")
            let lastName = prompt("Digite su primer apellido")
            let LastName2 = prompt("Digite su segundo apellido")
            console.log(`${userName} ${lastName} ${LastName2}`)
            let newname = userName+lastName+LastName2 
            
            let nArray = Array.of(userName,lastName,LastName2)
            console.log(nArray)
        
        }
}

//getUserName()




let vacio = new Array()
console.log(vacio)

text = "jonathan"
console.log(Array.from(text))

let c = Array.of("jonathan", "reyes", "alatorre")
console.log(c)

let musicians = [
    "Gustavo Cerati",
    "Enrique Bunbury",
    "Roy Orvison",
]

let painters = [
    "Gustavo Cerati",
    "Enrique Bunbury",
    "Roy Orvison",
]

let writers = [
    "Gustavo Cerati",
    "Enrique Bunbury",
    "Roy Orvison",
]

console.log(musicians)
console.log(painters)
console.log(writers)

function getinitial(fullName){
console.log("fullName",fullName)

let dividedName = fullName.split(" ")
let initial = "";

for(let i=0; i<dividedName.length;i++){
    let word = dividedName[i]
    let initial = word.charAt(0)
    initial += ". "
    console.log(initial)
    }
}

function printInitials(nameArray){
    for(let i=0; i<nameArray.length; i++){
        getinitial(nameArray[i])
    }
}

printInitials(musicians)
printInitials(painters)
printInitials(writers)


console.log(writers)
writers.splice(0,0,'jonathan Reyes alatorre')
writers.splice(2,1,'eliminado')

    writers.push('Jonathan Reyes')
    console.log(writers)
    console.log(writers[writers.length-1])
    
delete writers[1];
writers = writers.filter((valor) => { return valor != undefined;})
console.log(writers)

