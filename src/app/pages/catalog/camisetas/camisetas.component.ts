import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-camisetas',
  standalone: true,
  imports: [],
  templateUrl: './camisetas.component.html',
  styleUrl: './camisetas.component.css'
})
export class CamisetasComponent {
  products: any [] = [];
  category: any [] = [];
  constructor ( private productService: ProductService){}

  loadData(){
    

    this.productService.getProductByCategory(this.category).subscribe((data) => {
      console.log(data)
      this.products = data.category
    })
  }

}
