// In this section we will study what actually is a problem with "var". Why we replaced it with let or const.

if(true){
  var c = 30;
}

console.log(c)

// now ideally what should happen is that this should return error and says c is not defined but actually it has no error and due to which the sense of function scope fails here. That is why we purposely removed the concept of var instead we use let and const which do not create any problem related to scope.

if(true){
  let a = 10;
  const b = 20;
}
console.log(a);
console.log(b);

// the o/p will give error becuase a and b aren't defined beyond the if scope.