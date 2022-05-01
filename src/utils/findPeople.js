// 1.  遍历积分相加
// 2.   取最大的两个值
// 3.   最大的两个积分清除

//  peopleList
//   setRank()
//   getMax()
//   clearMax()

const peopleList = [{id:1,rank:0},{id:2,rank:0},{id:3,rank:0},{id:4,rank:0},{id:5,rank:0}]

class Share {
    constructor(peopleList) {
        this.peopleList = peopleList
        this.targetPeople = []


    }
    setRank(){
        const newPeople = this.peopleList.map(item=>{
            item.rank += Math.ceil(Math.random()*100)
            return item
        })
        this.peopleList = newPeople
        this.getMax()
    }


    getMax(){
        const sortPeople = this.peopleList.sort((a,b)=>b.rank - a.rank )
        const maxPeople = sortPeople.filter(item=> item.rank === sortPeople[0].rank)
        if(maxPeople.length>2){
            // 加积分
            this.setTargetRank(maxPeople)

        }else if(maxPeople.length === 1){


        }else{
            this.targetPeople = maxPeople
        }

    }
}



function setTargetRank(targetPeopleList){
    const target = targetPeopleList.map(item=>{
        item.rank += Math.ceil(Math.random()*100)
        return item
    })
   getMaxList(target)
}

function getMaxList(peopleList,maxNum){
    const sortPeople = peopleList.sort((a,b)=>b.rank - a.rank )
    const maxPeople = sortPeople.filter(item=> item.rank === sortPeople[0].rank)

    if(maxNum === 2){

        if(maxPeople.length>2){
            // 加积分
            const targetList = maxPeople.map(item=>{
                item.rank += Math.ceil(Math.random()*100)
                return item
            })
            return  getMaxList(targetList)

        }else if(maxPeople.length === 1){
            // 第二大
            const secondMax = sortPeople.filter(item=> item.rank === sortPeople[1].rank)
            if(secondMax.length === 1){
                return [...maxPeople,...secondMax]
            }else{
                const targetList = secondMax.map(item=>{
                    item.rank += Math.ceil(Math.random()*100)
                    return item
                })
                return maxPeople.concat(getMaxList(targetList))
            }
        }else{
            return maxPeople
        }
    }else{
        if(maxPeople.length === 1) return maxPeople
    }


}

const shareObj = new Share(peopleList)
shareObj.setRank()

console.log(shareObj.peopleList)
shareObj.getMax()






