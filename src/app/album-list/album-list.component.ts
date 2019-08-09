import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'album-list',     
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit, OnChanges {
  @Input() list: any = [];
  public isLoading = false;

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes) {
    this.list = changes.list.currentValue;
  }

}
