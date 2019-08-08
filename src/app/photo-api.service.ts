import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoApiService {
  constructor(
    private http: HttpClient
  ) { 
  }
  getAlbums(query:string = undefined) {
    let endPoint = 'https://jsonplaceholder.typicode.com/photos';
    if(query) {
      endPoint = endPoint + `${endPoint}?${query}`
    }
    return this.http.get(endPoint);
  }
}
