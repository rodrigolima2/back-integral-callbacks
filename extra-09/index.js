const pessoas = [
    {
        nome: 'Antonio',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Maria',
        idade: 30,
        profissao: 'Jornalista'
    },
    {
        nome: 'Ana',
        idade: 21,
        profissao: 'Programador'
    },
    {
        nome: 'Beatriz',
        idade: 20,
        profissao: 'Programador'
    },
    {
        nome: 'José',
        idade: 32,
        profissao: 'Jornalista'
    },
    {
        nome: 'Marcos',
        idade: 30,
        profissao: 'Programador'
    }
];

const programadoresMaisDeVinte = pessoas.filter(x => x.idade > 20 && x.profissao === "Programador");
const jornalistasMaisDeTrinta = pessoas.filter(x => x.idade > 30 && x.profissao === "Jornalista");
const progEJornJovens = pessoas.filter(x => x.idade <= 29 && (x.profissao === "Jornalista" || x.profissao === "Programador"));

console.log(programadoresMaisDeVinte);
console.log(jornalistasMaisDeTrinta);
console.log(progEJornJovens);