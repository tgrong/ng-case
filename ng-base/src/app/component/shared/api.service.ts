import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getHello(_day: string) {
    return this.http.get("http://www.rttop.cn/api/?", {
      responseType: 'text',
      params: {
        day: _day
      }
    })
  }
}
