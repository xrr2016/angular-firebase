import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router'
import { AuthService }       from '../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  
  email: string
  password: string
  userame: string
  error: object

  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  userSignUp () {
    this.authService.signUp(this.email, this.password, this.userame)
      .then(res => this.router.navigate(['chat']))
      .catch(err => this.error = err)
  }
  ngOnInit () {
  }

}








