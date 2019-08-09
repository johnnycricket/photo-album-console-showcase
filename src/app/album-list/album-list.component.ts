import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'album-list',     
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnChanges {
  @Input() list: any = [];

  constructor() {}

  ngOnChanges(changes) {
    this.list = changes.list.currentValue;
  }

}
