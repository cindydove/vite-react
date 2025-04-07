class EventEmitter {
    constructor() {
        this.event = {
        }
    }
    on(type, cb) {
        if (!this.event[type]) {
            this.event[type] = [cb]
        } else {
            this.event[type].push(cb)
        }
    }
    once(type, cb) {
        // 绑定的时fn, 执行的时候会触发fn函数
        let fn = () => {
            cb(); // fn函数中调用原有的callback
            this.off(type, fn); // 删除fn, 再次执行的时候之后执行一次
        }
        this.on(type, fn)
    }
    emit(type, ...args) {
        if (!this.event[type])
            return
        else {
            this.event[type].forEach(cb => {
                cb(...args)
            });
        }
    }
    off(type, cb) {
        if (!this.event[type])
            return
        else {
            this.event[type] = this.event[type].filter(item => item !== cb)
        }
    }
}



// 运行示例
let ev = new EventEmitter();
const fun1 = (str) => {
    console.log(str);
}

ev.on('say', fun1);
ev.once('say', fun1)
ev.emit('say', 'visa');
ev.off('say', fun1);

