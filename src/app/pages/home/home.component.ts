import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { CarruselComponent } from '../../components/layout/carrusel/carrusel.component';
import { CartService } from '../../services/cart.service.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink,CarruselComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: any [] = [];
  prominentProducts: any [] = []

  constructor( 
    private productService: ProductService,
    private cartService: CartService
  ) {}

  loadData(){
    this.productService.getAllProducts().subscribe
    ((data) => {
      console.log(data)
      this.products = data.data
      this.prominentProducts = this.products.filter ((product:any)=>{
        return product.prominent
      })
    })
  }

  ngOnInit() {
    this.loadData()
    
  }
  addToCart(item: any){
    this.cartService.addToCart(item)
  }

}
