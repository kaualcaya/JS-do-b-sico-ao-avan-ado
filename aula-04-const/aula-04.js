// const é usado para declarar constantes em JavaScript (também introduzido no ES6).
// Características do const:
// 1. Possui escopo de bloco (assim como let).
// 2. Não pode ser reatribuído depois de declarado.
// 3. Necessita ser inicializado no momento da declaração.
// 4. Para tipos primitivos (string, number, boolean), o valor é imutável.
// 5. Para objetos e arrays, o conteúdo pode ser modificado, mas a referência não pode mudar.

const nomeEmpresa = "FairmontClub"
const Cnpj = 123000143
const EnderecoDaLoja =  "Rua Marcos arruda 626"

console.log(`Os dados da loja são Nome da Companhia: ${nomeEmpresa}, CNPJ: ${Cnpj}, Endereço da Loja: ${EnderecoDaLoja}`)