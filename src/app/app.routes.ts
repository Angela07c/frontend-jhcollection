import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductListComponent } from './pages/products/product-list/product-list.component';
import { ProductDetailComponent } from './pages/products/product-detail/product-detail.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProductFormComponent } from './pages/products/product-form/product-form.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { CatalogComponent } from './pages/catalog/catalog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { authUserGuard } from './guards/auth-user.guard';
import { BuyCarComponent } from './pages/buy-car/buy-car.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'collection', component: CollectionComponent},
    {path: 'catalog', component: CatalogComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register',component:RegisterComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: 'buy' ,component: BuyCarComponent},
    {path: 'dashboard', component: DashboardComponent,canActivate:[authUserGuard]},
    {path:'product/form', component: ProductFormComponent, canActivate:[authUserGuard]},
    {path: 'product/list', component: ProductListComponent, canActivate: [authUserGuard]},
    {path: 'product/detail', component: ProductDetailComponent, canActivate: [authUserGuard]},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: '**', redirectTo: '404', pathMatch: 'full'}

];
