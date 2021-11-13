let povt = [1, 2, 4, 4, 6, 8, 9, 5, 4, 2, 3, 3];
let massiv = [];

for(i = 0; i < povt.length; i++){
if(massiv.indexOf(povt[i]) == -1){
    massiv.push(povt[i]);

}
}
console.log(povt);
console.log(massiv);