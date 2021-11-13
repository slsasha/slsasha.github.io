let mas = [10, 23, 76, 3, 9, 27];
let max = mas[0];
let min = mas[0];
for(i=0; i < mas.length; i++){
if(max < mas[i]){
    max = mas[i];
    
}if(min > mas[i]){
    min = mas[i];
    
}
}
console.log(min);
console.log(max);
console.log(mas);