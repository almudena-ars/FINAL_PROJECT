import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartServiceService } from '../cart-service.service';
import { User } from '../core/models/user.model';
import { StorageService } from '../core/services/storage.service';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

product: Product;
cartList: Array<Cart>;
quantity: number;
idList: Array<number>;
cart: Cart;
user: User
//aviso!: Subscription;
check: boolean;



  constructor(
    private cartService: CartServiceService,
    private storageService: StorageService
  ) { 
    this.product = new Product(0,"",0,"","","",0);
    this.cartList = new Array();
    this.quantity = 0;
    this.idList = [];
    this.cart=new Cart(0, this.product);
    this.user = new User(0, "", "", "", "", "");
    this.check = false;
    
  }

  ngOnInit(): void {
    console.log("hola almudena alvarez")
    this.user = this.storageService.getCurrentUser();
    // this.aviso = this.storageService.loggedOut$.subscribe(val=>{
    //   console.log("este es aviso" + val)
    //   this.saveCart();
    // })
    this.storageService.sessionStatus.subscribe(vale => 
      this.saveCart(vale));
      console.log("AAAA " + this.check)

    this.cartService.current.subscribe(newProduct => this.product=newProduct);
      this.anhadir(this.product);
    
     

    // if(this.checkSession === false){
    //   this.saveCart();
    // }


    // this.addProduct(this.product);
  }


  saveCart(check: boolean){
    console.log("AQUIIIIII")
    if(check === true){
      alert("funciona");
      this.check === false;
    }
    
    // this.cartService.saveCart(this.user.id, this.product.id).subscribe();
    
  }

  addProduct(newProduct: Product){
    console.log("addddddddddddddd")
    this.cart = new Cart(1, newProduct);
    this.user = this.storageService.getCurrentUser();
    

    // console.log(this.cart.product.category);
    // this.cartSet.add(this.cart);
    // for(let item of this.cartSet.values()){
    //   console.log(item.product.category)
    }

    deleteProduct(){

    }

    purchaseProduct(){

    }

    anhadir(product: Product){
      let checkear: boolean = false;
      const newCart: Cart = new Cart(1, product);
      if(this.cartList.length === 0){
      console.log("sdfghjhgfdfghjhg")
    this.cartList.push(newCart)
    }else{
      for(let i=0; i<this.cartList.length; i++){
        
        console.log("jijijijijijiji")
        if(product.id === this.cartList[i].product.id){
          console.log("xdcfghj")
          this.cartList[i].quantity++ 
          //this.cartSet.add(item);
          checkear = true;
          return
        }
      }
      if(checkear === false){
        this.cartList.push(newCart);
      }
      console.log(" VICTOR!!! ! ")
      console.log(this.cartList)
    }

    }
    
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
