import { Injectable, Inject } from '@angular/core';

import { Config, configToken } from "./config"

@Injectable({
  providedIn: 'any'
})
export class ConfigService {

  constructor(@Inject(configToken) private config: Config) {
    console.log("创建了一个新的服务")
  }
  getValue() {
    return this.config;
  }
}
