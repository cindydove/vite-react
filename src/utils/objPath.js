const arr = [
    {
        id: 1,
        child: [
            { id: 3 },
            {
                id: 4,
                child: [
                    {
                        id: 5,
                        child: [{ id: 6 }],
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        child: [
            {
                id: 7,
            },
        ],
    },
];
// 实现 fn(arr,6)    使结果输出[1,4,5,6]

const fn = (arr,val)=>{
    let pathList = []
    const fn1 = (arr1,path)=>{
        console.log("dx---arr1",arr1,path)
        let path1 = []
        for(let i=0;i<arr1.length;i++){
            if(arr1[i].id === val){
                path1 = [...path,val]
                pathList = path1
                console.log("dx----path",path)
                return
            }else{
                Array.isArray(arr1[i].child ) && fn1(arr1[i].child,[...path,arr1[i].id])
            }
        }
    }
    fn1(arr,[])
    return pathList
}

console.log(fn(arr,6))