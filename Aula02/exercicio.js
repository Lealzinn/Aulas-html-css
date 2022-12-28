let varA = 'A'; //'B'
let varB = 'B'; // 'C'
let varC = 'C'; // 'A'

const resposta1 = [varA, varB, varC] = [varB, varC, varA];

const resposta2 = [varA = 'B', varB = 'C', varC = 'A']

let resposta;

resposta = [varA, varB, varC]
console.log(resposta1)

if (varA === 'A') {
   varA = 'B'
}
if (varB === 'B') {
    varB = 'C'
}
if (varC === 'C') {
    varC = 'A'
}

resposta = [varA, varB, varC]


console.log(resposta)
