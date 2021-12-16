import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ProductAdmin } from '../model/product-admin';
import { Transaction } from '../model/transaction.model';
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
  userId: number;
  transactionList: Transaction[];


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
    this.userId = 0;
    this.transactionList = [];
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

  

  getTransactionsByUser(userId: number){
    this.mioService.getTransactionByUser(this.userId).subscribe(data=>{
      for(let i=0; i<data.length; i++){
        const transaction: Transaction = new Transaction(
          data[i].id,
          data[i].purchaseDate,
          data[i].userId,
          data[i].productId
          
        )

        console.log("trans")
        console.log(transaction.transactionId)
        
        this.transactionList.push(transaction);
      }
      
    }
    )

   
      
  }


  getAllProductsFromDatabase(){
    this.productsService.getAllProductsFromDatabase().subscribe(dataResult =>{
      this.idList = [];
      for (let i=0; i<dataResult.length; i++){
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
        for (let i=0; i<dataResult.length; i++) { //iteramos el dataresult para traernos cada uno de los pokemon que hay dentro que son 20
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



}
