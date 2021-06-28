const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

let frutasModificado = frutas.map((x, i) => {
    x = x.toLowerCase();
    return `${i} - ${x[0].toUpperCase()}${x.substr(1)}`;
});

console.log(frutasModificado);