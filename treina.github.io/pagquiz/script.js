/*
:::::::::::::::::::::::::::::::::::::::::::::::::::
Área dedicada as variaveis utilizadas nas questões.
:::::::::::::::::::::::::::::::::::::::::::::::::::
*/

let pergunta01 = ["Pergunta 1: Qual é o objetivo principal do Scrum?", "Desenvolver software rapidamente, mas sem qualidade", "Desenvolver software com alta qualidade, mas sem velocidade", "Desenvolver software com alta qualidade e alta velocidade", "Desenvolver software sem se preocupar com qualidade ou velocidade", 0];
let pergunta02 = ["Pergunta 2: O que é um sprint em Scrum?", "Uma reunião diária para discutir o progresso do projeto", "Um período fixo de tempo para o desenvolvimento de um incremento de produto", "Uma técnica para estimar a quantidade de trabalho necessária para uma tarefa", "Um processo para priorizar as funcionalidades do produto", 1];
let pergunta03 = ["Pergunta 3: Como é chamado o quadro utilizado em Scrum para visualizar o progresso do projeto?", "Quadro de atividades", "Quadro de planejamento", "Quadro de retrospectiva", "Quadro Kanban", 2];
let pergunta04 = ["Pergunta 4: Qual é o principal evento de planejamento no Scrum?", "Daily Scrum", "Sprint Review", "Sprint restrospective", "Sprint Planning meeting", 3];
let pergunta05 = ["Pergunta 5: O que é o Product Backlog em Scrum?", "Uma lista ordenada de itens que são considerados completos", "Uma lista de impedimentos que a equipe precisa resolver", "Uma lista ordenada de todas as funcionalidades desejadas para o produto", "Uma lista de coisas que a equipe não deve fazer durante o sprint", 4];
let pergunta06 = ["Pergunta 6: Qual é o objetivo da reunião diária (daily scrum) em uma equipe Scrum?", "Reportar o status das atividades para o gerente do projeto", "Resolver problemas técnicos que surgiram durante o sprint", "Identificar impedimentos e discutir planos de ação para removê-los", "Criar novas histórias de usuário para o Product Backlog", 5];
let pergunta07 = ["Pergunta 7: Quais são os papéis essenciais do Scrum?", "Gerente de produto e Cliente", "Scrum Master, Cliente e patrocinador", "Programador e Stakeholder", "Scrum Master, Product Owner e Equipe Scrum", 6];
let pergunta08 = ["Pergunta 8: Quem é responsável por garantir que o time tenha um product backlog eficaz e claro no Scrum?", "O Product Owner", "O Scrum Master", "O time de desenvolvimento", "Todos os membros do Time", 7];
let pergunta09 = ["Pergunta 9: Como chama-se o gráfico utilizado para medir o progresso da execução dos trabalhos pelo time?  ", "Gráfico de Gantt ", "Barra Progressiva", "Gráfico Burndown", "Kanban", 8];
let pergunta10 = ["Pergunta 10: Quando deve ocorrer a primeira revisão formal após o início do projeto scrum?", "Após 3 meses corridos", "Ao concluir o primeiro SPRINT", "Antes mesmo de iniciar qualquer trabalho efetivo", "A critério exclusivo dos gestores", 9];

var lista;
var resposta = { 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0, 7: 0, 8: 0, 9: 0 };
var gabarito = { 0: 0.3, 1: 1.2, 2: 2.4, 3: 3.4, 4: 4.3, 5: 5.3, 6: 6.4, 7: 7.1, 8: 8.3, 9: 9.2 };
var resultado = 0;

/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::
Determina questão a ser carregada e carrega respostas.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

window.onload = carregar(pergunta01);

function carregar(var1) {
  lista = [var1];
  n1 = lista[0][5]
  //console.log(lista)
  document.getElementById("pergunta_").textContent = lista[0][0];
  document.getElementsByClassName("botao_1")[n1].style.backgroundColor = "#b20000";
  document.getElementsByClassName("botao_1")[n1].style.color = "white";

  for(i=0; i < 10; i++){
    if (i != n1){
    document.getElementsByClassName("botao_1")[i].style.backgroundColor = "white";
    document.getElementsByClassName("botao_1")[i].style.color = "#b20000";
  }
}
  for (i = 0; i < document.getElementsByClassName("lista").length; i++) {
    document.getElementsByClassName("lista")[i].textContent = lista[0][i + 1];
  }
  animaBotaoResposta()
}

