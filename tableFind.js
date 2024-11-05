const tableFind=(num)=>
{
    console.log("You request for table : "+num);
    for(i=1;i<=10;i++)
    {

        tableOf=num*i;
        console.log(`${num}*${i} = ${tableOf}`);
    }
}


console.log(tableFind(10));