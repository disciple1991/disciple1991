import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WordlistComponent } from './wordlist/wordlist.component';
import { WordofthedayService } from './wordoftheday.service';

@NgModule({
  declarations: [
    AppComponent,
    WordlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [WordofthedayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
