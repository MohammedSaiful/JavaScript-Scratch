
// camel Notation: oneTwoThreeFour
// pascal Notation: OneTwoThreeFour


function createCircle(radius) {
    return {
        radius,
        isVisible: true,
        draw() {
            console.log('draw');
        }
    };
}
const circle1=createCircle(1);

console.log(circle1);
console.log(circle1.draw());


// Constructor funtion

function Circle(radius)
{
    this.radius = radius;
    this.draw = function(){
        console.log('drawwww');
    }
}

const circle= new Circle(1);
