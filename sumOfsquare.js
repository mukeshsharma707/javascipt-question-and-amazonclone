const sumOfsquare=(arr)=>
{
    return arr.reduce((accum, currEle)=>
accum=(accum+currEle*currEle),0)
}


console.log(sumOfsquare([2,3,6]));