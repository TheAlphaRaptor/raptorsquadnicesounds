

export default class Calc {

     Mult(x: number , y: number, z: number) {
         return x * y * z;
    }
     Add(x: number , y:number , z:number) {
         return x + y + z;

    }
     Sub(x: number , y:number , z:number ){
         return x - y - z;
    }
     Div(x: number , y:number , z:number) {
         return x / y / z;
    }
}
let c = new Calc;

console.log(c.Add( 4 ,5 , 6));
console.log(c.Sub( 4 ,5 , 6));
console.log(c.Mult( 4 ,5 , 6));
console.log(c.Div( 4 ,5 , 6));
