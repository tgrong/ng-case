import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";


@Injectable({
  providedIn: 'root'
})
export class InMemHeroService implements InMemoryDbService {
  createDb() {
    let heroes = [
      { id: 1010, name: "张三" },
      { id: 1011, name: "李四" },
      { id: 1012, name: "王二" },
    ]
    return { heroes }
  }
  constructor() { }
}
