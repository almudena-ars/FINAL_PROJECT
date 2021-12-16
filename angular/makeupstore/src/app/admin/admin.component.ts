import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductAdmin } from '../model/product-admin';
import { ProductsService } from '../service/products.service';
import { MioService } from '../services/mio.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  productAdminList: Array<ProductAdmin>;
  idList: Array<number>;
  allProductList: Array<Product>;
  id:number;
  addProd: boolean;
  viewTrans: boolean;


  constructor(
    private productsService: ProductsService,
    private mioService: MioService
  ) { 
    this.productAdminList = [];
    this.idList = [];
    this.allProductList = [];
    this.id=0;
    this.addProd = false;
    this.viewTrans = false;
  }

  ngOnInit(): void {
    this.getAllProductsFromDatabase();
    this.getAllProducts();
  }

  addProducts(event: Event):void{
    if(this.addProd === false){
      this.addProd = true;
    }else{
      this.addProd = false;
    }
  }

  viewTransactions(event: Event):void{
    if(this.viewTrans === false){
      this.viewTrans = true;
    }else{
      this.viewTrans = false;
    }
  }


  getAllProductsFromDatabase(){
    this.productsService.getAllProductsFromDatabase().subscribe(dataResult =>{
      this.idList = [];
      for (let i=1; i<dataResult.length; i++){
        this.idList.push(dataResult[i].id);
        this.productsService.getProductById(dataResult[i].id).subscribe( 
          productDataResult => {
            console.log(productDataResult.id + "holi")
          const productAdmin: ProductAdmin = new ProductAdmin(
                productDataResult.id,
                productDataResult.title,
                productDataResult.price,
                productDataResult.category,
                productDataResult.image,
                dataResult[i].quantity
                ); 
              
              this.productAdminList.push(productAdmin);
        });
      }
    })
  }

  addNewProduct(i: number, product: Product):void{


    this.id = this.allProductList[i].id;
    this.mioService.addNewProduct(this.id).subscribe();
    this.getAllProducts();
    
  }

  getAllProducts(): void{
    this.productsService.getAllProducts().subscribe(dataResult => {
      console.log("hola2");
      this.allProductList = [];
        for (let i=1; i<dataResult.length; i++) { //iteramos el dataresult para traernos cada uno de los pokemon que hay dentro que son 20
          const product: Product = new Product(
            dataResult[i].id,
            dataResult[i].title,
            dataResult[i].price,
            dataResult[i].category,
            dataResult[i].description,
            dataResult[i].image,
            dataResult[i].rating[0]       
                  ); 
                this.allProductList.push(product);


        }
      
        
    });
  }

  // addProduct(productId: number, quantity:number):void{
  //   this.repeatedProduct = false;
  //   for (let i=0; i<this.productList.length; i++){
  //     if(productId === this.productList[i].id){
  //       this.repeatedProduct = true;
  //       alert("Item with id " + productId + " is already in the database")
  //     }
  //     if(this.repeatedProduct == false){
  //         this.productsService.getProductById(productId).subscribe(productDataResult =>{
  //           const productId: number = productDataResult.id;
  //           const product: Product = new Product(
  //             productDataResult.id,
  //             productDataResult.title,
  //             productDataResult.price,
  //             productDataResult.category,
  //             productDataResult.description,
  //             productDataResult.image,
  //             productDataResult.rating[0]       
  //             ); 
  //           switch(product.category){
  //             case "electronic":
  //                 this.electronicList.push(product);
  //                 break;
  //             case "jewelery":
  //               this.jeweleryList.push(product);
  //               break;
  //             case "men's clothing":
  //               this.menList.push(product);
  //               break;
  //             case "women's clothing":
  //               this.womenList.push(product);
  //               break;
              
  //           }
  //           this.availableProductList.push(product);
              
  //           this.productsService.addNewProduct(productId, quantity).subscribe()
  //         }, (error) => {  
  //           alert("There is item with the id " + productId)
  //         });  
  //       }
  //   }

  // }

}
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
