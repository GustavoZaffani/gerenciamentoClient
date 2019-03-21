import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
import {Liberacao} from "./liberacao";

@Injectable()
export class LiberacaoService {

  url: string;

  constructor(private http: HttpClient) {
    this.url = environment.api_url + '/api/';
  }

  findLiberacoesByUserAndEstab(userId: string, estab: string): Observable<Liberacao[]> {
    return this.http.get<Liberacao[]>(this.url + `liberacoes/${userId}/${estab}`);
  }

  findAllLiberacoesByUser(userId: string): Observable<Liberacao[]> {
    return this.http.get<Liberacao[]>(this.url + `liberacoes/${userId}`);
  }

}
