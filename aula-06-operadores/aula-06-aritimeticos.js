// Operadores aritméticos são símbolos usados para realizar operações matemáticas básicas em JavaScript.
// Características dos operadores aritméticos:
// 1. Incluem adição (+), subtração (-), multiplicação (*), divisão (/), módulo (%) e exponenciação (**).
// 2. Operam em valores numéricos e retornam um resultado numérico.
// 3. Podem ser usados em expressões para calcular valores dinâmicos.
// 4. Importantes para manipulação matemática e lógica dentro do código.


// ==========================
// 🔢 OPERADORES ARITMÉTICOS
// ==========================
let a = 10, b = 3;

console.log(a + b); // Adição → 13
console.log(a - b); // Subtração → 7
console.log(a * b); // Multiplicação → 30
console.log(a / b); // Divisão → 3.333...
console.log(a % b); // Módulo (resto) → 1
console.log(a ** b); // Exponenciação → 1000

// ==============================
// 🔄 OPERADORES DE ATRIBUIÇÃO
// ==============================
let x = 5;

x += 2;  // x = x + 2 → 7
x -= 1;  // x = x - 1 → 6
x *= 3;  // x = x * 3 → 18
x /= 2;  // x = x / 2 → 9
x %= 4;  // x = x % 4 → 1
x **= 2; // x = x ** 2 → 1

// ========================================
// 🔼 OPERADORES DE INCREMENTO/DECREMENTO
// ========================================

let y = 4;

// Incremento tradicional
y = y + 1; // y = 5

// Incremento com +=
y += 1; // y = 6

// Pós-incremento
console.log(y++); // Exibe 6, depois y = 7
console.log(y);   // Exibe 7

// Pré-incremento
let z = 2;
console.log(++z); // z = 3, exibe 3

// Decremento com --
let w = 5;
console.log(w--); // Exibe 5, depois w = 4
console.log(--w); // w = 3, exibe 3
