import { Component } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  products: any [] = [];

  constructor( private productService: ProductService) {}

  loadData(){
    this.productService.getAllProducts().subscribe
    ((data) => {
      console.log(data)
      this.products = data.data
    })
  }

  ngOnInit() {
    this.loadData()
    
  }

}
