import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { EventDetailsComponent } from './event/event-details/event-details.component';
import { EventListComponent } from './event/event-list/event-list.component';
import { TopMenuComponent } from './nav/top-menu/top-menu.component';
import {EventListServiceService} from './services/event-list-service.service';


@NgModule({
  declarations: [
    AppComponent,
    EventDetailsComponent,
    EventListComponent,
    TopMenuComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [EventListServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
