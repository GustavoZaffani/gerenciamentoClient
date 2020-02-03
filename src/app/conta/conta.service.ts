import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Conta} from './conta';
import {Cartao} from '../cartao/cartao';
import {Extrato} from '../extrato/extrato';

@Injectable()
export class ContaService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + 'contas';
  }

  findOne(id: number): Observable<Conta> {
    return this.http.get<Conta>(this.url + '/' + id);
  }

  findAll(): Observable<Conta[]> {
    return this.http.get<Conta[]>(this.url);
  }

  save(conta: Conta): Observable<Conta> {
    return this.http.post<Conta>(this.url, conta);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + `/${id}`);
  }

  findContasByFiltro(extrato: Extrato): Observable<Conta[]> {
    return this.http.post<Conta[]>(this.url + '/extrato', extrato);
  }

  // TODO necessário arrumar um jeito de trazer as contas de acordo com a data e cartão
}
