class EventBus{
    constructor() {
        this.eventHandlerMap = {}
    }
    on(eventName,cb){
        if(!this.eventHandlerMap[eventName]){
            this.eventHandlerMap[eventName] = []
        }
        this.eventHandlerMap[eventName].push(cb)
    }
    off(eventName,cb){
        if(this.eventHandlerMap[eventName]){
            const targetHandlerList = this.eventHandlerMap[eventName]
            const index = targetHandlerList.indexOf(cb)
            targetHandlerList.splice(index,1)
        }
    }
    emit(eventName,...args){
        if(this.eventHandlerMap[eventName]){
            this.eventHandlerMap[eventName].forEach(handler=>{
                handler(...args)
            })
        }
    }
    once(eventName,cb){
        this.on(eventName,(...args)=>{
            cb(...args)
            this.off(eventName,cb)
        })

    }
}