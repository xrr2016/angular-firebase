import { BrowserModule }             from '@angular/platform-browser';
import { NgModule }                  from '@angular/core';
import { FormsModule }               from '@angular/forms'
import { RouterModule }              from '@angular/router'

import { AngularFireModule }         from 'angularfire2'
import { AngularFireAuthModule }     from 'angularfire2/auth'
import { AngularFireDatabaseModule } from 'angularfire2/database'

import { AppComponent }              from './app.component';
import { ChatFromComponent }         from './chat-from/chat-from.component';
import { ChatRoomComponent }         from './chat-room/chat-room.component';
import { FeedbackComponent }         from './feedback/feedback.component';
import { MessageComponent }          from './message/message.component';
import { LoginComponent }            from './login/login.component';
import { SignupComponent }           from './signup/signup.component';
import { NavbarComponent }           from './navbar/navbar.component';
import { UserListComponent }         from './user-list/user-list.component';
import { UserItemComponent }         from './user-item/user-item.component';

import { ChatService }               from './services/chat.service'
import { AuthService }               from './services/auth.service'
import { appRoutes }                 from '../routes'

@NgModule({
  declarations: [
    AppComponent,
    ChatFromComponent,
    ChatRoomComponent,
    FeedbackComponent,
    MessageComponent,
    LoginComponent,
    SignupComponent,
    NavbarComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService, ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
