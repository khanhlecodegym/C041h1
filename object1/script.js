// class Fruit {
//     constructor() {
//         this.smell = 'good';
//     }

//     toString() {
//         console.log(`Qua nay ${this.smell}`);
//     }
// }

// class Apple  extends Fruit {
//     constructor(weight) {
//         super();
//         this.weight = weight;
//         this.color = 'red';
//     }

//     get Color() {
//         return this.color;
//     }

//     set Color(newColor) {
//         this.color = newColor;
//     }

//     eat(weight) {
//         this.weight -= weight;
//     }
// }

// let apple1 = new Apple(110);
// let apple2 = new Apple(50);
// apple1.Color = 'blue';
// apple1.eat(50);
// console.log("apple1", apple1.toString())


class Person {
    constructor(name) {
        this.name = name;
        this.power = Math.floor( Math.random()*100);
    }
}

class Batter {

    static fighting(win, german) {
       return win.power >  german.power ? `${win.name} Winner ` : `${german.name} Winner `
    }
}

let win = new Person('Thắng');
let german = new Person('Đức');
console.log("german", german)
console.log("win", win)

console.log(Batter.fighting(win, german))

