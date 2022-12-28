const cliente = {
    nome: "João",
    dataNascimento: "27/10/2003",       //quando é um objeto a const deixa de ser uma constante
    CPF: "2167127-12",
    Email: "joao@example.com",
    telefone: ["123456789","987654321"],
    cidade: "Belo Horizonte",
    estado: "MG",
    depedendentes: [{
        nome:  "Luisa",
        idade: "22"
    }, {
        nome: "Maria",
        idade: "21"
    }]
}
// [] = array        {} = objeto       push = adicionar a um objeto algo
cliente.depedendentes.push({
    nome: "Luis",
    idade: "23"
})

cliente.CPF = 2222222222

delete cliente.estado

console.log(cliente);