import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _http: HttpClient) { }

  public pexelSearch(query: string, per_page: number, page: number) {
    return this._http.get(`https://api.pexels.com/v1/search?query=${query}+query&per_page=${per_page}&page=${page}`, {
      headers: new HttpHeaders({
        'Authorization': environment.pexelsApiKey
      })
    });
  }
}
