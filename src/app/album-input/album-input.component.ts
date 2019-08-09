import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PhotoApiService } from '../photo-api.service';

@Component({
  selector: 'album-input',
  templateUrl: './album-input.component.html',
  styleUrls: ['./album-input.component.scss']
})
export class AlbumInputComponent implements OnInit {
  @Output() albumEmitter = new EventEmitter();
  query = new FormControl('');

  constructor(public service: PhotoApiService) {}

  ngOnInit() {}

  public submitQuery() {
    this.service.getAlbums(this.query.value).subscribe(
      res => {
        this.albumEmitter.emit(res);
      }, 
      e => console.error(e))
  }
}
