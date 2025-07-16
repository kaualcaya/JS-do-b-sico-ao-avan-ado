// Operadores lógicos são usados para combinar ou inverter expressões booleanas (true ou false).
// Características dos operadores lógicos:
// 1. O operador "&&" (AND) retorna true se todas as expressões forem verdadeiras.
// 2. O operador "||" (OR) retorna true se pelo menos uma expressão for verdadeira.
// 3. O operador "!" (NOT) inverte o valor lógico de uma expressão (true vira false, e vice-versa).
// 4. São muito usados em condições para controlar o fluxo do programa.
// 5. Também realizam curto-circuito, o que pode afetar a avaliação de expressões.

// =======================
// 🔁 OPERADOR "E" (AND) → &&
// =======================
// Retorna true se TODAS as expressões forem verdadeiras

console.log(true && true);    // true
console.log(true && false);   // false
console.log(5 > 2 && 10 > 3); // true
console.log(5 > 2 && 10 < 3); // false

// Uso prático:
let idade = 20;
let temCarteira = true;

if (idade >= 18 && temCarteira) {
  console.log("Pode dirigir"); // Só executa se as duas condições forem verdadeiras
}

// ========================
// ❗ OPERADOR "OU" (OR) → ||
// ========================
// Retorna true se PELO MENOS UMA expressão for verdadeira

console.log(true || false);   // true
console.log(false || false);  // false
console.log(5 > 2 || 10 < 3); // true

// ==============================
// ❌ OPERADOR "NÃO" (NOT) → !
// ==============================
// Inverte o valor lógico (true vira false e vice-versa)

console.log(!true);  // false
console.log(!false); // true

let logado = false;
if (!logado) {
  console.log("Usuário não está logado");
}