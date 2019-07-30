import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';
import {Usuario} from './usuario';

@Injectable()
export class UsuarioService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + 'usuarios';
  }

  findOne(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(this.url + '/' + id);
  }

  findAll(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  save(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.url, usuario);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(this.url + '/' + id);
  }

}
