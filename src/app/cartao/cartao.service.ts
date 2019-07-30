import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Cartao} from './cartao';

@Injectable()
export class CartaoService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + 'cartao';
  }

  findOne(id: number): Observable<Cartao> {
    return this.http.get<Cartao>(this.url + '/' + id);
  }

  findAll(): Observable<Cartao[]> {
    return this.http.get<Cartao[]>(this.url);
  }

  save(cartao: Cartao): Observable<Cartao> {
    return this.http.post<Cartao>(this.url, cartao);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }

  complete(query: string): Observable<Cartao[]> {
    const url = this.url + `/complete?query=${query}`;
    return this.http.get<Cartao[]>(url);
  }
}
