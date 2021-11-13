let arr1 = [`Пн`,`Вт`,`Ср`,`Чт`,`Пт`,`Сб`,`Нд`];
let arr2 = [1200, 1140, 1400, 1150, 1400, 2500, 2950];
let suma = 0;
let max = [];
console.log(`День - Прибуток`);
for(i=0; i<arr1.length;i++){
console.log(`${arr1[i]} - ${arr2[i]}`);
suma = suma + arr2[i] ;
}
for(i=0; i < arr2.length; i++){
    if(max.indexOf(arr2[i]) == -1){
        max.push(arr2[i]);
        
    }
    }

console.log(`Загальний прибуток за тиждень - ${suma}`);
console.log(max);