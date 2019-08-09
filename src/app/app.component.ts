import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photo-album-console-showcase';
  public list: any = [];
  constructor() {}

  haveResults(list) {
    this.list = list;
  }
}
