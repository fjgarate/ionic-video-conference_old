import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { User } from '../shared/models/user';
import { AuthenticationService } from '../shared/services/authentication.service';
import { Conversation } from '../shared/models/concersation';
import { ConversationService } from '../shared/services/conversation.service';
import { first } from 'rxjs/operators';
import { UserService } from '../shared/services/user.service';
import { Message } from '../shared/models/message';
import { SharedService } from '../shared/services/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.component.html',
  styleUrls: ['./conversation.component.scss']
})
export class ConversationComponent implements OnInit {
  currentUser: User;
  currentUserSubscription: Subscription;
  user_conversation:User;
  conversations: Conversation[] = [];
  conversation: Conversation;
  messages: Message[] = [];
  participants: string[] = []
  last_message: Message;
  
  constructor(
    private authenticationService: AuthenticationService,
    private convesationSrv: ConversationService,
    private userSrv: UserService,
    private sharedService: SharedService,
    private router: Router,
  ) {
  this.currentUserSubscription = this.authenticationService.currentUser.subscribe(
    user => {
      this.currentUser = user;
    }
  );}

  ngOnInit() {
    this.getConversationsByUserId(this.currentUser.id);
  }
  private getConversationsByUserId(id: string) {
    this.convesationSrv
      .getConversationsByUserId(this.currentUser.token, id)
      .pipe(first())
      .subscribe(conversations => {
        this.conversations = conversations;
        // de moneto solo hay un aconversacion con los mensajes para cada medico
        if (this.conversations.length > 0) {
          this.conversation = this.conversations[0];
          this.participants = this.conversation.participants;
          this.messages = this.conversation.messages;
          this.last_message = this.messages[this.messages.length - 1];
          this.conversation.title = this.last_message.text;
          this.conversation.last_message_date=this.last_message.createdDate;
          for (let participant of this.participants) {
            if (participant !== this.currentUser.id) {
              console.log(participant)
              this.getUserById(participant)
            }
          }
        
        }
      });

  }
private getUserById(id: string) {
this.userSrv
    .getById(this.currentUser.token, id)
    .pipe(first())
    .subscribe(user => {
      console.log(user);
      this.user_conversation = user;
      this.conversations[0].other_participant = this.user_conversation.firstName + ' ' + this.user_conversation.lastName;
    });


} 

  goMessages(id) {
    console.log('llega')
    this.sharedService.changeMessages(this.conversation.messages)
    this.router.navigate(["messages"], {
    });


  }
}
