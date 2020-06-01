import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from 'http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  readonly ROOT_URL;
  constructor(private httpClient: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000/';
  }

  get(url: string) {
    return this.httpClient.get(this.ROOT_URL + url);
  }

  post(url: string, content: object) {
    return this.httpClient.post(this.ROOT_URL + url, content, { observe: 'response' });
  }
}
