function LinkedList(){
    this.head = null;
}
LinkedList.prototype.push = function(val){
    const node = {
        value: val,
        next: null
    }
    if(!this.head){
        this.head = node;
    }
    else{
        current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = node;
    }
}
//
// const link = new LinkedList()
// link.push(1)
// link.push(2)
// console.log("dx---link",link)

LinkedList.prototype.myPush = function(val) {
    const node = {
        value: val,
        next: null
    }
    if(this.head){
        let current =this.head
        while (current.next){
            current = current.next
        }
        current.next = node
    }else{
        this.head = node
    }
}

LinkedList.prototype.delete = function (val){
    if(this.head){
        let current = this.head
        let prevCurrent
        while(current.value !== val){
            prevCurrent = current
            current = current.next
        }
        prevCurrent.next = current.next
    }
}

const link = new LinkedList()
link.push(1)
link.push(2)
link.push(3)
link.delete(2)
console.log("dx---link",link)
