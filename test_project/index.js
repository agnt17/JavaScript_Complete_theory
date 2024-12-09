let promise = new Promise((resolve, reject)=>{
    let flag = true;
    if(flag){
      resolve("Promise Resolved")
    }
    else{
      reject("Promise Failed");
    }
})

promise.then((message)=>{
    console.log(message)
    return 10;
})
.catch((error) => {
    console.error(error)
})