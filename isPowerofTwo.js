const isPowerofTwo=(num)=>
{ let d=false;
    for(let i=1;i<num;i++)
    {
       if(2**i===num)
       {
        d=true;
       }
    }
  return d;
}




console.log(isPowerofTwo(8));