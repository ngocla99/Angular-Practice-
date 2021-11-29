import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailComponent } from './component/customers/customer-detail/customer-detail.component';
import { CustomerOrdersComponent } from './component/customers/customer-orders/customer-orders.component';
import { CustomerOverviewComponent } from './component/customers/customer-overview/customer-overview.component';
import { CustomersComponent } from './component/customers/customers.component';
import { CustomerEditComponent } from './component/customers/shared/customer-edit/customer-edit.component';
import { LoginComponent } from './component/login/login.component';
import { SettingsComponent } from './component/settings/settings.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/customers', pathMatch: 'full' },
  {
    path: 'customers',
    component: CustomersComponent,
    children: [
      { path: '', component: CustomerOverviewComponent },
      {
        path: ':id/details',
        component: CustomerDetailComponent,
        data: { name: 'details' },
      },
      {
        path: ':id/orders',
        component: CustomerOrdersComponent,
        data: { name: 'orders' },
      },
      {
        path: ':id/edit',
        component: CustomerEditComponent,
        data: { name: 'edit' },
        canActivate: [AuthGuard],
      },
    ],
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
