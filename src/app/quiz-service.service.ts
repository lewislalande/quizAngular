import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Question } from './Question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizServiceService {
  score: number
  readonly nbQuestions: number 

  constructor(private http: HttpClient) { }

  buildNewQuiz():Observable<Question[]> {
    return this.http.get<Question[]>(`${environment.backRoot}/questions`)
  }

  shuffle(a: any[]): any[] {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
      return a;
    }

}