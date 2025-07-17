function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultados');

    const pessoas = [];

    function recebeEventForm(evento) {
        evento.preventDefault()

        const Nome = form.querySelector('.nome').value;
        const Sobrenome = form.querySelector('.sobrenome').value;
        const Peso = form.querySelector('.peso').value;
        const Altura = form.querySelector('.altura').value;

        const NovaPessoa = {
            Nome,
            Sobrenome,
            Peso,
            Altura,
        };

        pessoas.push(NovaPessoa)
        resultado.innerHTML += `<p>${Nome} ${Sobrenome} - ${Peso}Kg, ${Altura}m<p/>`;
    }

    form.addEventListener('submit', recebeEventForm);

    
}

meuEscopo();