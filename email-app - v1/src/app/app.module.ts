import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EmailComponent } from './email/email.component';
import { EmailBoxComponent } from './email/email-box/email-box.component';
import { EmailPreviewComponent } from './email/email-preview/email-preview.component';
import { EmailDetailComponent } from './email/email-detail/email-detail.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';
import { EmailService } from './email/email.service';
import { SortPipe } from './sort.pipe';
import { TruncatePipe } from './truncate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmailComponent,
    EmailBoxComponent,
    EmailPreviewComponent,
    EmailDetailComponent,
    UnderConstructionComponent,
    SortPipe,
    TruncatePipe,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [EmailService],
  bootstrap: [AppComponent],
})
export class AppModule {}
