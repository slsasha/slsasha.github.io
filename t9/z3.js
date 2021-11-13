let arr1 = [1, 2, 3, 4];
let arr2 = [3, 8, 1, 9, 10];
let arr3 = [];
for(i=0; i < arr1.length; i++){
if(arr3.indexOf(arr1[i]) == -1){
    arr3.push(arr1[i]);
    
}
}
for(i=0; i < arr2.length; i++){
    if(arr3.indexOf(arr1[i]) == -1){
        arr3.push(arr1[i]);
        
    }
    }
console.log(arr1);
console.log(arr2);
console.log(arr3);