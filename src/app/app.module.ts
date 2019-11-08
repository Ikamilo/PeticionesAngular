import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SearchUsersComponent } from './search-users/search-users.component';
import { SerchRequestService } from './serch-request.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchUsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SerchRequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
