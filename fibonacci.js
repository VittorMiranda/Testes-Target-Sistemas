//Variavel que guardará toda a sequência calculada
let sequencia;
function fibonacciCalculo(valor) {
    let numA = 0, numB = 1, resultado = 0;
    //adicionando os primeiros termos da sequência
    sequencia = numA + " " + numB;

    for (let i = 0; i < valor; i++) {
        //soma dos valores para o calculo
        resultado = numA + numB;
        //adicionando os proximos termos da sequencia
        sequencia += " " + resultado;
        
        if(resultado == valor){
            //se resultado chegar ao valor igual ao digitado para e envia resposta
            console.log("O valor " + valor + " pertence a sequência de fibonacci");
            console.log(sequencia);
            break;
       
        }else if(resultado > valor){
             //se resultado ultrapassar o valor igual ao digitado para e envia resposta
            console.log("O valor " + valor + " não pertence a sequência de fibonacci");
            console.log(sequencia);
            break;
        
        }else{
            //reatribuição de valores para calcular o próximo numero da sequência
            numA = numB;
            numB = resultado;
        }
        
    }
}
//chamando função, substitua o valor que deseja verificar se está presente na sequência
fibonacciCalculo(50);