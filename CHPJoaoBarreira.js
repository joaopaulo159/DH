function time (tempo,padrao){
    let msg = "" 
    if (tempo >= padrao && tempo < 2*padrao ){
        msg = "Prato pronto, bom apetite!!!"
    }
    else if(tempo < padrao){
        msg = "Tempo insuficiente !!!"

    }else if(tempo >= 2*padrao && tempo <= 3*padrao){
        msg = "Sua comida queimou !!"
    }
    else if (tempo > 3*padrao){
        msg = "KABUMMM !!!"
    }
    return msg
}

function Microondas(comida, tempo){
    if (comida == "Pipoca"){
      const padrao = 10
        return time(tempo,padrao);
    }
    else if(comida == "Macarrão" || comida == "Brigadeiro"){
      const padrao = 8
        return time(tempo,padrao);
    }
    else if(comida == "Carne"){
      const padrao = 15
        return time(tempo,padrao);
    }
    else if(comida == "Feijão"){
      const padrao = 12
        return time(tempo,padrao);
    }  
    }
console.log(Microondas("Pipoca", 10));

console.log(Microondas("Macarrão", 10));

console.log(Microondas("Carne", 10));

console.log(Microondas("Feijão", 10));

console.log(Microondas("Brigadeiro", 10));
