 "use strict";
 //regular
function showNums(n, m) {
    let result = [];

    for (let i = n; i < m; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }

    return result;
};

console.log(showNums(3, 15));




//arrow
let showNums = (n, m) => {
    let result = [];

    for (let i = n; i < m; i++) {
        if (i % 2 !== 0) {
            result.push(i);
        }
    }

    return result;
};

console.log(showNums(3, 15));


regular
function sumNums(arr){
    let sum =0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
};

console.log(sumNums([1, 2, 3, 4, 5]));


 arrow
let showNums=(arr)=>{
    let sum=0;
    for(let i=0;i<arr.length;i++){
        sum+=arr[i];
    }
    return sum;
}

console.log(showNums([1,2,3,4,5,6,7]))

regular
function arraySum(arr){
    let count=0;
    for(let i=0;i<=arr.length;i++){
        if(i%2==0){
          count=count+1
        }
      
    }
    return count;
}
console.log(arraySum([2,4,3,7,9,6,]))

arrow
let arraySum=(arr)=>{
    let count=0;
    for(let i=0;i<=arr.length;i++){
        if(i%2==0){
            count=count+1
        }
    }
    return count;
}
console.log(arraySum([2,4,5,6,7,8]))

regular
function numFact(a){
    let res=1;
    for(let i=1;i<=a;i++){
        res=res*i
    }
    return res;
}
console.log(numFact(2))


arrow
 let numFact=(a)=>{
    let res=1;
    for(let i=1;i<=a;i++){
        res*=i
    }
    return res;
 }
  console.log(numFact(3))


 function countArr(arr){
    let count=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]%6>4){
            count++
        }
    }
    return count

 }
 console.log(countArr([12,24,48,5]))
