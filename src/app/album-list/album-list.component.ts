import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'album-list',     
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  public isLoading = false;

  constructor() { }

  ngOnInit() {
  }

}
