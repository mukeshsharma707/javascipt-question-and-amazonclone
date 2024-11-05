const toCamelCase=(str)=>
{
arr=str.split(" ");
console.log(arr);
arr=arr.map((currEle,index)=>{
    if(index===0)
    return currEle;
else
return currEle.charAt(0).toUpperCase()+currEle.slice(1).toLowerCase();

})
console.log(arr);
return arr.join("");
}

console.log(toCamelCase("my name is mukesh"));