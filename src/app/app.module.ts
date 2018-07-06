import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { EmbedVideo } from 'ngx-embed-video';
import { DragScrollModule } from 'ngx-drag-scroll';
import { ContactComponentComponent } from './contact-component/contact-component.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    ContactComponentComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      { path: '', component: AppComponent }
          ]),
    MaterialModule,
    HttpModule,
    EmbedVideo.forRoot(),
    DragScrollModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){
  
  }
 }
