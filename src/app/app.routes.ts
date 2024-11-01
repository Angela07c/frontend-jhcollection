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


import { pruebaGuard } from './guards/prueba.guard';
import { ProductFormEditComponent } from './pages/products/product-form-edit/product-form-edit.component';
import { CategoryFormComponent } from './pages/categories/category-form/category-form.component';
import { CategoryListComponent } from './pages/categories/category-list/category-list.component';
import { CategoryFormEditComponent } from './pages/categories/category-form-edit/category-form-edit.component';

export const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'collection', component: CollectionComponent,canActivate: [pruebaGuard]},
    {path: 'catalog', component: CatalogComponent},
    {path: 'login', component:LoginComponent},
    {path: 'register',component:RegisterComponent},
    {path: '404', component: PageNotFoundComponent},
    {path: 'dashboard', component: DashboardComponent,canActivate:[authUserGuard]},
    {path: 'category/form',component: CategoryFormComponent,canActivate: [authUserGuard]},
    {path: 'category/list',component: CategoryListComponent, canActivate: [authUserGuard]},
    {path: 'category/category-edit/:id', component: CategoryFormEditComponent, canActivate: [authUserGuard]},
    {path:'product/form', component: ProductFormComponent, canActivate:[authUserGuard]},
    {path: 'product/list', component: ProductListComponent, canActivate: [authUserGuard]},
    {path: 'product/detail/:id', component: ProductDetailComponent, canActivate: [authUserGuard]},
    {path: 'product/product-edit/:id', component: ProductFormEditComponent, canActivate: [authUserGuard]},
    {path: '', redirectTo: 'home', pathMatch:'full'},
    {path: '**', redirectTo: '404', pathMatch: 'full'}

];
