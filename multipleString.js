const multipleString=(str,num)=>{
  return  (num<=0) ? str : str.repeat(num); /// agar hum turnery operator nahi use karenge to agar no ki value
  // o hogi to koi bhi answer nahi aayega isliye hum agar num ki value 0 h to usi string ko return kar denge
// return str.repeat(num);
}

console.log(multipleString("hello",2)); // we need to repeat this hello string 3 times