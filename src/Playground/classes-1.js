class Person {
    constructor(name='an', age=0){
        this.name = name;
        this.age = age;
    }

    getGreeting(){
        return 'hi';
    }
}
class Student extends Person(){
constructor (name, age, occupation){

}
}
const me = new Student('bro', 26, 'Law');
console.log(me);

const other = new Person('Tee', 30);
console.log(other);
