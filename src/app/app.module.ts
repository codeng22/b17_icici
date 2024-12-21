import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DemoComponent } from './demo/demo.component';
import { PranotiNewCompComponent } from './pranoti-new-comp/pranoti-new-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,
    PranotiNewCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
