
//Função verifica se a String contem a letra desejada
function verificaString(palavra, letra) {
    //verifica se as entradas são strings
    if(typeof palavra === 'string' && typeof letra === 'string'){
        //coloca a palavra e a letra selecionada em minuscula e verifica se na string há a letra selesionada
        if(palavra.toLowerCase().includes(letra.toLowerCase())){
            console.log('A palavra ' + palavra + ' contem a letra ' + letra);
               
        }else{
            //caso a letra selecionada não exista na String retorna uma mensagem 
            console.log('A palavra ' + palavra + ' NÃO contem a letra ' + letra);
        }
    
    }else{
        //entradas não são strings retorna mensagem
        console.log('A entrada não é uma string');
    }
}

//chamada da função substitua a palavra e a letra q deseja verificar
verificaString('Hinata', 'a');