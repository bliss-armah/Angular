import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { SeversComponent } from './severs/severs.component';

@NgModule({
  declarations: [AppComponent, ServerComponent, SeversComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
