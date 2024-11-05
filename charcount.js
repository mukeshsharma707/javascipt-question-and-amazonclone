const charcount =(word, char)=>
{
word=word.toLowerCase();
char=char.toLowerCase();
totalcount=word.split("").reduce((accum, curchar)=>
{
    if(curchar===char)// here we compare string char with char parameter.
    {
        accum++;
    }
    return accum;
},0);// Here 0 is the default value of accumulator it hold the total 
return totalcount;
} //jab kabhi output single value ho to reduce method use kare .

console.log(charcount("missIsippi","i"));