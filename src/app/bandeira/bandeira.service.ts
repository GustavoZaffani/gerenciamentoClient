import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Bandeira} from './bandeira';
import {Observable} from 'rxjs';

@Injectable()
export class BandeiraService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + 'bandeira';
  }

  findAll(): Observable<Bandeira[]> {
    return this.http.get<Bandeira[]>(this.url);
  }

  findOne(id: number): Observable<Bandeira> {
    return this.http.get<Bandeira>(this.url + '/' + id);
  }

  save(bandeira: Bandeira): Observable<Bandeira> {
    return this.http.post<Bandeira>(this.url, bandeira);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }

  complete(query: string): Observable<Bandeira[]> {
    const url = this.url + `/complete?query=${query}`;
    return this.http.get<Bandeira[]>(url);
  }
}
