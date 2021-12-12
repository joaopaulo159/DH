
let crialuno = require("./modulos/crialuno")
console.log(crialuno)
    
const pessoa = new crialuno("aaa",5,[1,2,3,4,5])
const pessoa1 = new crialuno("bbb",6,[7.8,7,10,9])
const pessoa2 = new crialuno("ccc",7,[7,2,8,9])



////"******************* EX 3,EX 4 e EX 5 ******************/////

let curso = {
  curso: "matemática",
  mediaMinima: 7,
  fmax: 4,
  turma: [pessoa,pessoa1,pessoa2],
  novoAluno: function(parametro){
  this.turma.push(parametro)
  },
  aprovado:function(aluno){
    if(aluno.calcularMedia() > this.mediaMinima && aluno.faltas() < this.fmax){
      return true
    }  

    else if (aluno.calcularMedia() >= this.mediaMinima * 1.1){
      return true
    } 
        
    else{         
    return false}
        },
      
  listaAprovados: function(){
    let novArray = []
    for (j = 0;j < this.turma.length;j++){
        novArray.push(this.aprovado(this.turma[j]))
      }return novArray
    }
}
module.exports = curso
 


    