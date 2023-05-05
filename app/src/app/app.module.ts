import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HomeComponent } from './home/home.component';
import { PostComponent } from './post/post.component';
import { HttpClientModule } from '@angular/common/http';
import { SanityImagePipe } from './sanity-image.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    WelcomeComponent,
    HomeComponent,
    PostComponent,
    SanityImagePipe,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
