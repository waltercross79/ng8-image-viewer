import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { Ng8ImageViewerLibModule } from 'dist/ng8-image-viewer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, Ng8ImageViewerLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
