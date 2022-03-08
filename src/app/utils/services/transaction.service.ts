import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppConfig, AppConfiguration } from 'src/configuration';

@Injectable({
    providedIn: 'root'
})

export class TransactionService {
  
    constructor(
        @Inject(AppConfig) private readonly appConfig: AppConfiguration, 
        private http: HttpClient
    ) { }
  
    deposite(req, token): Observable<any> {
      return this.http
        .post<any>(this.appConfig.QA_API + 'api/v1/transaction',req, {
          headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
        })
        .pipe(
          map((z) => {
            return z;
        })
      );
    }

    getListByAccountId(account_id: number, token): Observable<any> {
      return this.http
        .get<any>(this.appConfig.QA_API + 'api/v1/transaction/?account_id='+account_id, {
          headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
        })
        .pipe(
          map((z) => {
            return z;
        })
      );
    }

    exportExcel(token): Observable<any> {
      return this.http
        .get<any>(this.appConfig.QA_API + 'api/v1/transaction/excel', {
          headers: new HttpHeaders().set('Authorization', `Bearer ${token}`),
        })
        .pipe(
          map((z) => {
            return z;
        })
      );
    }
}
