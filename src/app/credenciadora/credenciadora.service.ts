import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Credenciadora} from './credenciadora';

@Injectable()
export class CredenciadoraService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + 'credenciadora';
  }

  findOne(id: number): Observable<Credenciadora> {
    return this.http.get<Credenciadora>(this.url + '/' + id);
  }

  findAll(): Observable<Credenciadora[]> {
    return this.http.get<Credenciadora[]>(this.url);
  }

  save(credenciadora: Credenciadora): Observable<Credenciadora> {
    return this.http.post<Credenciadora>(this.url, credenciadora);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }
}
