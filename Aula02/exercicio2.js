

const biblioteca1 = {
    nome: "1Biblioteca",
    local: "Avenida Rio",
    cnpj: "681293682",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    email: "biblioteca1@gmail.com",
    site: "biblioteca1.com.br",
    telefone: ["973846218", "173046518"],
    livros: [{
         nome: "historiadebosque",
         disponibilidade1: "sim" 
        },{ 
        nome: "mortedebosque",
        disponibilidade2: "nao",}]
}

const biblioteca2 = {
    nome: "2Biblioteca",
    local: "Avenida Paulista",
    cnpj: "6818723122",
    cidade: "São Paulo",
    estado: "SP",
    email: "biblioteca2@gmail.com",
    site: "biblioteca2.com.br",
    telefone: ["98612388", "121325418"],
    livros: [{
        nome: "historiadehenrique",
        disponibilidade1: "sim", 
    },{
        nome: "mortehenrique",
        disponibilidade2: "sim",
    }]
}

const biblioteca3 = {
    nome: "3Biblioteca",
    local: "Avenida Brasília",
    cnpj: "6818397212",
    cidade: "Brasília",
    estado: "DF",
    email: "biblioteca3@gmail.com",
    site: "biblioteca3.com.br",
    telefone: ["4123124442", "098732112"],
    livros: [{
        nome: "historiadeleal",
        disponibilidade1: false,
    },{
        nome: "mortedeleal",
        disponibilidade2: false,
    }]
}
biblioteca2.livros.forEach(function (item) {
    item.disponibilidade1 = "não"
})

biblioteca1.livros.push({
    nome: "fimosedebosque",
    disponibilidade: "sim",
})

delete biblioteca1.livros[0]

console.log(biblioteca1, biblioteca2, biblioteca3)
