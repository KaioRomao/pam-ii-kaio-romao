let num1 = 2
const num2 = 3
var msg = "Olá amigo, esse é o número: "


// function para realizar uma soma...
function soma(){
let resultado = num1 + num2
console.log(msg + resultado)
}

soma()

function somaComParametros(valor1, valor2){
    console.log("o resultado é", valor1 + valor2)
    
}
somaComParametros(5, 5)


const multiplicacao = (n1, n2) => { 
    return n1 * n2
}
console.log("resultado multiplicação: " + multiplicacao(2,3))

let usuario = {
    nome: "Kaio",
    idade: 21,
    signo: "Leão",
    calvo: false
    
}

console.log(typeof usuario)
console.log("DADOS USUARIO: " + 
"\n Nome: " + usuario.nome + 
"\n idade: " + usuario.idade + 
"\n signo: " + usuario.signo +
"\n calvo: " + usuario.calvo)

const nomes = ["Kaio", "Gisela"]
console.log(nomes)
console.log(typeof nomes)
console.log(nomes [0])

const somaMelhorada = (n1, n2) => {
    let resultNovaFunc = ''

    if(typeof n1 == "number" && typeof n2 == "number"){
        resultNovaFunc = n1 + n2
        return "Resultado: " + resultNovaFunc
    }
        return "valores de entrada invalidos"
}
console.log(somaMelhorada(4,"5"))