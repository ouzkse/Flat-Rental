import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
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

  post(url: string, content: object, headerType = false) {
    let headers = this.getHeaders(headerType)
    return this.httpClient.post(this.ROOT_URL + url, content,
      {headers: headers, observe: 'response', reportProgress: true});
  }

  getHeaders(type) {
    if (!!localStorage.getItem('authentication_token') && type) {
      return new HttpHeaders({
        'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.getItem('authentication_token').toString()
      })
    } else if (!!localStorage.getItem('authentication_token') && !type) {
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + localStorage.getItem('authentication_token').toString()
      })
    }
  }

}
