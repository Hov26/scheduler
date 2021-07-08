import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SwitcherComponent } from './switcher/switcher.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TimeComponent } from './time/time.component';
import { NotificationComponent } from './notification/notification.component';
import { InputComponent } from './input/input.component';
import { TextareaComponent } from './textarea/textarea.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitcherComponent,
    CalendarComponent,
    TimeComponent,
    NotificationComponent,
    InputComponent,
    TextareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
