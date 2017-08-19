import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/observable'
import { ChatMessage } from '../models/chat-message.model'
import { AuthService } from './auth.service'
import * as firebase from 'firebase/app'

@Injectable()
export class ChatService {
  user: any
  chatMessage: ChatMessage
  chatMessages: FirebaseListObservable<ChatMessage[]>
  username: Observable<string>

  constructor (
    private db: AngularFireDatabase, 
    private afAuth: AngularFireAuth
  ) { 
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.user = auth
      }
    })
  }

  sendMessage (message: string) {
    // const email = this.user.email
    const email = 'test@test.com'
    const timestamp = this.getTimeStamp()
    this.chatMessages = this.getMessages()
    this.chatMessages.push({ 
      message,
      email,
      username: 'test',
      timeSent: timestamp
      // username: this.username
    })
    console.log('send message!')
  }

  getMessages (): FirebaseListObservable<ChatMessage[]> {
    // query
    return this.db.list('messages', {
      query: {
        limitToLast: 25,
        orderByKey: true
      }
    })
  }

  getTimeStamp () {
    const now = new Date()
    const date = `${now.getUTCFullYear()}/${now.getUTCMonth() + 1}/${now.getUTCDate()}`
    const time = `${now.getUTCHours()}/${now.getUTCMinutes()}/${now.getUTCSeconds()}`
    return `${date} ${time}`
  }
}








