function calculadora () {
    const operacao = Number(prompt(`Escolha uma opção:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)\n`));

    if (!operacao || operacao >= 7) {
        alert(`Erro - Opração Inválida`);
        calculadora();
    }else {

    let n1 = Number(prompt(`Insira o Primeiro Valor`));
    let n2 = Number(prompt(`Insira o Segundo Valor`));
    let resultado;

    if (!n1 || !n2) {
        alert(`Erro - Parâmetros inválidos`);
        calculadora();
    }else {

        function soma(){
            resultado = n1 + n2;
            alert(`${n1} + ${n2} = ${resultado}`);
            novaOperacao();
        }
    
        function subtracao(){
            resultado = n1 - n2;
            alert(`${n1} - ${n2} = ${resultado}`);
            novaOperacao();
        }
    
        function multiplicacao(){
            resultado = n1 * n2;
            alert(`${n1} * ${n2} = ${resultado}`);
            novaOperacao();
        }
    
        function divisaoReal(){
            resultado = n1 / n2;
            alert(`${n1} / ${n2} = ${resultado}`);
            novaOperacao();
        }
    
        function divisaoInteira(){
            resultado = n1 % n2;
            alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
            novaOperacao();
        }
    
        function potenciacao(){
            resultado = n1 ** n2;
            alert(`O valor de ${n1} elevado a ${n2}ª potência é ${resultado}`);
            novaOperacao();
        }
    
    
    
        function novaOperacao() {
            let opcao = prompt(`Deseja fazer outra Operação?\n 1- Sim\n 2 - Não`);
    
            if (opcao == 1){
                calculadora();
            }else if (opcao == 2){
                alert(`valeu, até mais!`);
            }else {
                alert(`Digite uma opção Válida!`);
                novaOperacao();
            }
            
        }
    

    }

    


    if (operacao == 1){
        soma();
    }
    else if (operacao == 2){
        subtracao();
    }
    else if (operacao == 3){
        multiplicacao();
    }
    else if (operacao == 4){
        divisaoReal();
    }
    else if (operacao == 5){
        divisaoInteira();
    }
    else if (operacao == 6){
        potenciacao();
    }

    }

}

calculadora();