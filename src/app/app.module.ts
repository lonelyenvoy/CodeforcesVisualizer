import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { StatusBoardComponent } from "./status-board.component";

import { Codeforces } from "./services/Codeforces.service";
import { SubmissionFormatter } from './services/SubmissionFormatter.service';

@NgModule({
  declarations: [
    AppComponent,
    StatusBoardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [Codeforces, SubmissionFormatter],
  bootstrap: [AppComponent]
})
export class AppModule { }
