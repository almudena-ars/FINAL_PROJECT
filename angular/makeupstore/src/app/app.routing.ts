import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./login/login.component";
import { AuthorizatedGuard } from "./core/guards/authorizated.guard";
import { ProductComponent } from './product/product.component';
import { AdminAuthorizatedGuard } from './core/guards/adminauthorizated.guard';
import { AdminComponent } from './admin/admin.component';
import { AccountComponent } from './account/account.component';
import { CartComponent } from './cart/cart.component';


const appRoutes: Routes = [
  { path: 'product', component: ProductComponent},
  { path: 'account', component: AccountComponent, canActivate: [ AuthorizatedGuard ] },
  { path: 'cart', component: CartComponent, canActivate: [ AuthorizatedGuard ] },

  { path: 'admin', component: AdminComponent, canActivate: [ AdminAuthorizatedGuard ] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/product', pathMatch: 'full' },
  { path: '**', redirectTo: '/product'}
];

export const Routing = RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' });

