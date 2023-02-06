import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GreeceComponent } from './components/greece/greece.component';
import { DatumPipe } from './pipes/datum.pipe';

@NgModule({
  declarations: [
    AppComponent,
    GreeceComponent,
    DatumPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
