const findNumberRange= (initNum,endNum)=>
    {
let arr=[];
for(let i=initNum; i<=endNum;i++)
{
    console.log(i);
    arr.push(i);
 
//  console.log("push element is "+arr.push(i));

}
return arr;
}
console.log(findNumberRange(2,5));
