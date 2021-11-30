import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { InputFieldComponent } from './component/input-field/input-field.component';
import { VideosResultComponent } from './component/videos-result/videos-result.component';
import { PaginationComponent } from './component/pagination/pagination.component';
import { DateComponent } from './component/date/date.component';
import { SettingComponent } from './component/setting/setting.component';
import { DialogComponent } from './component/setting/dialog/dialog.component';
import { ModalVideoComponent } from './component/videos-result/modal-video/modal-video.component';
import { VideoComponent } from './component/videos-result/video/video.component';

import { DecodePipe } from './shared/pipe/decode.pipe';
import { SafePipe } from './shared/pipe/safe.pipe';
import { TruncatePipe } from './shared/pipe/truncate.pipe';

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    InputFieldComponent,
    VideosResultComponent,
    PaginationComponent,
    DateComponent,
    DecodePipe,
    TruncatePipe,
    ModalVideoComponent,
    VideoComponent,
    SafePipe,
    SettingComponent,
    DialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule,
    MatIconModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    MatDialogModule,
    MatMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
