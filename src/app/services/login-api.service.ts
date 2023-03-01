import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  // private currentProducts = new BehaviorSubject<string>('[]');

  constructor(private http: HttpClient,private router:Router) {

   }

   onLogin(obj:any): Observable<any>{
    const url = 'https://pim-nest.vercel.app/api/v1/auth/login';
    return this.http.post(url,obj);
   }

   getProducts(): Observable<any>{
    //debugger
    const url = 'https://pim-nest.vercel.app/api/v1/product';
    return this.http.get(url);
   }

   doLogout(){
      let removeToken = localStorage.removeItem('access_token');
      if (removeToken == null) {
        this.router.navigate(['/']);
      }
   }

   get isLoggedIn():boolean{
    const authToken = localStorage.getItem('access_token');
    return authToken !== null? true:false;
   }

  //  setCurrentProducts(text: string) {
  //   this.currentProducts.next(text);
  //  }

  //  get currentProduct$() {
  //   return this.currentProducts;
  //  }


}
