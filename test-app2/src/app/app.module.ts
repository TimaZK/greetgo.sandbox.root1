import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ClientListComponent } from './pages/client-list/client-list.component';
import { ClientListModule } from './pages/client-list/client-list-module';

@NgModule({
  declarations: [
    AppComponent,
    // ClientListComponent
  ],
  imports: [
    BrowserModule,
    ClientListModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
