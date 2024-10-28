import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  products: any [] = [];

  constructor(private productService: ProductService){}

  ngOnInit(){
    this.productService.getAllProducts().subscribe((data) => {
      console.log(data);
      this.products = data.data
    })
    
  }
  loadData (){
    this.productService.getAllProducts ().
    subscribe ((data) =>{
      console.log(data);
      this.products = data.data
    })
  }
  editar (id:any) {
    console.log('Edita producto'+ id);
  }
  eliminar (id: any){
    console.log('Elimina producto'+ id);
    this.productService.deleteProduct (id). subscribe ((data)=>{
      console.log(data);
      this.loadData ();
    })

  }

}

