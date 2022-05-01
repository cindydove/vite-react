interface Task {
    id: string;
    deps: string[];
    runTask: Function;
}

const input = [
    {
        id: 'task1',
        deps: [],
        runTask: () => 3,
    },
    {
        id: 'task2',
        deps: ['task1','task3'],
        runTask: (res1, res3) => 1 + res1 + res3,
    },
    {
        id: 'task3',
        deps: ['task1'],
        runTask: (res1) => 5 + res1,
    },
    {
        id: 'task4',
        deps: ['task1', 'task2'],
        runTask: (res1, res2) => 3 + res1 + res2,
    },
];

function runAllTask(list, cb) {
    const obj = {}
    const len = list.length
   const map =  list.reduce((pre,cur)=>{
       if(cur.deps.length ===0){
           obj[cur.id] = cur.runTask()
       } else{
           pre[cur.id] = cur
       }
        return pre
    },{})

    function run(restList){

        const index = restList.find(item=>item.deps.every(dep=>obj[dep]))
        const newList = restList.slice(index,)
    }


}

runAllTask(input, (err, res) => {
    console.log(res);
    /**
     res应该为：
     { task1: 3, task2: 12, task3: 8, task4: 18 }
     */
});
