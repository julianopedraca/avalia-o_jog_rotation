// Resolução exercício 2
//concertar
console.log ("Resolução exercício 2")
const checkFibonacci = (n) => {
    let res = 5*(n**2)+4
    let sqr = Math.sqrt(res)
    if (!Number.isInteger(sqr)) {
        res = 5*(n**2)-4
        sqr = Math.sqrt(res)
    }

    return (sqr * sqr) == res ? console.log(`${n} pertence à sequência de Fibonacci`) : console.log(`${n} não pertence à sequência de Fibonacci` )
}

checkFibonacci(8)

// Resolução exsercício 3
console.log ("Resolução exercício 3")
const fs = require('fs');

const data = fs.readFileSync('./dados.json');
const monthSales = JSON.parse(data);

const startValue = monthSales[0].valor

let lowestRev = startValue
let highestRev = startValue
let daysOverAve = 0
let sumRev = 0
let workingDays = 0

for (const day of monthSales) {
    if (day.valor > 0){
        workingDays++
        if (lowestRev > day.valor){
            lowestRev = day.valor
        }
    }

    if (highestRev < day.valor){
        highestRev = day.valor
    }
    sumRev += day.valor
}

const monthlyRevAverage = sumRev/workingDays

for (const day of monthSales) {
    if (day.valor > monthlyRevAverage){
        daysOverAve++
    }
}

console.log(`o menor faturamento foi de: R$${lowestRev}`)
console.log(`o maior faturamento foi de: R$${highestRev}`)
console.log(`o numero de dias que o faturamento foi acima da média mensal foi de: ${daysOverAve} dias`)

// Resolução exsercício 4
console.log ("Resolução exercício 4")

const SP = 67836.43, RJ = 36678.66, MG = 29229.88, ES = 27165.48, Outros = 19849.53

totalRev = (SP+RJ+MG+ES+Outros)

const percentSp = (SP/totalRev)*100
const percentRj = (RJ/totalRev)*100
const percentMg = (MG/totalRev)*100
const percentEs = (ES/totalRev)*100
const percentOutros = (Outros/totalRev)*100

console.log(`SP representa ${percentSp.toFixed(2)}% do faturamento`)
console.log(`RJ representa ${percentRj.toFixed(2)}% do faturamento`)
console.log(`MG representa ${percentMg.toFixed(2)}% do faturamento`)
console.log(`ES representa ${percentEs.toFixed(2)}% do faturamento`)
console.log(`Outros representa ${percentOutros.toFixed(2)}% do faturamento`)

//Resolução exercício 5
console.log ("Resolução exercício 5")

originalString = "APROVADO"
console.log(originalString)
let reversedString

const invertString = (originalString) => {
    let invertedString = ""
    for (let i = originalString.length-1; i >= 0; i--) {
        invertedString += originalString[i]
    }
    return invertedString
}

reversedString = invertString(originalString)
console.log(reversedString)