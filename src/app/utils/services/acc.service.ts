import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, AppConfiguration } from 'src/configuration';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AccService {  
  constructor(@Inject(AppConfig) private readonly appConfig: AppConfiguration,private router: Router,private http : HttpClient) {}
  Login(req: any) {
    return this.http
      .post<any>('http://localhost:8080/api/v1/account/login', req, {})
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  FindById(id: number) {
    return this.http
      .get<any>('http://localhost:8080/api/v1/account/'+id)
      .pipe(
        map((z) => {
          return z;
        })
      );
  }

  FindAll() {
    return this.http
      .get<any>('http://localhost:8080/api/v1/account')
      .pipe(
        map((z) => {
          return z;
        })
    );
  }

  LoginWithRoles(req: any) {
    return this.http
      .post<any>(this.appConfig.System_API + 'Account/LoginWithRoles', req, {})
      .pipe(
        map((z) => {
          return z;
        })
      );
  }
  Confirm(req: any) {
    return this.http
      .post<any>(this.appConfig.System_API + 'Account/Confirm', req, {})
      .pipe(
        map((z) => {
          return z;
        })
      );
  }
  ChangePass(req: any, token): Observable<any> {
    return this.http
      .post<any>(this.appConfig.System_API + 'Account/ChangePassword', req, {
        headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
      })
      .pipe(
        map((z) => {
          return z;
        })
      );
  }
}
