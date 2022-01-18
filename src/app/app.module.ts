
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LeagueTableComponent } from './components/league-table/league-table.component';
import {HttpClientModule} from '@angular/common/http';
import { LeagueKeywordComponent } from './components/league-keyword/league-keyword.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LeagueTableComponent,
    LeagueKeywordComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
