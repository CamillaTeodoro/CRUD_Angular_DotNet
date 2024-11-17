import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { MatToolbarModule } from "@angular/material/toolbar";

import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { HeaderComponent } from './components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent, 
    HeaderComponent,
  ],
  imports: [
    BrowserModule, 
    HttpClientModule, 
    MatToolbarModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