/* 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 Executa o carregamento das respostas sobre o array resposta para check final. 
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function answer(var1) {
  let n2 = lista[0][5]
  resposta[lista[0][5]] = n2 + (var1/10);
  //console.log(n2)
  //console.log(resposta);
  animaBotaoResposta()
}

/* 
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
Realiza teste das respostas e trabalha String a ser apresentada no diploma.
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
*/

function answerTest() {
  for (i = 0; i < 10; i++) {
    //console.log(gabarito[i])
    //console.log(resposta[i])
    if (resposta[i] == gabarito[i]) {
      resultado += 1;
    }
  }
  //console.log(resultado);
  if (resultado >= 6){
  document.getElementsByClassName("quizz")[0].style.display = "none";
  document.getElementsByClassName("quizz")[1].style.display = "none";
  document.getElementsByClassName("diploma")[0].style.display = "block";
  document.getElementsByClassName("diploma2")[0].style.display = "block";
  document.getElementById("nota_diploma").textContent = `Nota da avaliação: Parabéns, você acertou ${resultado} de 10 questões!!!`;
  }
  else {
    window.alert('Infelizmente você não atingiu a pontuação mínima exigida de 6 pontos,\nestude mais um pouco e tente novamente mais tarde. \n \n \nPara abrir o site digite o endereço: \nwww.treinamento.terrasofthouse.com.br \n \n \nBoa sorte!!!');
  }
}

function teste() {
  console.log(document.getElementById("botao_1").value);
}

/* 
:::::::::::::::::::::::::::::::::::::::::
Segunda etapa do carregamento do diploma. 
:::::::::::::::::::::::::::::::::::::::::
*/

var nomeDiploma;
var raDiploma;

function carregaDados() {
  // Grava nome em uma variavel e carrega no <div> Diploma

  //console.log(document.getElementById("nome_diploma").value);

  nomeDiploma = document.getElementById("nome_diploma").value;
  raDiploma = document.getElementById("ra_diploma").value;

  //console.log(nomeDiploma);

  // Manipulação documento Diploma

  document.getElementById("diploma_nome").textContent = `Nome: ${nomeDiploma}`;
  document.getElementById("diploma_ra").textContent = `CPF: ${raDiploma}`;

}

function imprimir() {
  document.getElementsByClassName("quizz")[0].style.display = "none";
  document.getElementsByClassName("diploma")[0].style.display = "none";
  document.getElementById("imagem_diploma").style.display = "block";
 
  window.print();

}
/* 
::::::::::::::::::::::::::::::::::::::
Função dedicada a animação dos botoes.
::::::::::::::::::::::::::::::::::::::
*/

function animaBotaoResposta(){

    for (i = 0; i < document.getElementsByClassName("lista").length; i++) {
        n1 = lista[0][5]
        n2 = document.getElementsByClassName("lista")[i].value = n1 + ((i+1)/10)
        n3 = resposta[n1]


        //console.log(n1)
        //console.log(n2)
        //console.log(n3)
        
        if (n2 == n3){
            document.getElementsByClassName("lista")[i].style.backgroundColor = "#0202ab"
            document.getElementsByClassName("lista")[i].style.color = "#ffffff"
        }else {
            document.getElementsByClassName("lista")[i].style.backgroundColor = "white" 
            document.getElementsByClassName("lista")[i].style.color = "black"

        }
    
     }
}

/* 
::::::::::::::::::::::::::::::::::::::
Função dedicada a mascara do CPF.
::::::::::::::::::::::::::::::::::::::
*/
function mascara(i){
   
  var v = i.value;
  
  if(isNaN(v[v.length-1])){ // impede entrar outro caractere que não seja número
     i.value = v.substring(0, v.length-1);
     return;
  }
  
  i.setAttribute("maxlength", "14");
  if (v.length == 3 || v.length == 7) i.value += ".";
  if (v.length == 11) i.value += "-";

}
// Commit   
