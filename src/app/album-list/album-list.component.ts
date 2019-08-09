import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'album-list',     
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {
  @Input() list;
  public isLoading = false;

  constructor() {}

  ngOnInit() {}

}
