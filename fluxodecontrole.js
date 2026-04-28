//Altere a variável 'menu' para testar o switch case.
const exercicios = 20;

switch (exercicios){
    case 1:
        console.log("Exercicio 1 selecionado - Verificar se número é positivo. Executando...\n");
        positivo();
        break;

    case 2:
        console.log("Exercicio 2 selecionado - Número par ou ímpar. Executando...\n");
        imparPar();
        break;

    case 3:
        console.log("Exercicio 3 selecionado - Boas-vindas por turno. Executando...\n");
        boasVindasTurno();
        break;

    case 4:
        console.log("Exercicio 4 selecionado - Maior de dois números. Executando...\n");
        maiorNumero();
        break;

    case 5:
        console.log("Exercicio 5 selecionado - Uso do operador ternário. Executando...\n");
        ternario();
        break;

    case 6:
        console.log("Exercicio 6 selecionado - Menu simples com switch. Executando...\n");
        menu();
        break;

    case 7:
        console.log("Exercício 7 selecionado - Contador de 1 a 5 com while. Executando...\n");
        contadorWhile();
        break;

    case 8:
        console.log("Exercício 8 selecionado - Contagem regressiva com do...while. Executando...\n");
        regressivaDoWhile();
        break;

    case 9:
        console.log("Exercício 9 selecionado - Imprimir de 1 a 10 com for. Executando...\n");
        forUmADez();
        break;

    case 10:
        console.log("Exercício 10 selecionado - Somar números de 1 a 10. Executando...\n");
        somaUmADez();
        break;

    case 11:
        console.log("Exercício 11 selecionado - Imprimir elementos de um array com for. Executando...\n");
        arrayComFor();
        break;

    case 12:
        console.log("Exercício 12 selecionado - Usar for...of com array. Executando...\n");
        arrayForOf();
        break;

    case 13:
        console.log("Exercício 13 selecionado - Usar for...in com objeto. Executando...\n");
        objetoForIn();
        break;

    case 14:
        console.log("Exercício 14 selecionado - Parar contagem com break. Executando...\n");
        breakContagem();
        break;

    case 15:
        console.log("Exercício 15 selecionado - Pular número com continue. Executando...\n");
        continueContagem();
        break;

    case 16:
        console.log("Exercício 16 selecionado - Classificar nota do aluno. Executando...\n");
        classificarNota();
        break;

    case 17:
        console.log("Exercício 17 selecionado - Tabuada de um número. Executando...\n");
        tabuada();
        break;

    case 18:
        console.log("Exercício 18 selecionado - Contar elementos numéricos em um array misto. Executando...\n");
        contarNumerosArray();
        break;

    case 19:
        console.log("Exercício 19 selecionado - Verificar se uma palavra é palíndromo. Executando...\n");
        palindromo();
        break;

    case 20:
        console.log("Exercício 20 selecionado - Menu interativo com switch e while. Executando...\n");
        menuInterativo();
        break;

    default:
        console.log("Opção inválida.");
    
}

function positivo(){
    const num = 19;

    if (num > 0) {
        console.log("Número Positivo!");
    }
}

function imparPar(){
    const num = 11;

    if (num % 2 === 0) {
        console.log ("Número Par!");
    } else {
        console.log ("Número Ímpar!");
    }
}


function boasVindasTurno(){
    const turno = "N";

    if (turno === "M"){
        console.log ("Bom dia!");
    } else if(turno === "T"){
        console.log ("Boa tarde!");
    } else if(turno === "N"){
        console.log ("Boa noite!");
    }
}

function maiorNumero(){
    const num1 = 3;
    const num2 = 1;

    if( num1 > num2){
        console.log(num1);
    } else {
        console.log(num2);
    }
}

function ternario(){
    const num = 2;
    const resultado = num >= 0 ? "Positivo" : "Negativo";
    console.log (resultado);
}

function menu(){
    const opcao = 2;

    switch (opcao) {
        case 1:
            console.log("Início");
            break;
        case 2:
            console.log("Sobre");
            break;
        case 3:
            console.log("Sair");
            break;
    }
}


function contadorWhile() {
    let i = 1;

    while (i <= 5) {
        console.log(i);
        i++;
    }
}

function regressivaDoWhile() {
    let i = 5;

    do {
        console.log(i);
        i--;
    } while (i >= 1);
}

function forUmADez() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}

function somaUmADez() {
    let soma = 0;

    for (let i = 1; i <= 10; i++) {
        soma += i;
    }

    console.log(soma);
}

function arrayComFor() {
    const frutas = ["Maçã", "Banana", "Uva"];

    for (let i = 0; i < frutas.length; i++) {
        console.log(frutas[i]);
    }
}

function arrayForOf() {
    const nomes = ["Ana", "Pedro", "Lucas"];

    for (let nome of nomes) {
        console.log(nome);
    }
}

function objetoForIn() {
    const pessoa = {
        nome: "Lorena",
        idade: 17,
        cidade: "Campinas"
    };

    for (let chave in pessoa) {
        console.log(chave + ": " + pessoa[chave]);
    }
}

function breakContagem() {
    for (let i = 1; i <= 10; i++) {
        if (i === 5) {
            break;
        }

        console.log(i);
    }
}

function continueContagem() {
    for (let i = 1; i <= 10; i++) {
        if (i === 7) {
            continue;
        }

        console.log(i);
    }
}

function classificarNota() {
    const nota = 8.5;

    if (nota < 6) {
        console.log("Reprovado");
    } else if (nota < 8) {
        console.log("Recuperação");
    } else {
        console.log("Aprovado");
    }
}

function tabuada() {
    const num = 5;

    for (let i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + (num * i));
    }
}

function contarNumerosArray() {
    const lista = [1, "oi", true, 7, 9, "js"];
    let contador = 0;

    for (let item of lista) {
        if (typeof item === "number") {
            contador++;
        }
    }

    console.log("Quantidade:", contador);
}

function palindromo() {
    const palavra = "arara";
    let invertida = "";

    for (let i = palavra.length - 1; i >= 0; i--) {
        invertida += palavra[i];
    }

    if (palavra === invertida) {
        console.log("É palíndromo");
    } else {
        console.log("Não é palíndromo");
    }
}

function menuInterativo() {
    let opcao = 1;

    while (opcao <= 3) {
        switch (opcao) {
            case 1:
                console.log("Início");
                break;
            case 2:
                console.log("Sobre");
                break;
            case 3:
                console.log("Sair");
                return;
        }

        opcao++;
    }
}
