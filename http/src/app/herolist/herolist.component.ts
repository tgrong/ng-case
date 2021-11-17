import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herolist',
  templateUrl: './herolist.component.html',
  styleUrls: ['./herolist.component.css']
})

export class HerolistComponent implements OnInit {
  title="adsf";
  heroes = [];
  constructor() { }

  ngOnInit(): void {
  }

}
