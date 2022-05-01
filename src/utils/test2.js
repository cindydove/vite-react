//  1,1,2,3,5,8,13
const obj = {}
function getNumber(n) {

if(n<3){
    obj[n] = 1
    return obj[n]
}else{

    return getNumber(n-1)+getNumber(n-2)
}
}

console.log(getNumber(3))
console.log(getNumber(4))
console.log(getNumber(5))
console.log(getNumber(6))

