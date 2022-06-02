
// let JsArr = [5,6,8,6,];
// console.log('JsArr :',JsArr);





// My custom array using ES6 


class MyArray{
    constructor(){

        Object.defineProperty(this,'length',{
            value : 0,
            writable : true,
            enumerable : false,

        });

        this.length = arguments.length;

        for(let i=0;i<arguments.length;i++){
            this[i] = arguments[i]
        }
    }
    धक्का(value){

        let index = this.length;
        this[index] = value;
        this.length++

    }

    हटाओ(){
        let index = this.length-1
        delete this[index];
        this.length--
    }
    ऊपर(){
        let index = this.length-1
        return this[index];
    }
    छापना(){
        let arr = this;
        console.log( Object.values(arr) )
        // return arr
    }

    प्रिंट_रिवर्स(){
        let arr = [];

        for(let i= this.length -1;i >= 0 ; i--){

            arr.push(this[i])
    
        }
        console.log(Object.values(arr));
    }

    लंबाई(){
        let size = this.length;
        return size;
    }
}


let a1 = new MyArray(2,6,7,9,);

console.log('a1 :', a1);
console.log('a1 :', Object.values(a1));

a1.धक्का(5)
a1.धक्का(8)
a1.धक्का(7)
a1.धक्का(6)
a1.धक्का(1)
a1.धक्का(3)
a1.हटाओ()
a1.हटाओ()
a1.हटाओ()

console.log('a1 :', Object.values(a1));

console.log(a1.ऊपर());
a1.छापना()

a1.प्रिंट_रिवर्स();

console.log(a1.लंबाई())
