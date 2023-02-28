import { Component, OnInit } from '@angular/core';
import { LoginApiService } from '../services/login-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  userLists: any[] = [];
  constructor(private accountService: LoginApiService){

  }

  ngOnInit(): void {
    this.loadProducts();
    console.log("products");
  }

  loadProducts(){
    this.accountService.getProducts().subscribe((data:any)=>{
      //debugger
      console.log(data);
      this.userLists = data;
    })
  }

  logout(){
    this.accountService.doLogout();
  }
}
