import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import {appRoutes} from 'src/app/routes'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavComponent } from './nav/nav.component';
import { PcComponent } from './pc/pc.component';
import { ImageComponent } from './image/image.component';


@NgModule({
  declarations: [					
    AppComponent,
    NavComponent,
    PcComponent,
    ImageComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }



