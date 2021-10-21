import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username='vishal';
  password='';
  invalidLogin=false;
  invalidLoginMessage="Invalid credentials. Please check the userName and Password.";

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.username);
    console.log(this.password);

    if(this.username=="vishal" && this.password=="vishal"){
      console.log("Login successful");
      this.invalidLogin=false;
      this.router.navigate(['welcome', this.username])

    }
    else{
      console.log("Login not successful");
      this.invalidLogin=true;
    }
    
  }

}
