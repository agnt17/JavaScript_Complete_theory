// map is a very important concept in the terms of js
const map = new Map()
map.set('INDIA' , +91);
map.set('USA' , +1);
map.set('UK', +44);
map.set('PAK', +92);

console.log(map)


//To print both key and value we need to first destructure the array using square bracket notation....to print only keys or only value then it is not necessary to destructure the array...however after destructuring u will get same result.

for (const [key, value] of map) {
    console.log(key, ':-', value);
}
