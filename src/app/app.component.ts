import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photo-album-console-showcase';
  public list: [];
  constructor() {}

  haveResults(list) {
    console.log(list)
    this.list = list;
  }
}
