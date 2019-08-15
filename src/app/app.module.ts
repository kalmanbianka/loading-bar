import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoadingBarComponent } from './components/loading-bar/loading-bar.component';
import { SegmentComponent } from './components/loading-bar/segment/segment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoadingBarComponent,
    SegmentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
