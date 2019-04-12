import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared/services/shared.service';
import { Message } from '../shared/models/message';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: Message[] = [];
  constructor(
    private sharedService: SharedService,
  ) { }

  ngOnInit() {
    this.sharedService.currentMessage.subscribe(message => this.messages = message)
    console.log(this.messages)

  }

}
