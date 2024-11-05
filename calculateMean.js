const calculateMean=(arr)=>
{
    arrlen=arr.length;
    
let sum=arr.reduce((accum, currEle)=>
    accum+currEle,0
    )
    console.log(sum);
    return sum/arrlen;
    

// let b=arr.length;
// console.log(b);
// let avg=accum/b;
// console.log(avg);
}

console.log(calculateMean([3,-4,2,5]));