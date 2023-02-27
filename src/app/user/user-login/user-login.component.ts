import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit{

  signupUsers: any[] = [];
  signupObj:any = {
    'username':'',
    'email':'',
    'password':''
  };
  loginObj:any = {
    'email':'',
    'password':''
  };

  ngOnInit(): void {
    const localData = localStorage.getItem('SignUp-Users');
    //console.log(localData);
    if(localData!= null){
      this.signupUsers = JSON.parse(localData)
    }
  }

  onSignup(){
    this.signupUsers.push(this.signupObj);
    localStorage.setItem('SignUp-Users',JSON.stringify(this.signupUsers));
    this.signupObj = {
      'username':'',
      'email':'',
      'password':''
    };
  }

  onLogin(){
    debugger
    // alert("Ok!");
   const isUserExist = this.signupUsers.find(data=>
      // console.log(data);
      data.email == this.loginObj.email && data.password == this.loginObj.password
    );

    if(isUserExist != undefined){
      alert("User login Successfully!!");
    }else{
      alert("Wrong credentitals!");
    }
  }

}
