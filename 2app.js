console.log("TASK 3");
function myFun(myNum) {
    let num = String(myNum).split("");
    let result = +num[0] + +num[1] + +num[2] ==  +num[3] + +num[4] + +num[5] 
    return result
}
console.log(myFun(232403));