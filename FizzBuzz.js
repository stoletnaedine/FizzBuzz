const fizzBuzz = (begin, end) => {
  if (begin <= end) {
    for (let num = begin; num <= end; num++){
      if (num % 3 == 0 && num % 5 == 0) {
      console.log ('FizzBuzz');
      }
  else
    if (num % 3 == 0) {
      console.log ('Fizz');
    }
  else
    if (num % 5 == 0) {
      console.log ('Buzz');
    }
  else
    console.log (num);
    }
  }
}
