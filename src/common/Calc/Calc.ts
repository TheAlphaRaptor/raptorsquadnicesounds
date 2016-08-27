var a1 = 0;
var b1 = 0;
var c1 = 0;

export default class Calc {

  getNumbers(a: number , b: number , c: number): void {
a1 = a;
b1 = b;
c1 = c;

    }
 displayMult():void {
console.log("\n Multiplied: ");
console.log (a1 * b1 * c1);
    }
     displayAdd():void {
console.log ("\n Added: ");
console.log (a1 + b1 + c1);

    }
     displaySub():void {
console.log("Subtracted: ")
console.log (a1 - b1 - c1);
    }
     displayDiv():void {
console.log("Divided: ")
console.log (a1 / b1 / c1);
    }
}