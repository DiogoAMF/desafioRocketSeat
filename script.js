// Principais pontos abordados nesse desafio:

// Estrutura de dados com objetos;
let listStudents = [
  {
    name: "Carol",
    noteOne: 10,
    noteTwo: 9
  },
  {
    name: "Diogo",
    noteOne: 6,
    noteTwo: 7
  },
  {
    name: "Angela",
    noteOne: 3,
    noteTwo: 5
  },
  {
    name: "Diego",
    noteOne: 5,
    noteTwo: 9
  },
  {
    name: "Miguel",
    noteOne: 5,
    noteTwo: 4
  },
  {
    name: "Luiz",
    noteOne: 3,
    noteTwo: 5
  },
  {
    name: "Lenira",
    noteOne: 7,
    noteTwo: 7
  },
  {
    name: "Daiara",
    noteOne: 3,
    noteTwo: 7
  },
]

//Criação de funções;
function averageScore(noteOne, noteTwo) {
let average = ((noteOne + noteTwo) / 2).toFixed(2)
return average
}

//Estrutura de repetição;
for (let student of listStudents) {
  let averageList = averageScore(student.noteOne, student.noteTwo)
// Operadores comparativos;  
  if (averageList >= 7) {
    alert(`
    A média do(a) aluno(a) ${student.name} foi de: ${averageList}.\n
    Parabéns ${student.name}, você foi aprovado(a) no concurso.
    `)
  } else {
    alert(`
    A média do(a) aluno(a) ${student.name} foi de ${averageList}.\n
    Não foi dessa vez, ${student.name}, não desista e tente novamente!
    `)
  }
}