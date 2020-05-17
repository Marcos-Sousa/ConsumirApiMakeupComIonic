import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Api } from '../api/api';

@Injectable({
  providedIn: 'root'
})
export class MakuepService {

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<any[]> {
    return this.http.get<any[]>(Api.Url);
  }

}
