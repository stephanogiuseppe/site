import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { AboutComponent } from './pages/about/about.component';
import { ErrorPageComponent } from './layout/error-page/error-page.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutModule } from './pages/about/about.module';

@NgModule({
  declarations: [
    AppComponent,
    // AboutComponent,
    ErrorPageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AboutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
