import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }
  login(){
    window.localStorage.setItem("user","tgrong");
    this.router.navigateByUrl("/");
  }
  ngOnInit(): void {
  }

}
