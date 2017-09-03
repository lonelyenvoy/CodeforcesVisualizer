/**
 * Created by LonelyEnvoy on 2017/9/1.
 */

import { Observable } from 'rxjs/Observable';

declare module 'rxjs/Observable' {
  interface Observable<T> {
    mapIf<U>(func: (x: T) => U, condition: boolean): Observable<U>;
  }
}

Observable.prototype.mapIf = function (func, condition) {
  if (!condition) return func.x;
  else return this.map(func);
};
