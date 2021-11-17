import { Injectable } from '@angular/core';
import { InMemoryDbService } from "angular-in-memory-web-api";

@Injectable({
  providedIn: 'root'
})

export class HerosService implements InMemoryDbService {

  createDb() {
    let heroes = [
      { id: 10110, name: "张三" },
      { id: 10111, name: "李四" },
      { id: 10112, name: "王二" },
      { id: 10113, name: "牛七" }
    ]
    return {
        heroes
    }
  }
}
