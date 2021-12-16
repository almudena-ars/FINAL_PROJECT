import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductItemComponent } from './product-item/product-item.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CoreModule } from "./core/core.module";
import { Routing } from "./app.routing";
import { LoginComponent } from "./login/login.component";
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { AdminItemComponent } from './admin-item/admin-item.component';
import { MatTableModule } from '@angular/material/table';
import { AdminItemTwoComponent } from './admin-item-two/admin-item-two.component';
import { CartComponent } from './cart/cart.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { AdminTransactionsComponent } from './admin-transactions/admin-transactions.component';



@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductItemComponent,
    LoginComponent,
    NavBarComponent,
    AdminComponent,
    AccountComponent,
    AdminItemComponent,
    AdminItemTwoComponent,
    CartComponent,
    CartItemComponent,
    AdminTransactionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatCheckboxModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CoreModule,
    Routing,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatTableModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
