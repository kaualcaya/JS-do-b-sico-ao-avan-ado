// function é uma maneira de declarar blocos de código reutilizáveis em JavaScript.
// Características das funções:
// 1. Servem para executar uma tarefa ou retornar um valor.
// 2. Podem receber parâmetros e retornar resultados.
// 3. Ajudam a evitar repetição de código (princípio DRY).
// 4. Podem ser declaradas de diferentes formas: tradicional, expressão, arrow function, etc.
// 5. Permitem modularizar a lógica do seu programa.

const SuaProfissao = (nome,cargo) => `Olá, me chamo ${nome} e meu cargo é ${cargo} `;
console.log(SuaProfissao("Kauã alcaya","Eng de Software"))

const raizQuadrada = (n) => Math.floor `A Raiz Quadrada de ${n} é ${n ** 0.5}`
console.log(raizQuadrada(7))



