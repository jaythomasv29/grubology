export class Ingredient {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }

    // SHORTCUT: same as above, but removing fields and doing...
    // constructor(public name: string, pulic amount: number){

    // }
}