//declaraçao de variaveis 
let nome ="joao";//variavel que pode mudar 
const idade= 25; // variavel constante 
let cidade="sao paulo";// metodo antigo de declarar varaiveis 

//operadores matematicos 
let a = 10;
let b = 5;

let soma = a+b;
let subtracao = a-b;
let multiplicacao
let divisao =a/b
let resto = a%b;
let potencia = a**b;
let incremento = ++a;
let decremento = --b;

//operadores de comparaçao 
let igual = (a==b)
let diferente =(a!=b);
let maior =(a>b)
let menor =(a<b);
let maiorouigual = (a>=b);
let menorouigual =!(a<=b);

//operadores de logicos 
let elogico=(a>5&&b<10);
let oulogico=(a)
let naologica=!(a>5);

//operadores atribuiçao 
let c= 10;
c +=5;//c=c +5
c-=3;//c=c -3
c *=2;//c=c *2
c /=4; //c=c %3
c %=3;// c=c %3
c**=2;//c=c **2

//operadores de conteçao (uniao de textos)
let mensagem=" ola, meu nome e "+nome+",tenho "+ idade +" anos e moro em "+ cidade + ".";

//exibir resultados no console 
console.log ("soma:"+ soma);
console.log ("subtraçao:"+subtracao);
console.log("multiplicaçao:"+multiplicacao);
console.log("divisao:"+divisao);
console.log("resto de divisao"+resto);
console.log("potencia:"+potencia);
console.log("incremento de a:"+incremento);
console.log("decremento de b:"+decremento);
console.log("igualdade:"+igual);
console.log("diferente:"+diferente);
console.log("maior que:"+maior);
console.log("menor que:"-menor);
console.log("maior ou igual:"+maiorouigual);
console.log("menor ou igual:"-menorouigual);
console.log("e logica:"+elogico);
console.log("oulogica:"+oulogico);
console.log("negaçao logica:"+naologica);
console.log("valor de c apos atribuiçoes:"+c);
console.log(mensagem);