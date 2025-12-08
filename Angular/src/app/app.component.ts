import { Component } from '@angular/core';

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
}
