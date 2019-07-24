import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Usuario} from '../usuario/usuario';
import {environment} from '../../environments/environment';

@Injectable()
export class LoginService implements CanActivate{

  constructor(private http: HttpClient,
              private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.logout();
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  login(usuario: Usuario): Observable<string> {
    return this.http.post<string>(`${environment.api_url}login`, usuario, {responseType: 'text' as 'json'});
  }
}
