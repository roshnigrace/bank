import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { TransactionComponent } from './transaction/transaction.component';
import { DeleteConfirmComponent } from './delete-confirm/delete-confirm.component';
import { DirectiveDirective } from './directive/directive.directive';
import { AnimationDemoComponent } from './animation-demo/animation-demo.component';
import {from} from 'rxjs';
import {HttpClientModule} from '@angular/common/http'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    TransactionComponent,
    DeleteConfirmComponent,
    DirectiveDirective,
    AnimationDemoComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,                    //to add ngModule
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule              //intergrate client
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
//rxjs async events solve 
//obseravable is used to solve ts asyc resolve , 2 state subscribe- resolve state . catch- reject state
