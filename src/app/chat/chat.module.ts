import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule} from '@angular/forms';
import {ChatService} from './chat.service';
import { ChatBotComponent } from './chat-bot/chat-bot.component';
import { MessagecolorDirective } from './messagecolor.directive';


@NgModule({
  declarations: [ChatBotComponent, MessagecolorDirective],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[ChatBotComponent],
  providers:[ChatService]
})
export class ChatModule { }
