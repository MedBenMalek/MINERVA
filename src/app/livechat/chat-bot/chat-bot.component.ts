import { Component, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  messages: any = [];
  received: string;
  messageClient = '';
  constructor(private socket: Socket) { }

  ngOnInit() {
  }

  onSend() {
    if(this.messageClient !== '') {
      this.socket.emit('SEND_MESSAGE', {msg: this.messageClient});
      this.socket.on('RECEIVE_MESSAGE',(data) => this.received = data.msg );

      setTimeout(()=> {
          const mgg = {
            client : this.messageClient,
            robot : this.received
          };
          this.messages.push(mgg);
          this.messageClient = '';
        }
        ,800);



    } else {
      console.log('aaaa');
      return;
    }
  }
}
