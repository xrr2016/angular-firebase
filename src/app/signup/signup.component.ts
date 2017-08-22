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
  username: string
  error: any
  
  constructor (
    private authService: AuthService,
    private router: Router
  ) { }

  userSignUp () {
    this.authService.signUp(this.email, this.password, this.username)
      .then(res => {
        // if (this.authService.error) {
        //   this.error = this.authService.error
        // } else {
          this.router.navigate(['chat']) 
        // }
      })
  }

  // clearError () {
  //   this.authService.clearError()
  // }

  ngOnInit () {
  }

}








