import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { AuthGuard} from './utils/guards/auth.guard';
import { NonAuthGuard } from './utils/guards/non-auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ChangePassComponent } from './pages/change-pass/change-pass.component';
import { AccountTypeComponent } from './components/account-type/account-type.component';
import { InterestRateComponent } from './components/interest-rate/interest-rate.component';
import { AccountComponent } from './components/account/account.component';
import { LoanComponent } from './components/loan/loan.component';
import { TransactionComponent } from './components/transaction/transaction.component';

const routes: Routes = [
  {
    path: 'admin',
    component: MainComponent,
    canActivate: [NonAuthGuard],
    canActivateChild: [NonAuthGuard],
    children: [
      {
        path: 'change-pass',
        component: ChangePassComponent,
      },
      {
        path: 'account-type',
        component: AccountTypeComponent,
      },
      {
        path: 'interest-rate',
        component: InterestRateComponent,
      },
      {
        path: 'account',
        component: AccountComponent,
      },
      {
        path: 'loan',
        component: LoanComponent,
      },
      {
        path: 'transaction',
        component: TransactionComponent,
      },
    ]
  },
  {
    path: '',
    component: LoginComponent,
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard],
    children: [
      {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard],
      },
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard],
      },
    ],
  },

  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule, HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
