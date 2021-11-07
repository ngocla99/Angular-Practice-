import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UsersTableComponent } from './users-table/users-table.component';
import { FormatPhonePipe } from './format-phone.pipe';
import { SelectOrderComponent } from './users-table/select-order/select-order.component';
import { SortPipe } from './sort.pipe';

@NgModule({
  declarations: [
    AppComponent,
    UsersTableComponent,
    FormatPhonePipe,
    SelectOrderComponent,
    SortPipe,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
