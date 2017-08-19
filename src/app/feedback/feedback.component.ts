import { Component, OnChanges, OnInit } from '@angular/core';
import { FirebaseListObservable }       from 'angularfire2/database' 
import { Observable }                   from 'rxjs/Observable'
import { ChatMessage }                  from '../models/chat-message.model'
import { ChatService }                  from '../services/chat.service'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit, OnChanges {
  feedbacks: FirebaseListObservable<ChatMessage[]>

  constructor(private chatService: ChatService) { }

  ngOnInit () {
    console.log('feedback init')
    this.feedbacks = this.chatService.getMessages()
  }

  ngOnChanges () {
    this.feedbacks = this.chatService.getMessages()
  }

}



