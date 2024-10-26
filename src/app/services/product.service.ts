import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, tap, of, map, catchError } from 'rxjs';
import { Product } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

    constructor(private http: HttpClient) { }

    getAllProducts(){
        return this.http.get<any>('http://localhost:3000/api/products')
    }

    registerProduct(productData: Product): Observable<any> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
        'X-Token': token ? token : '',
    });

    return this.http.post<any>('http://localhost:3000/api/products', productData, { headers })
        .pipe(
            tap((response) => {
                console.log('Respuesta del servidor:', response); // Imprimir la respuesta del servidor
            }),
            catchError(error => {
                console.error('Error al registrar el producto:', error);
                return of('Error al registrar el producto');
            })
        );
}

}