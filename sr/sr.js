let im = prompt(`Введіть ваше ім'я`);
alert(`Вітаю, ${im}`);
alert(`Розв'яжіть рівняння`);
let z1 = prompt(`21+29=`);
let z2 = prompt(`345-131=`);
let z3 = prompt(`890+513=`);
let z4 = prompt(`25*4=`);
let z5 = prompt(`67-90=`);
let z6 = prompt(`983*2=`);
alert(`Дайте відповідь на запитання`);
let z7 = confirm(`Столиця Франції Мінськ?`);
let z8 = confirm(`Столиця Білорусі  Париж?`);
let z9 = prompt(`Рік хрещення Русі?`);
let z10 = prompt(`Коли відбулося Бостонське чаювання?`);
let b = 0;
let prav = 0;
let neprav = 0;
if(z1 == 50){
    b = b + 1
    prav = prav + 1
}else{neprav = neprav + 1}
if(z2 == 214){
    b = b + 1
    prav = prav + 1
}else{neprav = neprav + 1}
if(z3 == 1403){
    b = b + 1
    prav = prav + 1
}else{neprav = neprav + 1}
if(z4 == 100){
    b = b + 1
    prav = prav + 1
}else{neprav = neprav + 1}
if(z5 == -23){
    b = b + 1
    prav = prav + 1
}else{neprav = neprav + 1}
if(z6 == 1966){
    b = b + 1
    prav = prav + 1
}else{neprav = neprav + 1}
if(z7 == false ){
    b = b + 1
    prav = prav + 1
}else{neprav = neprav + 1}
if(z8 == false){
    b = b + 1
    prav = prav + 1
}else{neprav = neprav + 1}
if(z9 == `988` || z9 == `988р` ||z9 == `988 рік` || z9 == `988рік`|| z9 == `988 р`){
    b = b + 2
    prav = prav + 1
}else{neprav = neprav + 1}
if(z10 == `1773` || z10 == `1773р` ||z10 == `1773 рік` || z10 == `1773рік`|| z10 == `1773 р`){
    b = b + 2
    prav = prav + 1
}else{neprav = neprav + 1}
if(b < 6){
    alert(`${im}, ви не склали тест. Ваш результат - ${b} балів`);
    alert(`Кількість правильних відповідей ${prav}, а неправильних ${neprav}`);
}else if(b >= 6 && b<= 9){
    alert(`${im}, ви задовільно склали тест. Ваш результат - ${b} балів`);
    alert(`Кількість правильних відповідей ${prav}, а неправильних ${neprav}`);
}else if(b >= 10){
    alert(`${im}, ви склали тест на відміно. Ваш результат - ${b} балів`);
    alert(`Кількість правильних відповідей ${prav}, а неправильних ${neprav}`);
}
else{}