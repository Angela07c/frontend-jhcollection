import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Response } from '../interfaces/response';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUserData!: User|{};


  /** Forma anterior a la version Angular 16 */
  constructor( private http: HttpClient, private router: Router ) { }

  /** Esto es un getter (funcion para obtener datos de la clase) */

  get userData (){
    return {
      ...this.authUserData
    }
  }

  registerUser ( newUser: User ) :Observable <boolean|string>{
    return this.http.post <Response>( 'http://localhost:3000/api/auth/register', newUser )
      .pipe(     
        map ((data)=>{
          return data.ok
        }),
        catchError ((error)=>{
          // console.log(error);
          return of ("error")
        })
      );
    }
    
  loginUser(credenciales: User) :Observable <boolean|string>{
    return this.http.post <Response> ('http://localhost:3000/api/auth/login',credenciales)
      .pipe(
        tap ((data) => {
          console.log(data);
          if(data.token){
            localStorage.setItem('token',data.token!);
            this.authUserData = data.data!




            setTimeout(() => {
              this.router.navigateByUrl('dashboard')
            },4000 )
            
          }
          
        }),
        map((data) => {
          return data.ok
        }),
        catchError ((error) => {
          return of ('error')
        })
      );
  }
}
  