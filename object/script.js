// let person1 = {
//     name: 'Đức',
//     age: 22,
//     address: '3 Ngo Quyen',
//     gender: true,

//     gogo: function() {
//         alert('Tướng đi hình con 4 chân');
//     }
// }

// let person2 = {
//     name: 'Hiệp',
//     age: 21,
//     address: '5 Ngo Quyen',
//     gender: true,

//     gogo: function() {
//         alert('Tướng đi hình con 2 chân');
//     }
// }

// function Person(name, age, address, gender, md) {
//     this.name = name;
//     this.age = age;
//     this.address = address;
//     this.gender = gender;
//     this.mauda = md;

//     this.gogo = function() {
//         console.log('tướng đi hình con');
//     }
// }

// let person1 = new Person('Đức', 18, '22 Trần Phú', false, 'den');
// let person2 = new Person('Thanh', 18, '22 Trần Phú', false, 'do');

// let arrayPerson = [person1];
// arrayPerson.push(person2);

// console.log(arrayPerson[0].mauda);

function Circle(radius, color) {
  this.radius = radius;
  this.color = color;

  this.getRadius = function () {
    return this.radius;
  };

  this.setRadius = function (newRadius) {
    this.radius = newRadius;
  };

  this.getArea = function () {
    return Math.PI * this.radius * this.radius;
  };

  this.showInfo = function () {
    console.log(
      `Hinh tron có bán hình: ${this.radius} và màu sắc ${this.color}`
    );
  };
}

// let circle1 = new Circle(9.0, "red");
// console.log("circle1", circle1.getRadius());
// console.log("circle1", circle1.getArea());
// circle1.setRadius(25.0);
// console.log("circle1", circle1.getArea());
// let circle2 = new Circle(19.0, "blue");

// console.log("circle1", circle2.getArea());

// circle2.showInfo();

let listCricle = [];

for(let i = 0; i < 10; i++) {
    let ran = Math.round(Math.random()*100);
    let cricle = new Circle(ran, "red");

    listCricle.push(cricle);
}

for(let i = 0; i < 10; i++) {
    listCricle[i].showInfo();
    console.log(`Dien Tich: ${listCricle[i].getArea().toFixed(2)}`)
}
