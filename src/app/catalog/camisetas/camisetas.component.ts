import { Component } from '@angular/core';
import { Product } from '../../interfaces/product';
import { ProductService } from '../../services/product.service';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from '../../pages/home/home.component';

@Component({
  selector: 'app-camisetas',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HomeComponent],
  templateUrl: './camisetas.component.html',
  styleUrl: './camisetas.component.css'
})
export class CamisetasComponent {

  
  filteredProducts: Product[] = []; // Productos filtrados
  products: Product[] = [];
  constructor( private productService: ProductService ) {
    
  }

   

  ngOnInit() {
    this.productService.getAllProducts().subscribe(data => {
      this.products = data || []; // Asigna un arreglo vacío si data es undefined
      console.log(this.products);
    });
  }

   // Función para filtrar productos por categoría
   filtrarPorCategoria(categoria: string): void {
    if (categoria === 'todos') {
      this.filteredProducts = [...this.products]; // Si es "todos", mostramos todos los productos
    } else {
      this.filteredProducts = this.products.filter(product => product.category === categoria); // Filtramos por categoría
    }
  }

}
