class Publisher{
    constructor() {
        this.observers = []
    }
    add(observer){
        this.observers.push(observer)
        return ()=>{
            const index = this.observers.indexOf(observer)
            this.observers.splice(index,1)
        }
    }
    notify(){
        this.observers.forEach(item=>{
            item.update(this)
        })
    }

}

class Observer{
    constructor() {
    }
    update(){
        console.log("do something")
    }

}

// 定义一个具体的需求文档（prd）发布类
class PrdPublisher extends Publisher {
    constructor() {
        super()
        // 初始化需求文档
        this.prdState = null
        // 韩梅梅还没有拉群，开发群目前为空
        this.observers = []
        console.log('PrdPublisher created')
    }

    // 该方法用于获取当前的prdState
    getState() {
        console.log('PrdPublisher.getState invoked')
        return this.prdState
    }

    // 该方法用于改变prdState的值
    setState(state) {
        console.log('PrdPublisher.setState invoked')
        // prd的值发生改变
        this.prdState = state
        // 需求文档变更，立刻通知所有开发者
        this.notify()
    }
}

class DeveloperObserver extends Observer {
    constructor(name) {
        super()
        // 需求文档一开始还不存在，prd初始为空对象
        this.prdState = {}
        this.name = name
        console.log('DeveloperObserver created')
    }

    // 重写一个具体的update方法
    update(publisher) {
        console.log('DeveloperObserver.update invoked',this.name)
        // 更新需求文档
        this.prdState = publisher.getState()
        // 调用工作函数
        this.work()
    }

    // work方法，一个专门搬砖的方法
    work() {
        // 获取需求文档
        const prd = this.prdState
        // 开始基于需求文档提供的信息搬砖。。。
        console.log('996 begins...',prd)
    }
}

// 创建订阅者：前端开发李雷
const liLei = new DeveloperObserver('李雷')
// 创建订阅者：服务端开发小A（sorry。。。起名字真的太难了）
const A = new DeveloperObserver('李雷A')
// 创建订阅者：测试同学小B
const B = new DeveloperObserver('李雷B')
// 韩梅梅出现了
const hanMeiMei = new PrdPublisher('韩梅梅')
// 需求文档出现了
const prd = {
    // 具体的需求内容
}
// 韩梅梅开始拉群
const unLilei = hanMeiMei.add(liLei)
hanMeiMei.add(A)
hanMeiMei.add(B)
// 韩梅梅发送了需求文档，并@了所有人
hanMeiMei.setState(prd)

unLilei()

hanMeiMei.setState('hahhaha')