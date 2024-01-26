// Type conversion is a Nightmare in javascript.....u need to be very highly careful while dealing with data types in js...why i am saying that is because...the data really travels a lot from frontend to backend and then to APIs...thus it may be possible that at some point of time...data got changed to different data types thus ...we need to be very careful with data...


//  we have many data types like number string bool NaN bigint...etc

// eg

let a = 10
console.log(typeof a) // o/p : number

let b = "23"
console.log(typeof (b)) // o/p: string

// now if we want to that a particular variable should always return to particular datatype...thus here we can do a type conversion in that scenario

let c = Number(b)
console.log(typeof c) // o/p : number

// but this method has some potential issues
//eg

let d = "33c"
let e = Number(d)
console.log(e) // o/p: NaN ....-> Not a number

// thus we need to be very careful while dealing with these things

// There is again a beautiful case

let f = null
let g = Number(f)
console.log(g) // o/p: 0

let h = undefined
let i = Number(h)
console.log(i) // o/p: NaN

// Isnt this shit amazing ..... Thus u have to remain very careful with numbers