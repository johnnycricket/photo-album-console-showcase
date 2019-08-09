import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { PhotoApiService } from './photo-api.service';


describe('PhotoApiService', () => {
  let testAlbums = [
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://via.placeholder.com/600/92c952",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://via.placeholder.com/600/771796",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    }
  ];
  let returned;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PhotoApiService],
      imports: [
        HttpClientTestingModule
      ]
    });
    returned = undefined;
  });

  it('should be created', inject([PhotoApiService], (service: PhotoApiService) => {
    expect(service).toBeTruthy();
  }));

  it('should take a single number and return an array with length of 1', inject([PhotoApiService], (service: PhotoApiService) => {
    returned = service.buildQueryParams('5');
    expect(returned.toString()).toBe('albumId=5');
  }));

  it('should take many numbers and return an array with length of 4', inject([PhotoApiService], (service: PhotoApiService) => {
    returned = service.buildQueryParams('5, 8, 1, 2');
    expect(returned.toString()).toBe('albumId=5&albumId=8&albumId=1&albumId=2');
  }));

  it('should call jsonAlbum without a query and return all', inject([HttpTestingController, PhotoApiService], (httpMock: HttpTestingController, service: PhotoApiService) => {
    service.getAlbums().subscribe( albums => {
      expect(albums).not.toBeNull();
    })
    const req = httpMock.expectOne(req => req.url === 'https://jsonplaceholder.typicode.com/photos');
    req.flush(testAlbums);

  }));

  it('should call jsonAlbum with query and return specific album', inject([HttpTestingController, PhotoApiService], (httpMock: HttpTestingController, service: PhotoApiService) => {
    service.getAlbums('1,2').subscribe( albums => {
      expect(albums).not.toBeNull();
    })
    const req = httpMock.expectOne(req => req.url === 'https://jsonplaceholder.typicode.com/photos' && req.params.toString() === 'albumId=1&albumId=2');
    req.flush(testAlbums);
  }));
});
