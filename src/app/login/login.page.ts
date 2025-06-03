import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: false,
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email:string = '';
  password:string = '';
  invalidEmail:boolean = false;
  invalidPassword:boolean = false;

  doLogin() {
    if (this.email == '' 
      || this.email.includes('@') == false){
        this.invalidEmail = true;
        return;
      } else if (this.password == '') {
        this.invalidEmail = false;
        this.invalidPassword = true;
        return;
      }
      this.route.navigate(['/home'])
  }
  constructor(
    private route: Router
  ) { }

  ngOnInit() {
  }

}
