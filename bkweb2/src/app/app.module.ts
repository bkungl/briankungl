import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TopComponent } from './home/top/top.component';
import { AboutComponent } from './home/about/about.component';
import { BackgroundComponent } from './home/background/background.component';
import { PersonalComponent } from './home/personal/personal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopComponent,
    AboutComponent,
    BackgroundComponent,
    PersonalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
