const findMedian=(arr)=>{
arrsort=arr.sort((a,b)=>a-b);
console.log(arrsort);
arrlen= arr.length;
console.log("length of array is "+arrlen);
arravg=Math.floor(arrlen/2);
console.log("Index number of median "+arravg);
for(i=0;i<=arrlen-1;i++)
{
    medianval=arr[arravg];
}
console.log("Median value is "+medianval);


}


console.log(findMedian([2,-5,70,-9,8,7]));