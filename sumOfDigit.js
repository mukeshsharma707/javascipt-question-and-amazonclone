const sumOfDigit = (digit)=>{
var a=Array.from(String(digit),Number)// here we create digit into array so we use Array.from method
// and after that we receive empty array then we convert this array into string and at last we use number for conver to number.

console.log(a);
return a.reduce((accum, CurrEle) => // when we required single output we use reduce method.

    accum+=CurrEle
)
   
}

console.log(sumOfDigit(1798));