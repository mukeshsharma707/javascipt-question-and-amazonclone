
const checkTriangleType = (a,b,c)=>
{
if(a===b && b===c)
{
    return "equiterial";
}
if(a===b || b===c || a===c)
{
    return "isoceles";

}
else
{
return "scalene";
}
}
console.log(checkTriangleType(1,3,2));
console.log(checkTriangleType(4,3,2));
console.log(checkTriangleType(3,1,2));
