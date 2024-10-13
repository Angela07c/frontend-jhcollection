import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { Response } from '../interfaces/response';

interface User { name: string, username: string, password: string, role?:string }

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  /** Forma anterior a la version Angular 16 */
  constructor( private http: HttpClient ) { }

  registerUser ( newUser: User ) :Observable <boolean|string>{
    return this.http.post <Response>( 'http://localhost:3000/api/auth/register', newUser ) .pipe( 
      
      map ((data)=>{
        return data.ok
      }),
      catchError ((error)=>{
        // console.log(error);
        return of ("error")
      })


    );


  }
}
  