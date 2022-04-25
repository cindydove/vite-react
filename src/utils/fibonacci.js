// 1,1,2,3,5,8,
// 1,2,3,4,5,6
function getFibonacci(){
    const numMap = {}

    function getNumber(n){
        if(n<3){
            if(!numMap[n]){
                numMap[n] = 1
            }
            return numMap[n]
        }else{
            const N_2 =  numMap[n-2] ? numMap[n-2] : getNumber(n-2)
            const N_1 =  numMap[n-1] ? numMap[n-1] : getNumber(n-1)
            numMap[n] = N_1 + N_2
            return numMap[n]
        }
    }
    return getNumber
}

const getNumber =  getFibonacci()



getNumber(7)
console.log("dx--5")
getNumber(9)




