const Modal = {
    open(){
        // Lembrando que nos botões "Nova transação" e "Cancelar" foi adicionado o onclick
        // Abrir modal
        // Adicionar a class active ao modal
        
        //Lembrando que no CSS foi criada uma classe active com visible opacity: 1; e  visibility: visible;
        

        // para pegar o modal overlay e adicionar uma classe active nele é necessário usar o objeto "Dom" (Document Object Modal). O document vai colocar o modelo do HTML todo dentro de um objeto carregado de funcionalidades

        // querySelector: Selector é o selector CSS e query significa pesquisar 

        // Explicação: Procure no documento html inteiro a class modal-overlay e quando encontrar pegue e devolva um objeto, e esse objeto será a <div class="modal-overlay">
        document.querySelector('.modal-overlay')
        //classList serve para procurar na lista de classes e add é para adicionar uma classe ao modal que foi procurado pelo querySelector, neste caso o modal-overlay
        .classList.add('active')
    },
    close(){
        // Fechar o modal
        // Remover a class active ao modal
        document.querySelector('.modal-overlay')
        .classList.remove('active')
    }
}

// Preciso criar um objeto que vai armazenar os valores nos campos entrada, saída, total
// Será feito com o Array "const transactions []" que cria uma lista de objetos
const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021',
    },
    {
        id: 2,
        description: 'Website',
        amount: 500000,
        date: '23/01/2021',
    },
    {
        id: 3,
        description: 'Internet',
        amount: -20000,
        date: '23/01/2021',
    },
    {
        id: 4,
        description: 'App',
        amount: 20000,
        date: '23/01/2021',
    },  
]


const Transaction = {
    //incomes: Tradução = entradas
    incomes() {
        // somar as entradas
    },
    //expenses: Tradução = saídas
    expenses() {
        // somar as saídas
    },
    total() {
        // entradas - saídas
    }
}

// faz a criação do html dentro do javascript


//OBS: Os dados(descrição, valor, data) devem fazer parte
// do Javascript para que eu possa fazer as somas, subtrações etc. 


//Eu preciso pegar as minhas transações do meu objeto aqui
// no javascript (const transactions) e colocar lá no HTML, ou seja,
// substituir os dados do HTML com os dados do Javascript, para isso
//criar innerHTMLTransaction(){}

const DOM = {
    //buscar no HTML a tag <tbody> que é a tag de conteúdo da tabela
    // a busca será feita pelo querySelector utilizando o id da tabela(data-table)
    transactiosContainer: document.querySelector('#data-table tbody'),
    // receber a transação que vai querer adicionar e vai receber tbm um index
    addTransaction(transaction, index) {
        const tr = document.createElement('tr')
        tr.innerHTML = DOM.innerHTMLTransaction(transaction)

        DOM.transactiosContainer.appendChild(tr)

    },

  
    innerHTMLTransaction(transaction) {
        //variavel para analisar se a transação é income ou expense
        const CSSclass = transaction.amount > 0 ? "income" : "expense"

        //Formatação do valor em reais
        const amount = Utils.formatCurrency(transaction.amount)

        const html = `
        <td class="description">${transaction.description}</td>
        <td class="${CSSclass}">${amount}</td>
        <td class="date">${transaction.date}</td>
        <td>
            <img src="./assets/minus.svg" alt="Remover transação">
        </td>
        `
        return html
    }
}

const Utils = {
    formatCurrency(value) {
        const signal = Number(value) < 0 ? "-" : ""
        
        value = String(value).replace(/\D/g, "")

        value = Number(value) / 100
       //substituir a linha acima pelo código abaixo
        //value = value * 100
       // return Math.round(value)

        value = value.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL"
        })

        return signal + value
    }
}

transactions.forEach(function(transaction){
    DOM.addTransaction(transaction)
})
