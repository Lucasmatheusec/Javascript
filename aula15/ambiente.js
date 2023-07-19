let num = [5,2,9,3]

num[3] = 6 //vai buscar o elemento 3 na variável num e adicionar 6 no lugar. não esquecer que usa colchete.

num.push(7)//vai adicionar o valor 7 ao final da variável.

num.length// para descobrir o comprimento do array / a quantidade de elementos.

num.sort()//vai pegar todos os elementos e colocar em ordem crescente ou por ordem alfabética.

let pos = num.indexOf(9)//vai retornar a posição em que o elemento está. ex: elemento 9 na posição 2.
console.log(`o valor 9 está na posição ${pos}`)

for( let pos = 0; pos < num.length; pos++){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}//criada a variável pos / enquanto ela for menor que a variável num / adicione um elemento.

for(let pos in num){
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}//Lê-se: para cada posição dentro da variável num / a ação console.log() será feita.
