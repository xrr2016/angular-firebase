import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router'
import { NgForm }            from '@angular/forms'
import { AuthService }       from '../services/auth.service'


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  email: string
  password: string
  displayName: string
  error: object

  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  userSignUp () {
    this.authService.signUp(this.email, this.password, this.displayName)
      .then(res => this.router.navigate(['chat']))
      .catch(err => this.error = err)
  }
  ngOnInit () {
  }

}








