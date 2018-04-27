import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import {MainServiceService} from "./main-service.service";
import {FormsModule} from "@angular/forms";
import {routing} from "./routes";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule, routing,NgbModule.forRoot()
  ],
  providers: [MainServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
