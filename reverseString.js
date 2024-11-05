const reverseString=(str)=>{
let rstr="";
for(let i=str.length-1; i>=0; i--)
{
    rstr=rstr+str[i];
}
return rstr;
}



console.log(reverseString("hello"));