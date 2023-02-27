import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private http: HttpClient) {

   }

   onLogin(obj:any): Observable<any>{
    const url = 'https://pim-nest.vercel.app/api/v1/auth/login';
    return this.http.post(url,obj)
   }


}
