import Controller from './Controller.js';
import path from 'path';

export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }
    get() {
        let myParams = this.HttpContext.path.params;
        let breakAgain = false;
        // //// Fonction de vérification
        // console.log("parseInt(result.x)", parseInt(result.x))

         // if (result.op != null) {
        //     switch (result.op) {
        //         case '+':
        //         case '-':
        //         case '*':
        //         case '/':
        //         case '%':
        //             if (Object.keys(result).length != 4)
        //                 return (result.error != null);
        //             if (result.x == null)
        //                 return (result.error != null);
        //             if (isNaN(parseInt(result.x)))
        //                 return (result.error != null);
        //             if (result.y == null)
        //                 return (result.error != null);
        //             if (isNaN(parseInt(result.y)))
        //                 return (result.error != null);
        //             break;
        if(myParams.length == 0) {
            this.HttpContext.response.HTML("../wwwroot/maths-help.html");
        } else if(myParams.op != null) {
            switch(myParams.op) {
                case '+':
                case ' ':
                case '-':
                case '*':
                case '/':
                case '%':
                    /*if (myParams.length != 3) {
                        myParams.error = "incorrect amount of parameters";
                        breakAgain = true;
                    } else*/ if (myParams.x == null) {
                        myParams.error = "incorrect parameters - 'x' is missing";
                        breakAgain = true;
                    } else if (isNaN(parseInt(myParams.x))) {
                        myParams.error = "incorrect parameters - 'x' is not a number";
                        breakAgain = true;
                    } else if (myParams.y == null) {
                        myParams.error = "incorrect parameters - 'y' is missing";
                        breakAgain = true;
                    } else if (isNaN(parseInt(myParams.y))) {
                        myParams.error = "incorrect parameters - 'y' is not a number";
                        breakAgain = true;
                    }
                    break;
        //         case '!':
        //         case 'p':
        //         case 'np':
        //             if (Object.keys(result).length != 3)
        //                 return (result.error != null);
        //             if (result.n == null)
        //                 return (result.error != null);
        //             if (isNaN(parseInt(result.n)))
        //                 return (result.error != null);
        //             if (/[\.]/.test(String(result.n))) // is float
        //                 return (result.error != null);
        //             if (parseInt(result.n) <= 0)
        //                 return (result.error != null);
        //             break;
        //         default:
        //             return (result.error != null);
        //     }
                case '!':
                case 'p':
                case 'np':
                    /*if (myParams.length != 2) {
                        myParams.error = "incorrect amount of parameters";
                        breakAgain = true;
                    } else*/ if (myParams.n == null) {
                        myParams.error = "incorrect parameters - 'n' is missing";
                        breakAgain = true;
                    } else if (isNaN(parseInt(myParams.n))) {
                        myParams.error = "incorrect parameters - 'n' is not a number";
                        breakAgain = true;
                    } else if (/[\.]/.test(String(myParams.n))) {
                        myParams.error = "incorrect parameters - 'n' is not an integer";
                        breakAgain = true;
                    } else if (parseInt(myParams.n) <= 0) {
                        myParams.error = "incorrect parameters - 'n' is not greater than zero";
                        breakAgain = true;
                    }
                    break;
                default:
                    myParams.error = "incorrect parameters - 'op' is incorrect";
                    breakAgain = true;
            }
        //     if (result.value == null)
        //         return false;

        //     switch (result.op) {
        //         case '+': return (result.value == parseFloat(result.x) + parseFloat(result.y));
        //         case '-': return (result.value == parseFloat(result.x) - parseFloat(result.y));
        //         case '*': return (result.value == parseFloat(result.x) * parseFloat(result.y));
        
            if (!breakAgain) {
                switch (myParams.op) {
                    case '+':
                    case ' ':
                        myParams.value = parseFloat(myParams.x) + parseFloat(myParams.y);
                        break;
                    case '-':
                        myParams.value = parseFloat(myParams.x) - parseFloat(myParams.y);
                        break;
                    case '*':
                        myParams.value = parseFloat(myParams.x) * parseFloat(myParams.y);
                        break;
        //         case '/':
        //             if (result.value == "NaN" && parseFloat(result.x) == 0 && parseFloat(result.y) == 0)
        //                 return true;
        //             return (result.value == parseFloat(result.x) / parseFloat(result.y));
        
                    case '/':
                        if (parseFloat(myParams.x) == 0
                             && parseFloat(myParams.y) == 0) {
                                myParams.value == "NaN";
                        } else {
                            myParams.value = parseFloat(myParams.x) / parseFloat(myParams.y);
                        }
                        break;
        //         case '%':
        //             if (result.value == "NaN" && parseInt(result.y) == 0)
        //                 return true;
        //             return (result.value == parseInt(result.x) % parseInt(result.y));
        
                    case '%':
                        if (parseInt(myParams.y) == 0) {
                            myParams.value == "NaN";
                        } else {
                            myParams.value = parseFloat(myParams.x) % parseFloat(myParams.y);
                        }
                    break;
        //         case '!': return (result.value == factorial(parseInt(result.n)));
        //         case 'p': return (result.value == isPrime(parseInt(result.n)));
        //         case 'np': return (result.value == findPrime(parseInt(result.n)));
        //         default:
        //             return (result.error != null);
        //     }
                    case '!':
                        myParams.value = this.factorial(parseInt(myParams.n));
                        break;
                    case 'p':
                        myParams.value = this.isPrime(parseInt(myParams.n));
                        break;
                    case 'np':
                        myParams.value = this.findPrime(parseInt(myParams.n));
                }
            }
        // } else {
        //     return (result.error != null)
        // }
        // return true;
        } else {
            myParams.error = "incorrect parameters - 'op' is missing";
        }
        this.HttpContext.response.JSON(myParams);
    }
    factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
    isPrime(value) {
        for (var i = 2; i < value; i++) {
            if (value % i === 0) {
                return false;
            }
        }
        return value > 1;
    }
    findPrime(n) {
        let primeNumer = 0;
        for (let i = 0; i < n; i++) {
            primeNumer++;
            while (!isPrime(primeNumer)) {
                primeNumer++;
            }
        }
        return primeNumer;
    }
}