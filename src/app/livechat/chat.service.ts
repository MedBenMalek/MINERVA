import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor() { }

  talk(msg: string) {
    this.socket.emit('SEND_MESSAGE', {msg});
    this.socket.on('RECEIVE_MESSAGE',(data) => console.log(data.msg) );
  }

}
