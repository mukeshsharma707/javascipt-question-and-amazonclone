const counting=(a,b,arr=[])=>
{

    if(a<=b)// this is  an example of writing counting without a loop with helpof recursion
    {
    arr.push(a);
        return counting(a+1,b,arr);
    }

    return arr;


}


console.log(counting(1,100));
