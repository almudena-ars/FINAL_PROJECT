import { Product } from "./product";


export class Cart{
    public get quantity(): number {
        return this._quantity;
    }
    public set quantity(value: number) {
        this._quantity = value;
    }
    public get product(): Product {
        return this._product;
    }
    public set product(value: Product) {
        this._product = value;
    }
    
    
    constructor(
        private _quantity: number,
        private _product: Product
    ){}
}