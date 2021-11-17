import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { InMemHeroService } from "./in-mem-hero.service";
import { HttpClientInMemoryWebApiModule } from "angular-in-memory-web-api";
import { HerolistComponent } from './herolist/herolist.component';

@NgModule({
  declarations: [
    AppComponent,
    HerolistComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemHeroService)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
