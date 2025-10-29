import { Component } from '@angular/core';
import { type DxChatTypes } from 'devextreme-angular/ui/chat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  tiles = [{
    emoji: '🗓️',
    text: 'View Available Vacation Days',
  }, {
    emoji: '🎉',
    text: 'List Upcoming Holidays',
  }, {
    emoji: '📄',
    text: 'Submit a Vacation Request',
  }];

  messages: DxChatTypes.Message[] = [];

  onMessageEntered(e: DxChatTypes.MessageEnteredEvent): void {
    this.messages = [...this.messages, e.message];
  }
}
