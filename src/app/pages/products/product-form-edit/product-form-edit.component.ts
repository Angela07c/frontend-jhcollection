import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CategoryService } from '../../../services/category.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-form-edit',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterLink],
  templateUrl: './product-form-edit.component.html',
  styleUrl: './product-form-edit.component.css'
})
export class ProductFormEditComponent {
  productForm!: FormGroup;
  categories: any[] = [];
  collections: any [] = ['ColeccionV', 'ColeccionI', 'ColeccionP'];
  
  constructor(private productService: ProductService, private router: Router, private categoryService: CategoryService, 
    private activatedRoute: ActivatedRoute ) { // Inyección correcta del Router
    this.productForm = new FormGroup({
      name: new FormControl('', [ Validators.required ]),
      description: new FormControl(''),
      price: new FormControl(0, [ Validators.required, Validators.min(0) ]),
      quantity: new FormControl(1, [ Validators.required, Validators.min(1) ]),
      category: new FormControl('non-category', [ Validators.required ]),
      collection: new FormControl ('', [Validators.required]),
      urlImage: new FormControl('')
    });
  }

  onSubmit() {
    if (this.productForm.valid) {
    console.log(this.productForm.value)
                
    }
    this.productForm.reset()
  }

  ngOnInit(): void {
    this.categoryService.getCategory().subscribe((data) => {
      console.log(data)
      this.categories = data.data;
    })
    
    this.activatedRoute.params. subscribe ((data: any)=>{
       console.log(data.id)
       this.productService.getProductById (data.id).subscribe ((data)=>{
        console.log(data)
      this.productForm.setValue ({
        name: data.data.name,
        description: data.data.description ,
        quantity: data.data.quantity,
        price: data.data.price,
        category: data.data.category,
        collection: data.data.collection,
        urlImage: data.data.urlImage,

      })
       })
    })
    
  
    
  }
}
