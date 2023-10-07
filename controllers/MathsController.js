import Controller from './Controller.js';
import path from 'path';

export default class MathsController extends Controller {
    constructor(HttpContext) {
        super(HttpContext);
    }
    get() {
        /*
        //// Fonction(s(?)) de vérification
        console.log("parseInt(result.x)", parseInt(result.x))
        if (result.op != null) {
            switch (result.op) {
                case '+':
                case '-':
                case '*':
                case '/':
                case '%':
                    if (Object.keys(result).length != 4)
                        return (result.error != null);
                    if (result.x == null)
                        return (result.error != null);
                    if (isNaN(parseInt(result.x)))
                        return (result.error != null);
                    if (result.y == null)
                        return (result.error != null);
                    if (isNaN(parseInt(result.y)))
                        return (result.error != null);
                    break;
                case '!':
                case 'p':
                case 'np':
                    if (Object.keys(result).length != 3)
                        return (result.error != null);
                    if (result.n == null)
                        return (result.error != null);
                    if (isNaN(parseInt(result.n)))
                        return (result.error != null);
                    if (/[\.]/.test(String(result.n))) // is float
                        return (result.error != null);
                    if (parseInt(result.n) <= 0)
                        return (result.error != null);
                    break;
                default:
                    return (result.error != null);
            }
            if (result.value == null)
                return false;

            switch (result.op) {
                case '+': return (result.value == parseFloat(result.x) + parseFloat(result.y));
                case '-': return (result.value == parseFloat(result.x) - parseFloat(result.y));
                case '*': return (result.value == parseFloat(result.x) * parseFloat(result.y));
                case '/':
                    if (result.value == "NaN" && parseFloat(result.x) == 0 && parseFloat(result.y) == 0)
                        return true;
                    return (result.value == parseFloat(result.x) / parseFloat(result.y));
                case '%':
                    if (result.value == "NaN" && parseInt(result.y) == 0)
                        return true;
                    return (result.value == parseInt(result.x) % parseInt(result.y));
                case '!': return (result.value == factorial(parseInt(result.n)));
                case 'p': return (result.value == isPrime(parseInt(result.n)));
                case 'np': return (result.value == findPrime(parseInt(result.n)));
                default:
                    return (result.error != null);
            }
        } else {
            return (result.error != null)
        }
        return true; */
    }
    factorial(n) {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
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