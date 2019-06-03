import { Component, OnInit } from '@angular/core';
import { Message } from '../model/message';
import { RestService } from '../service/rest.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];

  displayedColumns: string[] = [ 'timestamp', 'dogname', 'name', 'email', 'tel', 'message'];

  constructor(public rest: RestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.messages = this.route.snapshot.data['messages'];
  }

  getMessages(): void {
    this.rest.getMessages().subscribe(messages => this.messages = messages);
  }

}
