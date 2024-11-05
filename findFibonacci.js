const findFibonacci=(num)=>
{
if(num<=1){
    return num;
}
else{
    return findFibonacci(num-1)+findFibonacci(num-2);
}
}
console.log(findFibonacci(6)); 


// 0,1,1,2,3,5,8,13,21......actually additioin of last two digit