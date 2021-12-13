import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../cart-service.service';
import { User } from '../core/models/user.model';
import { StorageService } from '../core/services/storage.service';
import { Cart } from '../model/cart.model';
import { Product } from '../model/product';
import { ProductsService } from '../service/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: Array<Product>;
  availableProductList: Array<Product>;
  idList: Array<Number>;
  electronicList: Array<Product>;
  jeweleryList: Array<Product>;
  menList: Array<Product>;
  womenList: Array<Product>;

  events: string[];
  opened: boolean;

  electronic: boolean;
  jewelery: boolean;
  men: boolean;
  women: boolean;

  allProducts: boolean;

  repeatedProduct: boolean;

  user:User;



  product: Product;

  constructor(
    private productsService: ProductsService,
    private storageService: StorageService,
    private cartService: CartServiceService
  ) { 
    this.productList = [];
    this.idList = [];
    this.availableProductList = [];
    this.electronicList = [];
    this.jeweleryList = [];
    this.menList = [];
    this.womenList = [];

    this.events = [];
    this.opened = false;

    this.electronic = false;
    this.jewelery = false;
    this.men = false;
    this.women = false;

    this.allProducts = false;

    this.repeatedProduct = false;

    this.user = new User(0, "", "", "", "", "");

  

    this.product = new Product(0,",",0,",",",","",0);
  }

  ngOnInit(): void {
    this.getAvailableProducts();
    //this.cartService.data.subscribe();
  }

  getAvailableProducts(): void{
    this.productsService.getAvailableProductsFromDatabase().subscribe(dataResult => {
      for (let i=1; i<dataResult.length; i++){
        this.productsService.getProductById(dataResult[i]).subscribe( 
          productDataResult => {
            console.log(productDataResult.id + "jeje")
          const product: Product = new Product(
                productDataResult.id,
                productDataResult.title,
                productDataResult.price,
                productDataResult.category,
                productDataResult.description,
                productDataResult.image,
                productDataResult.rating[0]       
                ); 
              switch(product.category){
                case "electronic":
                    this.electronicList.push(product);
                    console.log("almudena")

                    break;
                case "jewelery":
                  this.jeweleryList.push(product);
                  break;
                case "men's clothing":
                  this.menList.push(product);
                  break;
                case "women's clothing":
                  this.womenList.push(product);
                  console.log(product.id)
                  break;
                

              }
              this.availableProductList.push(product);
        });
      }
    })
  }

  addToCart(i: number, category:string):void{
    switch(category){
      case "electronic":
        this.product = this.electronicList[i];

          console.log("almudena")

          break;
      case "jewelery":
        this.product = this.jeweleryList[i];

        break;
      case "men":
        this.product = this.menList[i];
        break;
      case "women":
        this.product = this.womenList[i];
        break;     

    }
    console.log("estoy aki")
    if(!this.storageService.isAuthenticated()){
      alert("Please login to add to the cart");
    }else{
      console.log("y aki")
      
      this.cartService.addToCart(this.product);
    }
  }

  chooseCategory(category: string): void{
    switch(category){
      case "electronic":
        this.electronic = true;
        this.jewelery = false;
        this.men = false;
        this.women = false;
          break;
      case "jewelery":
        this.electronic = false;
        this.jewelery = true;
        this.men = false;
        this.women = false;
        break;
      case "men":
        this.electronic = false;
        this.jewelery = false;
        this.men = true;
        this.women = false;
        break;
      case "women":
        this.electronic = false;
        this.jewelery = false;
        this.men = false;
        this.women = true;
        break;
      }
  }

  

  
  



}
