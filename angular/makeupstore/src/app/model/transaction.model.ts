export class Transaction{
    public get productId(): number {
        return this._productId;
    }
    public set productId(value: number) {
        this._productId = value;
    }
    public get userId(): number {
        return this._userId;
    }
    public set userId(value: number) {
        this._userId = value;
    }
    public get purchaseDate(): Date {
        return this._purchaseDate;
    }
    public set purchaseDate(value: Date) {
        this._purchaseDate = value;
    }
    public get transactionId(): number {
        return this._transactionId;
    }
    public set transactionId(value: number) {
        this._transactionId = value;
    }
    
    constructor(
        private _transactionId: number,
        private _purchaseDate: Date,
        private _userId: number,
        private _productId: number
    ){}
}