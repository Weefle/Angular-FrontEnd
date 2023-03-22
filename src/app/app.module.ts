import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import { MonserviceService } from './services/monservice.service';
import { LampeComponent } from './components/lampe/lampe.component';
import { LightStateServiceService } from './services/light-state-service.service';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    LampeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [MonserviceService, LightStateServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
