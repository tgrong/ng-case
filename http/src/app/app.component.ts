import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Hreo } from './hreo'

@Component({
  selector: 'app-root',
  templateUrl: './herolist/herolist.component.html',
  styles: ['./herolist/herolist.component.css']
})

export class AppComponent implements OnInit {
  title = 'http';
  heroes: Hreo[];
  heroesUrl = "api/heroes";
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.getHeros().subscribe(d => {
      this.heroes = d;
    })
  }

  getHeros() {
    return this.http.get<Hreo[]>(this.heroesUrl);
  }
}
