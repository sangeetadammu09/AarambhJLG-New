import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import {FormsModule} from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './common/login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { AuthInterceptor } from './shared/interceptor/auth.interceptor';
import { PagesModule } from './components/pages.module';
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,ReactiveFormsModule,
        ToastrModule.forRoot(),PagesModule
    ],
    declarations: [AppComponent,LoginComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptor,
            multi: true
       }],
    bootstrap: [AppComponent]
})
export class AppModule {}
