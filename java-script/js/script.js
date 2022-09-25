function calcularMedia(notas) {

    let soma = 0;
    for(c = 0; c< notas.length; c++) {
        soma += notas[c];
    }

    media = soma / notas.length;

    return media;
}

     let media; // escopo global

     function aprovacao(notas) {

         let media = calcularMedia(notas); // escopo da função

         let condicao = media >= 8 ? "aprovado" : "reprovado";

         return 'Média: ' + media + ' - Resultado: ' + condicao;
     }

    //  Função Recursiva

    function contagemRegressiva(numero) {
        
        console.log(numero);

        let proximoNumero = numero - 1;

        if(proximoNumero > 0)
             contagemRegressiva(proximoNumero);
    }

    // contagemRegressiva(50);

    document.getElementById('formulario-01').addEventListener('submit', function(evento){

        evento.preventDefault();
        evento.stopPropagation();


        let dados = new FormData(this);

        let notas = [];

        for(let key of dados.keys()) {

         let numero = dados.get(key).match(/\d/) ? Number(dados.get(key)) : 0; // é um número

         if(!isNaN(numero)) {
            notas.push(numero)
         }
        }

        console.log(notas);

        texto = aprovacao(notas);

        document.getElementById('resultado').innerHTML = texto;
    })
