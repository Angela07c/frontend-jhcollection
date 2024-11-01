import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent {
  product : any;
  
  constructor( private productService: ProductService, private activateRoute: ActivatedRoute) {}

  

  ngOnInit() {
    
    // this.productService.getProductById(['id']).subscribe((product) => {
      this.activateRoute.params.subscribe((data) => {
        console.log(data);
        this.productService.getProductById(data['id']).subscribe((data) => {
          console.log(data);
          this.product = data.data;
        });
      }) 
    //   console.log(product);
    // })
  }

}
