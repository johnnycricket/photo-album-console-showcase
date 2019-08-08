import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { PhotoApiService } from './photo-api.service';


describe('PhotoApiService', () => {
  let testAlbums = {}
  let returned;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoApiService],
      imports: [
        HttpClientTestingModule
      ]
    });
  });

  it('should be created', inject([PhotoApiService], (service: PhotoApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should call jsonAlbum without a query and return all', inject([PhotoApiService], (service: PhotoApiService) => {
    service.getAlbums()
    .subscribe( albums => {
      expect(albums).not.toBeNull();
    })
  }));

  xit('should call jsonAlbum with query and return specific album', inject([PhotoApiService], (service: PhotoApiService) => {

  }));
});
