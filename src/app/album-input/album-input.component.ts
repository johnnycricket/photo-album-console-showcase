import { Component, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { PhotoApiService } from '../photo-api.service';

@Component({
  selector: 'album-input',
  templateUrl: './album-input.component.html',
  styleUrls: ['./album-input.component.scss']
})
export class AlbumInputComponent {
  @Output() albumEmitter = new EventEmitter();
  query = new FormControl('');
  public isLoading = false;

  constructor(public service: PhotoApiService) {}

  public submitQuery() {
    this.isLoading = true;
    this.service.getAlbums(this.query.value).subscribe(
      res => {
        this.albumEmitter.emit(res);
        this.isLoading = false;
      }, 
      e => console.error(e))
  }
}
