// object destructuring in javaScript

let course = {
  '1': "a",
  '2': "b",
  '3': "c",
};

let {'2': second_value} = course;  // this is called destructuring that is using {} for objects. const/let/var {key_from_object : "Variable_name_assign_to_it"} = object name;

console.log(second_value)

