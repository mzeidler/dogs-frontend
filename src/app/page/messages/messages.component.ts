import { Component, OnInit } from '@angular/core';
import { Message } from '../../model/message';
import { RestService } from '../../service/rest/rest.service';
import { ActivatedRoute } from '@angular/router';
import { TranslationService } from '../../service/translations/translation.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  messages: Message[];

  displayedColumns: string[] = [ 'timestamp', 'dogname', 'name', 'email', 'tel', 'message', 'delete'];

  constructor(public t: TranslationService, public rest: RestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.messages = this.route.snapshot.data['messages'];
  }

  getMessages(): void {
    this.rest.getMessages().subscribe(messages => this.messages = messages);
  }

  deleteMessage(id: number) {
    this.rest.deleteMessage(id);
    this.messages = this.messages.filter(m => m.id != id);  
  }
}
