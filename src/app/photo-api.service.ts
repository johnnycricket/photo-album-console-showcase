import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoApiService {
  constructor(
    private http: HttpClient
  ) {}

  buildQueryParams(rawQuery:string) {
    const parsedQuery = rawQuery.split(',');
    let idParams = new HttpParams()
    for(let i of parsedQuery){
      i = i.trim();
      idParams = idParams.append('albumId', i);
    }
    return idParams;
  }

  getAlbums(query:string = '1') {
    let endPoint = 'https://jsonplaceholder.typicode.com/photos';
    if(query) {
      return this.http.get(endPoint, { params: this.buildQueryParams(query)});
    } else {
      return this.http.get(endPoint);
    }
  }
}
