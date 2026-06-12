import { Component, ChangeDetectionStrategy } from '@angular/core';
import { DxChatModule } from 'devextreme-angular/ui/chat';
import { DxTileViewModule } from 'devextreme-angular/ui/tile-view';

@Component({
  selector: 'app-root',
  imports: [DxChatModule, DxTileViewModule],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
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
}
