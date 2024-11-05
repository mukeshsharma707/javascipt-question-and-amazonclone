const findFactorial=(num)=>
{
    let total=1;
for(i=1;i<=num;i++)
{
total =total*i;
}
console.log(total);
}
console.log(findFactorial(6));

// recurison - a function call itself is called recursion.