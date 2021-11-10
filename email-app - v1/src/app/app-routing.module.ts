import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailBoxComponent } from './email/email-box/email-box.component';
import { EmailDetailComponent } from './email/email-detail/email-detail.component';
import { EmailPreviewComponent } from './email/email-preview/email-preview.component';
import { EmailComponent } from './email/email.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  { path: '', redirectTo: '/messages/0/inbox', pathMatch: 'full' },
  {
    path: 'messages/:userId',
    component: EmailComponent,
    children: [
      { path: '', redirectTo: '/messages/0/inbox', pathMatch: 'full' },
      {
        path: ':subject',
        component: EmailPreviewComponent,
      },
      {
        path: 'id',
        component: EmailDetailComponent,
        outlet: 'detail',
      },
    ],
  },
  { path: 'contacts', component: UnderConstructionComponent },
  { path: 'preferences', component: UnderConstructionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
