// function calcularMedia(notas) {

const calcularMedia = (notas) => {
    let soma = 0;
    for(let c = 0; c < notas.length; c++) {
        soma += notas[c];
    }

    const media = soma / notas.length;

    return media;
}

   

     let media; // escopo global

     const aprovacao = (notas) => {
         const media = calcularMedia(notas); // escopo da função

         const condicao = media >= 8 ? "aprovado" : "reprovado";

         return 'Média: ' + media + ' - Resultado: ' + condicao;
     }

    //  Função Recursiva

    const contagemRegressiva = (numero) => {
        
        console.log(numero);

        const proximoNumero = numero - 1;

        if(proximoNumero > 0)
             contagemRegressiva(proximoNumero);
    }

    // contagemRegressiva(50);

    document.getElementById('formulario-01').addEventListener('submit', (evento) => {

        evento.preventDefault();
        evento.stopPropagation();


        const dados = new FormData(this);

        const notas = [];

        for(const key of dados.keys()) {

         const numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0; // é um número

         if(!isNaN(numero)) {
            notas.push(numero)
         }
        }

        console.log(notas);

        const texto = aprovacao(notas);

        document.getElementById('resultado').innerHTML = texto;
    })
