function Produto(nome, preco, quant){
    this.nome = nome
    this.preco = preco


    Object.defineProperty(this, 'quant', {
        enumerable: false, //mostra a chave
        value: quant, //valor da chave
        writable: true, //writable serve para dizer se pode ou nao alterar algo
        configurable: true //pergunta de pode ou nao editar a chave
    })
    
}

let p1 = new Produto ('Vasilha', 10.99, 20)
console.log(Object.keys(p1))

for(let key in p1){
    console.log(key)
}