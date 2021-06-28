const fs = require('fs');

const content = "Estou aprendendo JavaScript na Cubos Academy";

fs.writeFile("./aprendendo.txt", content, () => {
    console.log("O arquivo foi escrito");
});