import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartServiceService } from '../service/cart-service.service';
import { User } from '../core/models/user.model';
import { StorageService } from '../core/services/storage.service';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product';
import { MioService } from '../services/mio.service';
import { Quantity } from '../model/quantity.model';
import { CartDB } from '../model/cartDB.model';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

product: Product;
cartList: Array<Cart>;
productList: Array<Product>;
quantity: number;
imprimir!: Array<Product>;
idList: Array<number>;
cart: Cart;
user: User
totalPrice: number;
full: boolean;
checkError: boolean;
quantityList: Quantity[];
checkLoop: boolean;
deletedId: number;
dbCart: CartDB[];
dbProducts: Product[];
loadDB: boolean;
prueba: Product[];
pruebaDB: Array<number>;
ids: Array<number>;
itemsList: Product[];
item: Product;

//aviso!: Subscription;



  constructor(
    private cartService: CartServiceService,
    private storageService: StorageService,
    private mioService: MioService,
    private productsService: ProductsService
  ) { 
    this.product = new Product(0,"",0,"","","",0);
    this.cartList = new Array();
    this.quantity = 0;
    this.idList = [];
    this.cart=new Cart(0, this.product);
    this.user = new User(0, "", "", "", "", "");
    this.productList = [];
    this.totalPrice = 0;
    this.full = false;
    this.checkError = false;
    this.quantityList = [];
    this.checkLoop = false;
    this.deletedId = 0;
    this.dbCart = [];
    this.dbProducts = [];
    this.loadDB =  false;
    this.prueba = [];
    this.pruebaDB = [];
    this.ids = [];
    this.itemsList= [];
    this.item  = new Product(0,'', 0,'', '','',0);
  }

  ngOnInit(): void {
    
    this.user = this.storageService.getCurrentUser();

    
    console.log("estoy en el onint")
    this.cartService.sessionStatus.subscribe(newProduct => this.imprimir=newProduct);


     this.displayCart();

  }

  

  displayCart(){
    console.log("estoy en display")
    console.log(this.itemsList)
    console.log(this.imprimir)

    console.log(this.loadDB)

    

    
    
 


  

    console.log("impirmir")
    console.log(this.imprimir)

    this.quantityList = [];
    this.checkLoop = false;

    for(let i=0; i<this.imprimir.length; i++){
      const productItem: Product = this.imprimir[i];
      for(let z=0; z<this.quantityList.length; z++){
        if(productItem.id === this.quantityList[z].product.id){
          this.quantityList[z].quantity++;
          this.checkLoop = true;
        }
      }
      if(this.checkLoop === false){
        const quantityItem: Quantity = new Quantity(productItem, 1);
        this.quantityList.push(quantityItem);
      }
      this.checkLoop = false;
      
    }
    
    
    this.totalPrice = 0;
    for(let i=0; i<this.imprimir.length; i++){
      this.totalPrice = this.totalPrice + this.imprimir[i].price;
    }
    if(this.imprimir.length !== 0){
      this.full = true;
    }
  }


  purchase(){
    this.checkError = false;
    for(let i=0; i<this.imprimir.length; i++){
      this.mioService.purchase(this.user.id, this.imprimir[i].id).subscribe(data =>{
        alert("Successful purchase!:)");
      },
      (error) => {                              //Error callback
        alert("Unable to proceed the purchase");
        this.checkError = true;
      });
    }
    if(this.checkError === false){
      this.quantityList = [];    
      this.imprimir = [];
      this.full = false;
    }
    
  }
    
    


    deleteProduct(index:number):void{

      this.deletedId = this.quantityList[index].product.id

      if(this.quantityList[index].quantity > 1){
        console.log(this.quantityList[index].quantity)
        
        this.quantityList[index].quantity = this.quantityList[index].quantity - 1
        console.log(this.quantityList[index].quantity)
        
        
      }else{
        console.log(this.quantityList.length)
        this.quantityList.splice(index,1)
        console.log(this.quantityList.length)

      }

      

      for(let i=0; i<this.imprimir.length; i++){
        if(this.deletedId === this.imprimir[i].id){
          this.totalPrice = this.totalPrice - this.imprimir[i].price;
          this.imprimir.splice(i, 1);
          
        }
      }

     this.cartService.deleteItem(this.imprimir);
      if(this.imprimir.length === 0){
        this.full = false;
      }
    }

    


}
