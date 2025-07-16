// Objetos são estruturas que permitem armazenar múltiplos valores em uma única variável,
// usando pares chave:valor.
// Características dos objetos:
// 1. Usam a sintaxe de chaves { chave: valor }.
// 2. Podem armazenar diferentes tipos de dados: strings, números, arrays, funções, outros objetos, etc.
// 3. Permitem acessar e modificar valores usando "." (notação de ponto) ou [""] (notação de colchetes).
// 4. São amplamente usados para representar entidades do mundo real (ex: pessoa, produto, carro).
// 5. Também são usados como base para programação orientada a objetos (POO) no JavaScript.

// Primeira forma criando um uma função para armazenar valores! assim fica mais fácil ao invês de criar um Objeto para cada pessoa que você quiser criar
const criaPessoa = (nome, sobrenome, idade) => {
    return {
        nome,
        sobrenome,
        idade
    };
}

const pessoa1 = criaPessoa('Kauã', 'alcaya', 25)
const pessoa2 = criaPessoa('Alcaya', 'kauã', 26)
const pessoa3 = criaPessoa('Silva', 'Alcaya', 27)

console.log(pessoa1, pessoa2, pessoa3)


// Segunda forma:  criando um Objeto de fato para criar variaveis e adicionar valores a ela! 
// Se você for criar varias variaveis fica meio ruim, mas é uma opção

const pessoa = {
    nome: 'Kauã', 
    sobrenome: 'Alcaya',
    idade: 21,
    sexo: undefined ?? 'Não informado',

    resposta () {
        console.log(`Meu nome é ${this.nome} ${this.sobrenome} e minha idade e sexo são, idade: ${this.idade} sexo: ${this.sexo}`)
    }

}

pessoa.resposta()