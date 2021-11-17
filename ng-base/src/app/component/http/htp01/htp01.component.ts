import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ApiService } from "../../shared/api.service";
@Component({
  selector: 'app-htp01',
  templateUrl: './htp01.component.html',
  styleUrls: ['./htp01.component.css']
})
export class Htp01Component implements OnInit {
  _data: string = "正在加载中..."
  constructor(private http: HttpClient, private apiService: ApiService) { }
  ask() {
    let _d = this.http.get("http://www.rttop.cn/api/?day=4-1");
    _d.subscribe(data => {
      console.log(data);
    })
  }
  ask2() {
    this.apiService.getHello("1-1").subscribe(data => {
      this._data = data;
      console.log(data);
    })
  }

  ngOnInit(): void {
  }

}
