const hello = (str)=>
{
if(str.length===0)
{
    return false;
}
str=str.split(" ");
console.log(str);
str=str.map((currEle)=>
currEle.replace(currEle[0],currEle[0].toUpperCase())
);
console.log(str);
str=str.join("");
console.log(str);
str=`#${str}`;
console.log(str);


}

console.log(hello("my name is mahi sharma"));