export class Expression{
    arg1: number;
    arg2: number;
    operator: string;
    value: number;

    constructor(arg1: number, arg2: number, operator: string){
        this.arg1 = arg1;
        this.arg2 = arg2;
        this.operator = operator;
    }

    evaluate(): number {
        let operation = null;
        if (this.operator === '+'){
            operation = (a, b) => a + b;
        }
        else if (this.operator === '-'){
            operation = (a, b) => a - b;
        }
        else if (this.operator === '*'){
            operation = (a, b) => a * b;
        }

        else if (this.operator === '/'){
            operation = (a, b) => a / b;
        }
        this.value = operation(this.arg1, this.arg2); 
        return this.value;
    }
}