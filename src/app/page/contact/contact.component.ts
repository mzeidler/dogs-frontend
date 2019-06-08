import { Component, OnInit } from '@angular/core';
import { TranslationService } from '../../translations/translation.service';
import { RestService } from '../../service/rest.service';
import { Message } from '../../model/message';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  msg_email: string;
  msg_text: string;
  msg_name: string;
  msg_tel: string;

  constructor(public t: TranslationService, private snackBar: MatSnackBar, public rest: RestService) { }

  ngOnInit() {
  }

  sendMessage() {

    let msg = <Message>{};
    msg.email = this.msg_email;
    msg.message = this.msg_text;
    msg.name = this.msg_name;
    msg.tel = this.msg_tel;

    this.rest.message(msg).subscribe();

    this.msg_text = undefined;
    this.msg_email = undefined;
    this.msg_name = undefined;
    this.msg_tel = undefined;

    this.snackBar.open(this.t.get.msg_ok, undefined, {
      duration: 2000
    });

  }

}
