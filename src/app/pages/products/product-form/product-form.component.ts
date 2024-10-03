import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  productForm! : FormGroup;

   constructor () {
    this.productForm= new FormGroup ({
      name: new FormControl (''),
      decription: new FormControl (''),
      price: new FormControl (0),
      quantity: new FormControl (0),
      category: new FormControl (''),
      urlImage: new FormControl ('')

    })
   }
   onSubmit (){
    console.log(this.productForm.value)
    this.productForm.reset ();
   }
}

