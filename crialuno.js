

////////******************* EX 1 e EX 2******************"///////////

module.exports = function CriaAluno(nome,faltas,notas){
        this.nome = nome;
        this.nfaltas = faltas;
        this.notas = notas;
        this.calcularMedia = function(){
          let soma = 0;
          for (i = 0;i < this.notas.length;i++){
            soma += this.notas[i]
        }return soma/this.notas.length
        },
        this.faltas = function(){
          return this.nfaltas + 1
        }
        }
