/**
 * Created by LonelyEnvoy on 2017/9/2.
 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class Codeforces {
  constructor(private http: Http) {}

  getRecentStatus(amount: number): Observable<Response> {
    return this.http.get(`http://codeforces.com/api/problemset.recentStatus?count=${amount}`);
  }
}
