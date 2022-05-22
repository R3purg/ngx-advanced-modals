import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAdvancedModalsModule } from 'ngx-advanced-modals';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxAdvancedModalsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
