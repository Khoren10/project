'use strict';


class Rectangle {
        constructor(height, width) {
                this.height = height;
                this.width = width;
        }
        calcArea() {
                return this.height * this.width;
        }
}

class ColoredRectangleWithText extends Rectangle {
        constructor(height,width,text,bgColor) {
                super(height,width);
                this.text = text;
                this.bgColor = bgColor;
        }
        showMyProps () {
                console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
        }
}

const div = new ColoredRectangleWithText(2, 4, 'Hello', 'red');

console.log(div.calcArea());
div.showMyProps();

// const square = new Rectangle(10, 10);
// const long = new Rectangle(2, 100);

// console.log(long.calcArea());
// console.log(square.calcArea());