import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LoginApiService } from './services/login-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'loginApp';

  constructor(private accountService: LoginApiService){

  }
  ngOnInit(): void {
    // this.getApiProducts();
  }

  // getApiProducts(){
  //   this.accountService.getProducts().subscribe((data:any)=>{
  //     return this.accountService.setCurrentProducts(data);
  //   });
  // }
}
