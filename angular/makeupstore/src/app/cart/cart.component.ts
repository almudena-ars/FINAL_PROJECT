import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartServiceService } from '../service/cart-service.service';
import { User } from '../core/models/user.model';
import { StorageService } from '../core/services/storage.service';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product';
import { MioService } from '../services/mio.service';

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
//aviso!: Subscription;



  constructor(
    private cartService: CartServiceService,
    private storageService: StorageService,
    private mioService: MioService
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
    
  }

  ngOnInit(): void {
    
    // console.log("hola almudena alvarez")
    this.user = this.storageService.getCurrentUser();
    // // this.aviso = this.storageService.loggedOut$.subscribe(val=>{
    // //   console.log("este es aviso" + val)
    // //   this.saveCart();
    // // })
    // this.storageService.sessionStatus.subscribe(vale => 
    //   this.saveCart(vale));
    //   console.log("AAAA " + this.check)

    // this.cartService.current.subscribe(newProduct => this.product=newProduct);
    //   this.anhadir(this.product);
    
    console.log("estoy en el onint")
    this.cartService.sessionStatus.subscribe(newProduct => this.imprimir=newProduct);
    this.storageService.sessionStatus.subscribe(vale => 
        
        this.saveCart(vale));
     this.displayCart(this.productList);

    // if(this.checkSession === false){
    //   this.saveCart();
    // }
    // if(this.imprimir === null){
    //   this.full = false;
    // }else{
    //   this.full = true;
    // }

    // this.addProduct(this.product);
  }

  displayCart(lista : Product[]){
    console.log("estoy en display")
    console.log(this.imprimir)

    //let storageProducts: Product[] = JSON.parse(this.imprimir);
    // data: Product[] = JSON(this.imprimir)
    
    console.log(this.cartService.getCurrentSession());
    this.productList = this.cartService.getCurrentSession();
    console.log(this.productList)
    this.totalPrice = 0;
    for(let i=0; i<this.imprimir.length; i++){
      this.totalPrice = this.totalPrice + this.imprimir[i].price;
    }
    if(this.imprimir.length !== 0){
      this.full = true;
    }
  }

  saveCart(check: boolean){
    console.log("LOG OUT CART")
    console.log(check)
    if(check === true){
      for(let i=0; i<this.imprimir.length; i++){
        console.log("estoy aqui dentro")
        this.cartService.saveCart(this.user.id, this.imprimir[i].id).subscribe();
}
  this.imprimir = [];
  this.full = false;

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
      this.imprimir = [];    
      this.full = false;
    }
    
  }
    
    
  //   // this.cartService.saveCart(this.user.id, this.product.id).subscribe();
    
  

  // addProduct(newProduct: Product){
  //   console.log("addddddddddddddd")
  //   this.cart = new Cart(1, newProduct);
  //   this.user = this.storageService.getCurrentUser();
    

  //   // console.log(this.cart.product.category);
  //   // this.cartSet.add(this.cart);
  //   // for(let item of this.cartSet.values()){
  //   //   console.log(item.product.category)
  //   }

    deleteProduct(index:number):void{
      this.totalPrice = this.totalPrice - this.imprimir[index].price;
      this.imprimir.splice(index, 1);

      this.cartService.deleteItem(this.imprimir);
      if(this.imprimir.length === 0){
        this.full = false;
      }
    }

    

    // anhadir(product: Product){
    //   let checkear: boolean = false;
    //   const newCart: Cart = new Cart(1, product);
    //   if(this.cartList.length === 0){
    //   console.log("sdfghjhgfdfghjhg")
    // this.cartList.push(newCart)
    // }else{
    //   for(let i=0; i<this.cartList.length; i++){
        
    //     console.log("jijijijijijiji")
    //     if(product.id === this.cartList[i].product.id){
    //       console.log("xdcfghj")
    //       this.cartList[i].quantity++ 
    //       //this.cartSet.add(item);
    //       checkear = true;
    //       return
    //     }
    //   }
    //   if(checkear === false){
    //     this.cartList.push(newCart);
    //   }
    //   console.log(" VICTOR!!! ! ")
    //   console.log(this.cartList)
    // }

    // }
    
    // if(this.cartSet.size === 0){
    //   console.log("sdfghjhgfdfghjhg")
    //   const cart: Cart = new Cart(1, newProduct);
    // this.cartSet.add(cart)
    // }else{
    //   for(let item of this.cartSet.values()){
    //     console.log("jijijijijijiji")
    //     if(newProduct.id === item.product.id){
    //       console.log("xdcfghj")
    //       item.quantity++;
    //       console.log(item.quantity);
    //       //this.cartSet.add(item);
    //       //return
    //     }
    //   }
    //   const cart: Cart = new Cart(1, newProduct);
    //   this.cartSet.add(cart);
    // }
    
  // }
  //   for (let i=1; i<this.cartSet.size; i++){
  //     if(newProduct.id === this.cartSet.has[this.product.id]){
  //       this.cartList[i].quantity++;
  //       console.log(this.cartList[i].quantity)

  //   }
  //   const cart: Cart = new Cart(1, newProduct);
  //       console.log(this.cartList[i].quantity)

  //       this.cartList.push(cart);
    
    
  // }

  

}
