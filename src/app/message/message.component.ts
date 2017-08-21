import { Component, OnInit, Input } from '@angular/core'
import { AuthService }              from '../services/auth.service'
import { ChatService }              from '../services/chat.service'
import { ChatMessage }              from '../models/chat-message.model'

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  @Input() chatMessage: ChatMessage
  userName: string
  userEmail: string
  messageContent: string
  timeSent: Date
  isOwnMessage: boolean

  constructor () { }

  ngOnInit (chatMessage = this.chatMessage) {
    this.timeSent = chatMessage.timeSent
    this.userName = chatMessage.username
    this.userEmail = chatMessage.email
    this.messageContent = chatMessage.message
  }

}
