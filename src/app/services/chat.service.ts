import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AngularFireAuth } from 'angularfire2/auth'
import { Observable } from 'rxjs/observable'
import { ChatMessage } from '../models/chat-message.model'
import { AuthService } from './auth.service'
import * as firebase from 'firebase/app'
import { User } from '../models/user.model'

@Injectable()
export class ChatService {
  user: User
  chatMessage: ChatMessage
  chatMessages: FirebaseListObservable<ChatMessage[]>

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

  getUser () {
    const userId = this.user.uid
    const path = `/users/${userId}`
    return this.db.object(path)
  }

  getUsers () {
    return this.db.list('/users')
  }

  sendMessage (message: string) {
    console.log(this.user)
    const { email } = this.user
    const timestamp = this.getTimeStamp()
    this.chatMessages = this.getMessages()
    this.chatMessages.push({
      email,
      message,
      timeSent: timestamp,
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








