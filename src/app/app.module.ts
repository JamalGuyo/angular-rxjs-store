import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SongsModule } from './songs/songs.module';

import { AppComponent } from './app.component';
import { Store } from './store';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, SongsModule],
  providers: [Store],
  bootstrap: [AppComponent],
})
export class AppModule {}
