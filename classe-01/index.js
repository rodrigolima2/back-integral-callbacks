const cidades = ['Salvador', 'São Paulo', 'Brasilia', 'Recife', 'Rio de Janeiro'];

let cidadesFiltradas = cidades.filter(x => x.length <= 8);
cidadesFiltradas = cidadesFiltradas.join(", ");

console.log(cidadesFiltradas);