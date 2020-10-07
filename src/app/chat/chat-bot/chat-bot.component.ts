import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ChatService, Message } from '../chat.service';
import {Observable} from 'rxjs';
import {scan} from 'rxjs/operators';
@Component({
  selector: 'app-chat-bot',
  templateUrl: './chat-bot.component.html',
  styleUrls: ['./chat-bot.component.css']
})
export class ChatBotComponent implements OnInit {

  instantTime : any;

  messages: Observable<Message[]>;
  formValue: string;
  @ViewChild('scrollMe', { static: true }) private myScrollContainer: ElementRef;
  constructor(public chat: ChatService) { }

  ngOnInit() {
    
    this.messages = this.chat.conversation.asObservable().pipe(
    scan((acc, val)=> acc.concat(val))
    )
      //.scan((acc, val) => acc.concat(val));
    this.scrollToBottom();
  }

  sendMessage() {
    this.instantTime = Date.now();
    this.chat.converse(this.formValue);
    this.formValue = '';
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

}