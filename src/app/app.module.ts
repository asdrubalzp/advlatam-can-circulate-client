import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { InputMaskModule } from 'primeng/inputmask';
import { CalendarModule } from 'primeng/calendar';
import { CanCirculateFormComponent } from './components/can-circulate-form/can-circulate-form.component';
import { CanCirculateResultComponent } from './components/can-circulate-result/can-circulate-result.component';
import { PageCanCirculateComponent } from './pages/page-can-circulate/page-can-circulate.component';

@NgModule({
  declarations: [
    AppComponent,
    CanCirculateFormComponent,
    CanCirculateResultComponent,
    PageCanCirculateComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    CheckboxModule,
    InputTextModule,
    InputMaskModule,
    CalendarModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
