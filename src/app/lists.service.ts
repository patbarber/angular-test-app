import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable, delay, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListsService {
  constructor() {}

  public checkConnection(): Observable<any> {
    const promise = axios.get('http://localhost:8080/');
    return from(promise);
  }

  getList(): Observable<any> {
    return from(axios.get('http://localhost:8080/getList'))
      .pipe(delay(800))
      .pipe(map((res) => res.data));
  }
}
