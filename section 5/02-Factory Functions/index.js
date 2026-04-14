
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