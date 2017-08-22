import { Router }              from '@angular/router'
import * as firebase           from 'firebase/app'
import { Injectable }          from '@angular/core';
import { Observable }          from 'rxjs/Observable'
import { AngularFireAuth }     from 'angularfire2/auth'
import { AngularFireDatabase } from 'angularfire2/database'
import { User }                from '../models/user.model'

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>
  private authState: any
  public error: object

  constructor(
    private afAuth: AngularFireAuth,
    private db: AngularFireDatabase,
    private router: Router
  ) {
    this.user = afAuth.authState
  }

  get currentUserId(): string {
    return this.authState ? this.authState.uid : ''
  } 

  login (email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(res => {
        const status = 'online'
        this.setUserStatus(status)
        this.router.navigate(['chat'])
      }) 
  }

  signUp(email: string, password: string, username: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(user => {
        this.authState = user
        const status = 'online'
        this.setUser(email, username, status)
      })
      .catch(err => this.error = err)
  }
  
  setUser (email: string, userame: string, status: string): void {
    const path = `users/${this.currentUserId}`
    const data = {
      email,
      userame,
      status
    }
    this.db.object(path).update(data)
      .catch(err => console.log(err))
  }

  setUserStatus (status: string): void {
    const path = `users/${this.currentUserId}`
    const data = { status }
    // this.db.object(path).update(data)
      // .catch(err => console.log(err))
  }

  // clearError () {
  //   this.error.message = ''
  // }
}







