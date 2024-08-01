let vogal = [10]
let a=0;
let i=0
let o=0
let u =0
let e=0

for (let cont = 0; cont < 10; cont++) {
   vogal[cont] = prompt("informe a vogal: ")

}

for (let f = 0; f < 10; f++) {
   if (vogal[f] == "a" || vogal[f] == "A") {
    a = a+1
   }
   if (vogal[f] == "e" || vogal[f] == "E") {
    e = e+1
   } if (vogal[f] == "i" || vogal[f] == "I") {
      i = i+1
   } if (vogal[f] == "o" || vogal[f] == "O") {
      o = o++
   } if (vogal[f] == "u" || vogal[f] == "U") {
      u = u+1
   }
}

document.write(`a qauntidade da vogal a é = ${a} `)
document.write("<br>")
document.write(`a qauntidade da vogal E é igual a = ${e} `)
document.write("<br>")
document.write(`a qauntidade da vogal I é igual a = ${i} `)
document.write("<br>")
document.write(`a qauntidade da vogal O é igual a = ${o} `)
document.write("<br>")
document.write(`a qauntidade da vogal U é igual a = ${u} `)