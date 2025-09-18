const prompt = require("prompt-sync")();

let victories = parseInt(prompt("Digite o número de vitórias: "));
let losses = parseInt(prompt("Digite o número de derrotas: "));

let result = victories - losses;

function setRank(result){
    switch (true) {
        case result < 10:
            return "Ferro";
        case result >= 11 && result <= 20:
            return "Bronze";
        case result >= 21 && result <= 50:
            return "Prata";
        case result >= 51 && result <= 80:
            return "Ouro";
        case result >= 81 && result <= 90:
            return "Diamante";
        case result >= 91 && result <= 100:
            return "Lendário";
        case result >= 101:
            return "Imortal";
        default:
            return "Sem rank";
    }
}

console.log(`O Herói tem o saldo vitórias ${result} e está no rank ${setRank(result)}.`);
