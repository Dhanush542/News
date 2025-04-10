import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) {   }

  getProductdata(Source:string){
    const url="https://newsapi.org/v2/top-headlines?"+Source+"&apiKey=8e6d2ae01e93476c980f1420e0dd13c4";
    return this.http.get(url);
  }
}
