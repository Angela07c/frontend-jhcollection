import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  products : any [] = []

  constructor( private productService: ProductService) {}

  loadData(){
    this.productService.getAllProducts().subscribe((data) => {
      console.log(data)
      this.products = data.loadData
    })
  }

  ngOnInit() {
    this.loadData()
  }

}
