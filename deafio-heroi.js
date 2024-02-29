const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const limites = [1000, 2000, 5000, 7000, 8000, 9000, 10000];
const niveis = ["Ferro", "Bronze", "Prata", "Ouro", "Platina", "Ascendente", "Imortal", "Radiante"];
for (let i = 0; i < limites.length; i++) {
    if (xp < limites[i]) {
        nivel = niveis[i];
        break;
    }
}
let nome = "";
let xp = 5000
rl.question('Digite seu nome: ', (input) => {
    nome = input;
    console.log(`O Herói de nome ${nome} está no nível de ${nivel}`);
    rl.close();
});

