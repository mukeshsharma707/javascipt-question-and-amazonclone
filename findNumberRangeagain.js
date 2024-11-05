
const findNumberRangeagain=(a,b,arr=[])=>// we have to do this same programe with the help of recursion- function call itself
{
    // let arr=[];  isko as an argument pass kar diya h
    if(a<=b)
    {
arr.push(a);
return findNumberRangeagain(a+1,b,arr);
    }
    return arr;

}

console.log(findNumberRangeagain(2,6));