let arr = [];
for(let i=0;i<5000000;i++){
    arr.push(Math.random(0,255));
}

console.time('for in');
let sum = 0;
for(let n in arr){
    if(arr[n]%2==0)
        sum+=arr[n];
}
console.timeEnd('for in');

console.time('for of');
sum = 0;
for(let n of arr){
    if(n%2==0)
        sum+=n;
}
console.timeEnd('for of');

console.time('foreach');
sum = 0;
arr.forEach((each)=>{
    if(each%2==0)
        sum+=each;
})
console.timeEnd('foreach');

console.time('map');
sum = 0;
arr.map((each)=>{
    if(each%2==0)
        sum+=each;
})
console.timeEnd('map');

console.time('reduce');
sum = arr.reduce((acumulador, elemento) => {
    if (elemento % 2 == 0)
        acumulador + elemento;
}, 0);
console.timeEnd('reduce');