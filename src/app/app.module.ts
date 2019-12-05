import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizzComponent } from './quizz/quizz.component';
import { ScoreComponent } from './score/score.component';
import { TimerComponent } from './timer/timer.component';
import {MatButtonModule} from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http'
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'quizz', component: QuizzComponent },
  { path: 'timer', component: TimerComponent },
  { path: '',
  redirectTo: '/quizz',
  pathMatch: 'full'
  },
 ];
@NgModule({
  declarations: [
    AppComponent,
    QuizzComponent,
    ScoreComponent,
    TimerComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
