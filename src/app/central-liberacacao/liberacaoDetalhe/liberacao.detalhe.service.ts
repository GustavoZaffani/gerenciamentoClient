import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {LiberacaoDetalhe} from "./liberacao.detalhe";
import {LiberacaoUp} from "../liberacao/liberacaoUp";

@Injectable()
export class LiberacaoDetalheService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + '/api/';
  }

  findDetalheLiberacao(idLibProc: number, estab: string, userId: string): Observable<LiberacaoDetalhe> {
    return this.http.get<LiberacaoDetalhe>(this.url + `liberacao/${idLibProc}/${estab}/${userId}`);
  }

  updateLiberacao(liberacaoUp: LiberacaoUp): Observable<boolean> {
    return this.http.post<boolean>(this.url + 'liberacao/update', liberacaoUp, {responseType: 'text' as 'json'});
  }
}
