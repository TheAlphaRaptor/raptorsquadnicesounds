

export default class Calc {

     Mult(...Kappa: number[]) {
        var sum = 1;
        for (var i = 0; i < Kappa.length; ++i)
        {
            sum *= Kappa[i];
        }
return sum;
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


